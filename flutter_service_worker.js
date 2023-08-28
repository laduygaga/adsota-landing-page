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
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/refs/heads/main": "a64d5cb0625d37a597201f0c726acfa0",
".git/refs/remotes/origin/main": "a64d5cb0625d37a597201f0c726acfa0",
".git/COMMIT_EDITMSG": "9dbbc845639b7e9fdbfe78610dbdb6f5",
".git/logs/refs/heads/main": "17a7013a2318161ab92a57e3573ae3a2",
".git/logs/refs/remotes/origin/main": "e51ea29dfb457b80f6eaad597894cf52",
".git/logs/HEAD": "17a7013a2318161ab92a57e3573ae3a2",
".git/index": "4af09a91ecfe90b4240f0e0da7a198dd",
".git/objects/85/2ef0811022477e3adcc5d1dbcafd7e0154503f": "18a97c7056502d0553a8e248a3f7eb9f",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/f4/f98261f4e96ed93c0e0da57d951454356e2804": "e3d21a168f6cad349d57fc8889e15ac2",
".git/objects/81/404b6860d59febb886833590094d34eb7577c0": "2a9ee2db2f8ace6969bd4d39ff449130",
".git/objects/f1/083f670cfb096a0d260408d28b5267cef1aae3": "a6e0bd155b7210da853ec0f7f869fba4",
".git/objects/f0/a3ff8f410a990d5077c6d2a9e8a88a25959501": "1f6f12d2f0c20fa2da022f043643a595",
".git/objects/db/a38f40909ea7591483d7aab41cf732870085a0": "710b058d59a3232aafc1d975621429f6",
".git/objects/84/966a3891393c2b2ab8e94a5ba8e20d9236856b": "54b9ccd84a45decb23846e6268aa7629",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/6c/7dc7c99c5e8c9684df3f11e4f3a242af673d46": "df50cb35d0d11ad0a1c8103cb1543315",
".git/objects/8e/3b57b5c42b7a56869438e07d2ff9d70e3a8c5b": "a849c749502bad6d415032a7e33628fe",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/64/507f9ab3d6db8ea4692e610c7fe55f252df78b": "1a1b80de6e5cb0ffd42d389feeae27be",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/6e/8d1075d8605ff70413ab31f4fa8dfb48b550d2": "1d8f2b2dbd17f829552707d874c1fcde",
".git/objects/a7/1364ae7762cb52466817b39b6cb6d1e2adb202": "657a19b8ebc3ca8967d95991f6904df3",
".git/objects/e3/3e3cb97ef36395df188f46777d2028fb9db655": "e9099d8399daac8bd8e2fed703b58d8e",
".git/objects/36/84462a97e7e9e55841844ae8a0074e9878290d": "b38270d1f06d8aef69f30924fa2d17fd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/73cd0bc6f94f4bc28d179e97b3db4ffe216e31": "d5f85faaa803530dbc3d7eccab64bef2",
".git/objects/f6/8170bfc457c8b715d3a35264ce011ae1642933": "aa41ee3c86e861b5717fa53b5396bf27",
".git/objects/41/3cc2af0360b51a409f46a2eeccab3aa810eadf": "713269ab23d70f1cfff2d52429f879ca",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ca/cdc9fdc64e41e435f014e2c8bd6db2c37da809": "053727c3f9d5d32e577407e24853ff4d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/b6/69cb37744a010950bcece1a4550f533e947322": "17f8a53750dfa2e3eda825ca6679aa86",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c9/c0676877a2e5c4eca402c3759af0a4e2fd3b18": "f88f63320fdcd4a7bd45e9897e950ff5",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/20/64749d611a7146b89f75be79813a32a9ea465e": "ab12ffd463d532a29c7af9db650f8d87",
".git/objects/04/66cb59b0f2fa4fb8079105500968b704979786": "30a85c0de68d717311bbcd6169f70390",
".git/objects/86/203b81337caf5a9226a5b7cb8e898f45fa8f58": "a0004023ea5ce54cb79b9c81605109ba",
".git/objects/24/a82686b8a73cfc89b18c115a8e0ec1f43c5bbd": "36631a8dc58f8e57abc827366d50a893",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/1d/73d6974efe85347756ae22a6fe52d844a5f5fb": "82a632d8ad37d919521a60e743b49150",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/05/a836361765c64164891951246acc8b276381fe": "65e3640cfaab2fc51ef0d5bea5a8fbef",
".git/objects/97/027f781a8e96aa56c4db19a3cd7e1258e40cdd": "f7fbee05bda73ec6c8fd60733dc5a5e0",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/70/3ef3896b4d6ead7c35352c100d538c7ffb2ba3": "cc927375c0bc7b7f31646e1a2ff8cf52",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/8d/9fdab47440fb1b6c34c1462d008ea7f3e20ec0": "6c815d99bf1a73efc885d153f29f919d",
".git/objects/83/1278077eaeed5e8cd3aa47c635324bcadbd5ef": "ff89bbe567484d50044e4228773194e7",
".git/objects/22/d3acb0cdd5740df45109a9e624507a821b6710": "28deac6aab3ecaca45caee291019c600",
".git/objects/87/4964f244e7abc7b4deed6b2011b260ece0ada0": "d18e1914cc3e06b83f2edf7d29608698",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/5bb8179b193af720027361b154e3b730dae9cb": "5b339aaed3c202e14e502a8a1e7851ae",
".git/objects/d5/479fb1a9219ba59bfe1985a4552f0747cbc406": "02fcd0502957cd16855fcac175c3ed72",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/4f68c73d71ec3f28e5b5a916f856d80180b8bc": "ddad2db733b6e7a055527499534215cf",
".git/objects/12/1309fc7d64b1ce6ac0aa9872064b02a4deed08": "dab794ff1a37c37cd94ba57e64e1a771",
".git/objects/5f/d2fd954a892e6abdf6fa3a7fc4ca2ddee5c50e": "6531c820bd673f7c72f6e073b129216a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/fa/e086a24cd06e9b5af0523188b4426b5dec1788": "82599bead090029172d27e1a1b3da317",
".git/objects/62/9022fe7eee9e76d6b4972169bc081e4a494965": "11715f0e9ea80bf3c7299a7897aa63a8",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/26/03ad39c7395a37ef2d15d674948e748a1de2ce": "ef4da16cd8465880d15c4901b5c51dc7",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/fc/8fc5a50c3fb4a6373e49ce5da66f139dc367d0": "53703ba3d0c1878006d1f2b43e26a1a1",
".git/objects/06/6c8dfe75183ce03ff9fb61b7d97c88f8b708b8": "0dc401e5ef09a36bd1193c5638d5d82f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/42/0bf703b4facb9fdd2915c4e823e407476e7f60": "3b44f6d362e5f2775ff30989538f248a",
".git/objects/42/d20c02de0eedd8921a8d952389bdc67cc8a975": "ad96661e920fac7b96decb39fa793d97",
".git/objects/42/4fa8c5422ebe8ae72dcaa87bc9fa3fb26b3d64": "e1ee65ec212f413ac6ce724e096d5882",
".git/objects/fd/6d965cb21a976777af948040ab9411ecfc90a3": "1df7b98f8e38527990b618810e9b95c6",
".git/objects/cf/84a95511b6a3b0d608b9259868c32866160160": "d51cd407879b68bde267020784258b11",
".git/objects/95/8ec4342591aa7bc274e04c475c43e37d547439": "cad04879e2594f9da063fe2f593c5a60",
".git/objects/c5/585857d60d7e3e4b93a7c4a563ca81b4f78470": "419f5eb043426661791db95a75243810",
".git/objects/21/7234def447cf9290416b89953af41cffa5cf67": "7e904c66901bdc274ac32781c1bbb82d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/b5/3085647a4a6d2a6b32d4a13b7a5ffbfd2080f7": "d78dcbcef0f0816b1dc6b97257c6d658",
".git/objects/e5/e146324b05123b531f59fa854e4a9dda31ac7d": "054e0f44bcb27d4a702aeccf841556ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ba/d61d2314f85a3a6cf5ec0a0e630450962e3b3d": "5a30e5dfaa9fa00a6d5e81de320818dc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "4d6c7d3ee8b3557ab675d0e64398d04f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
"main.dart.js": "6dbb76e5ce91baa31764203dfdbc24e4",
"manifest.json": "e5d5808a7f34573880b0ce1511f854ac",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "7ccc9769c01eec30d8290fa7c08505f7",
"/": "7ccc9769c01eec30d8290fa7c08505f7",
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
