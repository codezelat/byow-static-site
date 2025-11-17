"use client";

import React from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import {
  Facebook,
  LinkedIn,
  X,
  WhatsApp,
  Instagram,
} from "@mui/icons-material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

interface PopupPageProps {
  onClose: () => void;
}

export default function PopupPage({ onClose }: PopupPageProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[99999]"
        onClick={onClose}
      ></div>

      {/* Popup content - highest possible z-index */}
      <div className="fixed inset-0 flex items-center justify-center z-[100000] p-4 pointer-events-none">
        {/* Main popup container with gradient border */}
        <div
          className="relative w-full max-w-[1200px] max-h-[90vh] rounded-[32px] pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient border using pseudo element technique */}
          <div
            className="absolute inset-0 rounded-[32px]"
            style={{
              background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
            }}
          />

          {/* Inner content container - slightly smaller to create border effect */}
          <div className="relative m-[2px] bg-[#060116] rounded-[30px] max-h-[calc(90vh-4px)] overflow-hidden">
            {/* Scrollable content area */}
            <div
              className="overflow-y-auto max-h-[calc(90vh-4px)]"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#8133F1 #18171A",
              }}
            >
              <div className="px-4 py-6 xs:px-6 xs:py-8 sm:px-8 sm:py-10 md:px-12 lg:px-16">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 xs:top-4 xs:right-4 text-white hover:text-[#8133F1] hover:scale-110 active:scale-95 transition-all duration-300 z-10"
                >
                  <CloseIcon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
                </button>

                <div className="flex flex-col gap-3 xs:gap-4 sm:gap-6 pb-4 sm:pb-6 pt-1 xs:pt-2">
                  <h1 className="font-bold text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] text-center text-[#8133F1] leading-[120%] pr-8 xs:pr-10 sm:pr-0">
                    Let&apos;s Talk About Your Project Today!
                  </h1>
                  <p className="font-normal text-xs xs:text-sm md:text-base text-center text-white leading-relaxed">
                    Submit your requirement below and we will get in touch.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 2xs:gap-4">
                    <div>
                      <label className="block text-xs 2xs:text-sm text-gray-300 mb-1 2xs:mb-2 text-left pl-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full bg-[#18171A] text-white px-3 py-2 2xs:px-4 2xs:py-3 border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none rounded-full transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs 2xs:text-sm text-gray-300 mb-1 2xs:mb-2 text-left pl-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full bg-[#18171A] text-white px-3 py-2 2xs:px-4 2xs:py-3 rounded-full border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs 2xs:text-sm text-gray-300 mb-1 2xs:mb-2 text-left pl-2">
                      Business Name*
                    </label>
                    <input
                      type="text"
                      name="business"
                      required
                      className="w-full bg-[#18171A] text-white px-3 py-2 2xs:px-4 2xs:py-3 rounded-full border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none transition-all duration-300"
                      placeholder="Your company or business name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs 2xs:text-sm text-gray-300 mb-1 2xs:mb-2 text-left pl-2">
                      I am looking for...
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full bg-[#18171A] text-white px-3 py-2 2xs:px-4 2xs:py-3 rounded-full border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none transition-all duration-300 cursor-pointer appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                        backgroundPosition: "right 0.75rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.5em 1.5em",
                      }}
                    >
                      <option value="">Select a service</option>
                      <optgroup label="🎨 Design & Development">
                        <option value="custom-website">
                          Custom Website Design
                        </option>
                        <option value="web-development">
                          Website Development
                        </option>
                        <option value="ui-ux-design">UI/UX Design</option>
                      </optgroup>
                      <optgroup label="🛒 E-Commerce">
                        <option value="ecommerce-website">
                          E-Commerce Website
                        </option>
                        <option value="online-store">Online Store Setup</option>
                      </optgroup>
                      <optgroup label="🏢 Enterprise Solutions">
                        <option value="web-application">
                          Custom Web Application
                        </option>
                        <option value="enterprise-platform">
                          Enterprise Platform
                        </option>
                        <option value="api-integration">API Integration</option>
                      </optgroup>
                      <optgroup label="⚙️ Support & Optimization">
                        <option value="website-maintenance">
                          Website Maintenance
                        </option>
                        <option value="performance-optimization">
                          Performance Optimization
                        </option>
                        <option value="seo-optimization">SEO Services</option>
                      </optgroup>
                      <optgroup label="💡 Other">
                        <option value="consultation">Free Consultation</option>
                        <option value="other">Other Services</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4">
                    <div>
                      <label className="block text-xs xs:text-sm text-gray-300 mb-1 xs:mb-2 text-left pl-2">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-[#18171A] text-white px-3 py-2 xs:px-4 xs:py-2.5 sm:py-3 rounded-full border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none transition-all duration-300 text-sm"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs xs:text-sm text-gray-300 mb-1 xs:mb-2 text-left pl-2">
                        Contact Number*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        pattern="[+]?[0-9\s\-\(\)]{7,20}"
                        title="Please enter a valid phone number (e.g., +1 555-123-4567, +44 20 1234 5678, +94 77 123 4567)"
                        className="w-full bg-[#18171A] text-white px-3 py-2 xs:px-4 xs:py-2.5 sm:py-3 rounded-full border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none transition-all duration-300 text-sm"
                        placeholder="+94 77 123 4567 (LK/UK/US/Any country)"
                      />
                    </div>
                  </div>

                  <div className="flex justify-start mt-3 xs:mt-4 sm:mt-6">
                    <button
                      type="submit"
                      className="bg-[#8133F1] text-white px-5 py-2 xs:px-6 xs:py-2.5 sm:px-8 sm:py-3 rounded-full flex items-center gap-2 hover:bg-[#9d5bff] active:scale-95 transition-all duration-300 text-xs xs:text-sm font-medium"
                    >
                      SUBMIT NOW{" "}
                      <ArrowCircleRightOutlinedIcon className="w-4 h-4 xs:w-5 xs:h-5" />
                    </button>
                  </div>
                </form>

                <div className="mt-3 xs:mt-4 sm:mt-6 mb-4 xs:mb-6 md:mb-8 flex flex-col xs:flex-row flex-wrap items-center justify-between space-y-3 xs:space-y-0 gap-3 xs:gap-4">
                  <div className="flex flex-col sm:flex-row items-center gap-3 xs:gap-4 w-full xs:w-auto">
                    <div className="bg-[#18171A] flex items-center w-full xs:w-auto sm:w-[180px] md:w-[196px] h-[40px] xs:h-[44px] sm:h-[50px] rounded-full gap-2 px-3 xs:px-4 py-2 text-white">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/images/sms.png"
                          alt="Email"
                          width={16}
                          height={16}
                          className="w-4 h-4 xs:w-5 xs:h-5"
                        />
                        <span className="text-xs xs:text-sm">info@byow.lk</span>
                      </div>
                    </div>
                    <div className="bg-[#18171A] flex items-center w-full xs:w-auto sm:w-[180px] md:w-[196px] h-[40px] xs:h-[44px] sm:h-[50px] rounded-full gap-2 px-3 xs:px-4 py-2 text-white">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/images/call-calling.png"
                          alt="Phone"
                          width={16}
                          height={16}
                          className="w-4 h-4 xs:w-5 xs:h-5"
                        />
                        <span className="text-xs xs:text-sm">+94727333577</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 xs:gap-4 text-white bg-[#18171A] items-center w-full xs:w-auto h-[40px] xs:h-[44px] sm:h-[50px] rounded-full px-3 xs:px-4 py-2 justify-center">
                    <a
                      href="https://www.facebook.com/byow.lk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#8133F1] hover:scale-110 transition-all duration-300"
                    >
                      <Facebook className="w-4 h-4 xs:w-5 xs:h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/byow.lk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#8133F1] hover:scale-110 transition-all duration-300"
                    >
                      <Instagram className="w-4 h-4 xs:w-5 xs:h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/showcase/byowlk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#8133F1] hover:scale-110 transition-all duration-300"
                    >
                      <LinkedIn className="w-4 h-4 xs:w-5 xs:h-5" />
                    </a>
                    <a
                      href="https://x.com/byowlk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#8133F1] hover:scale-110 transition-all duration-300"
                    >
                      <X className="w-4 h-4 xs:w-5 xs:h-5" />
                    </a>
                    <a
                      href="https://wa.me/94727333577"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#8133F1] hover:scale-110 transition-all duration-300"
                    >
                      <WhatsApp className="w-4 h-4 xs:w-5 xs:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
