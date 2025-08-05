"use server";

import ConnectDB from "@/lib/connetDB";
import Applicant from "@/models/applicant.model";

export const FetchAllUsers = async () => {
  try {
    await ConnectDB(); // ✅ Await the DB connection
    const data = await Applicant.find({});
    return JSON.parse(JSON.stringify(data)); // ✅ Convert Mongoose docs to plain objects
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
};
