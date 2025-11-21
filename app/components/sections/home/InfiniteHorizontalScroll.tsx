"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function InfiniteHorizontalScroll() {
  // Brand logos data array
  const brands = [
    { id: 1, src: "/images/revlon-logo.svg", alt: "revlon" },
    { id: 2, src: "/images/tunein-logo.svg", alt: "tunein" },
    { id: 3, src: "/images/converse-logo.svg", alt: "converse" },
    { id: 4, src: "/images/obey-logo.svg", alt: "obey" },
    { id: 5, src: "/images/bose-logo.svg", alt: "bose" },
    { id: 6, src: "/images/honda-logo.svg", alt: "honda" },
    { id: 7, src: "/images/ray-ban-logo.svg", alt: "ray-ban" },
    { id: 8, src: "/images/prada-logo.svg", alt: "prada" },
    { id: 9, src: "/images/shoei.svg", alt: "shoei" },
    { id: 10, src: "/images/adidas-logo.svg", alt: "adidas" },
    { id: 11, src: "/images/porsche-logo.svg", alt: "porsche" },
    { id: 12, src: "/images/the-north-face-logo.svg", alt: "the-north-face" },
    { id: 13, src: "/images/ziggo-logo.svg", alt: "ziggo" },
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
                <div className="flex items-center justify-center px-4">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={100}
                    height={100}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity"
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
