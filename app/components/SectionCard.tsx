"use client";
import { NextPage } from "next";
import React, { useState } from "react";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined"; // Import the new icon
import Image from "next/image";

const SectionCard: NextPage = () => {
  // State to keep track of the selected number
  const [selectedNumber, setSelectedNumber] = useState<number>(1);
  // State to track if the Build Now button has been clicked
  const [showBuildSection, setShowBuildSection] = useState<boolean>(false);

  // Handler for when a number is clicked
  const handleNumberClick = (number: number) => {
    setSelectedNumber(number);
  };

  // Handler for the Build Now button
  const handleBuildNowClick = () => {
    setShowBuildSection(!showBuildSection); // Toggle the state
  };

  // Function to determine the size based on whether the number is selected or not
  const getNumberStyle = (number: number) => {
    return number === selectedNumber
      ? "text-[48px] sm:text-[64px] text-[#8133F1] transform scale-110"
      : "text-[24px] sm:text-[32px] text-[#5B546E] pt-3 sm:pt-5";
  };

  // Content sections based on selected number
  const getContent = () => {
    switch (selectedNumber) {
      case 1:
        return (
          <>
            <h1 className="font-semibold text-[28px] sm:text-[36px] md:text-[45px] leading-[120%] w-full text-left">
              DIY Platforms Seem Easy, Until They re Not...
            </h1>
            <p className="font-normal text-[20px] sm:text-[28px] md:text-[36px] leading-[140%] w-full text-left mt-4">
              They promise customization, but when you want &quot;that one feature,&quot;
              it s a hard no.
            </p>
          </>
        );
      case 2:
        return (
          <>
            <h1 className="font-semibold text-[28px] sm:text-[36px] md:text-[45px] leading-[120%] w-full text-left">
              Templates Are Not Your Brand...
            </h1>
            <p className="font-normal text-[20px] sm:text-[28px] md:text-[36px] leading-[140%] w-full text-left mt-4">
              Templates are cookie-cutter and never truly reflect your unique
              identity.
            </p>
          </>
        );
      case 3:
        return (
          <>
            <h1 className="font-semibold text-[28px] sm:text-[36px] md:text-[45px] leading-[120%] w-full text-left">
              CMS Platforms Sound Free, But Hidden Costs Pile Up...
            </h1>
            <p className="font-normal text-[20px] sm:text-[28px] md:text-[36px] leading-[140%] w-full text-left mt-4">
              Hosting fees, plugin subscriptions, upgrades—they add up fast.
            </p>
          </>
        );
      case 4:
        return (
          <>
            <h1 className="font-semibold text-[28px] sm:text-[36px] md:text-[45px] leading-[120%] w-full text-left">
              Time Is Money, And DIY Takes Too Long...
            </h1>
            <p className="font-normal text-[20px] sm:text-[28px] md:text-[36px] leading-[140%] w-full text-left mt-4">
              Building a site yourself isn&apos;t &quot;quick and easy&quot; when you re
              learning on the go.
            </p>
          </>
        );
      case 5:
        return (
          <>
            <h1 className="font-semibold text-[28px] sm:text-[36px] md:text-[45px] leading-[120%] w-full text-left">
              Your Vision Deserves More Than Drag-and-Drop...
            </h1>
            <p className="font-normal text-[20px] sm:text-[28px] md:text-[36px] leading-[140%] w-full text-left mt-4">
              Drag-and-drop editors can&apos;t keep up with creative or complex
              ideas.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  // Get the build now content based on selected number
  const getBuildNowContent = () => {
    switch (selectedNumber) {
      case 1:
        return "With BYOW, if you can dream it, we can build it. No limits. No compromises.";
      case 2:
        return "Every website we build is designed from scratch, tailored to showcase your brand's true personality.";
      case 3:
        return "BYOW delivers transparent, all-inclusive solutions, so you know exactly what you're paying for.";
      case 4:
        return "Leave it to us—we'll build, test, and perfect your site, so you can focus on running your business.";
      case 5:
        return "Our custom development brings your creative vision to life exactly as you imagined.";
      default:
        return "With BYOW, if you can dream it, we can build it. No limits. No compromises.";
    }
  };

  return (
    <div className="w-full h-auto pt-34">
      <div
        // main content
        className={`max-w-full w-full sm:w-[1328px] ${
          showBuildSection ? "h-auto sm:h-[850px]" : "h-auto sm:h-[518px]"
        } rounded-tr-[48px] rounded-br-[48px] pt-[40px] sm:pt-[96px] pr-[20px] sm:pr-[96px] pb-[40px] sm:pb-[96px] gap-6 sm:gap-49 pl-[20px] sm:pl-[200px] relative`}
        style={{
          background:
            "linear-gradient(127.68deg, rgba(129, 51, 241, 0.2) 28.21%, rgba(45, 40, 54, 0.2) 103.48%)",
          transition: "height 0.3s ease-in-out",
        }}
      >
        {/* content */}
        <div className="flex flex-col items-start relative z-10">
          {getContent()}
          <button
            className="bg-[#8133F1] flex items-center justify-center gap-2 text-[16px] sm:text-[18px] font-semibold text-white w-[180px] sm:w-[239px] h-[60px] sm:h-[70px] rounded-[36px] px-6 py-2 transition cursor-pointer mt-6 leading-[120%]"
            onClick={handleBuildNowClick}
          >
            {showBuildSection ? "SOLVED" : "SOLVE NOW"}
            {showBuildSection ? <ArrowCircleUpOutlinedIcon /> : <ArrowCircleDownOutlinedIcon />}
          </button>

          {/* New section that appears when SOLVE NOW is clicked */}
          {showBuildSection && (
            <div className="w-full max-w-[1032px] h-auto rounded-[32px] p-6 sm:p-[48px] bg-[#8133F1] mt-10 relative z-20">
              <div>
                <Image
                  src="/images/Group (1).png"
                  alt="arrow"
                  width={80}
                  height={20}
                  className="w-[60px] sm:w-[104.232px] h-auto"
                />
              </div>
              <p className="font-normal text-[18px] sm:text-[36px] leading-[140%] text-left mt-4 text-white break-words">
                {getBuildNowContent()}
              </p>
            </div>
          )}
        </div>

        {/* Gradient Background Image - positioned absolute but with fixed position */}
        <div className="absolute right-[-200px] sm:right-[-600px] top-0 w-[400px] sm:w-[900.01px] h-[250px] sm:h-[500px] mt-[100px] sm:mt-[306px] rounded-tl-[24px] rounded-bl-[24px] overflow-hidden z-0">
          <div className="absolute inset-0">
            <Image
              src="/images/gradient background.svg"
              alt="gradient background image"
              width={340}
              height={250}
              className="relative w-full mix-blend-screen opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Number Selectors */}
      <div className="flex flex-row flex-wrap gap-6 sm:gap-10 md:gap-12 lg:gap-20 px-4 sm:px-10 md:px-20 lg:pl-[200px] mt-10 sm:mt-12 md:mt-16 lg:mt-[75px] mb-10 sm:mb-12 md:mb-16 lg:mb-20">
        <div
          className={`w-[36px] h-[36px] font-light cursor-pointer text-center ${getNumberStyle(
            1
          )}`}
          onClick={() => handleNumberClick(1)}
        >
          01
        </div>
        <div
          className={`w-[36px] h-[36px] font-light cursor-pointer text-center ${getNumberStyle(
            2
          )}`}
          onClick={() => handleNumberClick(2)}
        >
          02
        </div>
        <div
          className={`w-[36px] h-[36px] font-light cursor-pointer text-center ${getNumberStyle(
            3
          )}`}
          onClick={() => handleNumberClick(3)}
        >
          03
        </div>
        <div
          className={`w-[36px] h-[36px] font-light cursor-pointer text-center ${getNumberStyle(
            4
          )}`}
          onClick={() => handleNumberClick(4)}
        >
          04
        </div>
        <div
          className={`w-[36px] h-[36px] font-light cursor-pointer text-center ${getNumberStyle(
            5
          )}`}
          onClick={() => handleNumberClick(5)}
        >
          05
        </div>
      </div>
    </div>
  );
};

export default SectionCard;