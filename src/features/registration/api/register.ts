"use server";

import ConnectDB from "@/lib/connetDB"; // Make sure the import path matches your file
import Applicant from "@/models/applicant.model";
import cloudinary from "@/lib/cloudinary";
import { v4 as uuidv4 } from "uuid";

interface ApplicantData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: "intern" | "volunteer";
  department: string;
  experience?: string;
  motivation: string;
  availability: string;
  skills: string[];
  profile?: File | null;
}

export const Register = async (data: ApplicantData) => {
  try {
    // Connect to database
    await ConnectDB();

    // Check if applicant already exists
    let existingApplicant = await Applicant.findOne({ email: data.email });
    if (existingApplicant) {
      return {
        success: false,
        message: "An applicant with this email already exists.",
      };
    }

    existingApplicant = await Applicant.findOne({ email: data.phone });

    if (existingApplicant) {
      return {
        success: false,
        message: "An applicant with this phone already exists.",
      };
    }

    const profilePic = data.profile

    // ✅ Upload image to Cloudinary
    let imageUrl = "";
    if (profilePic instanceof File) {
      const arrayBuffer = await profilePic.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: "members",
              public_id: uuidv4(),
              resource_type: "image",
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(buffer);
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      imageUrl = (result as any).secure_url;
    }

    // Create new applicant
    const newApplicant = await Applicant.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      position: data.position,
      department: data.department,
      experience: data.experience || "",
      motivation: data.motivation,
      availability: data.availability,
      skills: data.skills || [],
      profile: imageUrl
    });

    // Return success without the full document to avoid serialization issues
    return {
      success: true,
      message: "Applicant registered successfully.",
      id: newApplicant._id.toString(),
    };
  } catch (error) {
    console.error("Registration failed:", error);

    // Handle specific MongoDB errors
    if (error instanceof Error) {
      return {
        success: false,
        message: "An applicant with this email already exists.",
      };
    }

    return {
      success: false,
      message: "Server Error. Please try again later.",
    };
  }
};