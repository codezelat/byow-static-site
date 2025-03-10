"use client";
import { NextPage } from "next";
import React, { useState } from "react";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
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
      ? "text-[64px] text-[#8133F1] transform scale-110"
      : "text-[32px] text-[#5B546E] pt-5";
  };

  // Content sections based on selected number
  const getContent = () => {
    switch (selectedNumber) {
      case 1:
        return (
          <>
            <h1 className="font-semibold text-[45px] leading-[120%] w-full text-left">
              DIY Platforms Seem Easy, Until They re Not...
            </h1>
            <p className="font-normal text-[36px] leading-[140%] w-full text-left mt-4">
              They promise customization, but when you want &quot;that one feature,&quot;
              it s a hard no.
            </p>
          </>
        );
      case 2:
        return (
          <>
            <h1 className="font-semibold text-[45px] leading-[120%] w-full text-left">
              Templates Are Not Your Brand...
            </h1>
            <p className="font-normal text-[36px] leading-[140%] w-full text-left mt-4">
              Templates are cookie-cutter and never truly reflect your unique
              identity.
            </p>
          </>
        );
      case 3:
        return (
          <>
            <h1 className="font-semibold text-[45px] leading-[120%] w-full text-left">
              CMS Platforms Sound Free, But Hidden Costs Pile Up...
            </h1>
            <p className="font-normal text-[36px] leading-[140%] w-full text-left mt-4">
              Hosting fees, plugin subscriptions, upgrades—they add up fast.
            </p>
          </>
        );
      case 4:
        return (
          <>
            <h1 className="font-semibold text-[45px] leading-[120%] w-full text-left">
              Time Is Money, And DIY Takes Too Long...
            </h1>
            <p className="font-normal text-[36px] leading-[140%] w-full text-left mt-4">
              Building a site yourself isn&apos;t &quot;quick and easy&quot; when you re
              learning on the go.
            </p>
          </>
        );
      case 5:
        return (
          <>
            <h1 className="font-semibold text-[45px] leading-[120%] w-full text-left">
              Your Vision Deserves More Than Drag-and-Drop...
            </h1>
            <p className="font-normal text-[36px] leading-[140%] w-full text-left mt-4">
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
        return "Every website we build is designed from scratch, tailored to showcase your brand’s true personality.";
      case 3:
        return "BYOW delivers transparent, all-inclusive solutions, so you know exactly what you’re paying for.";
      case 4:
        return "Leave it to us—we'll build, test, and perfect your site, so you can focus on running your business.";
      case 5:
        return "Our custom development brings your creative vision to life exactly as you imagined.";
      default:
        return "With BYOW, if you can dream it, we can build it. No limits. No compromises.";
    }
  };

  return (
    <div className="w-[1728px] h-auto pt-33">
      <div
        className="w-[1328px] h-[518px] rounded-tr-[48px] rounded-br-[48px] pt-[96px] pr-[96px] pb-[96px] gap-49 pl-[200px]  "
        style={{
          background:
            "linear-gradient(127.68deg, rgba(129, 51, 241, 0.2) 28.21%, rgba(45, 40, 54, 0.2) 103.48%)",
        }}
      >
        {/* content */}
        <div className="flex flex-col items-start">
          {getContent()}
          <button
            className="bg-[#8133F1] flex items-center justify-center gap-2 text-[18px] font-semibold text-white w-[239px] h-[70px] rounded-[36px] px-6 py-2 transition cursor-pointer mt-6 leadeing-[120%]"
            onClick={handleBuildNowClick} // Add the click handler
          >
            SOLVE NOW
            <ArrowCircleDownOutlinedIcon />
          </button>
          {/* New section that appears when BUILD NOW is clicked */}
          {showBuildSection && (
            <div className="w-[1032px] h-[300.25px] rounded-[32px] p-[48px] gap-[10px] bg-[#8133F1] mt-10">
              <div>
                <Image
                  src="/images/Vector.svg"
                  alt="quotation mark"
                  width={104.23}
                  height={29.27}
                  className="relative w-[104.232px] h-[29.27px]"
                />
              </div>
              <p className="font-normal text-[36px] leading-[140%] w-full text-left mt-4 text-white">
                {getBuildNowContent()}
              </p>
            </div>
          )}
        </div>
        <div className="relative ml-[980px] w-[679.89px]  h-[500px] rounded-tl-[24px] rounded-bl-[24px] overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 ">
            {/* Image */}
            <Image
              src="/images/Section Card Pattern with Gradient.svg"
              alt="quotation mark"
              width={680}
              height={500}
              className="relative w-full "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[423px] h-[77px] gap-20 pl-[200px] mt-100 mb-20">
        <div
          className={`w-[36px] h-[36px] font-light cursor-pointer ${getNumberStyle(
            1
          )}`}
          onClick={() => handleNumberClick(1)}
        >
          01
        </div>
        <div
          className={`w-[36px] h-[36px] font-light cursor-pointer ${getNumberStyle(
            2
          )}`}
          onClick={() => handleNumberClick(2)}
        >
          02
        </div>
        <div
          className={`w-[36px] h-[36px] font-light cursor-pointer ${getNumberStyle(
            3
          )}`}
          onClick={() => handleNumberClick(3)}
        >
          03
        </div>
        <div
          className={`w-[36px] h-[36px] font-light cursor-pointer ${getNumberStyle(
            4
          )}`}
          onClick={() => handleNumberClick(4)}
        >
          04
        </div>
        <div
          className={`w-[36px] h-[36px] font-light cursor-pointer ${getNumberStyle(
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
