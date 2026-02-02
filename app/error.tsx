"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const isChunkError =
    error.message.includes("Loading chunk") ||
    error.message.includes("ChunkLoadError") ||
    error.message.includes("Failed to fetch");

  useEffect(() => {
    console.error("Error boundary caught:", error);

    // Auto-reload for chunk errors after a short delay
    if (isChunkError) {
      const timer = setTimeout(() => {
        // Clear caches
        if ("caches" in window) {
          caches.keys().then((names) => {
            names.forEach((name) => caches.delete(name));
          });
        }
        // Hard reload with cache bust
        window.location.href =
          window.location.href.split("#")[0] + "?t=" + Date.now();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error, isChunkError]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#040010]">
      <div className="relative flex flex-col items-center max-w-md px-4 text-center">
        <div className="mb-8">
          <div className="h-20 w-20 mx-auto rounded-full border-4 border-[#8133F1]/30 border-t-[#8133F1] animate-spin" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">
          {isChunkError ? "Reloading Page..." : "Something went wrong"}
        </h2>

        <p className="text-white/70 mb-8">
          {isChunkError
            ? "Clearing cache and reloading. Please wait..."
            : "We encountered an error loading the page. This might be a temporary issue."}
        </p>

        {!isChunkError && (
          <div className="flex gap-4">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center rounded-full bg-[#8133F1] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#6d1fe2]"
            >
              Try again
            </button>

            <button
              onClick={() => {
                if ("caches" in window) {
                  caches.keys().then((names) => {
                    names.forEach((name) => caches.delete(name));
                  });
                }
                window.location.href = "/?t=" + Date.now();
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:border-white/40"
            >
              Go home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
