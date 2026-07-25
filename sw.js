const CACHE = "randomtyms-hub-v3"; // Bumped version to reset cache

// 1. Add all important local images here so they work offline immediately
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
  // Add paths to local banner/logo images if stored locally (e.g., "./images/logo.png")
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  // Network-first for page navigations (the HTML shell)
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }

  // Stale-While-Revalidate for images, icons, and static assets (Local & External)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          // FIX: Allow 'basic', 'cors', and 'opaque' (type === 0 / status === 0) 
          // so cross-origin images (Tenor, YouTube, CDN) can be cached properly!
          const isValidResponse = response && (response.status === 200 || response.type === "opaque");

          if (isValidResponse) {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);

      // Return cached image immediately if available, otherwise wait for network
      return cached || fetchPromise;
    })
  );
});
