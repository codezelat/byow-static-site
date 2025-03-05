import Image from 'next/image';
import React from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export default function Yoursuccess() {
  return (
    <div className="bg-[#0E0021] min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden py-16">
      {/* Background elements positioned as absolute */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
    <Image 
        src="/images/BG Pattern 1.svg" 
        alt="bg pattern" 
        fill 
        className='w-1/2 h-1/2 relative'
        style={{ 
            objectFit: 'contain', 
            maxWidth: '869%', 
            maxHeight: '869%' 
        }} 
    />
</div>
      
      {/* Digital handshake image */}
      <div className="relative z-10 w-full max-w-[824px] mx-auto mb-6">
        <Image 
          src="/images/Hand 1.svg" 
          alt="Digital handshake" 
          width={824} 
          height={298} 
          priority
        />
      </div>
      
      {/* Text content */}
      <div className="relative z-10 text-center max-w-[800px] mx-auto px-4">
        <h1 className="text-[#8133F1] text-5xl font-bold mb-4">
          Your Success is Our Next Story.
        </h1>
        <p className="text-white text-sm mb-8 max-w-[600px] mx-auto">
          Whether youre redefining your brand, expanding your reach, or transforming your customer experience, BYOW is here to help you shine.
        </p>
        <p className="text-white text-sm mb-8">
          Ready to Start Your Success Story? Lets Build Something Amazing!
        </p>
        
        {/* Button */}
        <button className="bg-[#8133F1] flex items-center justify-center gap-2 text-[18px] font-semibold text-white w-[239px] h-[70px] rounded-[36px] mx-auto transition hover:bg-[#6f23e0]">
          GET STARTED
          <ArrowCircleRightOutlinedIcon />
        </button>
      </div>
    </div>
  );
}