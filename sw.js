const CACHE_NAME = 'karteikarten-v145';
const APP_SHELL = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-192-maskable.png',
  './icon-512-maskable.png',
  './vocab-data.js'
];
// Biblioteci opționale (ex. importul Excel): salvate la instalare, ca să meargă offline din prima,
// dar separat de APP_SHELL, ca lipsa lor să nu blocheze actualizarea.
const OPTIONAL_FILES = ['./lib/xlsx.full.min.js'];
// Fonturile se salvează separat, fiecare pe cont propriu: dacă vreunul lipsește de pe server,
// instalarea versiunii noi NU eșuează (cache.addAll e "totul sau nimic") - textul cade doar
// pe fonturile de rezervă, iar aplicația continuă să se actualizeze normal.
const FONT_FILES = [
  './fonts/literata-latin-opsz-normal.woff2',
  './fonts/literata-latin-ext-opsz-normal.woff2',
  './fonts/literata-latin-opsz-italic.woff2',
  './fonts/literata-latin-ext-opsz-italic.woff2',
  './fonts/ibm-plex-mono-latin-400-normal.woff2',
  './fonts/ibm-plex-mono-latin-ext-400-normal.woff2',
  './fonts/ibm-plex-mono-latin-600-normal.woff2',
  './fonts/ibm-plex-mono-latin-ext-600-normal.woff2',
  './fonts/special-elite-latin-400-normal.woff2',
  './fonts/special-elite-latin-ext-400-normal.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(APP_SHELL);
      await Promise.allSettled(FONT_FILES.concat(OPTIONAL_FILES).map((f) => cache.add(f)));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GET requests
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const networkFetch = fetch(req)
        .then((response) => {
          // Cache a copy of successful same-origin responses (and opaque cross-origin ones)
          if (response && (response.ok || response.type === 'opaque')) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return response;
        })
        .catch(() => cached); // offline fallback to cache if network fails

      // Cache-first strategy: serve cached immediately if present, else wait for network
      return cached || networkFetch;
    })
  );
});
