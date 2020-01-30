const cacheName = 'pwa-game-cache';
const staticAssets = [
    './',
    './index.html',
    './assets'
];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    console.log('install event')
});

self.addEventListener('fetch', async event => {
    console.log('fetch event')
});
