/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "290.png",
    "revision": "a2667487b17870d63ddbbab4177e25f6"
  },
  {
    "url": "404.html",
    "revision": "21db03cf200ed47491c3f74d335bb423"
  },
  {
    "url": "about/index.html",
    "revision": "c5b61ef92c4fbfa2fdeebc9e267e438e"
  },
  {
    "url": "assets/css/0.styles.1d1fcdaa.css",
    "revision": "6f69625ed6ff98386592d1c7f84fdeaf"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d31d5822.js",
    "revision": "2611f5703728d80161c321378054581b"
  },
  {
    "url": "assets/js/100.fc702cbb.js",
    "revision": "a3329f566cd00d35d29fc54f38bfe978"
  },
  {
    "url": "assets/js/101.ffeaf07e.js",
    "revision": "ea0d17f40f50a3b44086c3a1badabd42"
  },
  {
    "url": "assets/js/102.32f9b5bf.js",
    "revision": "85f08cb820df5d8ec39646c2b9baea48"
  },
  {
    "url": "assets/js/103.ed0c56dd.js",
    "revision": "3f533306068886cfdcfbafb810c2d42a"
  },
  {
    "url": "assets/js/104.b4f805e3.js",
    "revision": "d1633b5e640fc31695f61b2e2c42bba7"
  },
  {
    "url": "assets/js/105.520023ad.js",
    "revision": "a8a20ef78488b5e7ad1ac21f137c598c"
  },
  {
    "url": "assets/js/106.80ba4977.js",
    "revision": "91b83b8c4c29ebdce86148745822924f"
  },
  {
    "url": "assets/js/107.8e5ff560.js",
    "revision": "653ba114f43cd2d5446ecbe75922f00d"
  },
  {
    "url": "assets/js/108.cdef9f5f.js",
    "revision": "dc18dfbad6649df3ca37a029c0063b5e"
  },
  {
    "url": "assets/js/109.48bd63a4.js",
    "revision": "7108a9dc28bec0c4b3bd031cc824b947"
  },
  {
    "url": "assets/js/11.c9233aca.js",
    "revision": "be1020d768e73585919849a97d138d89"
  },
  {
    "url": "assets/js/110.6ceeaaf0.js",
    "revision": "f5febd2ac35b56ea1002a1c71c03d228"
  },
  {
    "url": "assets/js/111.20f32689.js",
    "revision": "9ba4d3e1a4e9dc0fc32bc08b67dc4104"
  },
  {
    "url": "assets/js/112.ab105656.js",
    "revision": "a87e9289851cab06283fe2c091ec2d65"
  },
  {
    "url": "assets/js/113.3dae5501.js",
    "revision": "469d629e243cee335688381ff747662b"
  },
  {
    "url": "assets/js/114.d55db08c.js",
    "revision": "bb3fb6a64edd78bd1600a270ab7c03ab"
  },
  {
    "url": "assets/js/115.71a4f382.js",
    "revision": "5f87e93f55cf00dd26ea5e935982e063"
  },
  {
    "url": "assets/js/116.8cb10c29.js",
    "revision": "71ceb7a9556c82d1fb623fe5323cbcce"
  },
  {
    "url": "assets/js/117.18d23b6e.js",
    "revision": "3527a162fbc57a186864068a97491fc1"
  },
  {
    "url": "assets/js/118.e5f8e707.js",
    "revision": "4e94e19eee63b2549c474b3827cd82be"
  },
  {
    "url": "assets/js/119.07e694f3.js",
    "revision": "0c3a43ccceb23255c675c6ac9735463a"
  },
  {
    "url": "assets/js/12.70d2a2d4.js",
    "revision": "3eea9e8c902d83b1060897c13f8ef46a"
  },
  {
    "url": "assets/js/120.153ef67d.js",
    "revision": "f9d603e7e6e3d1ff4b6728169b673f8a"
  },
  {
    "url": "assets/js/121.89f0a96a.js",
    "revision": "72a58c6bffc6851a62adc3ac93973ba7"
  },
  {
    "url": "assets/js/122.d441a7bf.js",
    "revision": "373a2b9f3d39b749d5d9efaf64ff2aad"
  },
  {
    "url": "assets/js/123.f5a4d4bc.js",
    "revision": "23e32599a2906bc599accc6cf0cc17dc"
  },
  {
    "url": "assets/js/124.d0655174.js",
    "revision": "078090b54aad55ac5d150bc070c55a03"
  },
  {
    "url": "assets/js/125.1e55b231.js",
    "revision": "c2444109dda62fe485338f933b265370"
  },
  {
    "url": "assets/js/126.62ae38a7.js",
    "revision": "2e98f019cbbd14bf355cce78e1b6ecac"
  },
  {
    "url": "assets/js/127.cb0cb8bc.js",
    "revision": "4651624fd4f0ab084b984e67aaa8c958"
  },
  {
    "url": "assets/js/128.bda14b71.js",
    "revision": "6092fd72a7ac87e36d8d428bb88b6f38"
  },
  {
    "url": "assets/js/129.8132d213.js",
    "revision": "4628b31c2386f33338f1814187125ef0"
  },
  {
    "url": "assets/js/13.bbf049ca.js",
    "revision": "c8754ca304282968db145b9066b2b15b"
  },
  {
    "url": "assets/js/130.50bd4050.js",
    "revision": "c61ae3ae94720f3456b88e039fe91b37"
  },
  {
    "url": "assets/js/131.fa5bf9dd.js",
    "revision": "ef9a3e2b6aa9634c29a09c3a555c552f"
  },
  {
    "url": "assets/js/132.9d8fcdc3.js",
    "revision": "8f16d3757b9a3a51fa57fc2bce7f185d"
  },
  {
    "url": "assets/js/133.2c77ceb4.js",
    "revision": "9ceeb974e3452fb73d547720c4647309"
  },
  {
    "url": "assets/js/134.7a58256b.js",
    "revision": "3ea0649e5aac4ad4da741557a8ba7d16"
  },
  {
    "url": "assets/js/135.66de8f09.js",
    "revision": "7f980e3f476aaf0921ed0b9ccc3f70a7"
  },
  {
    "url": "assets/js/136.4c32a33e.js",
    "revision": "1554bf01529988edb75910f36a9e6de3"
  },
  {
    "url": "assets/js/137.9586bd9b.js",
    "revision": "bf847221545a94c55afef0301a887413"
  },
  {
    "url": "assets/js/138.abc8970d.js",
    "revision": "75597955e5355abcd36fdf31524f4e69"
  },
  {
    "url": "assets/js/139.073b2968.js",
    "revision": "a1e38b907a53df40de02c55aa29c3158"
  },
  {
    "url": "assets/js/14.6d71afb5.js",
    "revision": "c29b047c6a8e3533478263d14750c2de"
  },
  {
    "url": "assets/js/140.4b0b339d.js",
    "revision": "e62383df9b17e94ad4f1cc22e66412fb"
  },
  {
    "url": "assets/js/141.7c37027c.js",
    "revision": "b3e731422259d45ba933d09aa4b9f67e"
  },
  {
    "url": "assets/js/142.8fcc9d12.js",
    "revision": "25a847f47116b2bdadd1f51c9642b6c7"
  },
  {
    "url": "assets/js/143.4bba03d5.js",
    "revision": "3949c1361de82fc4b237c216bc33b541"
  },
  {
    "url": "assets/js/144.6700bb56.js",
    "revision": "45d9a2cc4b64614ad61f6904dba4e0dc"
  },
  {
    "url": "assets/js/145.a69a24f7.js",
    "revision": "5292e8910de10de1df14daf035c0d119"
  },
  {
    "url": "assets/js/146.0c5b4ad6.js",
    "revision": "26b583a15477fe177275ac9824709856"
  },
  {
    "url": "assets/js/147.dc038554.js",
    "revision": "ed78ea02ed97213f526fd946bb7d09a4"
  },
  {
    "url": "assets/js/15.69fe4175.js",
    "revision": "27ad43950faa751056879c53bb569336"
  },
  {
    "url": "assets/js/16.1ba2f28b.js",
    "revision": "199fc18eb18e7aea8715233fb7267f4b"
  },
  {
    "url": "assets/js/17.7275e89a.js",
    "revision": "c00f48aca8741b5edd377483f441a3b8"
  },
  {
    "url": "assets/js/18.3473357a.js",
    "revision": "66442f47ad4bc898f7da8e31374faae4"
  },
  {
    "url": "assets/js/19.9723c96d.js",
    "revision": "0571f7e3b7a3b1f4951cd5e70ac5342a"
  },
  {
    "url": "assets/js/2.f1ff662b.js",
    "revision": "9cdbfc96357b5231553bcea17c90ed29"
  },
  {
    "url": "assets/js/20.9192e24e.js",
    "revision": "2c92bb4044b40fd8cfc1f36cfd855005"
  },
  {
    "url": "assets/js/21.9bebd53b.js",
    "revision": "46113fa629258dc596c3ae1273139c25"
  },
  {
    "url": "assets/js/22.d1654a15.js",
    "revision": "9026282e10b5c5c34cf5433c5e8cef2f"
  },
  {
    "url": "assets/js/23.f79731a4.js",
    "revision": "0819ed825e27c2a869739c2a411693cc"
  },
  {
    "url": "assets/js/24.c41e6324.js",
    "revision": "5b035125c777907d8dcb6dd2570e9d8a"
  },
  {
    "url": "assets/js/25.be36657d.js",
    "revision": "c51b6929259d8d394c428067ee4fec93"
  },
  {
    "url": "assets/js/26.3f1d86f1.js",
    "revision": "351ace71b67b3b2626e65593fa36f351"
  },
  {
    "url": "assets/js/27.fdcb0742.js",
    "revision": "c1e5bf7b88f14071663d558a1829e361"
  },
  {
    "url": "assets/js/28.6908f0f0.js",
    "revision": "abc2281e8ae94fa521003bdbec58afeb"
  },
  {
    "url": "assets/js/29.8e639b2c.js",
    "revision": "1bc9203f04a30c6de43b0804e8ffc938"
  },
  {
    "url": "assets/js/3.dc00412b.js",
    "revision": "9083ec15d061443bb99f96264b600a92"
  },
  {
    "url": "assets/js/30.e6c27685.js",
    "revision": "2f75cc8d076f4bb9a14aa6d68c0ed922"
  },
  {
    "url": "assets/js/31.11b124a8.js",
    "revision": "b1c08c32e65a029543475fd96f0425ec"
  },
  {
    "url": "assets/js/32.1c27ddf1.js",
    "revision": "6146640f8af218127356c7fc5573042d"
  },
  {
    "url": "assets/js/33.fff38d3f.js",
    "revision": "640816dd7070fbcef4c40e02d6b43390"
  },
  {
    "url": "assets/js/34.53b6e020.js",
    "revision": "e3a19d8d9fa000d50e279d38642eb9df"
  },
  {
    "url": "assets/js/35.a8fb16b3.js",
    "revision": "2f585e8d03884dece60955dbc88484c8"
  },
  {
    "url": "assets/js/36.3099ccde.js",
    "revision": "07a7eb2c324ac83f2dc6a973c899191e"
  },
  {
    "url": "assets/js/37.dcd0e03d.js",
    "revision": "c9af6b30684814d60e70b00664fbf169"
  },
  {
    "url": "assets/js/38.23d00c90.js",
    "revision": "34b61f0e3ac7380a624fe6c740331346"
  },
  {
    "url": "assets/js/39.afee2e2d.js",
    "revision": "2522bfe5e1173cfb998cd288b7d36818"
  },
  {
    "url": "assets/js/4.13afdc9f.js",
    "revision": "c138c87c6babf9d027a9aa619a158523"
  },
  {
    "url": "assets/js/40.bdf0242d.js",
    "revision": "10541a1d7409bce6de61b19f5be7fa88"
  },
  {
    "url": "assets/js/41.9e52885e.js",
    "revision": "ff95b0778bd57ff6675092c243a7802c"
  },
  {
    "url": "assets/js/42.c4d3e4da.js",
    "revision": "a25fc84080e5a6f7fa4bc5ab449031d8"
  },
  {
    "url": "assets/js/43.c07b8f83.js",
    "revision": "966e2b4995c5793a26987763aeca335b"
  },
  {
    "url": "assets/js/44.d47eab26.js",
    "revision": "9b454c02f30315e14dd5bf2cdbe8fbc2"
  },
  {
    "url": "assets/js/45.c3544007.js",
    "revision": "032e05170f422eb8826b1e64c3482ea4"
  },
  {
    "url": "assets/js/46.6c37630a.js",
    "revision": "d15663f6dc7d10c52fc8cac4eb5984ef"
  },
  {
    "url": "assets/js/47.0efbb976.js",
    "revision": "3f5881a08e98ca861bab7765a5e00be1"
  },
  {
    "url": "assets/js/48.96b1cb87.js",
    "revision": "803ed7ea9ae9d4c3f0306470001d2896"
  },
  {
    "url": "assets/js/49.c27d8ee6.js",
    "revision": "91c13a386015faa3d0acdc0ba887ecb1"
  },
  {
    "url": "assets/js/5.cde8d3d7.js",
    "revision": "5f0f28f71e59169a2fa82946815ead9f"
  },
  {
    "url": "assets/js/50.53643987.js",
    "revision": "1044cd246aeb447901e6a4830c0731c4"
  },
  {
    "url": "assets/js/51.05b09312.js",
    "revision": "b90e9fad59beb856b9d14fffabe491b6"
  },
  {
    "url": "assets/js/52.0b63280d.js",
    "revision": "55d9612b4f2a968e50dd1cfea7cc9333"
  },
  {
    "url": "assets/js/53.04b7d0cc.js",
    "revision": "182aa8c680b9f87d4c5812c23e40466f"
  },
  {
    "url": "assets/js/54.a8d4201e.js",
    "revision": "c1ee8b82d65a44288399d244c96050f2"
  },
  {
    "url": "assets/js/55.847eeb3e.js",
    "revision": "da7d13f726088f57c87f26eeff68e67f"
  },
  {
    "url": "assets/js/56.a4502cfa.js",
    "revision": "7a106d7804a39689e7d430f8c54ef561"
  },
  {
    "url": "assets/js/57.bc9b70b2.js",
    "revision": "95d8cb9a4d040a664e9a084130e861b9"
  },
  {
    "url": "assets/js/58.b7c832da.js",
    "revision": "03ee46344815b6f566e85b20c2ca890b"
  },
  {
    "url": "assets/js/59.d374c4cd.js",
    "revision": "218536e7c0d9f7ce0265eba185180b86"
  },
  {
    "url": "assets/js/6.50c8001c.js",
    "revision": "4bb34a290fbdf4d9aa731cac69861984"
  },
  {
    "url": "assets/js/60.711bcef1.js",
    "revision": "8c5a583ca3619cb5342ec66c6282f80b"
  },
  {
    "url": "assets/js/61.85dc3acb.js",
    "revision": "c761d8003709c94da10ca438a740ef98"
  },
  {
    "url": "assets/js/62.7ddf8189.js",
    "revision": "1211dc09ecd5b7e4bddc653d7628d153"
  },
  {
    "url": "assets/js/63.1b5175a4.js",
    "revision": "2f8a3968acdd5d0faa955e7c79e6843c"
  },
  {
    "url": "assets/js/64.885b117b.js",
    "revision": "fd7bfe300c7cab474902e74b03e49f8d"
  },
  {
    "url": "assets/js/65.67afcfc1.js",
    "revision": "8cfdcde4c83ff2684edc79d69c1c813a"
  },
  {
    "url": "assets/js/66.c2976d50.js",
    "revision": "50c43614a1d5d144d5a1411936195cf6"
  },
  {
    "url": "assets/js/67.7e4574db.js",
    "revision": "4a8692e1741eabe87eb0d6f7a83881d9"
  },
  {
    "url": "assets/js/68.9028df01.js",
    "revision": "78caa9615d2ec35a1b99f9ea4d943755"
  },
  {
    "url": "assets/js/69.6cf88988.js",
    "revision": "1ecadb8cb0f94130140663e1a1db065e"
  },
  {
    "url": "assets/js/7.9e51b661.js",
    "revision": "3b9fbf181ade6ea645b50b9da37f45f0"
  },
  {
    "url": "assets/js/70.8477ddf7.js",
    "revision": "b9b1706f97e4fc6dd7a6ed6f1397fe00"
  },
  {
    "url": "assets/js/71.ad8c8035.js",
    "revision": "fa7ebb3e0f0b2e4acaf925745561d415"
  },
  {
    "url": "assets/js/72.70487791.js",
    "revision": "187a2a75cbc3bccf10719916b0074c15"
  },
  {
    "url": "assets/js/73.008bec08.js",
    "revision": "59e3af3d846b099eef6d5a42d5307156"
  },
  {
    "url": "assets/js/74.4765abe1.js",
    "revision": "d37a10c1c0950b332ab4a3b5ffce451f"
  },
  {
    "url": "assets/js/75.d79d7b84.js",
    "revision": "15d6932662c445203ca828dcdae2cd1e"
  },
  {
    "url": "assets/js/76.34a92bbd.js",
    "revision": "6878b0694d0b4fa4926cc5203ee6a77e"
  },
  {
    "url": "assets/js/77.0df851d6.js",
    "revision": "a4ce2277f852ea67bddf33f25028bd72"
  },
  {
    "url": "assets/js/78.b76c8c30.js",
    "revision": "181f1dfb8c3b782b46b4c44816630444"
  },
  {
    "url": "assets/js/79.b2376e6f.js",
    "revision": "8afd4eed44d704a2949cd1d173c86e2d"
  },
  {
    "url": "assets/js/8.da3aa39e.js",
    "revision": "1935ff99151ffb3bdd9a65b752b4bdf7"
  },
  {
    "url": "assets/js/80.28e9f6d2.js",
    "revision": "b51dd677ac98549d1e49a5457321bf76"
  },
  {
    "url": "assets/js/81.2fa83dcd.js",
    "revision": "0f6dbedc081af120f7c86c831df6c3f1"
  },
  {
    "url": "assets/js/82.7d2d2bf3.js",
    "revision": "b5df5f854c60c257ac80fd9050062071"
  },
  {
    "url": "assets/js/83.a0cc92dd.js",
    "revision": "2f5a7e10f15ee6367a72ca3609cf3f37"
  },
  {
    "url": "assets/js/84.17ef4c98.js",
    "revision": "8871a269f972ab1634575eb8c0df541f"
  },
  {
    "url": "assets/js/85.f80387d6.js",
    "revision": "e90ba7eff3b97469bbf02a280cfd53cb"
  },
  {
    "url": "assets/js/86.3e2486ca.js",
    "revision": "1e62507e4da8ad2aec6bb4951c55e7f0"
  },
  {
    "url": "assets/js/87.82d95ec8.js",
    "revision": "4524b5ae9a0e12e0d787f111e36f9d8b"
  },
  {
    "url": "assets/js/88.06fc9cb1.js",
    "revision": "4ef520a506a15fe124e2540eb6d39089"
  },
  {
    "url": "assets/js/89.8692af4c.js",
    "revision": "5c88e019cbe7fb1c5e885457f7e2fc92"
  },
  {
    "url": "assets/js/9.85cc9da5.js",
    "revision": "23bcbc73069d0f339b959b53098a5381"
  },
  {
    "url": "assets/js/90.7f8f10a1.js",
    "revision": "19f848288f89e7a5c0a6fd02ff1622d1"
  },
  {
    "url": "assets/js/91.f2db9000.js",
    "revision": "837df0dce135af4f1adda6dc5dfd5abf"
  },
  {
    "url": "assets/js/92.81a39cb8.js",
    "revision": "93a4504b2340188b27dcbb3f5e23fd63"
  },
  {
    "url": "assets/js/93.e4726fa4.js",
    "revision": "5d14d3d395cf8d327fb84b305b87c777"
  },
  {
    "url": "assets/js/94.3d8e0b18.js",
    "revision": "98ced6de032b338adf63fba6b7519734"
  },
  {
    "url": "assets/js/95.8c201fe2.js",
    "revision": "020e6d4f126f33beb52f25538aa2cc98"
  },
  {
    "url": "assets/js/96.faa32c28.js",
    "revision": "7a65f6a105bad02aa5cce42fd1a41b74"
  },
  {
    "url": "assets/js/97.8b8ab96a.js",
    "revision": "9c93d04cb7c949695ec7a12852cb3146"
  },
  {
    "url": "assets/js/98.97bb00f6.js",
    "revision": "ebedceef10445ba3d0a997afdb6c9afb"
  },
  {
    "url": "assets/js/99.1b9a88bf.js",
    "revision": "847fcc24b6fcced09218dc2ddc48346f"
  },
  {
    "url": "assets/js/app.4c986744.js",
    "revision": "32d6c90373dca034fdc6472ddaa7dc30"
  },
  {
    "url": "home/backendtechnology/current/0_basic.html",
    "revision": "d8fdc556c6498e786a03811cbe182b9e"
  },
  {
    "url": "home/backendtechnology/current/1_Atomic.html",
    "revision": "259614b8bc602ee1a3a649d86e5e747f"
  },
  {
    "url": "home/backendtechnology/current/10_ThreadCommunication.html",
    "revision": "d43b7288b0911412cc1ef552d59bbf0c"
  },
  {
    "url": "home/backendtechnology/current/12_Case.html",
    "revision": "b6dc2020ff77646daefc52cd6ccfc23c"
  },
  {
    "url": "home/backendtechnology/current/13_AbstractQueuedSynchronizer.html",
    "revision": "30ebc41b5d40f26e1e8f33bb6d86fcb2"
  },
  {
    "url": "home/backendtechnology/current/14_selfLock.html",
    "revision": "b3dfdfdb7a786cebcacbabf9ae946574"
  },
  {
    "url": "home/backendtechnology/current/15_selfLock1.html",
    "revision": "352a40653524646144aae03fdfcfefe6"
  },
  {
    "url": "home/backendtechnology/current/16_selfLock2.html",
    "revision": "51282a7dbe3dec22a3e1f8589dcd543e"
  },
  {
    "url": "home/backendtechnology/current/17_customProducer.html",
    "revision": "f33dadde3cb6adf9d881fc625cba3c7d"
  },
  {
    "url": "home/backendtechnology/current/18_CyclicBarrier.html",
    "revision": "69dfb72cc9d9c1569c9643293e61e145"
  },
  {
    "url": "home/backendtechnology/current/19_MarriagePhaser.html",
    "revision": "69245c47307c0ba6deaec75ac8ddaec5"
  },
  {
    "url": "home/backendtechnology/current/2_synchronized.html",
    "revision": "db2b4b1518dc8690fbfd24f13b8d86ee"
  },
  {
    "url": "home/backendtechnology/current/20_ReadWriteLock.html",
    "revision": "06f356d4d0840a2fcdf07bbdddeab529"
  },
  {
    "url": "home/backendtechnology/current/21_Semaphore.html",
    "revision": "26c3e6b91171d848a4776f4004bccc6b"
  },
  {
    "url": "home/backendtechnology/current/22_ThreadPool.html",
    "revision": "d433824e0288a0279bd4cf4051eb0c61"
  },
  {
    "url": "home/backendtechnology/current/3_volatile.html",
    "revision": "5bad8852dcf6ec748a6014d2658fb34f"
  },
  {
    "url": "home/backendtechnology/current/4_ReentrantLock.html",
    "revision": "8c4806876646fa90450f1b0f0f2ecb86"
  },
  {
    "url": "home/backendtechnology/current/5_Lock.html",
    "revision": "3f45536aaaf97d1fdd7cdce6e776f883"
  },
  {
    "url": "home/backendtechnology/current/6_threadpool.html",
    "revision": "88fdc611e4b6f344efb7fb436398f856"
  },
  {
    "url": "home/backendtechnology/current/7_collection.html",
    "revision": "42735be46133cd7e9f904e395e2dd27b"
  },
  {
    "url": "home/backendtechnology/current/7.1_threadLocal.html",
    "revision": "db14e7b3f96867e61fa7ca80c34ff485"
  },
  {
    "url": "home/backendtechnology/current/8_comprehensive.html",
    "revision": "3ba703339b4625322f48e6b0de9c437f"
  },
  {
    "url": "home/backendtechnology/current/9_semaphoreAndCyclicBarrier.html",
    "revision": "350a7582fb6381a74821a5597dc1c6b6"
  },
  {
    "url": "home/backendtechnology/current/index.html",
    "revision": "9c7a2d5f65e9cf8e55c7ab695cfef708"
  },
  {
    "url": "home/backendtechnology/database/1_mysql.html",
    "revision": "4f80708ab3d8cceb5d940331fcc9fbea"
  },
  {
    "url": "home/backendtechnology/database/2_dataoptimization.html",
    "revision": "3602bdc13660e8a77df18c5993f64783"
  },
  {
    "url": "home/backendtechnology/database/3_index.html",
    "revision": "bf2da28aae1661e960046d8188aa76e6"
  },
  {
    "url": "home/backendtechnology/database/4_xingneng.html",
    "revision": "98c82fb677599ad411be06be82fc5b4a"
  },
  {
    "url": "home/backendtechnology/database/5_transaction.html",
    "revision": "db1c94574506d0e27c8120f6cb398126"
  },
  {
    "url": "home/backendtechnology/database/5_youhua.html",
    "revision": "0606412e572c30a5a7a0816abebac1b2"
  },
  {
    "url": "home/backendtechnology/database/index.html",
    "revision": "dd6d89ebb8df6b3cba2127465b85b1d2"
  },
  {
    "url": "home/backendtechnology/datastructure/0_ArrayQueue.html",
    "revision": "68446851adbdb225e8a66631f9c4ef85"
  },
  {
    "url": "home/backendtechnology/datastructure/1_CircleArrayQueue.html",
    "revision": "69ee5ecb80fa05eefe6eeb77836c5a21"
  },
  {
    "url": "home/backendtechnology/datastructure/2_singlelinklist.html",
    "revision": "880843e038268225e97c39e4fbe53a08"
  },
  {
    "url": "home/backendtechnology/datastructure/3_loadbalance.html",
    "revision": "59cee5e2095e779b0136249ee4dc6e94"
  },
  {
    "url": "home/backendtechnology/datastructure/index.html",
    "revision": "8aebec430ea26b993a75446e450473d4"
  },
  {
    "url": "home/backendtechnology/deploy/0_linux.html",
    "revision": "3a5623606dc1b60757457bd4429e1e3f"
  },
  {
    "url": "home/backendtechnology/deploy/1_docker.html",
    "revision": "6ef3dfbc5a11d2f48a42effbe4d71e65"
  },
  {
    "url": "home/backendtechnology/deploy/10_nginx.html",
    "revision": "ff9ec2c975a37f7d019d4a9d33f95daf"
  },
  {
    "url": "home/backendtechnology/deploy/11_nginx.html",
    "revision": "51811be3435b7658b4344d13d4f5b546"
  },
  {
    "url": "home/backendtechnology/deploy/12_nginx.html",
    "revision": "821187c8b0a503f2b4248ccd1d7f2b83"
  },
  {
    "url": "home/backendtechnology/deploy/13_nginx.html",
    "revision": "40359e830147b1fcf8163eeefbf4dee6"
  },
  {
    "url": "home/backendtechnology/deploy/2_docker.html",
    "revision": "88ac84b87f0e1fd7cf529ca452d0d613"
  },
  {
    "url": "home/backendtechnology/deploy/3_docker.html",
    "revision": "4b14eb45d940581793d81681d425ad36"
  },
  {
    "url": "home/backendtechnology/deploy/4_docker.html",
    "revision": "33c3ebedea6cde0453a982d803b31abe"
  },
  {
    "url": "home/backendtechnology/deploy/5_docker.html",
    "revision": "cf3b414f149691968036cdfca5f64894"
  },
  {
    "url": "home/backendtechnology/deploy/6_nginx.html",
    "revision": "39468491d9f5371585b21bf457b84176"
  },
  {
    "url": "home/backendtechnology/deploy/6.1_docker.html",
    "revision": "3f926d637a35aa93b956cfdc88e210aa"
  },
  {
    "url": "home/backendtechnology/deploy/7_nginx.html",
    "revision": "6e74845a74927544bed823cbdafd3a2c"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/1_gitlab.html",
    "revision": "1af8e0b779053cada29348b3d003b356"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/2_nexus.html",
    "revision": "82c50e8280c9990ade461bceffe56ce8"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/3_registry.html",
    "revision": "1e8d4cef9433b6ef8929b532b49e785d"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/4_rellaydeploy.html",
    "revision": "39d01d90b64972cedf6adb85bccbfa6e"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/5_gitlab.html",
    "revision": "6905d657a7b73a568501fc54f0956638"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/6_Jenkins.html",
    "revision": "c254a6532f5fd28abe3b222f84acf6bd"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/index.html",
    "revision": "925189864c375ba3b47ccad7af78e4df"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/0_mysql.html",
    "revision": "a767e1d4ce258a0639710d94b3d993f0"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/1_tomcat.html",
    "revision": "82fff37857013b2058b6018c90499659"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/2_nginx.html",
    "revision": "11bdf9cbb0eb86a61b6b60fccd4bbc1b"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/3_sentinel.html",
    "revision": "579317cedbc57bc8d8a71be746d54095"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/4_portainer.html",
    "revision": "33a900bc29dbe74170d30735985febe2"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/5_rabbitmq.html",
    "revision": "3df45fbdd62fd548f6c7c80a2dee0338"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/6_blog_nginx.html",
    "revision": "9955c822ad95e4d3f5230f006de10192"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/7_es.html",
    "revision": "eb3051ced1395fca057c6eb4e398391b"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/index.html",
    "revision": "19cee49b2496a3d371dcb4143c100df4"
  },
  {
    "url": "home/backendtechnology/deploy/index.html",
    "revision": "b27c2f0703a5e8051b4c738ac795a646"
  },
  {
    "url": "home/backendtechnology/design/0_adapter.html",
    "revision": "cb0b1d17bc1949ffad8b36b9de5489cc"
  },
  {
    "url": "home/backendtechnology/design/1_decorative.html",
    "revision": "bcb8cb3359253aced4d511c0005b0ae9"
  },
  {
    "url": "home/backendtechnology/design/10_singleton.html",
    "revision": "9fd8760c6c6e9bfd54aa384d578979c9"
  },
  {
    "url": "home/backendtechnology/design/11_proxyCglib.html",
    "revision": "681bb48439aa73334f004c6ddee838db"
  },
  {
    "url": "home/backendtechnology/design/12_proxyJdk.html",
    "revision": "9486e89f02bc11da70897e930cc48447"
  },
  {
    "url": "home/backendtechnology/design/13_ownProxy.html",
    "revision": "524aeb8545f5c1af068c971d9560baa7"
  },
  {
    "url": "home/backendtechnology/design/14_chain.html",
    "revision": "e9153ad0fdb7d05d7cf752bcf6424d6e"
  },
  {
    "url": "home/backendtechnology/design/15_builder.html",
    "revision": "d1cfa28b1c44fd9eb39b151a429223ca"
  },
  {
    "url": "home/backendtechnology/design/2_delegation.html",
    "revision": "757fa96ae97a5e90ef067e1f4e04024d"
  },
  {
    "url": "home/backendtechnology/design/3_simpleFactory.html",
    "revision": "0309b32d440f044acb582b94100b9aae"
  },
  {
    "url": "home/backendtechnology/design/4_abstractFactory.html",
    "revision": "f6046dc2743d9f134848e97d4cd1c3d5"
  },
  {
    "url": "home/backendtechnology/design/5_observable.html",
    "revision": "92e3c66cba6dd08ef8b692053a9b1a4a"
  },
  {
    "url": "home/backendtechnology/design/6_handleObservable.html",
    "revision": "3aabd119951a190d4b6d373530cd3286"
  },
  {
    "url": "home/backendtechnology/design/7_protoType.html",
    "revision": "466881e23139971b96b8f47dc876fbe4"
  },
  {
    "url": "home/backendtechnology/design/8_Strategy.html",
    "revision": "dd9a4b0deaf306c7f8946ba20d8b2a89"
  },
  {
    "url": "home/backendtechnology/design/9_template.html",
    "revision": "bfc20dc8d7d20e907584b4745c426c4c"
  },
  {
    "url": "home/backendtechnology/design/index.html",
    "revision": "67b7c4dcd71d8288ddd53937fb1771ab"
  },
  {
    "url": "home/backendtechnology/es/1_es.html",
    "revision": "6f9a57907779e4adf26e1bb55f9cff77"
  },
  {
    "url": "home/backendtechnology/es/index.html",
    "revision": "4c5e6886d9e184879a561d7ccf0f27c0"
  },
  {
    "url": "home/backendtechnology/frame/index.html",
    "revision": "a75a40bdf21ae996bb90c7f820346eff"
  },
  {
    "url": "home/backendtechnology/frame/spring/0_spring.html",
    "revision": "624c654c2a21dcd1c37d7085e2af61d3"
  },
  {
    "url": "home/backendtechnology/frame/spring/1_springsecurity.html",
    "revision": "450f4fe5b44f39cf45792eb84fc199f0"
  },
  {
    "url": "home/backendtechnology/frame/spring/2_springsecurity.html",
    "revision": "36fc425813292319e72bb8600d9e7432"
  },
  {
    "url": "home/backendtechnology/frame/spring/3_springboot.html",
    "revision": "2310f4b09ff2667649af1123a25980af"
  },
  {
    "url": "home/backendtechnology/frame/spring/index.html",
    "revision": "314fe979d97289dc4595f87865c55e99"
  },
  {
    "url": "home/backendtechnology/java/1_objectoriented.html",
    "revision": "279685c7a52dd5ed3e7e69ff4784c054"
  },
  {
    "url": "home/backendtechnology/java/2_class.html",
    "revision": "de394e500684c9a586f056a3da35518a"
  },
  {
    "url": "home/backendtechnology/java/index.html",
    "revision": "f4c22edcd8556d902fc2529f7f3dbe70"
  },
  {
    "url": "home/backendtechnology/jvm/1_jvm.html",
    "revision": "334ddd23aa1d3d3af7a93c290255b738"
  },
  {
    "url": "home/backendtechnology/jvm/2_gc.html",
    "revision": "fbe5f4c199c8bc24c432dce357be9575"
  },
  {
    "url": "home/backendtechnology/jvm/index.html",
    "revision": "68ae15a27e8d512073c1010bc6783deb"
  },
  {
    "url": "home/backendtechnology/microservice/1_springcloud.html",
    "revision": "279a67dbb0e81d7c6cf6c9c9c9b1045c"
  },
  {
    "url": "home/backendtechnology/microservice/10_rpc.html",
    "revision": "36861c13d5e5be77bfe1b6cbf76ac6b3"
  },
  {
    "url": "home/backendtechnology/microservice/11_limit.html",
    "revision": "b5a417d165d17009528f2f1c740ea262"
  },
  {
    "url": "home/backendtechnology/microservice/4_lock.html",
    "revision": "178ccfaa136fa19d3045518523e6d364"
  },
  {
    "url": "home/backendtechnology/microservice/5_zk.html",
    "revision": "7f8b7894eab047bb7495b6f32c7ac6e9"
  },
  {
    "url": "home/backendtechnology/microservice/6_quartz.html",
    "revision": "fd3e0f520d547de3eb3cec0fbded766a"
  },
  {
    "url": "home/backendtechnology/microservice/index.html",
    "revision": "9cc2783296e89cbaebec133d5e015ae5"
  },
  {
    "url": "home/backendtechnology/middleware/1_mq.html",
    "revision": "2839b1e3ca07ef918a856d07697847ce"
  },
  {
    "url": "home/backendtechnology/middleware/index.html",
    "revision": "933ea05ea7101d5bb5fe9280a7349fbd"
  },
  {
    "url": "home/backendtechnology/redis/1_redis.html",
    "revision": "51d31ff6850dcd234963f5ed37b749f8"
  },
  {
    "url": "home/backendtechnology/redis/index.html",
    "revision": "86cebd6081bc6131b8845b745920d62a"
  },
  {
    "url": "home/backendtechnology/spring/1_es.html",
    "revision": "11d444b038e621dd41634c19109b86d1"
  },
  {
    "url": "home/backendtechnology/spring/index.html",
    "revision": "f47448eb7e8e133740ffda62c0f3b8b5"
  },
  {
    "url": "home/backendtechnology/video/1_live.html",
    "revision": "00a290c9a90fe963fbf7c3bb9d430c09"
  },
  {
    "url": "home/backendtechnology/video/index.html",
    "revision": "235b0b8c040a9c1f33dc52eaf4a7ae3f"
  },
  {
    "url": "home/index.html",
    "revision": "461c5a50945796038b6b78906a2eb30b"
  },
  {
    "url": "home/openuphorizons/interview/0_interviewtopic.html",
    "revision": "33be1b0901dc134ef2bbee862f61b695"
  },
  {
    "url": "home/openuphorizons/interview/1_cas.html",
    "revision": "f00e6df58f6354741bf417019b8e0058"
  },
  {
    "url": "home/openuphorizons/interview/2_class.html",
    "revision": "91efc3f1d63bfffe6651b45c5ecb0a1f"
  },
  {
    "url": "home/openuphorizons/interview/3_synchronized.html",
    "revision": "c1b358556f20e9856427f2ad899df7de"
  },
  {
    "url": "home/openuphorizons/interview/4_parent.html",
    "revision": "67113dfa6df234ca0972c236fa1724b3"
  },
  {
    "url": "home/openuphorizons/interview/index.html",
    "revision": "ad937d92c025a35bbb021eb7d0edd4b4"
  },
  {
    "url": "home/openuphorizons/other/1_deployhttps.html",
    "revision": "b7c10e966319ce0031d1bfb841600b52"
  },
  {
    "url": "home/openuphorizons/other/2_maven.html",
    "revision": "4b1c9bf8d396020be409b9a7f2d2ff0a"
  },
  {
    "url": "home/openuphorizons/other/3_springboot_mybatis.html",
    "revision": "a59a6c9d8a2ea91f1dcd32a48c208502"
  },
  {
    "url": "home/openuphorizons/other/4_github.html",
    "revision": "48d3bdd3d89371f0fd0e34f98c37f485"
  },
  {
    "url": "home/openuphorizons/other/5_io.html",
    "revision": "60fbbf1ca2f13a066993314d44d09839"
  },
  {
    "url": "home/openuphorizons/other/6_classLoad.html",
    "revision": "cc1fa02cbece7d25c735eca37541c77c"
  },
  {
    "url": "home/openuphorizons/other/7_code.html",
    "revision": "9a426f200d37647a902df48cdfae681f"
  },
  {
    "url": "home/openuphorizons/other/8_youhua.html",
    "revision": "172cfd6aa480fd5770e5a74322ae249f"
  },
  {
    "url": "home/openuphorizons/other/99_atmsproject.html",
    "revision": "5432e39675a12d4c9f598b4433f3b969"
  },
  {
    "url": "home/openuphorizons/other/index.html",
    "revision": "71338f1854af4f4d88fcd04a5c5f9289"
  },
  {
    "url": "home/openuphorizons/trap/1_javatrap.html",
    "revision": "a6f8e10400b5ca2ebd66e0d581cb3172"
  },
  {
    "url": "home/openuphorizons/trap/2_trap.html",
    "revision": "c94ae58e7bf77a95093300e5af56337e"
  },
  {
    "url": "home/openuphorizons/trap/index.html",
    "revision": "44a3941b6e6f163c2b75663fe70407de"
  },
  {
    "url": "img/cloud/cloud.png",
    "revision": "ce7562afd7d5f0b1005cb9c8f3f3a0c5"
  },
  {
    "url": "img/current/aqs1.png",
    "revision": "77f39fab9be5e9d3527a31fcb74261fc"
  },
  {
    "url": "img/current/aqs2.png",
    "revision": "897c8d5a1603145dee00efaa5ab89dda"
  },
  {
    "url": "img/database/mysql1.png",
    "revision": "d4dec9a118a0d90accb32f55772a3713"
  },
  {
    "url": "img/database/mysql2.png",
    "revision": "20f6d27f9e9bdc85bb56191d7882265d"
  },
  {
    "url": "img/deploy/docker1.png",
    "revision": "d1ace127904a7a00afc1f559bb8cd4fe"
  },
  {
    "url": "img/deploy/docker2.png",
    "revision": "1774676184117a7651da679303f7f2a5"
  },
  {
    "url": "img/deploy/sentinel1.jpg",
    "revision": "1706368fe4523f4811eade85d5fc7fb4"
  },
  {
    "url": "img/deploy/sentinel2.png",
    "revision": "a8de847fbdf64d2e7f7df76275459fd5"
  },
  {
    "url": "img/deployplatform/jenkins.png",
    "revision": "2e0c6ca4ab46fbb385e8503b60b12233"
  },
  {
    "url": "img/deployplatform/jenkins1.png",
    "revision": "3ea67bc961e046209a55a488712ef50c"
  },
  {
    "url": "img/deployplatform/jenkins10.png",
    "revision": "065af16f26106d70c26604bb4feccd1a"
  },
  {
    "url": "img/deployplatform/jenkins11.png",
    "revision": "3fcd205821c8ded6a3f6799875e45579"
  },
  {
    "url": "img/deployplatform/jenkins12.png",
    "revision": "055ce7e564ac47ee56b36c550dd1764f"
  },
  {
    "url": "img/deployplatform/jenkins13.png",
    "revision": "365e63f675ef9b2486c40cfb926dabf3"
  },
  {
    "url": "img/deployplatform/jenkins14.png",
    "revision": "9ef5f2a4fc03fbe937f33318b3e24e51"
  },
  {
    "url": "img/deployplatform/jenkins15.png",
    "revision": "84b8d228eb4fafccd5d205418d297ed2"
  },
  {
    "url": "img/deployplatform/jenkins16.png",
    "revision": "a1c2e5ddf06cc21b14771186a9f5852a"
  },
  {
    "url": "img/deployplatform/jenkins17.png",
    "revision": "37a40e12d7082e5fda67c896bfcd601a"
  },
  {
    "url": "img/deployplatform/jenkins18.png",
    "revision": "740fdfba4f792d7a560c47d7c39fd8bf"
  },
  {
    "url": "img/deployplatform/jenkins19.png",
    "revision": "407c5450e61d39859e3e26c0c8727c26"
  },
  {
    "url": "img/deployplatform/jenkins2.png",
    "revision": "6aeb71fb66c002c67181178beaeca309"
  },
  {
    "url": "img/deployplatform/jenkins20.png",
    "revision": "8980e42b185b9b53384fdabd37ea2be2"
  },
  {
    "url": "img/deployplatform/jenkins21.png",
    "revision": "013fc537bc456c646448167aae7d9e64"
  },
  {
    "url": "img/deployplatform/jenkins3.png",
    "revision": "4598aded1b84d358914e8e0718115419"
  },
  {
    "url": "img/deployplatform/jenkins4.png",
    "revision": "3b019c7bba0a7bcf39e3c25a9d5beaad"
  },
  {
    "url": "img/deployplatform/jenkins5.png",
    "revision": "288e661adee98ea85f3f4af20ff93926"
  },
  {
    "url": "img/deployplatform/jenkins6.png",
    "revision": "534488ec6f7edcbbfa40b9abf574c1a9"
  },
  {
    "url": "img/deployplatform/jenkins7.png",
    "revision": "d8b0e6cfcb6bda45803f9558836f2d18"
  },
  {
    "url": "img/deployplatform/jenkins8.png",
    "revision": "464920fcdbe92d114b0b4328338fdf5a"
  },
  {
    "url": "img/deployplatform/jenkins9.png",
    "revision": "adbbb7561d508cb0b4186763aa486ec2"
  },
  {
    "url": "img/dockerinstall/mysql1.png",
    "revision": "716947b84734dff9e21c6b86cbbf38d6"
  },
  {
    "url": "img/dockerinstall/mysql2.png",
    "revision": "e3af68b31818a67dc98889edc1d04257"
  },
  {
    "url": "img/dockerinstall/tomcat1.png",
    "revision": "bfe4965b12ca60bbcab244af86280dec"
  },
  {
    "url": "img/home.jpg",
    "revision": "54e10601aa1489a7139454600820cf81"
  },
  {
    "url": "img/interviewtopic/cas1.png",
    "revision": "8cf8ffc5bd45e40bd8dd3ebc7b4aacb6"
  },
  {
    "url": "img/interviewtopic/cas2.png",
    "revision": "32c7f31786a0cfee9f7c292b0a0ebe85"
  },
  {
    "url": "img/interviewtopic/cas3.png",
    "revision": "5a33313bad09db0f4f21b556c6e650bc"
  },
  {
    "url": "img/interviewtopic/jvm.jpg",
    "revision": "b80a8d0f954d7d99966000e26f56481f"
  },
  {
    "url": "img/interviewtopic/jvm1.png",
    "revision": "d0c892a52ff8ef3df3687bf89b445de4"
  },
  {
    "url": "img/interviewtopic/jvm10.png",
    "revision": "4bf4bd022bed369a2c5783f5eb919cd3"
  },
  {
    "url": "img/interviewtopic/jvm11.png",
    "revision": "cd6abc07b7bab1b1e4e67433f1eaa369"
  },
  {
    "url": "img/interviewtopic/jvm12.png",
    "revision": "8591832d2db0a70d9fbcc1c60a1d80eb"
  },
  {
    "url": "img/interviewtopic/jvm13.png",
    "revision": "a7dfdaabe61d04c0930169b1bf42ff5b"
  },
  {
    "url": "img/interviewtopic/jvm2.png",
    "revision": "9afd0a7f45ca083108e574f1ba2042d7"
  },
  {
    "url": "img/interviewtopic/jvm3.png",
    "revision": "1d1d5360ef4a829697fb5697df0e6466"
  },
  {
    "url": "img/interviewtopic/jvm4.png",
    "revision": "9afd0a7f45ca083108e574f1ba2042d7"
  },
  {
    "url": "img/interviewtopic/jvm5.png",
    "revision": "7eb2ecbf71d5a594b7ee0755d30be6bd"
  },
  {
    "url": "img/interviewtopic/jvm6.png",
    "revision": "e9aec87cc0d852b6b1fbc2d82ce41114"
  },
  {
    "url": "img/interviewtopic/jvm7.png",
    "revision": "ffcb57d450d11172a005124885219e8e"
  },
  {
    "url": "img/interviewtopic/jvm8.png",
    "revision": "f5720e58b1eb9cba7875231daa31915d"
  },
  {
    "url": "img/interviewtopic/jvm9.png",
    "revision": "4a891407cf0f7040b1d42a818102908e"
  },
  {
    "url": "img/interviewtopic/sync1.png",
    "revision": "f58f58f9acae090490015ff2a9bd557f"
  },
  {
    "url": "img/interviewtopic/sync10.png",
    "revision": "00a3143402311825a13dfde3d400ccb5"
  },
  {
    "url": "img/interviewtopic/sync2.png",
    "revision": "d47c21eff05f719e4e4fdfc47c58b17d"
  },
  {
    "url": "img/interviewtopic/sync3.png",
    "revision": "18ae3c0d918652533530290b3928865e"
  },
  {
    "url": "img/interviewtopic/sync4.png",
    "revision": "cdcd71cd0e305f19fd02e14a21de7592"
  },
  {
    "url": "img/interviewtopic/sync5.png",
    "revision": "103fa244084df29bc3c62a8352036541"
  },
  {
    "url": "img/interviewtopic/sync6.png",
    "revision": "0932013a250a776d7194012fb3279c3d"
  },
  {
    "url": "img/interviewtopic/sync7.png",
    "revision": "6ce6ec080cbe2ac8ba308d603982bca6"
  },
  {
    "url": "img/interviewtopic/sync8.png",
    "revision": "a34cb4e1d883781ddd9dca26e2455f62"
  },
  {
    "url": "img/interviewtopic/sync9.png",
    "revision": "2226786ae6b74433c898e1c8a8a386cb"
  },
  {
    "url": "img/java/class.png",
    "revision": "b1a0fa65385ca2b0fdd8924373b13d33"
  },
  {
    "url": "img/jvm/gc.png",
    "revision": "fa5ccd4ca6302f114fd14a8b8fba16bd"
  },
  {
    "url": "img/jvm/gc2.png",
    "revision": "c9cfcedf797d32eeb4ba386e3af212fc"
  },
  {
    "url": "img/jvm/markword.png",
    "revision": "a3e7d8985e4021eaf6004614f06c1f54"
  },
  {
    "url": "img/logo.png",
    "revision": "b90a8631fd41e6988c83a80907908a67"
  },
  {
    "url": "img/microservice/redis1.png",
    "revision": "91469c03a7047ab672873f07a00f6c90"
  },
  {
    "url": "img/microservice/redis2.png",
    "revision": "1706368fe4523f4811eade85d5fc7fb4"
  },
  {
    "url": "img/microservice/redis3.png",
    "revision": "a8de847fbdf64d2e7f7df76275459fd5"
  },
  {
    "url": "img/microservice/zk1.png",
    "revision": "17f305b792dbd6a92f794b3efd88afb0"
  },
  {
    "url": "img/microservice/zk10.png",
    "revision": "9bfa989612db5772771c67d732e7a1b6"
  },
  {
    "url": "img/microservice/zk11.png",
    "revision": "e92142bebaa9dbfe8b5fc9c4ad80879f"
  },
  {
    "url": "img/microservice/zk12.png",
    "revision": "cc1e9352e145a1b669fd8b2ca1cce8e6"
  },
  {
    "url": "img/microservice/zk13.png",
    "revision": "e8893be55aba4cbbe18798902d15d8c5"
  },
  {
    "url": "img/microservice/zk14.png",
    "revision": "f90d0855b99b750d6b43295add605583"
  },
  {
    "url": "img/microservice/zk15.png",
    "revision": "e49b942c4a5e6113b7e8e0fc8e07d654"
  },
  {
    "url": "img/microservice/zk16.png",
    "revision": "5e97c8fe3c15e71de1e3c2199e98cd71"
  },
  {
    "url": "img/microservice/zk17.png",
    "revision": "bec666c9bc58ef31afc182828577b599"
  },
  {
    "url": "img/microservice/zk18.png",
    "revision": "7805d9f292a761fed0b71807f8c1b8df"
  },
  {
    "url": "img/microservice/zk19.png",
    "revision": "943fc93570cb48e6eaa8cdfab5c1e056"
  },
  {
    "url": "img/microservice/zk2.png",
    "revision": "4b15fb9d7e3a9f5cec5fe6bdad5cf089"
  },
  {
    "url": "img/microservice/zk20.png",
    "revision": "98d7c69ec4111887beca181f4d749383"
  },
  {
    "url": "img/microservice/zk3.png",
    "revision": "a74af15a1dea907793ac2e2f33c388ac"
  },
  {
    "url": "img/microservice/zk4.png",
    "revision": "45c64e904518cd37721d029c24b6d68d"
  },
  {
    "url": "img/microservice/zk5.png",
    "revision": "979110cd6d8022f06063f78b9158eafd"
  },
  {
    "url": "img/microservice/zk6.png",
    "revision": "b48d38ab3f899b66320898e5c090b73e"
  },
  {
    "url": "img/microservice/zk7.png",
    "revision": "07250cce6d9549f56672b6975d428d09"
  },
  {
    "url": "img/microservice/zk8.png",
    "revision": "979110cd6d8022f06063f78b9158eafd"
  },
  {
    "url": "img/microservice/zk9.png",
    "revision": "509e25499431fabc0b69d1b0fb59b955"
  },
  {
    "url": "img/mysql/mysql_index1.png",
    "revision": "51453d14018d08a660a4fea9cd0035e7"
  },
  {
    "url": "img/mysql/mysql_index10.png",
    "revision": "ef2592856d40a7803ac65be6432e890f"
  },
  {
    "url": "img/mysql/mysql_index2.png",
    "revision": "91e7f468675bbaf2612c32a7b3ceaf70"
  },
  {
    "url": "img/mysql/mysql_index3.png",
    "revision": "ff9992b0e69b6824883ddfb7bfda30be"
  },
  {
    "url": "img/mysql/mysql_index4.png",
    "revision": "8473892b67c2ea7f2d7e3830c01afebc"
  },
  {
    "url": "img/mysql/mysql_index5.png",
    "revision": "89eb5584973aac18e5bea8c337ce3be3"
  },
  {
    "url": "img/mysql/mysql_index6.png",
    "revision": "d49d260fc1eb8f992df0401b70d70e3d"
  },
  {
    "url": "img/mysql/mysql_index7.png",
    "revision": "09620bfabe1fb61678f1427df2f83933"
  },
  {
    "url": "img/mysql/mysql_index8.png",
    "revision": "c179893063594d46fef7c77311843c99"
  },
  {
    "url": "img/mysql/mysql_index9.png",
    "revision": "48912a5316289cbff9673a4a600ca955"
  },
  {
    "url": "img/openuphorizons/classloader.png",
    "revision": "f0c881e86eb4acfec288e05fb30e78b6"
  },
  {
    "url": "img/other/io.png",
    "revision": "8e477cad17c969784db7f5f0b4a7812f"
  },
  {
    "url": "img/other/io1.jpeg",
    "revision": "a904ee139a9f4665c8edfbe6ba80176c"
  },
  {
    "url": "img/other/io2.jpeg",
    "revision": "0de305ea3f1b30ec8bbf1ac449fc54de"
  },
  {
    "url": "img/pwc/gitlablogin.png",
    "revision": "46785dfc74a19000c6d9c6bfef7a5418"
  },
  {
    "url": "img/pwc/me.jpg",
    "revision": "fabc4e777f3219edaf074f5c6670cbc9"
  },
  {
    "url": "img/pwc/nexus.png",
    "revision": "ff8b87f5503f42c1d14e25a55b2abc1d"
  },
  {
    "url": "img/pwc/nginx1.png",
    "revision": "e57d84826ec984522a66bf28539a31a8"
  },
  {
    "url": "img/pwc/nginx2.png",
    "revision": "4ca9baee43b15f576ad5015475de40f2"
  },
  {
    "url": "img/pwc/nginx3.png",
    "revision": "13c03970b0903e7b2641741bba142584"
  },
  {
    "url": "img/pwc/registry.png",
    "revision": "55bc23be4dc50172d0fae19a5c5e86a8"
  },
  {
    "url": "img/pwc/registry1.png",
    "revision": "921008b1b3422b3d9f8282edce7fd2ce"
  },
  {
    "url": "img/pwc/registry2.png",
    "revision": "936a0382b826d09ae523a25b3e959bd8"
  },
  {
    "url": "img/pwc/registry3.png",
    "revision": "08808f17a4e9ca65171f47d53e8b06cc"
  },
  {
    "url": "img/pwc/ssh_key_1.png",
    "revision": "dab7542d7fde7078602e4bd7c2352da2"
  },
  {
    "url": "img/pwc/sshkey2.png",
    "revision": "660ea086d75cd861d7af2940f87cab1a"
  },
  {
    "url": "img/pwc/sshkey3.png",
    "revision": "f2ae9fd9f6f539cb345f33cff434de5e"
  },
  {
    "url": "img/pwc/sshkey4.png",
    "revision": "39f2ed69c9ccd573b9f0d576d30c5b53"
  },
  {
    "url": "img/pwc/webui.png",
    "revision": "73d00d45c19d153acf23096a46a1bdfa"
  },
  {
    "url": "img/spring/spring-1.png",
    "revision": "10115b867faacb473c8ab03bbae2d153"
  },
  {
    "url": "img/touch/144x144logo.png",
    "revision": "45f8b3f82016697865987fe95527997f"
  },
  {
    "url": "img/touch/168x168logo.png",
    "revision": "613456d92c71894eee8124989e220a4c"
  },
  {
    "url": "img/touch/192x192logo.png",
    "revision": "1f4dc30546b3afcac38a711bed6f9ec9"
  },
  {
    "url": "img/touch/48x48logo.png",
    "revision": "56ec1f907e7207bf7ab52dfdd295a130"
  },
  {
    "url": "img/touch/72x72logo.png",
    "revision": "5721c15d563f317326a5d895c10183c7"
  },
  {
    "url": "img/touch/96x96logo.png",
    "revision": "beeca0c00053d9894128873521bcbf6f"
  },
  {
    "url": "img/video/live1.0.png",
    "revision": "ca7447c5ae40738513043c1c5e54ea93"
  },
  {
    "url": "img/video/live2.0.png",
    "revision": "a334e0e1971d8b8756033abcacafb2a8"
  },
  {
    "url": "index.html",
    "revision": "7c8e96fba9d1cfce1f3a915305d0544e"
  },
  {
    "url": "massage/index.html",
    "revision": "cfa69d30760cbf8398659f9d020ccdd3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
