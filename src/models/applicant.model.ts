// models/applicant.model.ts
import mongoose, { Document, Schema, models } from "mongoose";

interface ApplicantType extends Document {
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
  profile: string;
}

const ApplicantSchema = new Schema<ApplicantType>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true, // Add unique constraint
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: String,
      enum: ["intern", "volunteer"],
      default: "volunteer",
    },
    department: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      default: "",
    },
    motivation: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      default: [],
    },
    profile: String
  },
  {
    timestamps: true,
  }
);

// Create index for better performance
ApplicantSchema.index({ email: 1 });

const Applicant =
  models.Applicant ||
  mongoose.model<ApplicantType>("Applicant", ApplicantSchema);

export default Applicant;
