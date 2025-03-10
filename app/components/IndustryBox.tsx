"use client";

import { NextPage } from "next";
import React, { useState } from "react";
import Image from "next/image";

const IndustryBox: NextPage = () => {
  // Define industry data with necessary information + activeIcon
  const industries = [
    {
      id: 1,
      name: "Retail & E-Commerce",
      icon: "/images/shopping-bag (2).png",
      activeIcon: "/images/active-shopping-bag.png", 
      backgroundImage: "/images/Retail & E-commerce.svg",
      title: "Retail & E-commerce",
      description:
        "Transform your online store into a shopping destination that delights customers and drives sales. With user-friendly navigation, stunning product displays, and secure checkout systems, you can create a seamless shopping experience that turns casual browsers into loyal buyers. Stand out in a competitive market with a website that reflects your brand’s uniqueness.",
    },
    {
      id: 2,
      name: "Corporate & Professional Services",
      icon: "/images/cooparateimg.png",
      activeIcon: "/images/active-corporate.png",
      backgroundImage: "/images/Professional Services.svg",
      title: "Corporate & Professional Services",
      description:
        "Transform your business with sleek, professional designs that build trust and drive results. From consultancies to financial firms, we create websites that reflect your expertise and help you stand out in a competitive market.",
    },
    {
      id: 3,
      name: "Travel & Hospitality",
      icon: "/images/Luggage.png",
      activeIcon: "/images/active-luggage.png",
      backgroundImage: "/images/Travel & Hospitality.svg",
      title: "Travel & Hospitality",
      description:
        "Bring your flavors to life online with mouth-watering visuals, easy-to-navigate menus, and seamless booking systems. Whether you’re a cozy café or a luxury hotel, we’ll help you create an online experience that keeps customers coming back for more.",
    },
    {
      id: 4,
      name: "Creative & Media Agencies",
      icon: "/images/creativity.png",
      activeIcon: "/images/active-creativity.png",
      backgroundImage: "/images/Creative & Media Agencies.svg",
      title: "Creative & Media Agencies",
      description:
        "Showcase your bold ideas and creative work with vibrant, imaginative designs. Whether you’re a design studio, marketing agency, or production house, we’ll help you create a website that captivates audiences and attracts clients who value innovation.",
    },
    {
      id: 5,
      name: "Construction & Real Estate",
      icon: "/images/blueprint.png",
      activeIcon: "/images/active-blueprint.png",
      backgroundImage: "/images/Construction & Real Estate.svg",
      title: "Construction & Real Estate",
      description:
        "Showcase your projects and properties with clarity and confidence. From jaw-dropping visuals to detailed descriptions, we’ll help you create a website that inspires trust and makes it easy for clients to explore your portfolio.",
    },
    {
      id: 6,
      name: "Education & Learning",
      icon: "/images/scholorship.png",
      activeIcon: "/images/active-education.png",
      backgroundImage: "/images/Education & Learning Platforms.svg",
      title: "Education & Learning",
      description:
        "Empower learners with intuitive, engaging websites that make education accessible and enjoyable. Whether you’re a school, university, or online learning platform, we’ll help you create a space that inspires curiosity and supports lifelong learning.",
    },
    {
      id: 7,
      name: "Health, Beauty & Wellness",
      icon: "/images/cardiogram.png",
      activeIcon: "/images/active-cardiogram.png",
      backgroundImage: "/images/Health, Beauty & Wellness.svg",
      title: "Health, Beauty & Wellness",
      description:
        "Convey trust, relaxation, and excellence with calming, inspiring designs tailored to clinics, salons, spas, and fitness studios. We’ll help you create an online presence that reflects the care and quality you provide in person.",
    },
    {
      id: 8,
      name: "Custom Product",
      icon: "/images/Group.png",
      activeIcon: "/images/active-slider.png",
      backgroundImage: "/images/Custom Product.svg",
      title: "Custom Product",
      description:
        "Bring your unique vision to life with tailored solutions designed just for you. Whether it’s a custom website, app, or digital tool, we’ll work closely with you to create a product that perfectly aligns with your goals and exceeds expectations.",
    },
  ];

  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  const handleCardClick = (industry: typeof industries[0]) => {
    setActiveIndustry(industry);
  };

  return (
    <div className="flex flex-row gap-10 px-28 py-12">
      {/* Industry Table */}
      <div className="w-[300px] h-[600px]">
        <div className="flex flex-row">
          {/* Left Column */}
          <div>
            {industries.slice(0, 4).map((industry, index) => (
              <div
                key={industry.id}
                className={`w-[150px] h-[150px] border border-1-white p-4 flex flex-col items-center justify-center cursor-pointer transition-colors duration-300
                  ${index === 0 ? "rounded-tl-[16px]" : ""} 
                  ${index === 3 ? "rounded-bl-[16px]" : ""}
                  ${activeIndustry.id === industry.id ? "bg-white" : ""}`}
                onClick={() => handleCardClick(industry)}
              >
                <Image
                  src={
                    activeIndustry.id === industry.id
                      ? industry.activeIcon
                      : industry.icon
                  }
                  alt={industry.name}
                  width={42}
                  height={42}
                  className={`pb-2 items-center`}
                />
                <p
                  className={`font-bold text-[14px] leading-[120%] text-center ${
                    activeIndustry.id === industry.id ? "text-[#8133F1]" : ""
                  }`}
                >
                  {industry.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {industries.slice(4, 8).map((industry, index) => (
              <div
                key={industry.id}
                className={`w-[150px] h-[150px] border border-1-white p-4 flex flex-col items-center justify-center cursor-pointer transition-colors duration-300
                  ${index === 0 ? "rounded-tr-[16px]" : ""} 
                  ${index === 3 ? "rounded-br-[16px]" : ""}
                  ${activeIndustry.id === industry.id ? "bg-white" : ""}`}
                onClick={() => handleCardClick(industry)}
              >
                <Image
                  src={
                    activeIndustry.id === industry.id
                      ? industry.activeIcon
                      : industry.icon
                  }
                  alt={industry.name}
                  width={42}
                  height={42}
                  className={`pb-2 items-center`}
                />
                <p
                  className={`font-bold text-[14px] leading-[120%] text-center ${
                    activeIndustry.id === industry.id ? "text-[#8133F1]" : ""
                  }`}
                >
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Content */}
      <div
        className="w-full h-[600px] rounded-[16px] flex flex-col items-left justify-center text-left px-24 gap-[48px] p-8 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(129, 51, 241, 0.4) 0%, rgba(45, 40, 54, 0.4) 100%), url('${activeIndustry.backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="font-bold text-[48px] leading-[120%] text-white">
          {activeIndustry.title}
        </h1>
        <p className="w-full max-w-[1104px] font-normal text-[24px] leading-[140%] text-white">
          {activeIndustry.description}
        </p>
      </div>
    </div>
  );
};

export default IndustryBox;
