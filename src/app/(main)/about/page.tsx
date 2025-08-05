import Description from "@/features/about/components/description";
import AboutHero from "@/features/about/components/hero";
import Stats from "@/features/about/components/number-flow";
import Heading from "@/shared/heading";
import React from "react";

export const metadata = {
  title: "About Us",
  description: "This is the about us page , all details of NGO",
};

const HomePage = () => {
  return (
    <div>
      <Heading
        bg_url="https://rajfoundation.co.in/wp-content/uploads/2021/03/IMG-4076-scaled.jpg"
        heading="Our Mission and Vision"
        paragraph="At Basti Ki Pathshala Foundation, we believe that every child—regardless of their background—deserves access to quality education and a chance at a better future."
        button_text="Donate Now"
        button_link="donate"
      />
      <Description/>
      <Stats/>
      <AboutHero/>
    </div>
  );
};

export default HomePage;
