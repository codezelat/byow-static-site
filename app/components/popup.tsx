"use client";

import React from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Facebook, LinkedIn, X, WhatsApp, YouTube, Instagram } from "@mui/icons-material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

interface PopupPageProps {
  onClose: () => void;
}

export default function PopupPage({ onClose }: PopupPageProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="fixed inset-0 bg-[#060116] bg-opacity-50 flex items-center justify-center z-50">
      <div 
        className="relative w-[1000px] h-[500px] rounded-[64px] border border-opacity-100 p-16 bg-[#060116]"
        style={{
          border: '1px solid',
          borderImage: 'linear-gradient(180deg, #8133F1 0%, #090909 100%)',
          borderImageSlice: 1,
        }}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white hover:text-[#8133F1] transition"
        >
          <CloseIcon />
        </button>

        <h2 className="text-3xl font-bold text-[#8133F1] text-center mb-2">
          Let&apos;s Talk About Your Project Today!
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Click Below For A Free Consultation And Customized Quote!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2 text-start">First Name*</label>
              <input 
                type="text" 
                name="firstName" 
                required
                className="w-full bg-[#18171A] text-white px-4 py-3 border border-transparent focus:border-[#8133F1] focus:outline-none rounded-[32px]"
                placeholder="Alan"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2 text-start">Last Name*</label>
              <input 
                type="text" 
                name="lastName" 
                required
                className="w-full bg-[#18171A] text-white px-4 py-3 rounded-[32px] border border-transparent focus:border-[#8133F1] focus:outline-none"
                placeholder="Aronian"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2 text-start">Business Name*</label>
            <input 
              type="text" 
              name="business" 
              required
              className="w-full bg-[#18171A] text-white px-4 py-3 rounded-[32px] border border-transparent focus:border-[#8133F1] focus:outline-none"
              placeholder="Aronian"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2 text-start">I am looking for...</label>
            <select
              name="service"
              required
              className="w-full bg-[#18171A] text-white px-4 py-3 rounded-[32px] border border-transparent focus:border-[#8133F1] focus:outline-none"
            >
              <option value="">Select a service</option>
              <option value="e-commerce">E-commerce web site</option>
              <option value="byow">BYOW Web Site</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2 text-start">Email*</label>
              <input 
                type="email" 
                name="email" 
                required
                className="w-full bg-[#18171A] text-white px-4 py-3 rounded-[32px] border border-transparent focus:border-[#8133F1] focus:outline-none"
                placeholder="alanaronian@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2 text-start">Contact Number*</label>
              <input 
                type="tel" 
                name="phone" 
                required
                className="w-full bg-[#18171A] text-white px-4 py-3 rounded-[32px] border border-transparent focus:border-[#8133F1] focus:outline-none"
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

        <div className="mt-6 flex flex-col items-start space-y-4 relative">
          <div className="flex items-center gap-4">
            <div className="bg-[#18171A] flex items-center w-[196px] h-[50px] rounded-[32px] gap-[10px] px-6 py-3 text-white">
              <div className="flex items-center gap-2">
                <Image src="/images/sms.png" alt="Email" width={20} height={20} />
                <span>info@byow.com</span>
              </div>
            </div>
            <div className="bg-[#18171A] flex items-center w-[196px] h-[50px] rounded-[32px] gap-[10px] px-6 py-3 text-white">
              <div className="flex items-center gap-2">
                <Image src="/images/call-calling.png" alt="Phone" width={20} height={20} />
                <span>+9411 234 8276</span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 flex gap-4 text-white bg-[#18171A] items-center w-[288px] h-[50px] rounded-[32px] px-6 py-3">
            <a href="https://www.facebook.com/byow" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            <a href="https://www.linkedin.com/company/byow" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
            <a href="https://www.x.com/byow" target="_blank" rel="noopener noreferrer"><X /></a>
            <a href="https://www.youtube.com/byow" target="_blank" rel="noopener noreferrer"><YouTube /></a>
            <a href="https://wa.me/94112348276" target="_blank" rel="noopener noreferrer"><WhatsApp /></a>
            <a href="https://www.instagram.com/byow" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
}