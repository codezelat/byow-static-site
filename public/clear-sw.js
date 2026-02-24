// Service worker unregister script for cleaning up old caches.
(function () {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return;
  }

  navigator.serviceWorker
    .getRegistrations()
    .then(function (registrations) {
      return Promise.all(
        registrations.map(function (registration) {
          return registration.unregister();
        }),
      );
    })
    .catch(function (error) {
      console.warn("Service worker cleanup failed", error);
    });

  if ("caches" in window) {
    caches
      .keys()
      .then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            return caches.delete(cacheName);
          }),
        );
      })
      .catch(function (error) {
        console.warn("Cache cleanup failed", error);
      });
  }
})();
