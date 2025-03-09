"use client";

import { NextPage } from "next";
import React, { useState } from "react";
import Image from "next/image";

const IndustryBox: NextPage = () => {
  // Define industry data with all the necessary information
  const industries = [
    {
      id: 1,
      name: "Retail & E-Commerce",
      icon: "/images/shopping-bag (2).png",
      backgroundImage: "/images/Retail & E-commerce.svg",
      title: "Retail & E-commerce",
      description:
        "Transform your online store into a shopping destination that delights customers and drives sales. With user-friendly navigation, stunning product displays, and secure checkout systems, you can create a seamless shopping experience that turns casual browsers into loyal buyers. Stand out in a competitive market with a website that reflects your brand's uniqueness.",
    },
    {
      id: 2,
      name: "Corporate & Professional Services",
      icon: "/images/cooparateimg.png",
      backgroundImage: "/images/Corporate.svg",
      title: "Corporate & Professional Services",
      description:
        "Establish credibility and showcase your expertise with a professional website that reflects your business values. Create an online presence that helps clients understand your services, builds trust, and generates quality leads. With clear messaging and strategic design, your website becomes your most effective business development tool.",
    },
    {
      id: 3,
      name: "Travel & Hospitality",
      icon: "/images/Luggage.png",
      backgroundImage: "/images/Travel.svg",
      title: "Travel & Hospitality",
      description:
        "Inspire wanderlust and boost bookings with an immersive website that showcases your destinations, accommodations, or services. Create visual journeys that turn visitors into travelers, with easy booking systems and compelling content that highlights unique experiences. Your website becomes the first step in their adventure.",
    },
    {
      id: 4,
      name: "Creative & Media Agencies",
      icon: "/images/creativity.png",
      backgroundImage: "/images/Creative.svg",
      title: "Creative & Media Agencies",
      description:
        "Your website is your ultimate portfolio piece. Showcase your creativity and expertise with a design that demonstrates your capabilities before you even speak to potential clients. Create an engaging digital experience that reflects your agency's unique approach and attracts clients who value innovative thinking.",
    },
    {
      id: 5,
      name: "Construction & Real Estate",
      icon: "/images/blueprint.png",
      backgroundImage: "/images/Construction.svg",
      title: "Construction & Real Estate",
      description:
        "Showcase your projects and properties with high-impact imagery and intuitive navigation. Whether you're selling homes or promoting construction services, a well-designed website helps clients visualize possibilities and take the next step. Build trust through professional presentation of your portfolio and expertise.",
    },
    {
      id: 6,
      name: "Education & Learning",
      icon: "/images/scholorship.png",
      backgroundImage: "/images/Education.svg",
      title: "Education & Learning",
      description:
        "Create an engaging online learning environment that supports students, educators, and institutions. From course management to resource sharing, your educational website can enhance learning experiences and streamline administrative processes. Design interfaces that are accessible, intuitive, and conducive to knowledge sharing.",
    },
    {
      id: 7,
      name: "Health, Beauty & Wellness",
      icon: "/images/cardiogram.png",
      backgroundImage: "/images/Health.svg",
      title: "Health, Beauty & Wellness",
      description:
        "Promote wellbeing with a website that embodies the calming, rejuvenating experience clients can expect from your services. Create an online presence that educates visitors about your approach, builds trust, and simplifies appointment booking. Your website becomes a digital extension of the care and attention you provide.",
    },
    {
      id: 8,
      name: "Custom Product",
      icon: "/images/Group.png",
      backgroundImage: "/images/Custom.svg",
      title: "Custom Product",
      description:
        "Showcase your unique product offerings with a website tailored to your specific needs. Whether you're selling specialized goods or offering customized services, your website can highlight what makes your offerings special. Create an online experience that communicates your product's value and converts visitors into customers.",
    },
  ];

  // State to track the active industry
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  // Function to handle card click
  const handleCardClick = (industry: {
    id: number;
    name: string;
    icon: string;
    backgroundImage: string;
    title: string;
    description: string;
  }) => {
    setActiveIndustry(industry);
  };

  return (
    <div className="flex flex-row gap-10 px-28 py-12">
      {/* Industry Table  */}
      <div className="w-[300px] h-[600px]">
        <div className="flex flex-row">
          {/* Left Column */}
          <div className="">
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
                  src={industry.icon}
                  alt={industry.name}
                  width={42}
                  height={42}
                  className={`pb-2 items-center ${
                    activeIndustry.id === industry.id
                      ? "filter brightness-0 saturate-100 invert-[0.5] sepia-[1] hue-rotate-[230deg]"
                      : ""
                  }`}
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
                  src={industry.icon}
                  alt={industry.name}
                  width={42}
                  height={42}
                  className={`pb-2 items-center ${
                    activeIndustry.id === industry.id
                      ? "filter brightness-0 saturate-100 invert-[0.5] sepia-[1] hue-rotate-[230deg]"
                      : ""
                  }`}
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

      {/* Industry Content  */}
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
