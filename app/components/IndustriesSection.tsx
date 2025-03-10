"use client";
import { NextPage } from "next";
import React from "react";
import IndustryBox from "./IndustryBox";

const IndustriesSection: NextPage = () => {
  return (
    <div>
      <div className=" h-auto container-wrapper">
        <h1 className="font-semibold text-[48px] leading-[120%]  pb-4">
          Industries We Empower with Bespoke Websites
        </h1>
        <p className="w-[892px] font-normal text-[16px] leading-[140%] text-center mx-auto">
          At BYOW, we believe every business deserves a website as unique as its
          purpose. No matter your field, we craft solutions that work for you.
          Here’s how we transform visions across industries:
        </p>
      </div>

      <div className="">
        <IndustryBox />
      </div>
    </div>
  );
};

export default IndustriesSection;
