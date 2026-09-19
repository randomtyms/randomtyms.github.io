const CACHE = "randomtyms-hub-v6";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./hero-characters.jpg",
  "./Assets/krishna.webp",
  // Digital Dharma files in /dd/
  "./dd/",
  "./dd/index.html",
  "./dd/app.js",
  "./dd/digital_dharma.json",
  "./dd/digital_dharma_ta.json",
  "./dd/varsha.webp",
  "./dd/lokesh.webp"
];

// Resilient precache: uses Promise.allSettled so that one missing or 404 asset
// will NEVER abort service worker installation.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      await Promise.allSettled(
        ASSETS.map(async (url) => {
          try {
            const res = await fetch(url);
            if (res.ok) {
              await cache.put(url, res);
            }
          } catch (err) {
            // Silently continue so installation proceeds
          }
        })
      );
    })
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
      // Enable navigation preload if supported
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

  // Icons, the logo, and Google Fonts basically never change — let the
  // browser's own HTTP cache handle them instead of routing every request
  // through Cache Storage. Not calling respondWith() here means the SW
  // steps aside entirely and the browser does its normal default fetch.
  const isStaticChrome =
    /\/icon-(192|512)(-maskable)?\.png$/.test(url.pathname) ||
    /\/logo\.webp$/.test(url.pathname) ||
    url.hostname === "fonts.googleapis.com" ||
    url.hostname === "fonts.gstatic.com";
  if (isStaticChrome) return;

  // Network-first for page navigations (the HTML shell)
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
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
          if (cached) return cached;

          // Route-aware offline fallbacks
          if (url.pathname.includes("/dd/")) {
            return caches.match("./dd/index.html");
          }
          return caches.match("./index.html");
        }
      })()
    );
    return;
  }

  // Always fetch fresh from network for dynamic feeds
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
