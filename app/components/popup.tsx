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
        className="fixed inset-0 bg-transparent bg-opacity-50 z-40 backdrop-blur-lg"
        onClick={onClose}
      ></div>

      {/* Popup content */}
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        {/* Main popup container with gradient border */}
        <div className="relative w-[95%] md:w-[1291px] max-w-[1500px] h-[100%] md:h-[900px] max-h-[90vh] my-[103px] ">
          {/* Gradient border using pseudo element technique */}
          <div
            className="absolute inset-0 rounded-[64px]"
            style={{
              background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
            }}
          />

          {/* Inner content container - slightly smaller to create border effect */}
          <div className="absolute inset-[2px] bg-[#060116] rounded-[64px]  px-[64px] py-[64px]">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white hover:text-[#8133F1] transition"
            >
              <CloseIcon />
            </button>

            <div className="flex flex-col gap-[24px] pb-10">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center text-[#8133F1] leading-[120%]">
                Let’s Talk About Your Project Today!
              </h1>
              <p className="font-normal text-sm md:text-base text-center text-white leading-[140%]">
                Click Below for a Free Consultation and Customized Quote!
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 justify-center gap-[32px]"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2 text-start pl-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full bg-[#18171A] text-white px-4 py-3 border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none rounded-[64px]"
                    placeholder="Alan"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2 text-start pl-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full bg-[#18171A] text-white px-4 py-3 rounded-[64px] border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none"
                    placeholder="Aronian"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2 text-start pl-2">
                  Business Name*
                </label>
                <input
                  type="text"
                  name="business"
                  required
                  className="w-full bg-[#18171A] text-white px-4 py-3 rounded-[64px] border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none"
                  placeholder="Aronian"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2 text-start pl-2">
                  I am looking for...
                </label>
                <select
                  name="service"
                  required
                  className="w-full bg-[#18171A] text-white px-4 py-3 rounded-[64px] border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="e-commerce">E-commerce web site</option>
                  <option value="byow">BYOW Web Site</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2 text-start pl-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#18171A] text-white px-4 py-3 rounded-[64px] border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none"
                    placeholder="alanaronian@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2 text-start pl-2">
                    Contact Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-[#18171A] text-white px-4 py-3 rounded-[64px] border border-transparent focus:border-[#8133F1] hover:border-[#8133F1] focus:outline-none"
                    placeholder="0647 1 8826 828"
                  />
                </div>
              </div>

              <div className="flex justify-start mt-6">
                <button
                  type="submit"
                  className="bg-[#8133F1] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#6A22CC] transition duration-300"
                >
                  SUBMIT NOW <ArrowCircleRightOutlinedIcon />
                </button>
              </div>
            </form>

            <div className="mt-6 mb-10 flex flex-wrap items-start space-y-4 md:space-y-0 relative">
              <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                <div className="bg-[#18171A] flex items-center w-[196px] h-[50px] rounded-[64px] gap-[10px] px-6 py-3 text-white">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/sms.png"
                      alt="Email"
                      width={20}
                      height={20}
                    />
                    <span>info@byow.com</span>
                  </div>
                </div>
                <div className="bg-[#18171A] flex items-center w-[196px] h-[50px] rounded-[64px] gap-[10px] px-6 py-3 text-white">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/call-calling.png"
                      alt="Phone"
                      width={20}
                      height={20}
                    />
                    <span>+9411 234 8276</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-white bg-[#18171A] items-center w-[288px] h-[50px] rounded-[64px] px-6 py-3 md:absolute md:top-0 md:right-0">
                <a
                  href="https://www.facebook.com/byow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.linkedin.com/company/byow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </a>
                <a
                  href="https://www.x.com/byow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X />
                </a>
                <a
                  href="https://www.youtube.com/byow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTube />
                </a>
                <a
                  href="https://wa.me/94112348276"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsApp />
                </a>
                <a
                  href="https://www.instagram.com/byow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
