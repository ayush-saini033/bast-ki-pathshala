export interface Applicant {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: "intern" | "volunteer";
  department: string;
  experience: string;
  motivation: string;
  availability: string;
  skills: string[];
  createdAt: Date;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: "intern" | "volunteer";
  department: string;
  experience: string;
  motivation: string;
  availability: string;
  skills: string[];
  profile?: File | null;
}
