/* ================================================================== *
 * Service Worker (Cache-First Offline Strategy)
 * ================================================================== */

const CACHE_NAME = 'einbuergerung-v2026.1';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/theme.css',
  './css/style.css',
  './js/state.js',
  './js/i18n.js',
  './js/session.js',
  './js/views/exam.js',
  './js/views/practice.js',
  './js/views/table.js',
  './js/views/stats.js',
  './js/app.js',
  './data/packs/registry.js',
  './data/packs/registry.json',
  './data/questions_core.js',
  './data/questions_core.json',
  './data/packs/en.json',
  './data/packs/en.js',
  './data/packs/hi.json',
  './data/packs/hi.js',
  './data/packs/tr.json',
  './data/packs/tr.js',
  './data/packs/ar.json',
  './data/packs/ar.js',
  './data/packs/uk.json',
  './data/packs/uk.js',
  './data/packs/ru.json',
  './data/packs/ru.js',
  './data/packs/fa.json',
  './data/packs/fa.js',
  './data/packs/es.json',
  './data/packs/es.js',
  './data/packs/fr.json',
  './data/packs/fr.js',
  './data/packs/pl.json',
  './data/packs/pl.js',
  './data/packs/it.json',
  './data/packs/it.js',
  './data/packs/vi.json',
  './data/packs/vi.js',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Offline fallback if not in cache
        return caches.match('./index.html');
      });
    })
  );
});
