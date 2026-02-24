"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoSource {
  src: string;
  type: string;
  media?: string;
}

interface HeroVideoProps {
  src?: string;
  sources?: HeroVideoSource[];
  poster?: string;
  startDelayMs?: number;
}

export default function HeroVideo({
  src,
  sources,
  poster,
  startDelayMs = 900,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [canStart, setCanStart] = useState(false);
  const [allowPlayback, setAllowPlayback] = useState(true);

  const resolvedSources: HeroVideoSource[] =
    sources && sources.length > 0
      ? sources
      : src
        ? [{ src, type: "video/mp4" }]
        : [];

  // Respect reduced-motion and save-data preferences.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;

    const updatePlaybackPreference = () => {
      const shouldDisablePlayback = motionQuery.matches || !!connection?.saveData;
      setAllowPlayback(!shouldDisablePlayback);
    };

    updatePlaybackPreference();
    motionQuery.addEventListener("change", updatePlaybackPreference);

    return () => {
      motionQuery.removeEventListener("change", updatePlaybackPreference);
    };
  }, []);

  // Intersection-driven loading keeps hero media out of network queue until needed.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || shouldLoad || !allowPlayback) return;

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
  }, [shouldLoad, allowPlayback]);

  // Delay motion start so text and poster paint first.
  useEffect(() => {
    if (!shouldLoad || !allowPlayback || hasError) return;

    const browserWindow = window as Window & {
      requestIdleCallback?: (
        callback: (deadline: IdleDeadline) => void,
        options?: { timeout: number },
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let idleId: number | null = null;
    const delayTimer = window.setTimeout(() => {
      if (browserWindow.requestIdleCallback) {
        idleId = browserWindow.requestIdleCallback(
          () => {
            setCanStart(true);
          },
          { timeout: 1200 },
        );
      } else {
        setCanStart(true);
      }
    }, startDelayMs);

    return () => {
      window.clearTimeout(delayTimer);
      if (idleId !== null && browserWindow.cancelIdleCallback) {
        browserWindow.cancelIdleCallback(idleId);
      }
    };
  }, [shouldLoad, allowPlayback, hasError, startDelayMs]);

  // Load and play once sources are attached.
  useEffect(() => {
    const video = videoRef.current;
    const shouldAttachSources = shouldLoad && allowPlayback && canStart;
    if (!video || !shouldAttachSources) return;

    const handleReady = () => {
      setIsLoaded(true);
    };

    const handleError = () => {
      setHasError(true);
      console.error("Video failed to load");
    };

    const tryStartPlayback = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;
      video.load();
      video.play().catch((error) => {
        console.warn("Video autoplay failed:", error);
        hasStartedRef.current = false;
      });
    };

    if (video.readyState >= 2) {
      handleReady();
    }

    video.addEventListener("loadeddata", handleReady);
    video.addEventListener("canplay", handleReady);
    video.addEventListener("playing", handleReady);
    video.addEventListener("error", handleError);
    tryStartPlayback();

    return () => {
      video.removeEventListener("loadeddata", handleReady);
      video.removeEventListener("canplay", handleReady);
      video.removeEventListener("playing", handleReady);
      video.removeEventListener("error", handleError);
    };
  }, [shouldLoad, allowPlayback, canStart]);

  const shouldAttachSources = shouldLoad && allowPlayback && canStart;

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
        aria-hidden="true"
      >
        {shouldAttachSources &&
          resolvedSources.map((source) => (
            <source
              key={`${source.src}-${source.media || "all"}`}
              src={source.src}
              type={source.type}
              media={source.media}
            />
          ))}
      </video>
    </>
  );
}
