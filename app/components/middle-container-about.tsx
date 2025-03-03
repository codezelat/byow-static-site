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
  } = aboutDescription;

  // Create a modified version of the first paragraph with a line break
  const firstParagraphWithBreak = paragraphs[0].text.replace(
    "and goals.", 
    "and goals.<br/>"
  );

  return (
    <div className="container mx-auto px-4">
      {/* Image and paragraph in flex layout */}
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        {/* Left side - Image with gradient border */}
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
        
        {/* Right side - First paragraph */}
        <div className="md:w-2/3">
          <h1 className='mb-5 text-[#8133F1] font-bold text-3xl'>{title}</h1>
          <p className="paragraph mb" dangerouslySetInnerHTML={{ __html: firstParagraphWithBreak }}></p>
        </div>
      </div>
      
      <p className="paragraph mt-6">
        {paragraphs[1].text}
      </p>
      
      <div className="mt-6">
        <p>
          {paragraphs[2].text}
        </p>
        
        {/* Gallery Images with consistent width */}
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
      </div>
    </div>
  );
}