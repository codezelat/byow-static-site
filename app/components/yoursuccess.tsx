"use client";

import Image from 'next/image';
import { useState } from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import PopupPage from '../popup/popup-page';

export default function Yoursuccess() {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-[#0E0021] flex flex-col items-center justify-center text-center relative overflow-hidden py-6 px-4 md:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image 
          src="/images/BG Pattern 1.svg" 
          alt="bg pattern" 
          fill 
          className='w-full h-auto max-w-[869%] max-h-[869%] object-contain' 
        />
      </div>
      
      {/* Digital Handshake Image */}
      <div className="relative z-10 w-full max-w-[824px] mx-auto mb-6 px-4">
        <Image 
          src="/images/Hand 1.svg" 
          alt="Digital handshake" 
          width={824} 
          height={298} 
          priority 
          className="w-full h-auto"
        />
      </div>
      
      {/* Text Content */}
      <div className="relative z-10 text-center max-w-[800px] mx-auto px-4 mb-10">
        <h1 className="text-[#8133F1] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Your Success is Our Next Story.
        </h1>
        <p className="text-white text-sm sm:text-base mb-4 sm:mb-8 max-w-[600px] mx-auto">
          Whether you&apos;re redefining your brand, expanding your reach, or transforming your customer experience, BYOW is here to help you shine.
        </p>
        <p className="text-white text-sm sm:text-base mb-4 sm:mb-8">
          Ready to Start Your Success Story? Let&apos;s Build Something Amazing!
        </p>
        
        {/* Button */}
        <button 
          onClick={handleGetStartedClick}
          className="bg-[#8133F1] flex items-center justify-center gap-2   text-[18px] 3xl:text-[18px] 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[14px] 2xs:text-[14px] font-semibold text-white  sm:w-[189px]  sm:h-[50px] rounded-[36px] mx-auto transition hover:bg-[#6f23e0]"
        >
          GET STARTED
          <ArrowCircleRightOutlinedIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Popup */}
      {showPopup && <PopupPage onClose={handleClosePopup} />}
    </div>
  );
}
