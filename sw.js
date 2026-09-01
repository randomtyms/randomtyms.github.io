const CACHE = "randomtyms-hub-v3";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./logo.webp",
  "./hero-characters.jpg"
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
    (async () => {
      // Enable navigation preload if supported — speeds up the first
      // navigation response while the SW is still starting up.
      if (self.registration.navigationPreload) {
        await self.registration.navigationPreload.enable();
      }
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Network-first for page navigations (the HTML shell)
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          // Use the preloaded response if the browser already started
          // fetching it, instead of firing a second network request.
          const preloadResp = await event.preloadResponse;
          if (preloadResp) {
            const clone = preloadResp.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, clone));
            return preloadResp;
          }
          const response = await fetch(event.request);
          const clone = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          return response;
        } catch (e) {
          const cached = await caches.match(event.request);
          return cached || caches.match("./index.html");
        }
      })()
    );
    return;
  }

  // Always fetch fresh from network for data feeds — the CORS relay used
  // for the YouTube video list and Blogger's JSONP post feed. Caching
  // these is what made new videos/posts only show up one visit late —
  // these must never be served stale.
  const isDataFeed =
    url.hostname === "api.allorigins.win" ||
    url.hostname === "api.codetabs.com" ||
    url.hostname === "api.cors.lol" ||
    (url.hostname === self.location.hostname && url.pathname.endsWith("/videos.json")) ||
    (url.hostname.endsWith("blogspot.com") && url.pathname.startsWith("/feeds/"));
  if (isDataFeed) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Stale-while-revalidate for images, icons, and static assets
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          const isValidResponse = response && (response.status === 200 || response.type === "opaque");
          if (isValidResponse) {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
