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
      {/* Main Heading - Responsive */}
      <h1 className="text-[64px] xl:text-[64px] 2xl:text-[64px] 3xl:text-[64px]  md:text-[45px] sm:text-[32px] xs:text-[32px] 2xs:text-[32px] md:pt-40 lg:pt-60 xl:pt-64  sm:pt-40 font-bold text-white  2xs:pt-40 ">
        Why Stress Over Website Development?
      </h1>

      {/* Centered Paragraph - Responsive */}
      <div className="flex justify-center px-4 xs:px-6 sm:px-0">
        <p
          className="text-[16px] 3xl:text-[16px] 2xl:text-[16px] xl:text-[16px] md:text-[16px]
                     font-[400] text-white 
                     mt-3 xs:mt-4 sm:mt-16 md:mt-4
                     max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl
                      xs:pt-6 2xs:pt-6 sm:pt-8 md:pt-16 lg:mt-[105px] xl:pt-[36px] sm:px-8"
        >
          Frustrated with the Process? Scroll for a Simpler Solution
        </p>
      </div>

      <div
        className="flex flex-wrap py-3 justify-center items-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 
                 xs:px-6 sm:px-8 md:px-10
                pt-20 xs:pt-12 sm:pt-20 md:pt-32 3xl:pt-40 2xs:px-10 "
      >
        {cardData.map((text, index) => (
          <div
            key={index}
            className="relative w-full xs:w-[calc(60%-6px)] sm:w-[calc(50%-12px)] md:w-auto
                 max-w-xs xs:max-w-[60%] sm:max-w-[45%] md:max-w-[314.75px] 3xl:max-w-[400px]
                 h-[90px] xs:h-[100px] sm:h-[120px] md:h-[215px] 3xl:h-[250px]
                 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-[32px]
                 p-[1px] sm:p-[1px] overflow-hidden bg-gradient-to-b from-[#8133F1] to-[#090909]"
          >
            <div
              className="flex flex-col  items-center justify-center text-center text-white 
                    backdrop-blur-[4px] w-full h-full 
                    rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-[32px]
                    p-2 xs:p-3 sm:p-4 md:p-10 3xl:p-12 bg-[#090909]"
            >
              <Image
                src="/images/image.png"
                alt="quotation mark"
                width={37.84}
                height={26.8}
                className="object-contain opacity-80 
                     w-5 xs:w-6 sm:w-7 md:w-[37.84px] 
                     pb-1 xs:pb-2 sm:pb-3 md:pb-5"
              />
              <p className="text-[14px] leading-tight">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Only render components if client-side mounted to avoid hydration issues */}
      {isMounted && (
        <>
          <div className="mt-4 xs:mt-6 sm:mt-10 md:mt-16 3xl:mt-20  sm:px-0">
            <SectionCard />
          </div>
          <div className="mt-4 xs:mt-6 sm:mt-10 md:mt-16 3xl:mt-20  xs:px-6 sm:px-0">
            <StepBar />
          </div>
          <div className="mt-4 xs:mt-6 sm:mt-10 md:mt-16 3xl:mt-20 xs:px-6 sm:px-0">
            <CardSection />
          </div>
          <div className="mt-4 xs:mt-6 sm:mt-10 md:mt-16 3xl:mt-20 xs:px-6 sm:px-0">
            <IndustriesSection />
          </div>
          <div className="mt-4 xs:mt-6 sm:mt-10 md:mt-16 3xl:mt-20 xs:px-6 sm:px-0">
            <OurChallengesPage />
          </div>
          <div className="mt-4 xs:mt-6 sm:mt-10 md:mt-16 3xl:mt-20 xs:px-6 sm:px-0">
            <InfiniteHorizontalScroll />
          </div>
          <div className="mt-4 xs:mt-6 sm:mt-10 md:mt-16 3xl:mt-20 xs:px-6 sm:px-0">
            <Yoursuccess />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
