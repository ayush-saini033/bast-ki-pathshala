import DonateHero from '@/features/donate/components/hero';
import Heading from '@/shared/heading'
import React from 'react'


export const metadata = {
  title: "Donate",
  description: "If any one want's to daonte to this NGO",
};

const DonatePage = () => {
  return (
    <div>
      <Heading
        bg_url="https://bastikipathshala.org/wp-content/uploads/2024/02/IMG20240114122634-scaled.jpg"
        heading=" Be the Spark That Ignites a Child’s Future"
        paragraph="Your small contribution can make a big difference. Help us bring quality education, resources, and hope to children living in underserved communities. Together, we can build a brighter tomorrow—one child at a time."
        button_text="Donate now"
        button_link="Donate"
      />
      <DonateHero/>
    </div>
  );
}

export default DonatePage