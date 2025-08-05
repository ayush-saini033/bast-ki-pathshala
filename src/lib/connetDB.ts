// lib/connectDB.ts
import mongoose from "mongoose";

// Use regular MONGODB_URI for server-side operations, not NEXT_PUBLIC_
const MONGODB_URI: string = process.env.NEXT_PUBLIC_MONGO_URI || "";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in your .env.local file"
  );
}

// TypeScript interface for the cached connection
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend global to include mongoose cache
declare global {
  var mongoose: MongooseCache | undefined;
}

// Global variable to cache the connection (prevents multiple connections in development)
const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

interface ConnectionOptions {
  bufferCommands: boolean;
}

const ConnectDB = async (): Promise<typeof mongoose> => {
  // If we already have a cached connection, return it
  if (cached.conn) {
    console.log("Using cached database connection");
    return cached.conn;
  }

  // If we don't have a connection promise, create one
  if (!cached.promise) {
    const opts: ConnectionOptions = {
      bufferCommands: false, // Disable mongoose buffering
    };

    console.log("Creating new database connection...");
    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log("Database connected successfully");
        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error: unknown) {
    cached.promise = null;
    console.error("Database connection failed:", error);
    throw error;
  }

  return cached.conn;
};

export default ConnectDB;
