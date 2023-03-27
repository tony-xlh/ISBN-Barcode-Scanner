const cacheName = "ISBNReader";
const appShellFiles = [
  "index.html",
  "icon128.png",
];
const contentToCache = appShellFiles;

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll(contentToCache);
    })()
  );
});

