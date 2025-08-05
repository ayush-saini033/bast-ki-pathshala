import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const DonateHero = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 lg:px-20 py-16 space-y-20">
      <section className="grid grid-cols-1 lg:grid-cols-8 gap-10 shadow-xl shadow-yellow-200 rounded-2xl p-6 sm:p-10">
        {/* Image */}
        <div className="lg:col-span-3 w-full h-auto flex justify-center">
          <Image
            src="https://www.dailypioneer.com/uploads/2017/story/images/big/191286_1.jpg"
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
            <i>Empowering Dreams, One Donation at a Time</i>
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            Every child has a dream—some dream of becoming doctors, others dream
            of teaching, building, creating, or simply going to school. But for
            countless children living in marginalized communities, those dreams
            are often dimmed by circumstances beyond their control. At Basti Ki
            Pathshala Foundation, we believe that every child deserves a chance
            to shine, and that your support can be the light that guides them
            forward.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Together, we can provide these children with the tools, resources,
            and opportunities they need to break free from the cycle of poverty
            and step into a future filled with hope. From school supplies,
            nutritious meals, and clean uniforms to digital learning tools,
            mentorship, and safe learning spaces—your donation directly empowers
            the next generation of leaders, thinkers, and change-makers.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            But the impact of your generosity doesn&apos;t stop at one child.
            Every contribution sparks a chain reaction. It uplifts families. It
            energizes communities. It inspires others to give, to act, and to
            believe that change is possible. With your support, we’re not just
            funding education—we’re igniting possibility, building resilience,
            and transforming lives.
          </p>

          <i className="font-bold">
            Thank you for believing in our mission. Thank you for being a part
            of their story. Together, let’s rewrite the future—one child, one
            dream, one donation at a time.
          </i>

          <div className="flex justify-center lg:justify-start">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-6 rounded-lg transition duration-200">
              Donate Now!
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonateHero;
