"use client";

import { useEffect, useState } from "react";
import { FetchAllUsers } from "@/features/admin/api/profile";
import {
  AlertCircle,
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Award,
  Clock,
  Heart,
  Star,
} from "lucide-react";
import Image from "next/image";

interface Profile {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  skills: string[];
  experience: string;
  motivation: string;
  availability: string;
  profile: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const data = await FetchAllUsers();
        setProfiles(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 mb-4 tracking-tight">
            ALL APPLICATIONS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
          <p className="text-white/70 text-lg mt-6 font-light">
            Discover our talented team members
          </p>
        </div>

        {error && (
          <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 border-2 border-red-400/30 rounded-2xl p-6 mb-8 flex items-center max-w-xl mx-auto backdrop-blur-sm">
            <AlertCircle className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />
            <span className="text-red-200 font-medium">
              Failed to load profiles. Please try again later.
            </span>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-yellow-400/30 rounded-full"></div>
              <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
            </div>
            <p className="text-white text-xl font-medium mt-6 animate-pulse">
              Loading amazing profiles...
            </p>
          </div>
        ) : profiles.length === 0 ? (
          <div className="text-center py-20">
            <User className="w-24 h-24 text-yellow-400/50 mx-auto mb-6" />
            <p className="text-white text-2xl font-medium">No profiles found</p>
            <p className="text-white/60 mt-2">
              Check back later for new applications
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {profiles.map((profile, index) => (
              <div
                key={profile._id}
                className="group relative bg-gradient-to-br from-white via-yellow-100 to-yellow-200 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:shadow-yellow-400/25 border-2 border-white/20 hover:border-white/40"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "slideInUp 0.6s ease-out forwards",
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent rounded-3xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center mb-6 justify-around">
                    {profile.profile ? (
                      <Image
                        src={profile.profile}
                        alt="profile"
                        width={150}
                        height={150}
                        className="rounded-xl"
                      />
                    ) : (
                      <div className="rounded-full font-bold text-xl bg-white/20 border">
                        {profile.firstName.charAt(0).toUpperCase()}
                      </div>
                    )}

                    <div className="border-l-2 ">
                      <h2 className="text-2xl font-black text-black tracking-tight">
                        {profile.firstName} {profile.lastName}
                      </h2>
                      <p className="text-black/70 font-semibold">
                        {profile.position}
                      </p>
                      {/* Application Date */}
                      <div className=" border-black/20">
                        <p className="text-black/60 text-sm">
                          Applied:{" "}
                          {new Date(profile.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-black/80">
                        <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium truncate">
                          {profile.email}
                        </span>
                      </div>
                      <div className="flex items-center text-black/80">
                        <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">
                          {profile.phone}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-black/80">
                        <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">
                          {profile.department}
                        </span>
                      </div>
                      <div className="flex items-center text-black/80">
                        <Briefcase className="w-4 h-4 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium capitalize">
                          {profile.position}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 mr-2 text-black/70" />
                      <p className="font-black text-black text-sm uppercase tracking-wider">
                        Experience
                      </p>
                    </div>
                    <p className="text-black/80 text-sm leading-relaxed bg-black/10 p-3 rounded-xl">
                      {profile.experience}
                    </p>
                  </div>

                  {/* Motivation */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Heart className="w-4 h-4 mr-2 text-black/70" />
                      <p className="font-black text-black text-sm uppercase tracking-wider">
                        Motivation
                      </p>
                    </div>
                    <p className="text-black/80 text-sm leading-relaxed bg-black/10 p-3 rounded-xl">
                      {profile.motivation}
                    </p>
                  </div>

                  {/* Availability */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-black/70" />
                      <p className="font-black text-black text-sm uppercase tracking-wider">
                        Availability
                      </p>
                    </div>
                    <p className="text-black/80 text-sm font-medium bg-black/10 p-3 rounded-xl">
                      {profile.availability}
                    </p>
                  </div>

                  {/* Skills */}
                  {profile.skills.length > 0 && (
                    <div>
                      <div className="flex items-center mb-3">
                        <Award className="w-4 h-4 mr-2 text-black/70" />
                        <p className="font-black text-black text-sm uppercase tracking-wider">
                          Skills
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {profile.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-black text-yellow-300 text-xs px-3 py-1.5 rounded-full font-bold tracking-wide hover:bg-gray-800 transition-colors duration-200 border border-black/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
