"use client";

import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function Heading({
  bg_url,
  heading,
  paragraph,
  button_text = "Donate Now",
  button_link = "donate",
}: {
  bg_url: string;
  heading: string;
  paragraph: string;
  button_text: string;
  button_link: string;
}) {
  const [isShort, setIsShort] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkHeight = () => {
      setIsShort(window.innerHeight < 700);
    };
    checkHeight();
    window.addEventListener("resize", checkHeight);
    return () => window.removeEventListener("resize", checkHeight);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg_url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-300 text-center ${
            playfair.className
          } ${isShort && " mt-24"} transition-all duration-500 ease-in-out`}
        >
          {heading}
        </h1>
        <p className="text-white text-center text-base sm:text-lg md:text-xl lg:text-xl font-semibold px-4 sm:px-8 md:px-12 lg:px-14 max-w-4xl">
          {paragraph}
        </p>
        <Button
          className="bg-yellow-500 px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 cursor-pointer w-auto hover:bg-yellow-600 text-lg sm:text-xl md:text-2xl"
          onClick={() => router.push(`/${button_link}`)}
        >
          {button_text}
        </Button>
      </div>
    </div>
  );
}
