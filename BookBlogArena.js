self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('bookblog-cache').then((cache) => {
    return cache.addAll([
      '/',
      '/',
      'https://ekonet1.github.io/BookBlogArena/android-chrome-192x192.png',
      'https://ekonet1.github.io/BookBlogArena/android-chrome-512x512.png',
    ]);
  }));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => {
    return response || fetch(e.request);
  }));
});
