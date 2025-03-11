"use client";
import { NextPage } from "next";
import React from "react";
import Image from "next/image";

const CardSection: NextPage = () => {
  return (
    <div className="w-full h-auto container-wrapper px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-[20px] md:gap-[30px] lg:gap-[45px]">
        <div
          className="w-full sm:w-[320px] md:w-[380px] lg:w-[426.67px] h-auto border-[1px] rounded-[32px] flex flex-col p-6 sm:p-8 items-center text-center backdrop-blur-[4px] relative"
          style={{
            borderImage: "linear-gradient(180deg, #8133F1 0%, #090909 100%) 1",
          }}
        >
          <Image
            src="/images/cardSection1.png"
            alt="card section image 1"
            width={64}
            height={64}
            className="pb-2"
          />
          <h1 className="font-bold text-[18px] sm:text-[20px] leading-[140%] pb-2">
            Feeling stuck with cookie-cutter templates?
          </h1>
          <p className="font-normal text-[14px] sm:text-[16px] leading-[140%]">
            They don’t capture your brand’s soul—we can change that.
          </p>
        </div>
        <div
          className="w-full sm:w-[320px] md:w-[380px] lg:w-[426.67px] h-auto border-[1px] rounded-[32px] flex flex-col p-6 sm:p-8 items-center text-center backdrop-blur-[4px] relative"
          style={{
            borderImage: "linear-gradient(180deg, #8133F1 0%, #090909 100%) 1",
          }}
        >
          <Image
            src="/images/cardSection2.png"
            alt="card section image 2"
            width={64}
            height={64}
            className="pb-2"
          />
          <h1 className="font-bold text-[18px] sm:text-[20px] leading-[140%] pb-2">
            Frustrated by tools that limit your creativity?
          </h1>
          <p className="font-normal text-[14px] sm:text-[16px] leading-[140%]">
            If you can imagine it, we’ll bring it to life.
          </p>
        </div>
        <div
          className="w-full sm:w-[320px] md:w-[380px] lg:w-[426.67px] h-auto border-[1px] rounded-[32px] flex flex-col p-6 sm:p-8 items-center text-center backdrop-blur-[4px] relative"
          style={{
            borderImage: "linear-gradient(180deg, #8133F1 0%, #090909 100%) 1",
          }}
        >
          <Image
            src="/images/cardSection3.png"
            alt="card section image 3"
            width={64}
            height={64}
            className="pb-2"
          />
          <h1 className="font-bold text-[18px] sm:text-[20px] leading-[140%] pb-2">
            Wasting precious time on DIY platforms?
          </h1>
          <p className="font-normal text-[14px] sm:text-[16px] leading-[140%]">
            Focus on your business while we handle the rest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
