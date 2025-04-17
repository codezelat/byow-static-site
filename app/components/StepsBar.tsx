"use client";
import { NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";

const StepsBar: NextPage = () => {
  const [activeStep, setActiveStep] = useState(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
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
    <div className="h-auto pb-12 md:pb-24 sm:pb-5 px-4 md:px-6">
      <div className="flex flex-col md:pt-40 sm:pb-10 px-5 pb-10 pt-20 gap-[24px]">
        <h1 className="font-bold text-[48px] 3xl:text-[48px] 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[40px] sm:text-[32px] xs:text-[32px] 2xs:text-[32px] text-center text-[#8133F1] leading-[120%]">
          How BYOW Simplifies Your Journey?
        </h1>
        <p className="font-normal text-[16px]  text-center text-white leading-[140%]">
          Helping You Achieve More With Less Effort Through Seamless Integration
        </p>
      </div>

      {/* Mobile view */}
      <div className="md:hidden w-full mt-10 ">
        <div className="relative">
          {/* Vertical stepper line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white"></div>

          {/* Mobile steps */}
          <div className="flex flex-col gap-8 ">
            {/* Step 1 */}
            <div className="flex flex-col ml-16">
              <div className="absolute left-5 w-[42px] h-[42px] rounded-full border-2 border-[#9654F4] bg-black transform -translate-x-1/2">
                <div
                  className={`w-[25px] h-[25px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    activeStep === 1
                      ? "bg-white border-4 border-[#9654F4]"
                      : "bg-[#9654F4]"
                  }`}
                ></div>
              </div>
              <div
                ref={stepRefs[0]}
                className="w-full p-6 relative mb-12"
                style={{
                  border: "1px solid",
                  borderImageSource:
                    "linear-gradient(180deg, #8133F1 0%, #090909 100%)",

                  borderImageSlice: 1,
                  clipPath: "inset(0 round 32px)",
                }}
              >
                <h1 className="font-bold text-base leading-[140%] text-left pb-3 text-[#8133F1]">
                  Step 1: Share Your Vision
                </h1>
                <p className="text-sm font-normal leading-[140%] text-left pb-3 text-white">
                  DIY platforms ask, &quot;What do you want?&quot; but give you
                  a blank canvas with zero guidance.
                </p>
                <p className="text-sm font-normal leading-[140%] text-left text-[#CEB0FA]">
                  We do not just ask; we listen. Whether you have a clear idea
                  or just a rough sketch, we help shape your vision into
                  something extraordinary.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col ml-16">
              <div className="absolute left-5 w-[42px] h-[42px] rounded-full border-2 border-[#9654F4] bg-black transform -translate-x-1/2">
                <div
                  className={`w-[25px] h-[25px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    activeStep === 2
                      ? "bg-white border-4 border-[#9654F4]"
                      : "bg-[#9654F4]"
                  }`}
                ></div>
              </div>
              <div
                ref={stepRefs[1]}
                className="w-full p-6 relative mb-12"
                style={{
                  border: "1px solid",
                  borderImageSource:
                    "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                  borderImageSlice: 1,
                  clipPath: "inset(0 round 16px)",
                }}
              >
                <h1 className="font-bold text-base leading-[140%] text-left pb-3 text-[#8133F1]">
                  Step 2: Watch us build it
                </h1>
                <p className="text-sm font-normal leading-[140%] text-left pb-3 text-white">
                  Drag-and-drop builders are fine... until theyre not. That one
                  &quot;custom feature&quot; you need? Impossible.
                </p>
                <p className="text-sm font-normal leading-[140%] text-left text-[#CEB0FA]">
                  Our team of pros turns your wish list into reality—no
                  limitations, no shortcuts.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col ml-16">
              <div className="absolute left-5 w-[42px] h-[42px] rounded-full border-2 border-[#9654F4] bg-black transform -translate-x-1/2">
                <div
                  className={`w-[25px] h-[25px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    activeStep === 3
                      ? "bg-white border-4 border-[#9654F4]"
                      : "bg-[#9654F4]"
                  }`}
                ></div>
              </div>
              <div
                ref={stepRefs[2]}
                className="w-full p-6 relative mb-12"
                style={{
                  border: "1px solid",
                  borderImageSource:
                    "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                  borderImageSlice: 1,
                  clipPath: "inset(0 round 16px)",
                }}
              >
                <h1 className="font-bold text-base leading-[140%] text-left pb-3 text-[#8133F1]">
                  Step 3: Review & Perfect
                </h1>
                <p className="text-sm font-normal leading-[140%] text-left pb-3 text-white">
                  DIY tools make you tweak endlessly, but they never quite
                  &quot;feel right.&quot;
                </p>
                <p className="text-sm font-normal leading-[140%] text-left text-[#CEB0FA]">
                  You get to review the site weve built and provide feedback. We
                  tweak and polish it until its perfect—your perfect.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col ml-16">
              <div className="absolute left-5 w-[42px] h-[42px] rounded-full border-2 border-[#9654F4] bg-black transform -translate-x-1/2">
                <div
                  className={`w-[25px] h-[25px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    activeStep === 4
                      ? "bg-white border-4 border-[#9654F4]"
                      : "bg-[#9654F4]"
                  }`}
                ></div>
              </div>
              <div
                ref={stepRefs[3]}
                className="w-full p-6 relative"
                style={{
                  border: "1px solid",
                  borderImageSource:
                    "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                  borderImageSlice: 1,
                  clipPath: "inset(0 round 16px)",
                }}
              >
                <h1 className="font-bold text-base leading-[140%] text-left pb-3 text-[#8133F1]">
                  Step 4: Launch & Thrive
                </h1>
                <p className="text-sm font-normal leading-[140%] text-left pb-3 text-white">
                  With DIY platforms, &quot;launching&quot; is just step one.
                  Now you are stuck dealing with slow load times, SEO issues,
                  and constant updates.
                </p>
                <p className="text-sm font-normal leading-[140%] text-left text-[#CEB0FA]">
                  We handle all the heavy lifting—optimised performance,
                  SEO-ready designs, and future-proofed functionality. Your job?
                  Enjoy the results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block w-full relative md:px-10 md:pt-10">
        <div className="w-full flex flex-col lg:flex-row gap-20 justify-center lg:mx-auto lg:px-6">
          {/* Left Column */}
          <div className="flex flex-col gap-16 lg:gap-36 w-full lg:w-auto rounded-xl sm:rounded-2xl md:rounded-[32px]">
            <div
              ref={stepRefs[0]}
              className="w-full lg:ml-40 xl:ml-0 lg:w-[350px] xl:w-[500px] p-6 lg:p-8 relative bg-black rounded-[20px]"
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
                  background:
                    "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                  zIndex: "-1",
                }}
              />
              <h1 className="font-bold text-[18px] leading-[140%] text-left pb-4 text-[#8133F1]">
                Step 1: Share Your Vision
              </h1>
              <p className="text-[16px] font-normal leading-[140%] text-left pb-4 text-white">
                DIY platforms ask, &quot;What do you want?&quot; but give you a
                blank canvas with zero guidance.
              </p>
              <p className="text-[16px] font-normal leading-[140%] text-left text-[#CEB0FA]">
                We do not just ask; we listen. Whether you have a clear idea or
                just a rough sketch, we help shape your vision into something
                extraordinary.
              </p>
            </div>
            <div
              ref={stepRefs[2]}
              className="w-full lg:ml-40 xl:ml-0 lg:w-[350px] xl:w-[500px] p-6 lg:p-8 relative bg-black rounded-[20px]"
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
                  background:
                    "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                  zIndex: "-1",
                }}
              />
              <h1 className="font-bold text-[18px] leading-[140%] text-left pb-4 text-[#8133F1]">
                Step 3: Review & Perfect
              </h1>
              <p className="text-[16px] font-normal leading-[140%] text-left pb-4 text-white">
                DIY tools make you tweak endlessly, but they never quite
                &quot;feel right.&quot;
              </p>
              <p className="text-[16px] font-normal leading-[140%] text-left text-[#CEB0FA]">
                You get to review the site weve built and provide feedback. We
                tweak and polish it until its perfect—your perfect.
              </p>
            </div>
          </div>

          {/* Stepper Line - only visible on larger screens */}
          <div className="hidden lg:block relative mx-6">
            <div className="h-full w-[2px] bg-white"></div>

            {/* Circle 1 - aligned with first card */}
            <div
              className={`absolute w-[42px] h-[42px] rounded-full transition-colors duration-300 border bg-black`}
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

            {/* Circle 2 - aligned with second card (on right) */}
            <div
              className={`absolute w-[42px] h-[42px] rounded-full transition-colors duration-300 border bg-black`}
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

            {/* Circle 3 - aligned with third card */}
            <div
              className={`absolute w-[42px] h-[42px] rounded-full transition-colors duration-300 border bg-black`}
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

            {/* Circle 4 - aligned with fourth card */}
            <div
              className={`absolute w-[42px] h-[42px] rounded-full transition-colors duration-300 border bg-black`}
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
          <div className="flex flex-col gap-16 lg:gap-36 w-full lg:w-auto lg:mt-36">
            <div
              ref={stepRefs[1]}
              className="w-full lg:mr-40 xl:mr-0 lg:w-[350px] xl:w-[500px] p-6 lg:p-8 relative bg-black rounded-[20px]"
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
                  inset: "-1px", // 1px larger than the parent
                  borderRadius: "20px",
                  background:
                    "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                  zIndex: "-1",
                }}
              />
              <h1 className="font-bold text-[18px] leading-[140%] text-left pb-4 text-[#8133F1]">
                Step 2: Watch us build it
              </h1>
              <p className="text-[16px] font-normal leading-[140%] text-left pb-4 text-white">
                Drag-and-drop builders are fine... until theyre not. That one
                &quot;custom feature&quot; you need? Impossible.
              </p>
              <p className="text-[16px] font-normal leading-[140%] text-left text-[#CEB0FA]">
                Our team of pros turns your wish list into reality—no
                limitations, no shortcuts.
              </p>
            </div>
            <div
              ref={stepRefs[3]}
              className="w-full lg:mr-40 xl:mr-0 lg:w-[350px] xl:w-[500px] p-6 lg:p-8 relative bg-black rounded-[20px]"
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
                  inset: "-1px", // 1px larger than the parent
                  borderRadius: "20px",
                  background:
                    "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
                  zIndex: "-1",
                }}
              />
              <h1 className="font-bold text-[18px] leading-[140%] text-left pb-4 text-[#8133F1]">
                Step 4: Launch & Thrive
              </h1>
              <p className="text-[16px] font-normal leading-[140%] text-left pb-4 text-white">
                With DIY platforms, &quot;launching&quot; is just step one. Now
                you are stuck dealing with slow load times, SEO issues, and
                constant updates.
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
    </div>
  );
};

export default StepsBar;
