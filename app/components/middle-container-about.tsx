"use client";

import React from 'react';
import Image from 'next/image';
import aboutDescription from '../data/middlecontainer';

export default function MiddleContainerAbout() {
  const { 
    title, 
    mainImage, 
    paragraphs, 
    galleryImages, 
    videoSrc
  } = aboutDescription;

  const firstParagraphWithBreak = paragraphs[0].text.replace("life online.", "life online.<br/><br/>");

  return (
    <div className="container-wrapper mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center text-center">
      <div className="flex flex-col md:flex-row gap-6 mt-4 items-center text-center md:text-left">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="p-[1.5px] rounded-3xl w-full max-w-[400px]" style={{ 
            background: 'linear-gradient(180deg, #8133F1 0%, #090909 100%)'
          }}>
            <Image 
              src={mainImage.src} 
              alt={mainImage.alt} 
              width={mainImage.width} 
              height={mainImage.height}
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className='mb-4 text-[#8133F1] font-bold text-2xl sm:text-3xl md:text-4xl'>{title}</h1>
          <p className="paragraph text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: firstParagraphWithBreak }}></p>
        </div>
      </div>
      
      <p className="paragraph mt-6 text-sm sm:text-base max-w-[800px]">
        {paragraphs[1].text}
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 justify-center">
        {galleryImages.map((image, index) => (
          <div key={index} className="w-full flex justify-center">
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={image.width} 
              height={image.height} 
              className="rounded-3xl w-full h-auto object-cover max-w-[200px] sm:max-w-[300px]"
            />
          </div>      
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm sm:text-base max-w-[800px]">
          {paragraphs[2].text}
        </p>
        
        <div className="w-full max-w-[1728px] mx-auto mt-6 mb-6 flex justify-center">
          <video className="w-full max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] rounded-3xl" autoPlay loop muted playsInline>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
