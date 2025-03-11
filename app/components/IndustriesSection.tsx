"use client";
import { NextPage } from "next";
import React from "react";
import IndustryBox from "./IndustryBox";

const IndustriesSection: NextPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="h-auto container-wrapper text-center max-w-7xl mx-auto">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-[120%] pb-4">
          Industries We Empower with Bespoke Websites
        </h1>
        <p className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto font-normal text-base sm:text-lg leading-[140%]">
          At BYOW, we believe every business deserves a website as unique as its purpose. No matter your field, we craft solutions that work for you. Here’s how we transform visions across industries:
        </p>
      </div>

      <div className="mt-6">
        <IndustryBox />
      </div>
    </div>
  );
};

export default IndustriesSection;