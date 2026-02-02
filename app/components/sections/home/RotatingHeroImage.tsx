"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const RotatingHeroImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[360px] w-[360px] xs:h-[420px] xs:w-[420px] sm:h-[520px] sm:w-[520px] md:h-[700px] md:w-[700px] lg:h-[843px] lg:w-[843px]"
    >
      <Image
        src="/images/Long Dashed Circle.png"
        alt=""
        fill
        sizes="(max-width: 768px) 80vw, (max-width: 1280px) 60vw, 843px"
        priority
        fetchPriority="high"
        aria-hidden="true"
        className="object-contain opacity-80 motion-safe:animate-spin-counterclockwise"
        style={{ animationPlayState: isIntersecting ? "running" : "paused" }}
      />
    </div>
  );
};

export default RotatingHeroImage;
