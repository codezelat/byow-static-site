"use client";
import { NextPage } from "next";
import React from "react";
import Image from "next/image";

const CardSection: NextPage = () => {
  return (
    <div className="w-full h-auto container-wrapper">
      <div className="flex w-full flex-raw gap-[45px]">
        <div
          className="w-[426.67px] h-[312px] border-[1px] rounded-[32px]  flex flex-col p-8 items-center  text-center backdrop-blur-[4px] relative"
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
          <h1 className="font-bold text-[20px] leading-[140%] pb-2 ">
            Feeling stuck with cookie-cutter templates?
          </h1>
          <p className="font-normal text-[16px] leading-[140%]">
            They don’t capture your brand’s soul—we can change that.
          </p>
        </div>
        <div
          className="w-[426.67px] h-[312px] border-[1px] rounded-[32px]  flex flex-col p-8 items-center  text-center backdrop-blur-[4px] relative"
          style={{
            borderImage: "linear-gradient(180deg, #8133F1 0%, #090909 100%) 1",
          }}
        >
          <Image
            src="/images/cardSection2.png"
            alt="card section image 1"
            width={64}
            height={64}
            className="pb-2"
          />
          <h1 className="font-bold text-[20px] leading-[140%] pb-2 ">
            Frustrated by tools that limit your creativity?
          </h1>
          <p className="font-normal text-[16px] leading-[140%]">
            If you can imagine it, we’ll bring it to life.
          </p>
        </div>
        <div
          className="w-[426.67px] h-[312px] border-[1px] rounded-[32px]  flex flex-col p-8 items-center  text-center backdrop-blur-[4px] relative"
          style={{
            borderImage: "linear-gradient(180deg, #8133F1 0%, #090909 100%) 1",
          }}
        >
          <Image
            src="/images/cardSection3.png"
            alt="card section image 1"
            width={64}
            height={64}
            className="pb-2"
          />
          <h1 className="font-bold text-[20px] leading-[140%] pb-2 ">
            Wasting precious time on DIY platforms?
          </h1>
          <p className="font-normal text-[16px] leading-[140%]">
            Focus on your business while we handle the rest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
