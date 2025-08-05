import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const Description = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-4 sm:px-8 lg:px-24 bg-white text-gray-800">
      <h1
        className={`text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 ${playfair.className}`}
      >
        We Work Together
      </h1>
      <p className="text-base sm:text-lg lg:text-xl max-w-4xl text-center leading-relaxed">
        At <strong>Basti Ki Pathshala Foundation</strong>, collaboration is at
        the heart of everything we do. Under the banner of
        <em> “We Work Together,”</em> we embrace the power of unity, recognizing
        that real change comes from collective action.
        <br />
        <br />
        Our dedicated team, passionate volunteers, generous donors, and
        supportive community members all play integral roles in our mission to
        break the barriers of education in underserved communities. Together, we
        strive toward a common goal: to empower every child with the opportunity
        to thrive.
        <br />
        <br />
        Through shared vision, shared values, and shared effort, we pave the way
        for a brighter, more inclusive future for all.
      </p>
    </div>
  );
};

export default Description;
