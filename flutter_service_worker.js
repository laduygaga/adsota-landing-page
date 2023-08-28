'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"assets/NOTICES": "8392763ff72bbccf301ce1a37bc2a598",
"assets/AssetManifest.bin": "25eb13560203c060eea36cdf0012f13a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/assets/images/asian-girl.png": "0927e182c5032034febdae5d4d5b0f84",
"assets/assets/images/thao-anh.png": "991a95d9dd5a3e914e37c77f219b7e27",
"assets/assets/images/digital-marketing-big.png": "a6eed6053e2e06adffdb5934b98b1dc9",
"assets/assets/images/idea.png": "23ee29695bea651f0de586c9af0816cf",
"assets/assets/images/brand-marketing.png": "91cebb9646328c801ab5e31ebee235ad",
"assets/assets/images/arrow_up.svg": "2d73a9cfcbbde8b68782d9246bf7308a",
"assets/assets/images/branding-marketing-big.png": "84f8b7c15679d12e8dd2b85e0c1dfad0",
"assets/assets/images/logo.svg": "fe4267b591d5490a1937f2fc8053ff6d",
"assets/assets/images/digital-marketing.png": "2b6396dde7bd9f7dfcefa31517fb7608",
"assets/assets/images/contact.png": "e649f6568eaa0a040bdbe716caa180db",
"assets/assets/images/the-long.png": "258f1b1e63adf01582c86f8d6b8f82e2",
"assets/assets/images/arrow.svg": "414ba3d69ec54beda4bd2ead5018e379",
"assets/assets/images/arrow_up.png": "9cfbce7fab1f73f696b67c7422be461c",
"assets/assets/images/smiling-boy.png": "244c9328cfe8113dbc304aa779fb052b",
"assets/assets/images/branding-mkt-3.png": "2d426b60eb1e2a0be3f101f180627cfa",
"assets/assets/images/anh-dang-phu-vinh-ceo-adsota.png": "edc5c60c4c55821f7347e0b0519454bb",
"assets/assets/images/digital-mkt-3.png": "c1e22fe412be39d70caaf172bb176b33",
"assets/assets/images/apply.png": "afeaa092c617f20f031c5280cef23375",
"assets/assets/images/Ch%25E1%25BB%258B%2520Ho%25C3%25A0ng%2520Th%25E1%25BA%25A3o%2520Anh%2520-%2520CMO%2520Adsota%2520Agency%25201.png": "d429b9e25195f92e63e8c720e90839bd",
"assets/assets/images/phu-vinh.png": "072e5d65086f3583338a2f4f447fd1a7",
"assets/assets/images/develop.png": "e2ca11188db174d80c97f02d796ccd31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ed8362dff0f14b5427922950f9714e2",
"assets/AssetManifest.json": "95b5313244a1a09790b784ff8505ad6b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "438760e50954de584178fffe64289335",
"manifest.json": "e5d5808a7f34573880b0ce1511f854ac",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "0ff5cae2069e97da2ffb4a41ffb7ddab",
"/": "0ff5cae2069e97da2ffb4a41ffb7ddab",
"version.json": "17b23d1c8ea1e967ab4c787e4aa7bee2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
