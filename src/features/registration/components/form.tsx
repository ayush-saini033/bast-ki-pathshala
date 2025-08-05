"use client";

import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FormData } from "@/types/registration";
import { CheckCircle, AlertCircle, UploadCloudIcon } from "lucide-react";
import Image from "next/image";
import { Register } from "@/features/registration/api/register";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "volunteer",
    department: "",
    experience: "",
    motivation: "",
    availability: "",
    skills: [],
    profile: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const imageRef = useRef<HTMLInputElement>(null);

  const departments = [
    "Marketing",
    "Technology",
    "Human Resources",
    "Finance",
    "Operations",
    "Research",
    "Community Outreach",
    "Event Planning",
    "Education & Training",
    "Fundraising & Development",
    "Volunteer Management",
    "Public Relations",
    "Advocacy & Policy",
    "Legal Affairs",
    "Monitoring & Evaluation",
    "Environmental Programs",
    "Healthcare Services",
    "Partnerships & Collaboration",
    "Media & Communications",
    "Creative & Design",
  ];

  const skillOptions = [
    "JavaScript",
    "Python",
    "Design",
    "Writing",
    "Social Media",
    "Project Management",
    "Data Analysis",
    "Customer Service",
    "Public Speaking",
    "Event Management",
    "Fundraising",
    "Teaching",
    "Mentoring",
    "Photography",
    "Video Editing",
    "Content Creation",
    "Digital Marketing",
    "SEO",
    "Copywriting",
    "Community Management",
    "Team Leadership",
    "Conflict Resolution",
    "Translation",
    "Web Development",
    "UI/UX Design",
    "Email Marketing",
    "Time Management",
    "Budgeting",
    "Graphic Design",
    "CRM Tools",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await Register(formData);
      console.log(response);
      if (response.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          position: "volunteer",
          department: "",
          experience: "",
          motivation: "",
          availability: "",
          skills: [],
          profile: null,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleInput = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    imageRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file?.size > 2 * 1024 * 1024) {
        alert("File is too large. Max 2MB allowed");
        return;
      }
      setFormData((prev) => ({ ...prev, profile: file }));
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Application Submitted!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your interest. We&lsquo;ll review your application and
          get back to you soon.
        </p>
        <motion.button
          onClick={() => setSubmitStatus("idle")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Another Application
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="w-full bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-200">
              Fill out the form below to apply for an internship or volunteer
              position
            </p>
          </motion.div>

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center"
            >
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-700">
                There was an error submitting your application. Please try
                again.
              </span>
            </motion.div>
          )}

          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="bg-white backdrop-blur-sm rounded-xl p-8 realtive"
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-10 opacity-15 z-0 pointer-events-none">
              <Image
                src="/image.png"
                alt="logo watermark"
                width={300}
                height={300}
                className="object-contain"
              />
              <Image
                src="/image.png"
                alt="logo watermark"
                width={300}
                height={300}
                className="object-contain"
              />
              <Image
                src="/image.png"
                alt="logo watermark"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position Type <span className="text-red-600">*</span>
                </label>
                <select
                  required
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      position: e.target.value as "intern" | "volunteer",
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="volunteer">Volunteer</option>
                  <option value="intern">Intern</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department <span className="text-red-600">*</span>
                </label>
                <select
                  required
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {skillOptions.map((skill) => (
                  <motion.button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                      formData.skills.includes(skill)
                        ? "bg-yellow-500 text-white border-yellow-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Previous Experience
              </label>
              <textarea
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your relevant experience..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why do you want to join us?{" "}
                <span className="text-red-600">*</span>
              </label>
              <textarea
                required
                value={formData.motivation}
                onChange={(e) =>
                  setFormData({ ...formData, motivation: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What motivates you to apply for this position?"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Availability <span className="text-red-600">*</span>
              </label>
              <textarea
                required
                value={formData.availability}
                onChange={(e) =>
                  setFormData({ ...formData, availability: e.target.value })
                }
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="When are you available? (days, hours, duration)"
              />
            </div>

            <div className="flex my-8 justify-between">
              <input
                type="file"
                ref={imageRef}
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              <Button
                className=" cursor-pointer text-yellow-500"
                onClick={handleInput}
              >
                Upload Profile
              </Button>

              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="profile"
                  height={150}
                  width={150}
                  className="rounded-xl"
                />
              ) : (
                <div className="border-3 border-dotted border-black h-[100px] w-[150px] rounded-xl flex items-center justify-center">
                  <UploadCloudIcon />
                </div>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
