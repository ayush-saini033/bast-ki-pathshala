"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NumberFlow, { continuous } from "@number-flow/react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
const format = {
  notation: "standard" as const,
  roundingMode: "trunc" as const,
};

const statsData = [
  {
    label: "Lives Changed",
    value: 31245,
    src: "/lives-changed.svg",
  },
  {
    label: "Meals Served",
    value: 28976,
    src: "/lives.svg",
  },
  {
    label: "Interns",
    value: 19854,
    src: "/intern.svg",
  },
  {
    label: "Supporters",
    value: 10989,
    src: "/suppoters.svg",
  },
];

export default function Stats() {
  const [animatedValues, setAnimatedValues] = useState(statsData.map(() => 0));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      setAnimatedValues(statsData.map((stat) => stat.value));
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`bg-[#faf5ef] py-12 px-4 sm:px-8 ${playfair.className} `}
    >
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 text-center">
        {statsData.map((stat, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <Image src={stat.src} alt="intern" height={50} width={50} />
            <h3 className="text-4xl md:text-7xl font-bold text-zinc-900">
              <NumberFlow
                willChange
                plugins={[continuous]}
                value={animatedValues[index]}
                locales="en-US"
                format={format}
              />
            </h3>
            <p className="text-3xl font-semibold text-zinc-800">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
