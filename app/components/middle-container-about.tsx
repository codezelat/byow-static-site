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

  const firstParagraphWithBreak = paragraphs[0].text
    .replace("life online.", "life online.<br/> <br/>  ")

  return (
    <div className="container-wrapper mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
      
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        
        <div className="w-full md:w-1/3">
          <div className="p-[1.5px] rounded-3xl" style={{ 
            background: 'linear-gradient(180deg, #8133F1 0%, #090909 100%)'
          }}>
            <Image 
              src={mainImage.src} 
              alt={mainImage.alt} 
              width={mainImage.width} 
              height={mainImage.height}
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h1 className='mb-4 text-[#8133F1] font-bold text-2xl sm:text-3xl md:text-4xl text-left'>{title}</h1>
          <p className="paragraph text-left text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: firstParagraphWithBreak  }}></p>
        </div>
      </div>
      
      <p className="paragraph mt-6 text-left text-sm sm:text-base">
        {paragraphs[1].text}
      </p>
        
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="p-[1.5px] rounded-3xl m-2"
            style={{ 
              background: 'linear-gradient(180deg, #8133F1 0%, #090909 100%)'
            }}
          >
            <div className="relative w-full" style={{ height: '300px' }}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="rounded-3xl object-cover"
                sizes="(max-width: 600px) 40vw, (max-width: 600px) 30vw, 30vw"
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-left">
        <p className="text-sm sm:text-base">
          {paragraphs[2].text}
        </p>
        
        <div className="w-full max-w-[1728px] mx-auto mt-6 mb-6">
          <div className="p-[1.5px] rounded-3xl" style={{ 
            background: 'linear-gradient(180deg, #8133F1 0%, #090909 100%)'
          }}>
            <video className="w-full rounded-3xl" autoPlay loop muted playsInline>
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}