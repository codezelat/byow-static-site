"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionCard from "./components/SectionCard";
import StepBar from "./components/StepsBar";
import CardSection from "./components/CardSection";
import IndustriesSection from "./components/IndustriesSection";
import Yoursuccess from "./components/yoursuccess";
import InfiniteHorizontalScroll from "./components/infinite-horizontal";
import OurChallengesPage from "./components/our-challenges";

const Home: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Card data for better maintainability
  const cardData = [
    "Templates can't reflect your unique vision",
    "CMS tools promise freedom but hide limitations",
    "You shouldn't need to be a coder to realize ideas",
    "Updating your site shouldn't feel like a hassle",
  ];

  return (
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mt-16 sm:mt-24 md:mt-32 lg:mt-[250px] font-bold text-white">
        Why Stress Over Website Development?
      </h1>

      {/* Centered Paragraph */}
      <div className="flex justify-center">
        <p className="text-sm sm:text-base md:text-lg lg:text-[16px] font-[400] text-white mt-4 max-w-2xl pt-6 sm:pt-12 md:pt-16 lg:pt-20">
          Frustrated with the Process? Scroll for a Simpler Solution
        </p>
      </div>

{/* Cards Container */}
<div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 w-full pt-40">
  {cardData.map((text, index) => (
    <div
      key={index}
      className="relative w-[calc(50%-8px)] sm:w-auto max-w-[300px] sm:max-w-[45%] md:max-w-[314.75px] min-h-[150px] sm:min-h-[200px] md:h-[215px] rounded-xl sm:rounded-2xl md:rounded-[32px] p-[1px] overflow-hidden bg-gradient-to-b from-[#8133F1] to-[#090909]"
    >
      <div className="flex flex-col items-center justify-center text-center text-white backdrop-blur-[4px] w-full h-full rounded-xl sm:rounded-2xl md:rounded-[32px] p-4 sm:p-6 md:p-10 bg-[#090909]">
        <Image
          src="/images/image.png"
          alt="quotation mark"
          width={37.84}
          height={26.8}
          className="object-contain opacity-80 pb-3 sm:pb-5"
        />
        <p className="text-xs sm:text-sm md:text-lg">{text}</p>
      </div>
    </div>
  ))}
</div>

      {/* Only render components if client-side mounted to avoid hydration issues */}
      {isMounted && (
        <>
          <div className="mt-8 sm:mt-12 md:mt-16">
            <SectionCard />
          </div>
          <div className="mt-8 sm:mt-12 md:mt-16">
            <StepBar />
          </div>
          <div className="mt-8 sm:mt-12 md:mt-16">
            <CardSection />
          </div>
          <div className="mt-8 sm:mt-12 md:mt-16">
            <IndustriesSection />
          </div>
          <div className="mt-8 sm:mt-12 md:mt-16">
            <OurChallengesPage />
          </div>
          <div className="mt-8 sm:mt-12 md:mt-16">
            <InfiniteHorizontalScroll />
          </div>
          <div className="mt-8 sm:mt-12 md:mt-16">
            <Yoursuccess />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
