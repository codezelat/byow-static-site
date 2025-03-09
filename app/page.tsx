"use client";

import type { NextPage } from "next";
import Image from "next/image";
// import SectionCard from "./components/SectionCard";
// import StepBar from "./components/StepsBar";
// import CardSection from "./components/CardSection";
import { useEffect, useState } from "react";
// import IndustriesSection from "./components/IndustriesSection";
import Yoursuccess from "./components/yoursuccess";
import InfiniteHorizontalScroll from "./components/infinite-horizontal";

const Home: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="text-center  ">
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
      <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 w-full sm:w-[90%] md:w-[1328px] mt-8 sm:mt-12 md:mt-16 container-wrapper ">
        {["Templates can't reflect your unique vision", "CMS tools promise freedom but hide limitations", "You shouldn't need to be a coder to realize ideas", "Updating your site shouldn't feel like a hassle"].map((text, index) => (
          <div
            key={index}
            className="w-full xs:w-[280px] sm:w-[45%] md:w-[314.75px] h-auto min-h-[150px] xs:min-h-[180px] sm:min-h-[200px] md:h-[215px] rounded-xl xs:rounded-2xl sm:rounded-[32px] border-[1px] p-4 sm:p-6 md:p-[40px] lg:p-[50px] flex flex-col items-center justify-center text-center text-white backdrop-blur-[4px] relative"
            style={{ borderImage: "linear-gradient(180deg, #8133F1 0%, #090909 100%) 1" }}
          >
            <Image
              src="/images/image.png"
              alt="quotation mark"
              width={isMounted && window.innerWidth < 375 ? 30 : 37.84}
              height={isMounted && window.innerWidth < 375 ? 20 : 26.8}
              className="object-contain opacity-80 pb-3 xs:pb-4 sm:pb-5"
            />
            <p className="text-xs xs:text-sm sm:text-base md:text-lg">{text}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 sm:mt-12 md:mt-16">
        {/* <SectionCard /> */}
      </div>
      <div className="mt-8 sm:mt-12 md:mt-16">
        {/* <StepBar /> */}
      </div>
      <div className="mt-8 sm:mt-12 md:mt-16">
        {/* <CardSection /> */}
      </div>
      <div className="mt-8 sm:mt-12 md:mt-16">
        {/* <IndustriesSection /> */}
      </div>
      <div className="mt-8 sm:mt-12 md:mt-16">
        <InfiniteHorizontalScroll />
      </div>
      <div className="mt-8 sm:mt-12 md:mt-16">
        <Yoursuccess />
      </div>
    </div>
  );
};

export default Home;
