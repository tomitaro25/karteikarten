const CACHE_NAME = 'karteikarten-v126';
const APP_SHELL = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-192-maskable.png',
  './icon-512-maskable.png',
  './vocab-data.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
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

// SW_TEST: adauga anteturile de izolare cross-origin (COOP+COEP), necesare pentru
// SharedArrayBuffer (si deci pt varianta "threaded", mai rapida, a motorului ONNX folosit
// de vocea neurala offline). GitHub Pages nu poate trimite anteturi personalizate - asta-i
// o metoda cunoscuta de-a le adauga "artificial", prin service worker, fara server propriu.
// Aplicat STRICT pe cererea de navigare (pagina principala) - restul raspunsurilor raman
// exact neschimbate, ca sa limitam cat mai mult riscul asupra restului aplicatiei.
function addCoiHeaders(response) {
  const newHeaders = new Headers(response.headers);
  newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');
  newHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
}

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
      return Promise.resolve(cached || networkFetch).then((finalResponse) => {
        if (req.mode === 'navigate' && finalResponse) {
          return addCoiHeaders(finalResponse);
        }
        return finalResponse;
      });
    })
  );
});
