"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  src: string;
  poster?: string;
}

export default function HeroVideo({ src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        // Autoplay might be prevented by browser settings
        console.warn("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
