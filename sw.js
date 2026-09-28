const CACHE = "randomtyms-hub-v8";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./hero-characters.jpg",
  "./logo.webp",
  "./icon-192.png",
  "./icon-192-maskable.png",   // safe if missing: 404s are skipped
  "./icon-512.png",
  "./icon-512-maskable.png",
  "./Assets/krishna.webp",

  // Welcome tour
  "./welcome/",
  "./welcome/index.html",

  // Digital Dharma files in /dd/
  "./dd/",
  "./dd/index.html",
  "./dd/app.js",
  "./dd/digital_dharma.json",
  "./dd/digital_dharma_ta.json",
  "./dd/varsha.webp",
  "./dd/lokesh.webp",

  // AI Quiz Engine files in /aiqz/
  "./aiqz/",
  "./aiqz/index.html",
  "./aiqz/assets/banner.webp",
  "./aiqz/assets/correct.webp",
  "./aiqz/assets/guide.webp",
  "./aiqz/assets/prompt.webp",
  "./aiqz/assets/wrong.webp"

  // Add "./solar/index.html" and "./world/index.html" here only if
  // those pages work without CDN scripts (e.g. three.js from a CDN).
];

// Resilient precache: one missing or 404 asset never aborts installation.
// cache: "reload" bypasses the browser HTTP cache so fresh files are stored.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      await Promise.allSettled(
        ASSETS.map(async (url) => {
          try {
            const res = await fetch(url, { cache: "reload" });
            if (res.ok) {
              await cache.put(url, res);
            }
          } catch (err) {
            // Continue so installation proceeds
          }
        })
      );
    })
  );
});

self.addEventListener("message", (event) => {
  const d = event.data;
  if (d === "SKIP_WAITING" || (d && d.type === "SKIP_WAITING")) {
    self.skipWaiting();
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        await self.registration.navigationPreload.enable();
      }
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

// Store a page under its path only (no ?tab= etc.) so query strings
// don't create a separate cache entry for every shortcut/share URL.
async function cachePage(url, response) {
  try {
    const cache = await caches.open(CACHE);
    await cache.put(url.origin + url.pathname, response);
  } catch (e) {}
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Network-first for page navigations (the HTML shell)
  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResp = await event.preloadResponse;
          const response = preloadResp || (await fetch(req));
          if (response && response.ok) {
            event.waitUntil(cachePage(url, response.clone()));
          }
          return response;
        } catch (e) {
          // ignoreSearch: ?tab=blog, share params etc. still match the cached page
          const cached = await caches.match(req, { ignoreSearch: true });
          if (cached) return cached;

          // Route-aware offline fallbacks
          let fallback;
          if (url.pathname.includes("/dd/")) {
            fallback = await caches.match("./dd/index.html");
          } else if (url.pathname.includes("/aiqz/")) {
            fallback = await caches.match("./aiqz/index.html");
          } else if (url.pathname.includes("/welcome/")) {
            fallback = await caches.match("./welcome/index.html");
          }
          if (!fallback) fallback = await caches.match("./index.html");
          return fallback || Response.error();
        }
      })()
    );
    return;
  }

  // Always fetch fresh from the network for dynamic feeds
  const isDataFeed =
    url.hostname === "api.allorigins.win" ||
    url.hostname === "api.codetabs.com" ||
    url.hostname === "api.cors.lol" ||
    (url.origin === self.location.origin && url.pathname.endsWith("/videos.json")) ||
    (url.hostname.endsWith("blogspot.com") && url.pathname.startsWith("/feeds/"));
  if (isDataFeed) {
    event.respondWith(fetch(req, { cache: "no-store" }));
    return;
  }

  // Everything else cross-origin (Tenor GIFs, YouTube thumbnails, Google Fonts,
  // CDNs): step aside and let the browser handle it. This avoids filling storage
  // with opaque responses.
  if (url.origin !== self.location.origin) return;

  // Range requests (audio/video seeking) can't be cached reliably
  if (req.headers.has("range")) return;

  // Stale-while-revalidate for same-origin images, icons, and static assets
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);

      const network = fetch(req)
        .then((response) => {
          if (response && response.status === 200) {
            cache.put(req, response.clone());
          }
          return response;
        })
        .catch(() => null);

      if (cached) {
        event.waitUntil(network);
        return cached;
      }
      return (await network) || Response.error();
    })()
  );
});
