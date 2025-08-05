import CertificateHero from "@/features/certificate/components/page";
import Heading from "@/shared/heading";
import React from "react";


export const metadata = {
  title: "Our Certificate",
  description: "Here we can show all the certificates which achived by this NGO",
};

const CertificatePage = () => {
  return (
    <div>
      <Heading
        bg_url="https://bastikipathshala.org/wp-content/uploads/2024/02/IMG_20220925_133943-scaled.jpg"
        heading=" Be the Spark That Ignites a Child’s Future"
        paragraph="Your small contribution can make a big difference. Help us bring quality education, resources, and hope to children living in underserved communities. Together, we can build a brighter tomorrow—one child at a time."
        button_text="Donate now"
        button_link="Donate"
      />
      <CertificateHero/>
    </div>
  );
};

export default CertificatePage;
