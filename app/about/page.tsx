import React from 'react';
import MiddleContainerAbout from '../components/middle-container-about';
import Yoursuccess from '../components/yoursuccess';

export default function AboutPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative z-10 w-full max-w-[1728px] mx-auto bg-transparent text-white px-4 sm:px-6 md:px-8 pt-20">
        <MiddleContainerAbout />  
      </div>
      <Yoursuccess />
    </div>
  );
}