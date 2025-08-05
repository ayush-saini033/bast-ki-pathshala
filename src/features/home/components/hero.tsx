"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const HomeHero = () => {
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
          <h2
            className={`text-xl sm:text-2xl font-bold underline underline-offset-4 decoration-yellow-300 ${playfair.className}`}
          >
            About Us
          </h2>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${playfair.className}`}
          >
            Lighting the Path to Change with Basti Ki Pathshala Foundation
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            At Basti Ki Pathshala Foundation, we are more than just an
            organization – we are a movement, driven by the belief that
            education is the cornerstone of empowerment. Established under the
            Indian Societies Act of 1860, we stand as a beacon of hope in
            underserved communities, dedicated to breaking the chains of poverty
            through the transformative power of learning.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            At Basti Ki Pathshala Foundation, we are more than just an
            organization – we are a movement, ignited by the unwavering belief
            that education is not a privilege, but a fundamental right. Born
            from compassion and built on the foundation of equality, we are
            committed to bridging the educational divide in underserved
            communities across India.
          </p>

          <p className="text-base sm:text-lg text-gray-700">
            Join us in our quest to rewrite the narrative of education, one
            success story at a time. Together, let’s build a world where every
            child has the opportunity to dream, to learn, and to soar. Welcome
            to Basti Ki Pathshala Foundation – where hope is our currency, and
            education is our legacy.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button
              onClick={() => router.push("/donate")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-8 py-6 rounded-lg transition duration-200"
            >
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
            Why Education is important?
          </h1>
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${playfair.className}`}
          >
            Breaking the Cycle of Poverty
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            Education offers underprivileged slum children a pathway out of
            poverty by providing them with the knowledge and skills necessary to
            secure better opportunities in the future. By empowering them with
            education, these children can break the intergenerational cycle of
            poverty and create a brighter future for themselves and their
            families.
          </p>

          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${playfair.className}`}
          >
            Empowerment and Self-Improvement
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            Education empowers slum children to envision a life beyond their
            current circumstances. It instills in them a sense of self-worth and
            confidence, enabling them to dream big and pursue their aspirations.
            Through education, these children gain the tools to advocate for
            themselves, make informed decisions, and strive for a better quality
            of life.
          </p>
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${playfair.className}`}
          >
            Building Resilience and Hope
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            Education offers slum children a sense of hope and resilience in the
            face of adversity. It equips them with the skills to overcome
            challenges and navigate the complexities of their environment. By
            investing in their education, we provide these children with a
            beacon of hope, showing them that a brighter future is possible, no
            matter where they come from.
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

export default HomeHero;
