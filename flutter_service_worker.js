'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "965f7dbf6cd274238510a73ff5f86f35",
"assets/AssetManifest.bin.json": "7d7e779ebb49b30dffc0ae7240d79c71",
"assets/AssetManifest.json": "e4c00ff4df20ba32a780e7235f3887c4",
"assets/assets/fonts/lato/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/lato/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/roboto/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/roboto/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/roboto/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/assets/fonts/roboto/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/fonts/roboto/supera_gothic/SuperaGothic-Bold.otf": "f3a7eb763e5014c24ae20411e89a5c95",
"assets/assets/fonts/roboto/supera_gothic/SuperaGothic-Regular.otf": "ab0681885183107976421bd50e42ac71",
"assets/assets/images/add-to-cart.png": "d21db3301508a87fc5bff36bb5061a96",
"assets/assets/images/amazon-logo.png": "88bff68a531b73e6c3a44e71aa58fab7",
"assets/assets/images/Angroos_Logo.png": "3cabfe121657642ab31cb99b3bb27729",
"assets/assets/images/Angross_Minis.png": "2cbf61a3a5806b540206b7fdf435643b",
"assets/assets/images/Anniversary.png": "32d183e793f1c7ef25031995936ea5b4",
"assets/assets/images/App_store.png": "3d090dc9e4d42d32ae3524b7fe01360e",
"assets/assets/images/Authentic_Kerala.jpg": "7c0499e1b5de84a2115176b7928a6c89",
"assets/assets/images/Baby-Shower.png": "329fb2b9d1cfe2adbdfb138a180af6ff",
"assets/assets/images/banner_img.png": "7c0a6424d69a5cf7d0b8f0cd3c85fe2c",
"assets/assets/images/Birthday_icon.png": "c76f39c46d14f05671121c7e2d552608",
"assets/assets/images/Blog_img1.png": "6e96e01d6af26a7c365af777ebe26f04",
"assets/assets/images/Build_hamper_banner.jpg": "2ac075924b289f85b32bf9e4f971f93c",
"assets/assets/images/Corporate-Gifts.png": "431a4425ac7f247cf309016d22fc7d04",
"assets/assets/images/Corporate_Client_img1.jpg": "57af371036b746dc473e69c487b13bdd",
"assets/assets/images/Corporate_Client_img2.jpg": "befcdd6707b87518fda4faa6e91b5d91",
"assets/assets/images/Corporate_Client_img3.jpg": "aba8460656c01e3d1d9278a205c2ea0f",
"assets/assets/images/Corporate_Client_img4.jpg": "12a8dbcc961fc1e1b3d0cf4f685be471",
"assets/assets/images/Corporate_Client_img5.jpg": "c85f36e33cbbfe8f328d22de964621a0",
"assets/assets/images/Corporate_Client_img6.jpg": "981eb8c6250593729f23de7793a36afd",
"assets/assets/images/Corporate_Connection.png": "17d75b44bcbf7ca4225350012358b8af",
"assets/assets/images/Couples.png": "45bcdfa52579a109dcc452c0b80eb614",
"assets/assets/images/facebook_logo.png": "a7ef12d6ebb325248181210c12a5fef9",
"assets/assets/images/Footer_logo.png": "adcd674e8d99f93cf6e16a779ce33dd5",
"assets/assets/images/For-Her.png": "23837b144546c1d43812d495f2983235",
"assets/assets/images/For_HIm.png": "daaa8e9f2dcebb6b9b61df3bd10d3d3b",
"assets/assets/images/For_Parents.png": "382d0a603e6489d89b4c0c4b8bf1e2b6",
"assets/assets/images/Google%2520Reviews.png": "c322cdf5260064b12baa9bc4a8b9794b",
"assets/assets/images/Google_img.jpg": "34bfcb35df8475f5d448985f920d55a7",
"assets/assets/images/Google_paly.png": "74f923e101021ab0444b189be3c03524",
"assets/assets/images/google_Reviews_img1.png": "a518356817ad833a799dd98ec1de249e",
"assets/assets/images/Housewarming.png": "2b9833f14af218d1b7bf43386bf017be",
"assets/assets/images/icon_1.png": "6499d11f6bb2da8278322174917c057b",
"assets/assets/images/icon_2.png": "34242c297f81236a889017268196879e",
"assets/assets/images/icon_3.png": "01ee2e2d834c930d22438c6b81a6ce75",
"assets/assets/images/icon_4.png": "5045494fa0ba126aab4553345af4ee8e",
"assets/assets/images/Insgtram.png": "3e010c25c013fc700c24eedf62b9e40a",
"assets/assets/images/Kerala-Gift-and-Handicrafts.jpg": "0abd9731c339c81920bfb4a910b4a5c8",
"assets/assets/images/Kids_and_Babies.png": "96158888b584f766ba561d1429e69ad9",
"assets/assets/images/linkedin-logo.png": "9dd8cfecb66d54e4a6add36504a3d001",
"assets/assets/images/logo-whatsapp.png": "572b614d1874f423970513789d34aed2",
"assets/assets/images/new_arrivals/Angroos%2520Mini's.jpg": "276fc1b8b50e7f34d9990815d518548b",
"assets/assets/images/new_arrivals/Anniversary_treasured.jpg": "a592cd91bd3794cb19eb4e1a1b12c829",
"assets/assets/images/new_arrivals/Appreciation.jpg": "dbb69bd2edcc0a5b6e7ddbf37448c967",
"assets/assets/images/new_arrivals/Babies.webp": "91dc2cab55a6e9d1600cff8488bf46fc",
"assets/assets/images/new_arrivals/Bag-full-of-Happiness.png": "2e2452faade96d16640539ea913771b3",
"assets/assets/images/new_arrivals/Best%2520Seller.jpg": "d90f93db0f659c0873e9fff0d242272a",
"assets/assets/images/new_arrivals/Birthday_treasured.jpg": "0add6209b94427ab382a203aa76797ae",
"assets/assets/images/new_arrivals/Blog_img2.png": "a3818657458a956632a5001e218b5c11",
"assets/assets/images/new_arrivals/Blog_img3.png": "55dc86986c60b7e946e43c752a26ff32",
"assets/assets/images/new_arrivals/Boss%2520Day.jpg": "1ebbd18820e1a187003037a3cbfdd48e",
"assets/assets/images/new_arrivals/Choco-Treat.png": "4a318f3f3c941256c050b554931c59d7",
"assets/assets/images/new_arrivals/Chocolates.webp": "1fd018f2b5b8db7d226acf12c1c7329d",
"assets/assets/images/new_arrivals/Christmas%2520Banner.jpg": "90bef23eef3de469a9f7e5537a5919ab",
"assets/assets/images/new_arrivals/Christmas.webp": "6e0d460aed8e670875f5b116e9c2c718",
"assets/assets/images/new_arrivals/Clothing.jpg": "12b30e6bca1c02870538971710fdd78f",
"assets/assets/images/new_arrivals/Cloths.webp": "02a9958806218247a3e5939b231c3c5e",
"assets/assets/images/new_arrivals/Coco-Comfort(-Sugarfree).png": "9b99f99296d5a9008a95796768483efe",
"assets/assets/images/new_arrivals/Congratulations.jpg": "1ec248544e526e60b59b401f194c1995",
"assets/assets/images/new_arrivals/Corporate-Gifts.png": "431a4425ac7f247cf309016d22fc7d04",
"assets/assets/images/new_arrivals/Corporate_treasured.jpg": "bf64043e53df535cbba4602ae78a31dc",
"assets/assets/images/new_arrivals/Corproate%2520Gifts.jpg": "cd5652939a8f36440228110cd8046c51",
"assets/assets/images/new_arrivals/Cosmetics.jpg": "c9687ac25e7b667ac3f72ba2d09f339f",
"assets/assets/images/new_arrivals/Diwali%2520Banner.jpg": "f16aa8ef09a455eb9576bf5e03f1771d",
"assets/assets/images/new_arrivals/Dussehra.jpg": "16fbfb46a45d9002f19f34572bdc6874",
"assets/assets/images/new_arrivals/for_kids_treasured.jpg": "e24fffb6e52fd9f3381b84b6017a89c9",
"assets/assets/images/new_arrivals/Gadgets.webp": "37add45c40c36baf2c9611354ffa0ae7",
"assets/assets/images/new_arrivals/Golden-Mesh-Bag.jpg": "a72954c6d1d3f8ec2a197a6c2bfb70b8",
"assets/assets/images/new_arrivals/google_Reviews_img2.png": "4a0136143e8f9eab0d441caec9c0136d",
"assets/assets/images/new_arrivals/Green-Lotus-Box.jpg": "ba5bcf44aea3c847dfd79b75bef6ff27",
"assets/assets/images/new_arrivals/Handiccrafts.webp": "16b324fd3ff4895ccd1103ffcfb3c048",
"assets/assets/images/new_arrivals/Handicrafts.jpg": "74f7f3bb7d142fe2104c59f175a2fd49",
"assets/assets/images/new_arrivals/handicrafts_treasured.jpg": "3129ae9857a8cfbb7c75b4cabd759ae1",
"assets/assets/images/new_arrivals/Happy-Birthday(-Purple-).jpg": "9e4bb62aa50d0db3fcb12c232032f7af",
"assets/assets/images/new_arrivals/Happy-Birthday-(White).jpg": "c47447ef774b7cedc69d7026e65c68ef",
"assets/assets/images/new_arrivals/Happy-Valentine's-Day.jpg": "e9b99df2d0d3ca39826ab7492ba2146d",
"assets/assets/images/new_arrivals/Happy-World-Smile-Day-scaled.jpg": "9cdc43eb68e40bc477f88759008a90a2",
"assets/assets/images/new_arrivals/Her_treasured.jpg": "3363b1a89e346d85066106307b6d937b",
"assets/assets/images/new_arrivals/Him_treasured.jpg": "866b8a35e3d552a847e81de37c39fd98",
"assets/assets/images/new_arrivals/Hiphip-Hooray.jpg": "ebd7c1b4ed58cfad2222df00c846cbcb",
"assets/assets/images/new_arrivals/I-donut-know.jpg": "39451491b48c5659d04238c66c512837",
"assets/assets/images/new_arrivals/I-donutknow-withyou.jpg": "091656a3b93331f87d82534b811004ae",
"assets/assets/images/new_arrivals/Jewellery.jpg": "d9c80f4a1dfd0a9d971eb74fabcb4e0f",
"assets/assets/images/new_arrivals/Jewellery.png": "10174325f6942ddc6e5f7ec778dbce8f",
"assets/assets/images/new_arrivals/Jewellery.webp": "317fefeb5936e6e0204b02a76077704d",
"assets/assets/images/new_arrivals/Jewellery_treasured.jpg": "dacc886cc82403898024c7ce126d7ef2",
"assets/assets/images/new_arrivals/Karwa.jpg": "71c3ee6346f94917f12b3152a9cd1e5c",
"assets/assets/images/new_arrivals/Kerala_gifts_treasured.jpg": "041a6bef2d845674d66886932d500972",
"assets/assets/images/new_arrivals/Life%2520Style.webp": "b3d4fc58398b0aaee1151bcff059ec4d",
"assets/assets/images/new_arrivals/Life-style-Products.png": "8e30833d274957bde4faca7fdddecdc4",
"assets/assets/images/new_arrivals/Lifestyle.jpg": "4ff0be8cb1e40eb68fddd000c7f5fc1e",
"assets/assets/images/new_arrivals/Minis_treasured.jpg": "ae13de44a397d2957b772ad7e241a83a",
"assets/assets/images/new_arrivals/Missing-You-Like-Crazy.jpg": "87fd4dea797446e6c73c7d449359ff68",
"assets/assets/images/new_arrivals/Navratri.jpg": "fcedc5496ed8f405284d4f8e948856ff",
"assets/assets/images/new_arrivals/Offer%2520available.jpg": "688708826eb64a815e94636837c6b6ef",
"assets/assets/images/new_arrivals/Other%2520Gourmets.webp": "47a52a2c024e4ad8835f94bd8b7dad7f",
"assets/assets/images/new_arrivals/Perfumes.webp": "b857da8669984d554986b87624bc2a28",
"assets/assets/images/new_arrivals/Pixel-Heart-Box.jpg": "ed14fb6d189d136db3b6d14c82031229",
"assets/assets/images/new_arrivals/Pretty-Stuff-Box.jpg": "73a2f088f1c5e47ab42268fd6f15839d",
"assets/assets/images/new_arrivals/Return%2520Gifts.jpg": "828cc5185f142509ca5866202d10e1fa",
"assets/assets/images/new_arrivals/Return-Gift.png": "794798f52c735b3c47da581d8e959ff0",
"assets/assets/images/new_arrivals/Return_gifts_treasured.jpg": "e69ae2a48883e560679c4babf34b9c3d",
"assets/assets/images/new_arrivals/Satin-Wrap-Box.jpg": "f46b129ebe3cc4a4fef8778325565b38",
"assets/assets/images/new_arrivals/Signature%2520Box.jpg": "18d9a5148f7e7099c4f9250fa93c6adf",
"assets/assets/images/new_arrivals/Skin%2520Care%2520&%2520Beauty.webp": "72c0cde26eb03f1899a4c74a77d6add8",
"assets/assets/images/new_arrivals/Stationaries.webp": "da2e802ef00e7b94af195c2003ca4233",
"assets/assets/images/new_arrivals/To-The-Most-Annoying-Person.jpg": "7f66a760147795119acfc0aae301c521",
"assets/assets/images/new_arrivals/Toys.webp": "d51144db184c43906b6e1b129cb844e1",
"assets/assets/images/new_arrivals/Trending_Gifts.jpg": "c488c36581f0a3250543a6006b8dfdd9",
"assets/assets/images/new_arrivals/Typewriter-Box.jpg": "14c2d80073b0bc7547b5f81ca290f112",
"assets/assets/images/new_arrivals/Under%25201000.jpg": "59877c13cf2d16bc095448f2e2a03ff4",
"assets/assets/images/new_arrivals/Wholesale.jpg": "90b848ec034b92d70ecacf42d1788f5e",
"assets/assets/images/new_arrivals/Wholesale.png": "f4faae5b19c019a6ca1d48873d4fd337",
"assets/assets/images/new_arrivals/Wines%2520&%2520Juices.webp": "b6ee8dba70b824796e798fb89742dd52",
"assets/assets/images/new_arrivals/Wooden-Crate.jpg": "0c5e458e82f5b16e0ce3b879b6c535d1",
"assets/assets/images/new_arrivals/XOXO-Box.jpg": "fe3106d8913b990e5c1b3bd03cac96ff",
"assets/assets/images/payments_cards.png": "1515cda785f6e752fe04eae68c825ac8",
"assets/assets/images/Profile.png": "edf3d04a98a3df803587f34d36e78de5",
"assets/assets/images/sedding_treasured.jpg": "2a961e8bee05db95b40f6b26dcf5a7f7",
"assets/assets/images/Sweet-Moments.png": "e3c0650594153bf7f359a88b4e7c16c9",
"assets/assets/images/Trending_Gifts.jpg": "c488c36581f0a3250543a6006b8dfdd9",
"assets/assets/images/twitter.png": "3017d372e99e553baf4367f7191e57cb",
"assets/assets/images/Up-to-50%2525-Off.jpg": "0ed7a067bf8ca2fa53ec4b561a33b51e",
"assets/assets/images/Wedding.png": "3285637a66eef71f7bee420aa13ec1d7",
"assets/assets/images/Weddings.png": "42ceec21d969c26ac8a23ca27b646618",
"assets/assets/images/youtube.png": "1a3f4c368ae3e54ebf63aff352c67838",
"assets/FontManifest.json": "6508e375c92f1c349950407b29bd56b8",
"assets/fonts/MaterialIcons-Regular.otf": "490727e9341c214119930f9fcc251b99",
"assets/NOTICES": "60e9bb1d2f4bf2dae64b71879d22a463",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "53be19389231bd9ca22c241fa711fa95",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9b45639675fa06da0aa3db5470e7638c",
"/": "9b45639675fa06da0aa3db5470e7638c",
"main.dart.js": "8c18e803797a2c408f7af8f53a55df5d",
"manifest.json": "401015048e423cd5b94a3b22d548c75b",
"version.json": "853c11cf4ba9e07cd5e6b593f5b2c629"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
