"use client";
import { NextPage } from "next";
import React, { useState, useEffect, useRef, useMemo } from "react";

const StepsBar: NextPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  const stepRef1 = useRef<HTMLDivElement>(null);
  const stepRef2 = useRef<HTMLDivElement>(null);
  const stepRef3 = useRef<HTMLDivElement>(null);
  const stepRef4 = useRef<HTMLDivElement>(null);
  const stepRefs = useMemo(
    () => [stepRef1, stepRef2, stepRef3, stepRef4],
    []
  );

  // Add scroll event listener to track which step is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check which step is currently in view
      for (let i = 0; i < stepRefs.length; i++) {
        if (stepRefs[i].current) {
          const rect = stepRefs[i].current?.getBoundingClientRect();
          if (rect) {
            const elementTop = rect.top + window.scrollY;
            const elementBottom = elementTop + rect.height;

            if (
              scrollPosition >= elementTop &&
              scrollPosition <= elementBottom
            ) {
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
  }, [stepRefs]);

  return (
    <div className="h-auto pb-12 md:pb-24 sm:pb-5 px-2 sm:px-3 md:px-6">
 <div className="flex flex-col md:pt-32 sm:pt-24 pt-20 sm:pb-8 pb-6 px-4 sm:px-6 md:px-10 gap-4 sm:gap-6">
  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left md:text-center text-[#8133F1] leading-[120%] mt-20 mb-6">
    How BYOW Simplifies Your Journey?
  </h1>
  <p className="font-normal text-xs sm:text-sm md:text-base text-left md:text-center mb-14 text-white leading-[140%]">
    Helping You Achieve More With Less Effort Through Seamless Integration
  </p>
</div>
      
      {/* Main content with stepper */}
      <div className="w-full relative md:px-8 sm:px-6 px-4">
        <div className="w-full mx-auto max-w-4xl">
          {/* Mobile and Tablet Layout */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
            {/* Left-aligned vertical timeline for mobile and tablet */}
            <div className="w-full flex lg:hidden relative">
              {/* Removed the vertical line for mobile */}
              
              <div className="w-full flex flex-col">
                {/* Step 1 Card with removed indicator */}
                <div className="flex flex-row items-start mb-10 w-full">
                  {/* Removed the left-aligned indicator */}
                  
                  <div
                    ref={stepRefs[0]}
                    className="flex-grow w-full"
                  >
                    <div className="p-4 sm:p-5 relative bg-black rounded-[16px] sm:rounded-[20px]"
                      style={{
                        position: "relative",
                        background: "black",
                      }}>
                      {/* Gradient border overlay */}
                      <div
                        style={{
                          position: "absolute",
                          content: "''",
                          inset: "-1px",
                          borderRadius: "16px",
                          background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                          zIndex: "-1",
                        }}
                      />
                      <h1 className="font-bold text-base sm:text-lg leading-[140%] text-left pb-2 sm:pb-3 text-[#8133F1]">
                        Step 1: Share Your Vision
                      </h1>
                      <p className="text-xs sm:text-sm font-normal leading-[140%] text-left pb-2 sm:pb-3 text-white">
                        DIY platforms ask, &quot;What do you want?&quot; but give you a
                        blank canvas with zero guidance.
                      </p>
                      <p className="text-xs sm:text-sm font-normal leading-[140%] text-left text-[#CEB0FA]">
                        We do not just ask; we listen. Whether you have a clear idea or
                        just a rough sketch, we help shape your vision into something
                        extraordinary.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 Card with removed indicator */}
                <div className="flex flex-row items-start mb-10 w-full">
                  {/* Removed the left-aligned indicator */}
                  
                  <div
                    ref={stepRefs[1]}
                    className="flex-grow w-full"
                  >
                    <div className="p-4 sm:p-5 relative bg-black rounded-[16px] sm:rounded-[20px]"
                      style={{
                        position: "relative",
                        background: "black",
                      }}>
                      {/* Gradient border overlay */}
                      <div
                        style={{
                          position: "absolute",
                          content: "''",
                          inset: "-1px",
                          borderRadius: "16px",
                          background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                          zIndex: "-1",
                        }}
                      />
                      <h1 className="font-bold text-base sm:text-lg leading-[140%] text-left pb-2 sm:pb-3 text-[#8133F1]">
                        Step 2: Watch us build it
                      </h1>
                      <p className="text-xs sm:text-sm font-normal leading-[140%] text-left pb-2 sm:pb-3 text-white">
                        Drag-and-drop builders are fine... until theyre not. That one
                        &quot;custom feature&quot; you need? Impossible.
                      </p>
                      <p className="text-xs sm:text-sm font-normal leading-[140%] text-left text-[#CEB0FA]">
                        Our team of pros turns your wish list into reality—no
                        limitations, no shortcuts.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 Card with removed indicator */}
                <div className="flex flex-row items-start mb-10 w-full">
                  {/* Removed the left-aligned indicator */}
                  
                  <div
                    ref={stepRefs[2]}
                    className="flex-grow w-full"
                  >
                    <div className="p-4 sm:p-5 relative bg-black rounded-[16px] sm:rounded-[20px]"
                      style={{
                        position: "relative",
                        background: "black",
                      }}>
                      {/* Gradient border overlay */}
                      <div
                        style={{
                          position: "absolute",
                          content: "''",
                          inset: "-1px",
                          borderRadius: "16px",
                          background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                          zIndex: "-1",
                        }}
                      />
                      <h1 className="font-bold text-base sm:text-lg leading-[140%] text-left pb-2 sm:pb-3 text-[#8133F1]">
                        Step 3: Review & Perfect
                      </h1>
                      <p className="text-xs sm:text-sm font-normal leading-[140%] text-left pb-2 sm:pb-3 text-white">
                        DIY tools make you tweak endlessly, but they never quite
                        &quot;feel right.&quot;
                      </p>
                      <p className="text-xs sm:text-sm font-normal leading-[140%] text-left text-[#CEB0FA]">
                        You get to review the site weve built and provide feedback. We
                        tweak and polish it until its perfect—your perfect.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 Card with removed indicator */}
                <div className="flex flex-row items-start w-full">
                  {/* Removed the left-aligned indicator */}
                  
                  <div
                    ref={stepRefs[3]}
                    className="flex-grow w-full"
                  >
                    <div className="p-4 sm:p-5 relative bg-black rounded-[16px] sm:rounded-[20px]"
                      style={{
                        position: "relative",
                        background: "black",
                      }}>
                      {/* Gradient border overlay */}
                      <div
                        style={{
                          position: "absolute",
                          content: "''",
                          inset: "-1px",
                          borderRadius: "16px",
                          background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                          zIndex: "-1",
                        }}
                      />
                      <h1 className="font-bold text-base sm:text-lg leading-[140%] text-left pb-2 sm:pb-3 text-[#8133F1]">
                        Step 4: Launch & Thrive
                      </h1>
                      <p className="text-xs sm:text-sm font-normal leading-[140%] text-left pb-2 sm:pb-3 text-white">
                        With DIY platforms, &quot;launching&quot; is just step one. Now
                        you are stuck dealing with slow load times, SEO issues, and
                        constant updates.
                      </p>
                      <p className="text-xs sm:text-sm font-normal leading-[140%] text-left text-[#CEB0FA]">
                        We handle all the heavy lifting—optimised performance, SEO-ready
                        designs, and future-proofed functionality. Your job? Enjoy the
                        results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Only visible on large screens */}
            <div className="hidden lg:flex lg:flex-row gap-20 justify-center">
              {/* Left Column */}
              <div className="flex flex-col gap-36 w-auto">
                {/* Step 1 card */}
                <div
                  ref={stepRefs[0]}
                  className="w-[350px] xl:w-[500px] p-8 relative bg-black rounded-[20px]"
                  style={{
                    position: "relative",
                    borderRadius: "20px",
                    background: "black",
                  }}
                >
                  {/* Gradient border overlay */}
                  <div
                    style={{
                      position: "absolute",
                      content: "''",
                      inset: "-1px",
                      borderRadius: "20px",
                      background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                      zIndex: "-1",
                    }}
                  />
                  <h1 className="font-bold text-lg leading-[140%] text-left pb-4 text-[#8133F1]">
                    Step 1: Share Your Vision
                  </h1>
                  <p className="text-base font-normal leading-[140%] text-left pb-4 text-white">
                    DIY platforms ask, &quot;What do you want?&quot; but give you a
                    blank canvas with zero guidance.
                  </p>
                  <p className="text-base font-normal leading-[140%] text-left text-[#CEB0FA]">
                    We do not just ask; we listen. Whether you have a clear idea or
                    just a rough sketch, we help shape your vision into something
                    extraordinary.
                  </p>
                </div>
                
                {/* Step 3 card */}
                <div
                  ref={stepRefs[2]}
                  className="w-[350px] xl:w-[500px] p-8 relative bg-black rounded-[20px]"
                  style={{
                    position: "relative",
                    borderRadius: "20px",
                    background: "black",
                  }}
                >
                  {/* Gradient border overlay */}
                  <div
                    style={{
                      position: "absolute",
                      content: "''",
                      inset: "-1px",
                      borderRadius: "20px",
                      background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                      zIndex: "-1",
                    }}
                  />
                  <h1 className="font-bold text-lg leading-[140%] text-left pb-4 text-[#8133F1]">
                    Step 3: Review & Perfect
                  </h1>
                  <p className="text-base font-normal leading-[140%] text-left pb-4 text-white">
                    DIY tools make you tweak endlessly, but they never quite
                    &quot;feel right.&quot;
                  </p>
                  <p className="text-base font-normal leading-[140%] text-left text-[#CEB0FA]">
                    You get to review the site weve built and provide feedback. We
                    tweak and polish it until its perfect—your perfect.
                  </p>
                </div>
              </div>

              {/* Desktop Stepper Line */}
              <div className="hidden lg:block relative mx-6">
                <div className="h-full w-[2px] bg-white"></div>

                {/* Circle 1 */}
                <div
                  className="absolute w-[42px] h-[42px] rounded-full transition-colors duration-300 border bg-black"
                  style={{
                    top: "80px",
                    left: "0",
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

                {/* Circle 2 */}
                <div
                  className="absolute w-[42px] h-[42px] rounded-full transition-colors duration-300 border bg-black"
                  style={{
                    top: "280px",
                    left: "0",
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

                {/* Circle 3 */}
                <div
                  className="absolute w-[42px] h-[42px] rounded-full transition-colors duration-300 border bg-black"
                  style={{
                    top: "450px",
                    left: "0",
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

                {/* Circle 4 */}
                <div
                  className="absolute w-[42px] h-[42px] rounded-full transition-colors duration-300 border bg-black"
                  style={{
                    top: "600px",
                    left: "0",
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
              <div className="flex flex-col gap-36 w-auto mt-36">
                {/* Step 2 card */}
                <div
                  ref={stepRefs[1]}
                  className="w-[350px] xl:w-[500px] p-8 relative bg-black rounded-[20px]"
                  style={{
                    position: "relative",
                    borderRadius: "20px",
                    background: "black",
                  }}
                >
                  {/* Gradient border overlay */}
                  <div
                    style={{
                      position: "absolute",
                      content: "''",
                      inset: "-1px",
                      borderRadius: "20px",
                      background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                      zIndex: "-1",
                    }}
                  />
                  <h1 className="font-bold text-lg leading-[140%] text-left pb-4 text-[#8133F1]">
                    Step 2: Watch us build it
                  </h1>
                  <p className="text-base font-normal leading-[140%] text-left pb-4 text-white">
                    Drag-and-drop builders are fine... until theyre not. That one
                    &quot;custom feature&quot; you need? Impossible.
                  </p>
                  <p className="text-base font-normal leading-[140%] text-left text-[#CEB0FA]">
                    Our team of pros turns your wish list into reality—no
                    limitations, no shortcuts.
                  </p>
                </div>
                
                {/* Step 4 card */}
                <div
                  ref={stepRefs[3]}
                  className="w-[350px] xl:w-[500px] p-8 relative bg-black rounded-[20px]"
                  style={{
                    position: "relative",
                    borderRadius: "20px",
                    background: "black",
                  }}
                >
                  {/* Gradient border overlay */}
                  <div
                    style={{
                      position: "absolute",
                      content: "''",
                      inset: "-1px",
                      borderRadius: "20px",
                      background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                      zIndex: "-1",
                    }}
                  />
                  <h1 className="font-bold text-lg leading-[140%] text-left pb-4 text-[#8133F1]">
                    Step 4: Launch & Thrive
                  </h1>
                  <p className="text-base font-normal leading-[140%] text-left pb-4 text-white">
                    With DIY platforms, &quot;launching&quot; is just step one. Now
                    you are stuck dealing with slow load times, SEO issues, and
                    constant updates.
                  </p>
                  <p className="text-base font-normal leading-[140%] text-left text-[#CEB0FA]">
                    We handle all the heavy lifting—optimised performance, SEO-ready
                    designs, and future-proofed functionality. Your job? Enjoy the
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsBar;
