"use client";
import { NextPage } from "next";
import React from "react";
import IndustryBox from "./IndustryBox";

const IndustriesSection: NextPage = () => {
  return (
    <>
      <div className="container-wrapper">
        <h1 className="font-bold text-[48px] 3xl:text-[48px] 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[40px] sm:text-[32px] xs:text-[32px] 2xs:text-[32px] text-start md:text-center text-[#8133F1] leading-[120%] mb-10">
          Industries We Empower with Bespoke Websites
        </h1>
        <p className="text-start md:text-center px-0 md:px-10 max-w-[892px] md:mx-auto font-normal text-[16px] text-white leading-[140%] mb-20">
          At BYOW, we believe every business deserves a website as unique as its
          purpose. No matter your field, we craft solutions that work for you.
          Here s how we transform visions across industries:
        </p>
      </div>

      <div className="container-wrapper">
        <IndustryBox />
      </div>
    </>
  );
};

export default IndustriesSection;
