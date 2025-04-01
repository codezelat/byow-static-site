"use client";

import Image from "next/image";

const mainImage = {
  src: "/images/byow.png",
  alt: "BYOW",
  width: 542,
  height: 375,
};

const galleryImages = [
  {
    src: "/images/about01.jpg",
    alt: "BYOW Image 1",
    width: 300,
    height: 350,
  },
  {
    src: "/images/about02.jpg",
    alt: "BYOW Image 2",
    width: 300,
    height: 350,
  },
  {
    src: "/images/about.jpg",
    alt: "BYOW Image 3",
    width: 300,
    height: 350,
  },
];

const videoSrc = "/videos/aboutvedio.mp4";

export default function MiddleContainerAbout() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-white">
      {/* First Section - Main Image & Intro */}
      <div className="flex flex-col lg:flex-row gap-6 space-y-6 lg:space-y-0">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div
            className="w-full lg:h-80 max-w-md lg:max-w-none p-[1px] rounded-[16px] "
            style={{
              background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
            }}
          >
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              width={mainImage.width}
              height={mainImage.height}
              className="w-full h-auto rounded-[16px] object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-2/3 space-y-4 text-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-400">About BYOW</h2>
          <div className="space-y-4">
            <p className="text-sm sm:text-base">
              At BYOW, we believe that the digital world is more than just a space—it&apos;s a canvas for creativity, connection, and growth. Our journey began with a simple yet powerful idea: to help entrepreneurs, businesses, and individuals bring their visions to life online. With a passion for design and technology, we set out to make website building an effortless and enjoyable experience for everyone.
            </p>
            <p className="text-sm sm:text-base">
              Your website is often the first impression you make on the world. It&apos;s where your story unfolds, your products find their audience, and your brand connects with the people who matter most. That&apos;s why we focus on creating seamless, visually stunning, and functional websites tailored to your needs.
            </p>
            <p className="text-sm sm:text-base">
              What sets BYOW apart is our commitment to collaboration and innovation. We don&apos;t just build websites—we build partnerships. Our process begins with listening, understanding your goals, and transforming your vision into a powerful digital presence.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section - Extended Content */}
      <div className="mt-8 sm:mt-10 space-y-4 text-start">
        <div className="space-y-4">
          <p className="text-sm sm:text-base">
            But our work doesn&apos;t stop at launch. We believe that a great website is a living, evolving entity that grows with your business. That&apos;s why we offer ongoing support, updates, and maintenance to keep your site fresh, secure, and ahead of the curve. We stay up to date with the latest industry trends to ensure your website remains competitive and engaging.
          </p>
          <p className="text-sm sm:text-base">
            BYOW was founded with a mission to empower individuals and businesses to thrive in the digital age. We recognized that many entrepreneurs and creatives had incredible ideas but lacked the tools and expertise to bring them to life online. Our goal is to bridge that gap and make digital success accessible to all.
          </p>
          <p className="text-sm sm:text-base">
            Over the years, we&apos;ve had the privilege of working with a diverse range of clients—from small startups and solo entrepreneurs to established businesses and educational institutions. Each project is a unique journey, and we take pride in crafting tailored solutions that align with our clients&apos; goals.
          </p>
        </div>
      </div>

  
{/* Third Section - Gallery */}
<div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 mt-10">
    {galleryImages.map((image, index) => (
      <div
        key={index}
        className="p-[1.5px] rounded-[16px] border-[1.5px] border-gray-700 mb-4 sm:mb-0"
        style={{
          background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
        }}
      >
        <div className="relative w-full" style={{ height: "300px" }}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="rounded-[16px] object-cover"
          />
        </div>
      </div>
    ))}
  </div>
      {/* Fourth Section - Closing Message */}
      <div className="mt-8 sm:mt-10 space-y-4 text-start">
        <p className=" text-sm sm:text-base">
          What sets BYOW apart is our commitment to collaboration and innovation. We don&apos;t just build websites—we build partnerships. We work closely with our clients to ensure that their ideas are fully realized and translated into a dynamic online presence.
        </p>
        <p className="text-sm sm:text-base">
          We combine modern design trends with cutting-edge technology to ensure your site is not only beautiful but also fast, responsive, and optimized for success. Whether you&apos;re launching a new venture or revamping an existing brand, BYOW is here to make your digital vision a reality.
        </p>
      </div>

      {/* Fifth Section - Video */}
      <div className="w-full max-w-5xl mx-auto mt-8 sm:mt-10">
        <div
          className="p-[1.5px] rounded-[16px] border-[1.5px] border-gray-700"
          style={{
            background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
          }}
        >
          <video 
            className="w-full rounded-[16px]" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}