'use client';

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

  const firstParagraphWithBreak = paragraphs[0].text.replace(
    "and goals.", 
    "and goals.<br/>"
  );

  return (
    <div className="container-wrapper mx-auto px-4">
   
      <div className="flex flex-col md:flex-row gap-8 mt-4">
       
        <div className="md:w-1/3">
          <div className="p-[1.5px] rounded-3xl" style={{ 
            background: 'linear-gradient(180deg, #8133F1 0%, #090909 100%)'
          }}>
            <Image 
              src={mainImage.src} 
              alt={mainImage.alt} 
              width={mainImage.width} 
              height={mainImage.height}
              className="w-full rounded-3xl"
            />
          </div>
        </div>

        <div className="md:w-2/3">
          <h1 className='mb-5 text-[#8133F1] font-bold text-3xl text-left'>{title}</h1>
          <p className="paragraph text-left mb" dangerouslySetInnerHTML={{ __html: firstParagraphWithBreak }}></p>
        </div>
      </div>
      
      <p className="paragraph mt-6 text-left">
        {paragraphs[1].text}
      </p>
        
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="flex-1">
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={image.width} 
                height={image.height} 
                className="rounded-3xl w-full h-full object-cover"
              />
            </div>      
          ))}
        </div>
      
      <div className="mt-6 text-left">
        <p>
          {paragraphs[2].text}
        </p>
        
        <div className="w-full max-w-[1728px] mx-auto mt-6 mb-6">
          <video className="w-full rounded-3xl" autoPlay loop muted playsInline>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

    </div>
  );
}