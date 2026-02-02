"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  src: string;
  poster?: string;
}

export default function HeroVideo({ src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Separate effect for Intersection Observer
  useEffect(() => {
    const video = videoRef.current;
    if (!video || shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoad]);

  // Separate effect for video loading
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      video.play().catch((error) => {
        console.warn("Video autoplay failed:", error);
      });
    };

    const handleError = () => {
      setHasError(true);
      console.error("Video failed to load");
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, [shouldLoad]);

  return (
    <>
      {/* Poster image fallback - always visible until video loads */}
      {(!isLoaded || hasError) && poster && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded && !hasError ? "opacity-100" : "opacity-0"
        }`}
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
      >
        {shouldLoad && <source src={src} type="video/mp4" />}
      </video>
    </>
  );
}
