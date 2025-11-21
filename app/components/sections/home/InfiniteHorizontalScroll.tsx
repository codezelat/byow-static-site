"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function InfiniteHorizontalScroll() {
  // Brand logos data array
  const brands = [
    { id: 1, src: "/images/eq-logo.png", alt: "eq" },
    { id: 2, src: "/images/vc-logo.png", alt: "vc" },
    { id: 3, src: "/images/eb-logo.png", alt: "eb" },
    { id: 4, src: "/images/luxe-logo.png", alt: "luxe" },
    { id: 5, src: "/images/bookmepro-logo.png", alt: "bookmepro" },
    { id: 6, src: "/images/athwala-h.png", alt: "athwala" },
    { id: 7, src: "/images/skill-logo-a.png", alt: "skill" },
    { id: 8, src: "/images/ehakade-logo-a.png", alt: "ehakade" },
  ];

  return (
    <div className="text-white py-10 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-3 xs:px-4 sm:px-6">
        <div className="flex flex-col pb-6 sm:pb-10 gap-[16px] sm:gap-[24px] text-center">
          <h1 className="font-bold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-center text-[#8133F1] leading-[120%]">
            Trusted by Visionaries and Innovators
          </h1>
          <p className="text-[15px] leading-[140%] text-white/90 sm:text-[16px]">
            We’re proud to partner with forward-thinking businesses,
            entrepreneurs, and creatives who inspire us to push boundaries and
            deliver exceptional results
          </p>
        </div>

        {/* Swiper infinite scroll */}
        <div className="mt-4 sm:mt-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView="auto"
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={true}
            className="!overflow-visible"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id} className="!w-auto">
                <div className="flex items-center justify-center h-16 sm:h-20 w-32 sm:w-40">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={160}
                    height={80}
                    className="w-full h-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
