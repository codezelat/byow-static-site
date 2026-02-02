// Service worker unregister script for cleaning up old caches
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  // Unregister any old service workers
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister();
      console.log("Unregistered old service worker");
    }
  });
}

export {};
