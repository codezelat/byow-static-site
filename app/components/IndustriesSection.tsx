"use client";
import { NextPage } from "next";
import React from "react";
import IndustryBox from "./IndustryBox";

const IndustriesSection: NextPage = () => {
  return (
    <>
      <div className="flex flex-col mx-3 pb-10 gap-[24px]">
      <h1 className="font-bold text-[48px] 3xl:text-[48px] 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[40px] sm:text-[32px] xs:text-[32px] 2xs:text-[32px] text-center text-[#8133F1] leading-[120%]">
          Industries We Empower with Bespoke Websites
        </h1>
        <p className="max-w-[892px] mx-auto font-normal text-[16px] text-center text-white leading-[140%] px-10">
          At BYOW, we believe every business deserves a website as unique as its
          purpose. No matter your field, we craft solutions that work for you.
          Here’s how we transform visions across industries:
        </p>
      </div>

      <div className="mt-6">
        <IndustryBox />
      </div>
    </>
  );
};

export default IndustriesSection;
