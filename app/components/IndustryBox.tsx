"use client";

import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
        "Transform your online store into a shopping destination that delights customers and drives sales. With user-friendly navigation, stunning product displays, and secure checkout systems, you can create a seamless shopping experience that turns casual browsers into loyal buyers. Stand out in a competitive market with a website that reflects your brand's uniqueness.",
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
        "Bring your flavors to life online with mouth-watering visuals, easy-to-navigate menus, and seamless booking systems. Whether you're a cozy café or a luxury hotel, we'll help you create an online experience that keeps customers coming back for more.",
    },
    {
      id: 4,
      name: "Creative & Media Agencies",
      icon: "/images/creativity.png",
      activeIcon: "/images/active-creativity.png",
      backgroundImage: "/images/Creative & Media Agencies.svg",
      title: "Creative & Media Agencies",
      description:
        "Showcase your bold ideas and creative work with vibrant, imaginative designs. Whether you're a design studio, marketing agency, or production house, we'll help you create a website that captivates audiences and attracts clients who value innovation.",
    },
    {
      id: 5,
      name: "Construction & Real Estate",
      icon: "/images/blueprint.png",
      activeIcon: "/images/active-blueprint.png",
      backgroundImage: "/images/Construction & Real Estate.svg",
      title: "Construction & Real Estate",
      description:
        "Showcase your projects and properties with clarity and confidence. From jaw-dropping visuals to detailed descriptions, we'll help you create a website that inspires trust and makes it easy for clients to explore your portfolio.",
    },
    {
      id: 6,
      name: "Education & Learning",
      icon: "/images/scholorship.png",
      activeIcon: "/images/active-education.png",
      backgroundImage: "/images/Education & Learning Platforms.svg",
      title: "Education & Learning",
      description:
        "Empower learners with intuitive, engaging websites that make education accessible and enjoyable. Whether you're a school, university, or online learning platform, we'll help you create a space that inspires curiosity and supports lifelong learning.",
    },
    {
      id: 7,
      name: "Health, Beauty & Wellness",
      icon: "/images/cardiogram.png",
      activeIcon: "/images/active-cardiogram.png",
      backgroundImage: "/images/Health, Beauty & Wellness.svg",
      title: "Health, Beauty & Wellness",
      description:
        "Convey trust, relaxation, and excellence with calming, inspiring designs tailored to clinics, salons, spas, and fitness studios. We'll help you create an online presence that reflects the care and quality you provide in person.",
    },
    {
      id: 8,
      name: "Custom Product",
      icon: "/images/Group.png",
      activeIcon: "/images/active-slider.png",
      backgroundImage: "/images/Custom Product.svg",
      title: "Custom Product",
      description:
        "Bring your unique vision to life with tailored solutions designed just for you. Whether it's a custom website, app, or digital tool, we'll work closely with you to create a product that perfectly aligns with your goals and exceeds expectations.",
    },
  ];

  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2; // Show 2 items per page on mobile
  const totalPages = Math.ceil(industries.length / itemsPerPage);

  // Track screen size for responsive changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (industry: typeof industries[0]) => {
    setActiveIndustry(industry);
    
    // Scroll to content on mobile/tablet after selection
    if (isMobile || isTablet) {
      const contentElement = document.getElementById('industry-content');
      if (contentElement) {
        // Add a small delay to allow state to update
        setTimeout(() => {
          contentElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  // Functions for mobile pagination navigation
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Get current industries to show based on pagination
  const getCurrentIndustries = () => {
    const start = currentPage * itemsPerPage;
    return industries.slice(start, start + itemsPerPage);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10">
      {/* Industry Grid/Table */}
      <div className="w-full lg:w-[300px] h-auto lg:h-[600px]">
        {/* Mobile Industry Grid with Chevron Navigation - For screens below 768px */}
        <div className="w-full md:hidden mb-10 sm:mb-8">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={goToPrevPage}
              aria-label="Previous industries"
              className="text-[#8133F1] h-10 w-10 flex items-center justify-center"
            >
              <ChevronLeftIcon fontSize="large" />
            </button>
            
            <div className="flex-1 grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 mx-2 xs:mx-1">
              {getCurrentIndustries().map((industry) => (
                <div
                  key={industry.id}
                  className={`w-full h-[100px] xs:h-[120px] sm:h-[130px] border border-1-white p-3 xs:p-4 sm:p-5 flex flex-col items-center justify-center cursor-pointer transition-colors duration-300 rounded-[10px] sm:rounded-[12px] 
                    ${activeIndustry.id === industry.id ? "bg-white" : "hover:bg-gray-600"}`}
                  onClick={() => handleCardClick(industry)}
                >
                  <div className="w-full flex flex-col items-center justify-center">
                    <Image
                      src={
                        activeIndustry.id === industry.id
                          ? industry.activeIcon
                          : industry.icon
                      }
                      alt={industry.name}
                      width={60}
                      height={40}
                      className="pb-3 w-[32px] xs:w-[40px] sm:w-[48px] h-auto"
                    />
                    <p
                      className={`font-bold text-[12px] xs:text-[14px] sm:text-[16px] leading-[130%] text-center ${
                        activeIndustry.id === industry.id ? "text-[#8133F1]" : ""
                      }`}
                    >
                      {industry.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={goToNextPage}
              aria-label="Next industries"
              className="text-[#8133F1] h-10 w-10 flex items-center justify-center"
            >
              <ChevronRightIcon fontSize="large" />
            </button>
          </div>
        </div>

        {/* For tablets - single row scroll (shown between 768px and 1280px) */}
        <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-4">
          {industries.slice(0, 8).map((industry) => (
            <div
              key={industry.id}
              className={`w-[calc(25%-12px)] h-[120px] xs:h-[140px] sm:h-[160px] border border-1-white p-2 xs:p-3 sm:p-4 flex flex-col items-center justify-center cursor-pointer transition-colors duration-300 rounded-[12px] 
                ${activeIndustry.id === industry.id ? "bg-white" : "hover:bg-gray-600"}`}
              onClick={() => handleCardClick(industry)}
            >
              <Image
                src={
                  activeIndustry.id === industry.id
                    ? industry.activeIcon
                    : industry.icon
                }
                alt={industry.name}
                width={32}
                height={32}
                className="pb-2 items-center w-[32px] xs:w-[36px] sm:w-[42px] h-auto"
              />
              <p
                className={`font-bold text-[12px] xs:text-[13px] sm:text-[14px] leading-[120%] text-center ${
                  activeIndustry.id === industry.id ? "text-[#8133F1]" : ""
                }`}
              >
                {industry.name}
              </p>
            </div>
          ))}
        </div>

        {/* For desktop - 2x4 grid */}
        <div className="hidden lg:flex flex-row">
          {/* Left Column */}
          <div>
            {industries.slice(0, 4).map((industry, index) => (
              <div
                key={industry.id}
                className={`w-[150px] h-[150px] border border-1-white p-4 flex flex-col items-center justify-center cursor-pointer transition-colors duration-300
                  ${activeIndustry.id === industry.id ? "bg-white" : "hover:bg-gray-600"}
                  ${index === 0 ? "rounded-tl-[16px]" : ""} 
                  ${index === 3 ? "rounded-bl-[16px]" : ""}`}
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
                  className="pb-2 items-center"
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
                  ${activeIndustry.id === industry.id ? "bg-white" : "hover:bg-gray-600"}
                  ${index === 0 ? "rounded-tr-[16px]" : ""} 
                  ${index === 3 ? "rounded-br-[16px]" : ""}`}
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
                  className="pb-2 items-center"
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
        id="industry-content"
        className="w-full h-[300px] xs:h-[450px] sm:h-[550px] md:h-[500px] lg:h-[605px] 2xs:h-[450px] rounded-[16px] flex flex-col items-left justify-center text-left px-4 xs:px-6 sm:px-10 md:px-16 lg:px-24 gap-4 sm:gap-6 md:gap-8 lg:gap-[48px] p-4 sm:p-6 md:p-8 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(129, 51, 241, 0.4) 0%, rgba(45, 40, 54, 0.4) 100%), url('${activeIndustry.backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className={`font-bold text-[48px] 3xl:text-[48px] 2xl:text-[48px] xl:text-[48px] lg:text-[40px] md:text-[40px] sm:text-[32px] xs:text-[32px] 2xs:text-[32px] leading-[120%] text-[#8133F1] mb-0 ${isMobile ? 'text-start' : ''}`}>
          {activeIndustry.title}
        </h1>
        <p className={`w-full max-w-[1104px] font-normal text-[24px] 3xl:text-[24px] 2xl:text-[24px] xl:text-[24px] lg:text-[18px] md:text-[18px] sm:text-[18px] xs:text-[16px] 2xs:text-[16px] leading-[140%] text-white h-auto mt-0 ${isMobile ? 'text-start' : ''}`}>
          {activeIndustry.description}
        </p>
      </div>
    </div>
  );
};

export default IndustryBox;