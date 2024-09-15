'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "8bf3861d8c398f4619518ad5cb68437d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c97d5126d07a9bf824b1968594d46d2e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b8989e5e4a72ecca4d77718e952964fa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "74563dd4f132bc471a29b4b4916b9ac2",
".git/logs/refs/heads/main": "05fdaaeb6521d4652f26abb4cf466fe2",
".git/logs/refs/remotes/origin/main": "67f51ed9e443639dac6e0a4ddf0066d1",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/06/b61c4857c893076d2564ca870806a6f3e5dfaa": "064d65b8db2ff3fbae8802cf5389b2a8",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0d/bc9f7d8c4b4c5dcbdef26cdb6e91ee7a9d56b0": "df89afb5847fae392593d2c66d599e9b",
".git/objects/10/7c8c3dab80a42b50d0f8f11d8144040affee3c": "a12b694e163abdecd58e06eb1351aa72",
".git/objects/1d/ba8c236f5a8d95d591e50c79c68aab740e0cbe": "215cc98b122923cafc088162d43c019a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/bd4bd4ef1e2a9095dcec8f7fa90800257b90f5": "8a91936971b4f99e49871437b6b4a0b1",
".git/objects/23/6eee1e59634f635bc226c66333b657b0af11bc": "561c024691a33d643b7b1c86473b9b1f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2c/4fcdb127cc30f4b6dab50774bc4a14505d5283": "84e40109efd83ff39fffe9bb37fb3cef",
".git/objects/2d/116d920580367caf6a179155f344ede856bf31": "664ce7bca47fdb5e1d15a77de593527b",
".git/objects/2d/8bac602a83098dba484815b5217a428d0c2bd5": "8f7b70def5ca0efacf242f7a4791f596",
".git/objects/2e/a93a00c3cc8cac3abb0006955daf781ce38a70": "b2d8d5458f2d4e66deb6ed7731d66bf0",
".git/objects/31/bf0e99ef13811dae185efb680964ab4efc67be": "e0acbc27e1717c965d2cbcc0e44dba81",
".git/objects/32/288b3383d539a5f983e096ffe4020c0912259a": "48cea140a42d896386e1b6478ea11a2a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/d80ff6080f004d94bf5fdf38234b5644ed4461": "e753e63ddd2a2a061bfaf02bc5a6b1d1",
".git/objects/36/70d9719693f8dcea28cb1189848aa348d4467a": "d3fe52d3c5f247606523f8e499f8f9e9",
".git/objects/38/5fa698ff5a7991e9c3d103fb3b41f082d00347": "3cb482662a3d65b8503761f67e392758",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/6f49062131d0b84d39f472b7fd6d8ab64883e9": "2cc5675b3992c87c7845da3d4fece2da",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/251c023d78190dcb2778731b72714fa40fa4a5": "c3296386a2fc7198c9e60a6cfed6ef88",
".git/objects/44/38d1eaf0b5d95d89130267b28c26d68cb1f4e7": "9ea5fd47d137dd542103c17937ec995f",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/cc7b108f7ccb4db0e06b3dbcdec9ecd513e1fc": "3cf42e2f2cc8168f0c75305f59502460",
".git/objects/46/d974268ddb09100f076c43b09292dc24def60e": "68bf99595fb49e4a7a4df18cf53f8bfd",
".git/objects/49/48f24b5ba63b1a8d11b3b7bca5b0e5f08b9c2c": "af8a0e3d01f83104e4ab5293a35d86be",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/885a547a2dca3f8e7b97623f83640dd0d11751": "07f0369c88d7fc6dc8ea5f1a6f8d0151",
".git/objects/4b/b950285f3b63ea3c37d430941f7af3675a50da": "015c41c90a834d811c7e1b2a30b97f70",
".git/objects/54/f7cc3d40367fb8194b849fe5208f184107a860": "60b844653d7a58abc58bdac7a25b2885",
".git/objects/61/bc372a720707ae42fe5dc027275c83eb8d9f9a": "8d38988b6917a3dd7b5dbf09d3385dc0",
".git/objects/63/932019c3344e23a9b0120906b095f17fe5a44e": "91224f5f6f02e5e97a2dd99f56e92f16",
".git/objects/65/498ee374c89a7c0fb9b1b12d92fcf750fc65cb": "2f130cf192369dfde379d0fdf4471b5d",
".git/objects/69/70de24e3267b3d56432c630de9485a39c5453b": "88116add442a4939d32df2859b09d828",
".git/objects/69/d14a1b26d53ad43010dd36e6881445990b5bda": "d491c11e1da56a211885c2f03d993bdd",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/ab66d76ad1db8a1649934e1debf458907d4837": "7d312701402530b50a0fa10db7eb7158",
".git/objects/75/b5ce8682a7de00f33b90e99abffd8371167cf9": "559ec14e5128d14d3b9a866a9f90734d",
".git/objects/79/0478e63a4b8e9b4ef7c5489fefe7339804991c": "4fa242e187b3699fff63111e41b5183a",
".git/objects/82/68a4a6547e49b37300ef856c3642f9574c276f": "086f42ffcb83c2bd0134c1edd9e06ffa",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/1ed3a66583a5f9c57bbd1ddcdb2cd7ec00047e": "07051202399ccd356a244bf8e0e43d77",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/bc28c30a523b386b2b476f125f9ba224c85ef0": "6534d9432f92961f7de9f7b4ec35a4ff",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/718ccbbf087e89981ce062ac9a9e9f2f85065e": "ece8e9f36f65854aed45aaf895048fb7",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/a433e618b6082bc6fff2fb4de170915cff973e": "f619db53e987de99c35433d89c397e8a",
".git/objects/a1/ec052fd902bd565ee6ce57f2db7f66a580241d": "7d83314521452414fbe0969d22f23a11",
".git/objects/a6/03d47e7db59a106229b9229416a8a681265f67": "5ed769d1fd64f4b221e0d35399a4aacf",
".git/objects/aa/3a3cfc088198a7479f689eac86fd29669b2758": "7bbd3d0b92b29dbb95cf9b653ef0f40e",
".git/objects/ab/b50e32d534c4adb84b1dcff1ae88037c670e18": "d042c10a5a38d001e2e2bf25081532c9",
".git/objects/ab/cda98237c0eb616d739bf4f55b5f32342cd555": "c27179840a5e32f54962e8431fe16d6f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/81f7da46bc9b87fdae2587f3d062f5a84b2616": "30d9a8624fd5b6f1415479f8b5d0f29f",
".git/objects/b3/ba4f4a2b8c25a7870b9a948ab59d3e76e6df2f": "83d09e762088bacdaba537327ef9f9bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/7d31f44efa7b6ea85a3e19ca907304da33630c": "559c22e23fdff291f625469ead5cad89",
".git/objects/be/b4232d4af45c93d5018ff3d03c076c7cd8fe9d": "a12a8f5be2c7571d2a3be9f0e808be48",
".git/objects/c1/6226650a80e86877ba5b5446f0fc69824f39d9": "b26c55829b204965f13fab20e5f05246",
".git/objects/c2/33c966ae6eb691df35d6ecb45d01c175845f9b": "01b8a4cbfa4d5d47edbd47480b19c60f",
".git/objects/c5/694467b6f65d6f8ac04c18db13a3cf51c283d0": "3f685397eff1ebf837fa1aeb29d7303c",
".git/objects/c9/2eee7f7f37d1b48c4d22258a7e6dbde7d94cda": "d9964d1d2220fb39c556cb4358a917a0",
".git/objects/ca/c6f6e0807490e9f0f42da26ccb7c19d1460606": "26d1930e8a8a594066f6c2d9bea784b7",
".git/objects/cb/72d28c671ba129f75f6293dc33b3de97ff8861": "e57a14090a43b64349b443c783e10345",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/7d7c84409d417cef0a924cbdc47c0fb77ed73a": "c320ec53f6738c37a4fd887f15e72b66",
".git/objects/df/63f2ee24c38c87741858239779b9a86e930e9b": "dc54f6bbd95dd197204f76bb71a0ce4b",
".git/objects/ea/d23ee78611104fe876321eb2287e967c75bd0d": "82cb3dced8245b6fbac37b62c72858a5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/9a1bf02f1e9c1b6ea7b7afc1d562a039398cf1": "e1bcca2b44e44aa67d85f19cd9f5dc10",
".git/objects/fa/438e4a6e0a26ca01fe88edd9c159dacc7cf413": "032c1e43286112cea92eef0d9d196644",
".git/refs/heads/main": "833b6f93a403059b20b1fc72a7fad822",
".git/refs/remotes/origin/main": "06f21ac36d06c65780a89d0a270cf1ee",
"assets/AssetManifest.bin": "c524f05462a52831be726a8facce4fff",
"assets/AssetManifest.bin.json": "7a7d7875bb88c4e6a6b888325b8ddf02",
"assets/AssetManifest.json": "501c7371b064c97523b214f858190263",
"assets/assets/fonts/roboto/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/roboto/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/roboto/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/assets/fonts/roboto/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/fonts/roboto/supera_gothic/SuperaGothic-Bold.otf": "f3a7eb763e5014c24ae20411e89a5c95",
"assets/assets/fonts/roboto/supera_gothic/SuperaGothic-Regular.otf": "ab0681885183107976421bd50e42ac71",
"assets/assets/images/Angroos_Logo.png": "3cabfe121657642ab31cb99b3bb27729",
"assets/assets/images/Angross_Minis.png": "2cbf61a3a5806b540206b7fdf435643b",
"assets/assets/images/Anniversary.png": "32d183e793f1c7ef25031995936ea5b4",
"assets/assets/images/Authentic_Kerala.jpg": "7c0499e1b5de84a2115176b7928a6c89",
"assets/assets/images/Baby-Shower.png": "329fb2b9d1cfe2adbdfb138a180af6ff",
"assets/assets/images/banner_img.png": "7c0a6424d69a5cf7d0b8f0cd3c85fe2c",
"assets/assets/images/Birthday_icon.png": "c76f39c46d14f05671121c7e2d552608",
"assets/assets/images/Blog_img1.png": "6e96e01d6af26a7c365af777ebe26f04",
"assets/assets/images/Corporate-Gifts.png": "431a4425ac7f247cf309016d22fc7d04",
"assets/assets/images/Corporate_Client_img1.jpg": "57af371036b746dc473e69c487b13bdd",
"assets/assets/images/For-Her.png": "23837b144546c1d43812d495f2983235",
"assets/assets/images/Google_img.jpg": "34bfcb35df8475f5d448985f920d55a7",
"assets/assets/images/Housewarming.png": "2b9833f14af218d1b7bf43386bf017be",
"assets/assets/images/Kerala-Gift-and-Handicrafts.jpg": "0abd9731c339c81920bfb4a910b4a5c8",
"assets/assets/images/Sweet-Moments.png": "e3c0650594153bf7f359a88b4e7c16c9",
"assets/assets/images/Trending_Gifts.jpg": "c488c36581f0a3250543a6006b8dfdd9",
"assets/assets/images/Up-to-50%2525-Off.jpg": "0ed7a067bf8ca2fa53ec4b561a33b51e",
"assets/assets/images/Weddings.png": "42ceec21d969c26ac8a23ca27b646618",
"assets/FontManifest.json": "2c4c49dd7efcec280648775da1e1d949",
"assets/fonts/MaterialIcons-Regular.otf": "048323848486e6a750d1fc619610625c",
"assets/NOTICES": "e6de7f941d95b7213d4c66bfdcb7728c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
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
"flutter_bootstrap.js": "91cf12a73ef9940907b18dc0dee216c7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a184c98de0c8eb6343554303e4a0cac4",
"/": "a184c98de0c8eb6343554303e4a0cac4",
"main.dart.js": "db2c7c295299c759522fdd46c7f4b395",
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
