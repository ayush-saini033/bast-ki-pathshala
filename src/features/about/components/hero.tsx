"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const AboutHero = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 lg:px-20 py-16 space-y-20">
      <section className="grid grid-cols-1 lg:grid-cols-8 gap-10 shadow-xl shadow-yellow-200 rounded-2xl p-6 sm:p-10">
        {/* Image */}
        <div className="lg:col-span-3 w-full h-auto flex justify-center">
          <Image
            src="/about.png"
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
            Our Mission: A succinct statement outlining the core purpose and
            goals of your organization
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            At Basti Ki Pathshala Foundation, our mission is clear: to break the
            barriers of education in underserved communities. We are dedicated
            to providing quality education to children living in slum areas,
            ensuring that every child has the opportunity to thrive and succeed.
            Our goal is to create a nurturing learning environment where every
            child can access the tools, resources, and support they need to
            unlock their full potential. Through innovative teaching methods,
            community engagement, and strategic partnerships, we empower
            children with the knowledge and skills necessary to build a brighter
            future for themselves and their communities. Our mission extends
            beyond the classroom as we work tirelessly to bridge the educational
            gap and foster long-term, sustainable change in the lives of
            marginalized families. Together, we strive to rewrite the narrative
            of education, one child at a time.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-6 rounded-lg transition duration-200">
              Donate
            </Button>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-8 gap-10 shadow-xl shadow-yellow-200 rounded-2xl p-6 sm:p-10">
        {/* Text Content */}
        <div className="lg:col-span-5 flex flex-col space-y-6 text-center lg:text-left">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${playfair.className}`}
          >
            Our Story
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            Basti Ki Pathshala Foundation began with a simple yet powerful
            vision: to transform the lives of children living in slum areas
            through education. Founded under the Indian Societies Act of 1860,
            our journey started with a deep-seated belief in the potential of
            every child, regardless of their circumstances.
          </p>

          <p className="text-base sm:text-lg text-gray-700">
            It all began when Sunita, inspired by their own experiences and
            driven by a passion for social justice, embarked on a mission to
            address the educational inequalities prevalent in underserved
            communities. Armed with determination and fueled by compassion, they
            rallied a team of like-minded individuals who shared their vision of
            a brighter, more equitable future.
          </p>

          <p className="text-base sm:text-lg text-gray-700">
            From humble beginnings, our organization has grown into a beacon of
            hope, touching the lives of countless children and families along
            the way. Each milestone achieved, each barrier overcome, has only
            strengthened our resolve to continue our mission of empowerment and
            transformation.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Through the years, we’ve witnessed the transformative power of
            education firsthand. We’ve seen shy, uncertain children blossom into
            confident, capable individuals, equipped with the knowledge and
            skills to pursue their dreams. We’ve seen communities come together,
            united by a shared commitment to the betterment of their children’s
            future.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            As we reflect on our journey, we are filled with gratitude for the
            unwavering support of our volunteers, donors, partners, and the
            communities we serve. Together, we have achieved so much, yet we
            know that our work is far from over.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Our story is still being written, with each chapter filled with
            hope, resilience, and determination. As we look towards the future,
            we remain steadfast in our mission to break down barriers, uplift
            communities, and create a world where every child has the
            opportunity to thrive.
          </p>
        </div>
        {/* Image */}
        <div className="lg:col-span-3 w-full h-auto flex justify-center">
          <Image
            src="/hero3.png"
            alt="about-image"
            width={500}
            height={400}
            className="rounded-xl object-contain w-full h-auto max-w-md"
            priority
          />
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-8 gap-10 shadow-xl shadow-yellow-200 rounded-2xl p-6 sm:p-10">
        {/* Image */}
        <div className="lg:col-span-3 w-full h-auto flex justify-center">
          <Image
            src="https://bastikipathshala.org/wp-content/uploads/2024/02/IMG20240114122634-scaled.jpg"
            alt="about-image"
            width={500}
            height={400}
            className="rounded-xl object-contain w-full h-auto max-w-md"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="lg:col-span-5 flex flex-col space-y-6 text-center lg:text-left">
          <h2
            className={`text-xl sm:text-2xl font-bold underline underline-offset-4 decoration-yellow-300 ${playfair.className}`}
          >
            JOIN OUR
          </h2>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${playfair.className}`}
          >
            TEAM
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            At Basti Ki Pathshala Foundation, we’re not just building a team;
            we’re assembling a force for change. As we continue our mission to
            break barriers and empower communities through education, we invite
            passionate individuals to join us in making a tangible difference in
            the lives of underserved children.
          </p>

          <p className="text-base sm:text-lg text-gray-700">
            Whether you’re a seasoned educator, a community organizer, or simply
            someone with a heart for social impact, there’s a place for you in
            our team. Together, we’ll collaborate, innovate, and inspire,
            working towards a future where every child has the opportunity to
            thrive.
          </p>

          <p className="text-base sm:text-lg text-gray-700">
            Join us in this rewarding journey of transformation. Together, let’s
            pave the way for brighter tomorrows and empower futures, one child
            at a time. thrive.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <Button
              onClick={() => router.push("/donate")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-6 rounded-lg transition duration-200"
            >
              Donate
            </Button>
            <Button
              onClick={() => router.push("/about")}
              className="bg-gray-300 hover:bg-gray-400 text-black text-lg px-8 py-6 rounded-lg transition duration-200"
            >
              About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
