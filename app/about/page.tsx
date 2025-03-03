
import React from 'react';
import MiddleContainerAbout from '../components/middle-container-about';
import aboutDescription from '../data/middlecontainer';

export default function AboutPage() {
  const { videoSrc } = aboutDescription;
  return (
    <div className="w-full overflow-hidden"> {/* Prevents horizontal scroll */}      
      {/* Middle Container (About Content) - Positioned on top of the video */}
      <div className="relative z-10 w-full max-w-[1728px] mx-auto bg-transparent text-white">
        <MiddleContainerAbout />
      </div>

      {/* Bottom Container (Video) */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full bg-[#040010]">
        <div className="w-full max-w-[1728px] mx-auto p-4 md:p-20">
          <video className="w-full rounded-3xl" autoPlay loop muted playsInline>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

  
     
    </div>
  );
}