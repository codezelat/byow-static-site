"use client";

import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const painPoints = [
  { title: "Templates can't reflect your unique vision" },
  { title: "CMS tools promise freedom but hide limitations" },
  { title: "You shouldn't need to be a coder to realize ideas" },
  { title: "Updating your site shouldn't feel like a hassle" },
];

const PainPointsSection: FC = () => (
  <section className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#080013] via-[#020006] to-[#000]" />

    <Swiper
      direction="vertical"
      modules={[Mousewheel, Pagination]}
      mousewheel={{
        forceToAxis: true,
        releaseOnEdges: true,
        thresholdDelta: 15,
      }}
      pagination={{ clickable: true }}
      slidesPerView={1}
      className="h-full w-full"
    >
      <SwiperSlide className="!flex !h-full !w-full !items-center !justify-center px-6">
        <div className="text-center max-w-3xl mx-auto w-full">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#CEB0FA]">
            Frustrated with the process?
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[48px]">
            Scroll for a simpler solution.
          </h2>
          <p className="mt-3 text-sm text-white/70 sm:text-base">
            These are the blockers we hear every day. We designed BYOW to remove
            them so you can stay in flow while we build.
          </p>
        </div>
      </SwiperSlide>

      {painPoints.map((point) => (
        <SwiperSlide
          key={point.title}
          className="!flex !h-full !w-full !items-center !justify-center px-6"
        >
          <div className="text-center max-w-5xl mx-auto w-full">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Pain point
            </p>
            <h3 className="mt-4 bg-gradient-to-r from-white via-[#CEB0FA] to-white bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              {point.title}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default PainPointsSection;
