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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer to only load video when visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(video);

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

    if (shouldLoad) {
      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("error", handleError);
    }

    return () => {
      observer.disconnect();
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
      video.pause();
      video.src = "";
      video.load();
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
