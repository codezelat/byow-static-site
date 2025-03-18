"use client";
import { NextPage } from "next";
import React from "react";
import IndustryBox from "./IndustryBox";

const IndustriesSection: NextPage = () => {
  return (
    <>
      <div className="flex flex-col  pb-10 gap-[24px]">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center text-[#8133F1] leading-[120%]">
          Industries We Empower with Bespoke Websites
        </h1>
        <p className="max-w-[892px] mx-auto font-normal text-sm md:text-base text-center text-white leading-[140%]">
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
