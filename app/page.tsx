"use client";

import type { NextPage } from "next";
import Image from "next/image";
import SectionCard from "./components/SectionCard";
import { useEffect, useState } from "react";
import Yoursuccess from "./components/yoursuccess";

const Home: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Client-side detection for very small screens
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-full overflow-x-hidden">
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mt-10 xs:mt-16 sm:mt-24 md:mt-32 lg:mt-[200px] xl:mt-[250px] font-bold text-white leading-tight">
        Why Stress Over Website Development?
      </h1>
      <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-[16px] font-[400] text-white mt-2 xs:mt-3 sm:mt-4 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl pt-5 xs:pt-8 sm:pt-12 md:pt-20 lg:pt-30 xl:pt-40">
        Frustrated with the Process? Scroll for a Simpler Solution
      </p>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-[23px] w-full max-w-[340px] xs:max-w-[500px] sm:max-w-[650px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1328px] mt-6 xs:mt-8 sm:mt-12 md:mt-16 lg:mt-20 pb-10">
        {[
          "Templates can't reflect your unique vision",
          "CMS tools promise freedom but hide limitations",
          "You shouldn't need to be a coder to realize ideas",
          "Updating your site shouldn't feel like a hassle",
        ].map((text, index) => (
          <div
            key={index}
            className="w-full xs:w-[280px] sm:w-[45%] md:w-[314.75px] h-auto min-h-[150px] xs:min-h-[180px] sm:min-h-[200px] md:h-[215px] rounded-xl xs:rounded-2xl sm:rounded-[32px] border-[1px] p-3 xs:p-4 sm:p-6 md:p-[40px] lg:p-[50px] flex flex-col items-center justify-center text-center text-white backdrop-blur-[4px] relative"
            style={{
              borderImage:
                "linear-gradient(180deg, #8133F1 0%, #090909 100%) 1",
            }}
          >
            {/* Quotation mark */}
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
      <div>
        <SectionCard />
        <Yoursuccess/>
      </div>
    </div>
  );
};

export default Home;