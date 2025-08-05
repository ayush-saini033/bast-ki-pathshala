import HomeHero from "@/features/home/components/hero";
import Heading from "@/shared/heading";

export const metadata = {
  title: "Home page",
  description: "This is the home page ",
};

export default function Home() {
  return (
    <div>
      <Heading
        bg_url="https://rajfoundation.co.in/wp-content/uploads/2021/03/IMG-35281-scaled.jpg"
        heading="Basti Ki Pathshala Foundation"
        paragraph="Join us in our mission to break the barriers of education in
          underserved communities. With your support, we can provide quality
          education to children living in slum areas, empowering them with the
          knowledge and skills they need to build a brighter future. Together,
          let’s make a difference. Take action today and be a part of the
          change!"
        button_text="Register as Volunteer"
        button_link="registration"
      />
      <div>
        <HomeHero />
      </div>
    </div>
  );
}
