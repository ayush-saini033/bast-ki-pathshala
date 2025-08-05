"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const CertificateHero = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 lg:px-20 py-16 space-y-20">
      <section className="grid grid-cols-1 lg:grid-cols-8 gap-10 shadow-xl shadow-yellow-200 rounded-2xl p-6 sm:p-10">
        {/* Image */}
        <div className="lg:col-span-3 w-full h-auto flex justify-center">
          <Image
            src="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti-Ki-Pathshala-Official-Logo.jpg"
            alt="about-image"
            width={500}
            height={400}
            className="rounded-xl object-contain w-full h-auto max-w-md"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="lg:col-span-5 flex flex-col space-y-6 text-center lg:text-left">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${playfair.className}`}
          >
            <i>Indian Society Registration Certificate</i>
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            We take immense pride in our registration under the Indian Societies
            Act of 1860, a symbol of our unwavering dedication to transparency
            and accountability. This registration underscores our steadfast
            commitment to catalyzing positive change and fostering gender equity
            in society. As a registered nonprofit entity, we adhere rigorously
            to principles of integrity and professionalism, recognizing the
            profound responsibility entrusted to us. Our certification from the
            government stands as a testament to our ethos, and we remain
            resolute in upholding the core values of the Basti Ki Pathshala
            Foundation. In our ongoing pursuit to empower women and advance a
            more inclusive world, we cherish this recognition and remain
            steadfast in our mission.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button onClick={() => router.push("/donate")} className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-6 rounded-lg transition duration-200">
              Donate Now!
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateHero;
