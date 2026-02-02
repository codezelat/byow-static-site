// Service Worker - Clean up old caches on activation
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete all caches to prevent chunk errors
          return caches.delete(cacheName);
        }),
      );
    }),
  );
});

// Don't cache anything - let Next.js handle it
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
