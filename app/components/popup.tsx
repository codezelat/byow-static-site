"use client";

import React from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import {
  Facebook,
  LinkedIn,
  X,
  WhatsApp,
  YouTube,
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
      {/* Full screen overlay with higher z-index to cover all content */}
      <div
        className="fixed mt-10 inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-lg"
        onClick={onClose}
      ></div>

      {/* Popup content */}
      <div className="fixed mt-24 mx-5 inset-0 flex items-center justify-center z-50 p-2 2xs:p-3 sm:p-4">
        {/* Main popup container with gradient border */}
        <div className="relative w-full max-w-[1291px] h-[90vh] rounded-[32px] overflow-hidden">
          {/* Gradient border using pseudo element technique */}
          <div
            className="absolute inset-0 rounded-[32px] "
            style={{
              background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
            }}
          />

          {/* Inner content container - slightly smaller to create border effect */}
          <div className="absolute inset-[2px] bg-[#060116] rounded-[32px]  flex flex-col">
            {/* Scrollable content area */}
            <div className="overflow-y-auto scrollbar-thin   px-4 py-6 sm:px-8 sm:py-10 md:px-16 md:py-16">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-[#8133F1] transition z-10"
              >
                <CloseIcon className="w-6 h-6 2xs:w-8 2xs:h-8" />
              </button>

              <div className="flex flex-col gap-4 2xs:gap-6 md:gap-[24px] pb-6 md:pb-10 pt-10">
                <h1 className="font-bold text-2xl 2xs:text-3xl md:text-4xl lg:text-5xl text-center text-[#8133F1] leading-tight">
                  Let's Talk About Your Project Today!
                </h1>
                <p className="font-normal text-xs 2xs:text-sm md:text-base text-center text-white leading-relaxed">
                  Click Below for a Free Consultation and Customized Quote!
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 2xs:space-y-6 md:space-y-6"
              >
                <style jsx>{`
                  /* Chrome, Safari, Edge autofill styles */
                  input:-webkit-autofill,
                  input:-webkit-autofill:hover,
                  input:-webkit-autofill:focus,
                  input:-webkit-autofill:active,
                  select:-webkit-autofill,
                  select:-webkit-autofill:hover,
                  select:-webkit-autofill:focus,
                  select:-webkit-autofill:active {
                    -webkit-box-shadow: 0 0 0 30px #060116 inset !important;
                    -webkit-text-fill-color: white !important;
                    transition: background-color 5000s ease-in-out 0s;
                  }
                `}</style>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 2xs:gap-4">
                  <div>
                    <label className="block text-xs 2xs:text-sm text-gray-300 mb-1 2xs:mb-2 text-start pl-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full bg-[#18171A] text-white px-3 py-2 2xs:px-4 2xs:py-3 border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none rounded-full"
                      placeholder="Alan"
                    />
                  </div>
                  <div>
                    <label className="block text-xs 2xs:text-sm text-gray-300 mb-1 2xs:mb-2 text-start pl-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full bg-[#18171A] text-white px-3 py-2 2xs:px-4 2xs:py-3 rounded-full border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none"
                      placeholder="Aronian"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs 2xs:text-sm text-gray-300 mb-1 2xs:mb-2 text-start pl-2">
                    Business Name*
                  </label>
                  <input
                    type="text"
                    name="business"
                    required
                    className="w-full bg-[#18171A] text-white px-3 py-2 2xs:px-4 2xs:py-3 rounded-full border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none"
                    placeholder="Aronian"
                  />
                </div>

                <div>
                  <label className="block text-xs 2xs:text-sm text-gray-300 mb-1 2xs:mb-2 text-start pl-2">
                    I am looking for...
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full bg-[#18171A] text-white px-3 py-2 2xs:px-4 2xs:py-3 rounded-full border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="e-commerce">E-commerce web site</option>
                    <option value="byow">BYOW Web Site</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 2xs:gap-4">
                  <div>
                    <label className="block text-xs 2xs:text-sm text-gray-300 mb-1 2xs:mb-2 text-start pl-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-[#18171A] text-white px-3 py-2 2xs:px-4 2xs:py-3 rounded-full border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none"
                      placeholder="alanaronian@gmail.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs 2xs:text-sm text-gray-300 mb-1 2xs:mb-2 text-start pl-2">
                      Contact Number*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full bg-[#18171A] text-white px-3 py-2 2xs:px-4 2xs:py-3 rounded-full border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none"
                      placeholder="0647 1 8826 828"
                    />
                  </div>
                </div>

                <div className="flex justify-start mt-4 2xs:mt-6">
                  <button
                    type="submit"
                    className="bg-[#8133F1] text-white px-6 py-2 2xs:px-8 2xs:py-3 rounded-full flex items-center gap-2 hover:bg-[#6A22CC] transition duration-300 text-xs 2xs:text-sm"
                  >
                    SUBMIT NOW <ArrowCircleRightOutlinedIcon className="w-5 h-5" />
                  </button>
                </div>
              </form>

              <div className="mt-4 2xs:mt-6 mb-6 md:mb-10 flex flex-col 2xs:flex-row flex-wrap items-center justify-between space-y-3 2xs:space-y-0 gap-3 2xs:gap-4">
                <div className="flex flex-row 2xs:flex-col items-center gap-3 2xs:gap-4">
                  <div className="bg-[#18171A] flex items-center w-full 2xs:w-[180px] md:w-[196px] h-[40px] 2xs:h-[50px] rounded-full gap-2 px-4 py-2 text-white">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/sms.png"
                        alt="Email"
                        width={16}
                        height={16}
                        className="w-4 h-4 2xs:w-5 2xs:h-5"
                      />
                      <span className="text-xs 2xs:text-sm">info@byow.com</span>
                    </div>
                  </div>
                  <div className="bg-[#18171A] flex items-center w-full 2xs:w-[180px] md:w-[196px] h-[40px] 2xs:h-[50px] rounded-full gap-2 px-4 py-2 text-white">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/call-calling.png"
                        alt="Phone"
                        width={16}
                        height={16}
                        className="w-4 h-4 2xs:w-5 2xs:h-5"
                      />
                      <span className="text-xs 2xs:text-sm">+9411 234 8276</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 2xs:gap-4 text-white bg-[#18171A] items-center w-full 2xs:w-auto h-[40px] 2xs:h-[50px] rounded-full px-4 py-2 justify-center">
                  <a
                    href="https://www.facebook.com/byow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8133F1] transition"
                  >
                    <Facebook className="w-4 h-4 2xs:w-5 2xs:h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/byow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8133F1] transition"
                  >
                    <LinkedIn className="w-4 h-4 2xs:w-5 2xs:h-5" />
                  </a>
                  <a
                    href="https://www.x.com/byow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8133F1] transition"
                  >
                    <X className="w-4 h-4 2xs:w-5 2xs:h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/byow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8133F1] transition"
                  >
                    <YouTube className="w-4 h-4 2xs:w-5 2xs:h-5" />
                  </a>
                  <a
                    href="https://wa.me/94112348276"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8133F1] transition"
                  >
                    <WhatsApp className="w-4 h-4 2xs:w-5 2xs:h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/byow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8133F1] transition"
                  >
                    <Instagram className="w-4 h-4 2xs:w-5 2xs:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}