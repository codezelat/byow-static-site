"use client";
import { NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";

const StepsBar: NextPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];

  // Add scroll event listener to track which step is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 1;

      // Check which step is currently in view
      for (let i = 0; i < stepRefs.length; i++) {
        if (stepRefs[i].current) {
          const rect = stepRefs[i].current?.getBoundingClientRect();
          if (rect) {
            const elementTop = rect.top + window.scrollY;
            const elementBottom = elementTop + rect.height;

            if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
              setActiveStep(i + 1);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check for which step is in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-auto pb-24">
      <div className="gap-[24px] items-center justify-center pt-10">
        <h1 className="h-[58px] font-bold text-[48px] text-center text-[#8133F1] leading-[120%]">
          How BYOW Simplifies Your Journey?
        </h1>
        <p className="h-[22px] font-normal text-[16px] text-center text-white leading-[140%]">
          Helping You Achieve More With Less Effort Through Seamless Integration
        </p>
      </div>

      {/* cards */}
      <div className="w-full flex flex-row gap-[24px] pt-20 pl-[203px] relative">
        {/* Left Column */}
        <div className="flex flex-col gap-36 pt-20">
          <div
            ref={stepRefs[0]}
            className="w-[500px] h-[242px] p-8 relative"
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
              borderImageSlice: 1,
              clipPath: "inset(0 round 20px)", // Apply rounded corners
            }}
          >
            <h1 className="font-bold text-[18px] leading-[140%] text-left pb-4 text-[#8133F1]">
              Step 1: Share Your Vision
            </h1>
            <p className="text-[16px] font-normal leading-[140%] text-left pb-4 text-white">
              DIY platforms ask, "What do you want?" but give you a blank canvas
              with zero guidance.
            </p>
            <p className="text-[16px] font-normal leading-[140%] text-left text-[#CEB0FA]">
              We don't just ask; we listen. Whether you have a clear idea or
              just a rough sketch, we help shape your vision into something
              extraordinary.
            </p>
          </div>
          <div
            ref={stepRefs[2]}
            className="w-[500px] h-[242px] p-8 relative"
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
              borderImageSlice: 1,
              clipPath: "inset(0 round 20px)",
            }}
          >
            <h1 className="font-bold text-[18px] leading-[140%] text-left pb-4 text-[#8133F1]">
              Step 3: Review & Perfect
            </h1>
            <p className="text-[16px] font-normal leading-[140%] text-left pb-4 text-white">
              DIY tools make you tweak endlessly, but they never quite "feel
              right."
            </p>
            <p className="text-[16px] font-normal leading-[140%] text-left text-[#CEB0FA]">
              You get to review the site we've built and provide feedback. We
              tweak and polish it until it's perfect—your perfect.
            </p>
          </div>
        </div>

        {/* Stepper Line */}
        <div className="relative pl-[146px]">
          <div className="h-full w-[2px] bg-white"></div>

          {/* Circle 1 - aligned with first card */}
          <div
            className={`absolute w-[42px] h-[42px] rounded-full transition-colors duration-300 border ${
              activeStep === 1 ? "bg-black" : "bg-black"
            }`}
            style={{
              top: "110px",
              left: "145px",
              border: "2px solid #9654F4",
              transform: "translateX(-50%)",
            }}
          >
            <div
              className={`w-[25px] h-[25px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                activeStep === 1
                  ? "bg-white border-4 border-[#9654F4] "
                  : "bg-[#9654F4]"
              }`}
            ></div>
          </div>

          {/* Circle 2 - aligned with second card (on right) */}
          <div
            className={`absolute w-[42px] h-[42px] rounded-full transition-colors duration-300 border ${
              activeStep === 2 ? "bg-black" : "bg-black"
            }`}
            style={{
              top: "320px",
              left: "145px",
              border: "2px solid #9654F4",
              transform: "translateX(-50%)",
            }}
          >
            <div
              className={`w-[25px] h-[25px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                activeStep === 2
                  ? "bg-white border-4 border-[#9654F4] "
                  : "bg-[#9654F4]"
              }`}
            ></div>
          </div>

          {/* Circle 3 - aligned with third card */}
          <div
            className={`absolute w-[42px] h-[42px] rounded-full transition-colors duration-300 border ${
              activeStep === 3 ? "bg-black" : "bg-black"
            }`}
            style={{
              top: "550px",
              left: "145px",
              border: "2px solid #9654F4",
              transform: "translateX(-50%)",
            }}
          >
            <div
              className={`w-[25px] h-[25px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                activeStep === 3
                  ? "bg-white border-4 border-[#9654F4] "
                  : "bg-[#9654F4]"
              }`}
            ></div>
          </div>

          {/* Circle 4 - aligned with fourth card */}
          <div
            className={`absolute w-[42px] h-[42px] rounded-full transition-colors duration-300 border ${
              activeStep === 4 ? "bg-black" : "bg-black"
            }`}
            style={{
              top: "732px",
              left: "145px",
              border: "2px solid #9654F4",
              transform: "translateX(-50%)",
            }}
          >
            <div
              className={`w-[25px] h-[25px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                activeStep === 4
                ? "bg-white border-4 border-[#9654F4] "
                : "bg-[#9654F4]"
            }`}
            ></div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-36 pl-[176px] pt-[230px]">
          <div
            ref={stepRefs[1]}
            className="w-[500px] h-[242px] p-8 relative"
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
              borderImageSlice: 1,
              clipPath: "inset(0 round 20px)",
            }}
          >
            <h1 className="font-bold text-[18px] leading-[140%] text-left pb-4 text-[#8133F1]">
              Step 2: Watch us build it
            </h1>
            <p className="text-[16px] font-normal leading-[140%] text-left pb-4 text-white">
              Drag-and-drop builders are fine... until they're not. That one
              "custom feature" you need? Impossible.
            </p>
            <p className="text-[16px] font-normal leading-[140%] text-left text-[#CEB0FA]">
              Our team of pros turns your wish list into reality—no limitations,
              no shortcuts.
            </p>
          </div>
          <div
            ref={stepRefs[3]}
            className="w-[500px] h-[242px] p-8 relative"
            style={{
              border: "1px solid",
              borderImageSource:
                "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
              borderImageSlice: 1,
              clipPath: "inset(0 round 20px)",
            }}
          >
            <h1 className="font-bold text-[18px] leading-[140%] text-left pb-4 text-[#8133F1]">
              Step 4: Launch & Thrive
            </h1>
            <p className="text-[16px] font-normal leading-[140%] text-left pb-4 text-white">
              With DIY platforms, "launching" is just step one. Now you're stuck
              dealing with slow load times, SEO issues, and constant updates.
            </p>
            <p className="text-[16px] font-normal leading-[140%] text-left text-[#CEB0FA]">
              We handle all the heavy lifting—optimised performance, SEO-ready
              designs, and future-proofed functionality. Your job? Enjoy the
              results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsBar;
