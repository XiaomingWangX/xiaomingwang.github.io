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
    "revision": "6f8249f79c3e3333187ad41f4152ea83"
  },
  {
    "url": "about/index.html",
    "revision": "19cc44c43e8d1eec9383523ce1f281db"
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
    "url": "assets/js/100.cd6f4244.js",
    "revision": "7dcdd3b246daac2ae08ffc3e8201d174"
  },
  {
    "url": "assets/js/101.ffeaf07e.js",
    "revision": "ea0d17f40f50a3b44086c3a1badabd42"
  },
  {
    "url": "assets/js/102.b24ba80a.js",
    "revision": "f6204ac20d6a4e99fef6c23ee43733c1"
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
    "url": "assets/js/114.17985435.js",
    "revision": "3f1548aaeb54995b3bfca8a6fad7daba"
  },
  {
    "url": "assets/js/115.7d2b24ae.js",
    "revision": "aaf9a70ecc7771e6f0d56712d07a7eb0"
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
    "url": "assets/js/121.ca41d59c.js",
    "revision": "799ba420edc44035e4cc63a869d69957"
  },
  {
    "url": "assets/js/122.d441a7bf.js",
    "revision": "373a2b9f3d39b749d5d9efaf64ff2aad"
  },
  {
    "url": "assets/js/123.a82da449.js",
    "revision": "b63bf46fef6cb6412e2fc2ce7478d5c3"
  },
  {
    "url": "assets/js/124.82cd6748.js",
    "revision": "d87758c6069f40b9fa9c759f5677cf75"
  },
  {
    "url": "assets/js/125.880702e1.js",
    "revision": "c7992d446ee22f40325c5e3a7d5fe933"
  },
  {
    "url": "assets/js/126.bfe67f56.js",
    "revision": "72d7d972bb9cb60af8bddec07483f855"
  },
  {
    "url": "assets/js/127.49d6be7f.js",
    "revision": "ff55b85c54c7ed922348d7b4227ac246"
  },
  {
    "url": "assets/js/128.012915df.js",
    "revision": "2a28e0acbe61e81e47fa13a692407c96"
  },
  {
    "url": "assets/js/129.8132d213.js",
    "revision": "4628b31c2386f33338f1814187125ef0"
  },
  {
    "url": "assets/js/13.9dd85c43.js",
    "revision": "a4ce61926c28ab8a939cdab08551dae2"
  },
  {
    "url": "assets/js/130.b7243078.js",
    "revision": "f47abf431c2dae57b38074fe0ff615be"
  },
  {
    "url": "assets/js/131.109a1bba.js",
    "revision": "808f933c2019407c826502d6c60e4537"
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
    "url": "assets/js/134.cb671e4a.js",
    "revision": "7ac779d7d576a9930cfdca73cc9147fd"
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
    "url": "assets/js/138.c512e570.js",
    "revision": "1862c51655ec05360aafa61c4857c6bb"
  },
  {
    "url": "assets/js/139.bd1765e3.js",
    "revision": "85ee3a380c189f5f4b79978b429f056b"
  },
  {
    "url": "assets/js/14.7be94b52.js",
    "revision": "7cb7a51a542b270eda1ffc95281fe8f5"
  },
  {
    "url": "assets/js/140.f7846d06.js",
    "revision": "2a3de74bf6dcab7bda962c1b630fdb4b"
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
    "url": "assets/js/143.76cf76e9.js",
    "revision": "04236d595752d10ab10c279d307b810f"
  },
  {
    "url": "assets/js/144.d87a7bfd.js",
    "revision": "11610b1dd842af12f743d3126c78a64e"
  },
  {
    "url": "assets/js/145.8ea79a9b.js",
    "revision": "67223a9c0d1792e950eb97ae823b5bbb"
  },
  {
    "url": "assets/js/146.d6dfa600.js",
    "revision": "2d02c38647d8980a1573e9020d227992"
  },
  {
    "url": "assets/js/147.dc038554.js",
    "revision": "ed78ea02ed97213f526fd946bb7d09a4"
  },
  {
    "url": "assets/js/15.e2ba3077.js",
    "revision": "0dfb79e7e9ce8f7be004b755127c3dd9"
  },
  {
    "url": "assets/js/16.d62ee741.js",
    "revision": "0bb021737f4082fcc8048864c2056b3e"
  },
  {
    "url": "assets/js/17.2adcdeb1.js",
    "revision": "1d814e425377c920e5883138f33f14fd"
  },
  {
    "url": "assets/js/18.3473357a.js",
    "revision": "66442f47ad4bc898f7da8e31374faae4"
  },
  {
    "url": "assets/js/19.108c87f1.js",
    "revision": "1e39ca959aa319261c86499bfac36983"
  },
  {
    "url": "assets/js/2.f1ff662b.js",
    "revision": "9cdbfc96357b5231553bcea17c90ed29"
  },
  {
    "url": "assets/js/20.846cde83.js",
    "revision": "61fb006f08fb2871d48d4d87a155db41"
  },
  {
    "url": "assets/js/21.e4012800.js",
    "revision": "0446d44c8d05d173e137192a0942dcbd"
  },
  {
    "url": "assets/js/22.4cf1d2a7.js",
    "revision": "1ea21fd0433167c8738aeeab4e8b710e"
  },
  {
    "url": "assets/js/23.8b3de694.js",
    "revision": "a14f5f5b22ac30e7148b018755a85091"
  },
  {
    "url": "assets/js/24.cf785a0f.js",
    "revision": "ff81ad30d38d92442c80597e29d773b8"
  },
  {
    "url": "assets/js/25.6201a8b0.js",
    "revision": "3241e9197e983aa140c099ea1fa6ce91"
  },
  {
    "url": "assets/js/26.b80b1a20.js",
    "revision": "fde09515b729429bffd6b4a2c754c3bc"
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
    "url": "assets/js/45.a2616767.js",
    "revision": "de018310a16650f5feb90386d677d4de"
  },
  {
    "url": "assets/js/46.f3bbff14.js",
    "revision": "a6c3f695a3f9cf0d423c7abc40754310"
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
    "url": "assets/js/63.c378e38a.js",
    "revision": "923b82638492dfc5cb185d511d0ba0be"
  },
  {
    "url": "assets/js/64.5d3d5bbb.js",
    "revision": "75acb64111f264b0d7a4883685a5e346"
  },
  {
    "url": "assets/js/65.97ae37fc.js",
    "revision": "146f247160e67463922bc12666638742"
  },
  {
    "url": "assets/js/66.be836d76.js",
    "revision": "a47a4f19bddaec46400c2c2021be5b58"
  },
  {
    "url": "assets/js/67.2dc8b6b4.js",
    "revision": "a1e78f6e78c713ef1bc9a6b58874b276"
  },
  {
    "url": "assets/js/68.9028df01.js",
    "revision": "78caa9615d2ec35a1b99f9ea4d943755"
  },
  {
    "url": "assets/js/69.cb72dad2.js",
    "revision": "e649e486a2118b6a078369a9e650d5ab"
  },
  {
    "url": "assets/js/7.9e51b661.js",
    "revision": "3b9fbf181ade6ea645b50b9da37f45f0"
  },
  {
    "url": "assets/js/70.8ef8a774.js",
    "revision": "332fb8d9f908b54c53f8545c9d8e5324"
  },
  {
    "url": "assets/js/71.230d7453.js",
    "revision": "dfa0e58759a5617d2f60a94b61b63d8a"
  },
  {
    "url": "assets/js/72.0e93e0c0.js",
    "revision": "89976ca9e285d8ff72e7c6d35841181d"
  },
  {
    "url": "assets/js/73.48c1f034.js",
    "revision": "97f7edefbe281871243a9ee191dceef4"
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
    "url": "assets/js/78.49154e73.js",
    "revision": "a7aba3726e528ec25c18bfcd61e37382"
  },
  {
    "url": "assets/js/79.88dbd81b.js",
    "revision": "e835b20b4fe3673c47a5ab7a56d2ffce"
  },
  {
    "url": "assets/js/8.da3aa39e.js",
    "revision": "1935ff99151ffb3bdd9a65b752b4bdf7"
  },
  {
    "url": "assets/js/80.2396724f.js",
    "revision": "9e400d73ef466538c84aed6ad1d42bde"
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
    "url": "assets/js/86.7874595e.js",
    "revision": "107845749736d4cd0f1d4fd5bda3ed43"
  },
  {
    "url": "assets/js/87.b5cd962d.js",
    "revision": "3a206b52bb0fb9cf2154a43c3d2a3c51"
  },
  {
    "url": "assets/js/88.bf0c5146.js",
    "revision": "3a8f8f08fd4e5d904f5fbc0851e9995e"
  },
  {
    "url": "assets/js/89.030a4ce1.js",
    "revision": "77cb8a66c9fd8a42c64f29c12cd511b3"
  },
  {
    "url": "assets/js/9.85cc9da5.js",
    "revision": "23bcbc73069d0f339b959b53098a5381"
  },
  {
    "url": "assets/js/90.d1ce3328.js",
    "revision": "78dfa2dc1e5136d5b0c41cd787cd52d6"
  },
  {
    "url": "assets/js/91.518dba8c.js",
    "revision": "5c5c89a382e75a3440c0f5546dc7266e"
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
    "url": "assets/js/95.84d0bf78.js",
    "revision": "d51916d92cb61e9132ac1cb68685ce68"
  },
  {
    "url": "assets/js/96.96738fb5.js",
    "revision": "7bb2d0d8a94145c787ff77ed040ffaa7"
  },
  {
    "url": "assets/js/97.8b8ab96a.js",
    "revision": "9c93d04cb7c949695ec7a12852cb3146"
  },
  {
    "url": "assets/js/98.8f1e8d20.js",
    "revision": "708766ffaa8cdd8dc2679f778e9ff10a"
  },
  {
    "url": "assets/js/99.f20382fc.js",
    "revision": "dff163c7bc6e3cd4d65abedfdf394f6b"
  },
  {
    "url": "assets/js/app.2ec8479d.js",
    "revision": "20a15c6350cea06abcaa47d6855d85fc"
  },
  {
    "url": "home/backendtechnology/current/0_basic.html",
    "revision": "62a4c7d82d1f2c0dfac6b940f0061330"
  },
  {
    "url": "home/backendtechnology/current/1_Atomic.html",
    "revision": "7113125f595e89eaf453d5bea23145ad"
  },
  {
    "url": "home/backendtechnology/current/10_ThreadCommunication.html",
    "revision": "3bd0fdff6c65b98d27aa74f2f2a3197c"
  },
  {
    "url": "home/backendtechnology/current/12_Case.html",
    "revision": "1e5b769866e40c96db2580b04e5ae6fe"
  },
  {
    "url": "home/backendtechnology/current/13_AbstractQueuedSynchronizer.html",
    "revision": "bf0e70721f8d69514e486420470617ab"
  },
  {
    "url": "home/backendtechnology/current/14_selfLock.html",
    "revision": "5173b2fc8018219668d32ec21720a513"
  },
  {
    "url": "home/backendtechnology/current/15_selfLock1.html",
    "revision": "6ee34a63a7feee833c182916370a53f2"
  },
  {
    "url": "home/backendtechnology/current/16_selfLock2.html",
    "revision": "f9f5d7ed9ba94f2ed90c28f00a66c9fe"
  },
  {
    "url": "home/backendtechnology/current/17_customProducer.html",
    "revision": "04eea0bc0afe18182a5b11ef70673b1b"
  },
  {
    "url": "home/backendtechnology/current/18_CyclicBarrier.html",
    "revision": "8dbbf990c020350463ce45f43bd0db59"
  },
  {
    "url": "home/backendtechnology/current/19_MarriagePhaser.html",
    "revision": "b716299303539fedbe602644e476f201"
  },
  {
    "url": "home/backendtechnology/current/2_synchronized.html",
    "revision": "162c967de8f13d79e7339be2c0def8c5"
  },
  {
    "url": "home/backendtechnology/current/20_ReadWriteLock.html",
    "revision": "42e69b50f33ed2409b4af8cfb6214bda"
  },
  {
    "url": "home/backendtechnology/current/21_Semaphore.html",
    "revision": "2dd1807c8b77a7f1fdc5614aa79c976b"
  },
  {
    "url": "home/backendtechnology/current/22_ThreadPool.html",
    "revision": "b52e5a9c6ff6e8d24c4a3b1cb2646740"
  },
  {
    "url": "home/backendtechnology/current/3_volatile.html",
    "revision": "f1f772ee130bac2d2ac373cf2256ecf8"
  },
  {
    "url": "home/backendtechnology/current/4_ReentrantLock.html",
    "revision": "a1cf70e33e9482d7af7fd9fe3c3bdd05"
  },
  {
    "url": "home/backendtechnology/current/5_Lock.html",
    "revision": "77fc7c009de4846d54e3c669696615c1"
  },
  {
    "url": "home/backendtechnology/current/6_threadpool.html",
    "revision": "85fd75fcb8886f8a93e5e60654ed78b2"
  },
  {
    "url": "home/backendtechnology/current/7_collection.html",
    "revision": "1032beb014cf9909983147ce070db511"
  },
  {
    "url": "home/backendtechnology/current/7.1_threadLocal.html",
    "revision": "0f6bdf3d45673d42a4700f1b4af76020"
  },
  {
    "url": "home/backendtechnology/current/8_comprehensive.html",
    "revision": "b297243695f80aaf086b5c5482b8306c"
  },
  {
    "url": "home/backendtechnology/current/9_semaphoreAndCyclicBarrier.html",
    "revision": "4491a86d73e68f01ef5766c6a6e22558"
  },
  {
    "url": "home/backendtechnology/current/index.html",
    "revision": "9ffa024d4e7c3a27b95dc1998db8948f"
  },
  {
    "url": "home/backendtechnology/database/1_mysql.html",
    "revision": "f554e95fa160c1475ae0d6243675628a"
  },
  {
    "url": "home/backendtechnology/database/2_dataoptimization.html",
    "revision": "ae08489104aaf8971ecb8d3b3166bfbc"
  },
  {
    "url": "home/backendtechnology/database/3_index.html",
    "revision": "5ace30fbac8dc7ffd890adc5d7d65b03"
  },
  {
    "url": "home/backendtechnology/database/4_xingneng.html",
    "revision": "dd24daeef21ba56ab448391de4686de6"
  },
  {
    "url": "home/backendtechnology/database/5_transaction.html",
    "revision": "0510b6cb1ce7488a8bc4b1292dd80c67"
  },
  {
    "url": "home/backendtechnology/database/5_youhua.html",
    "revision": "2cac97a2d958b90911e1dc948e6938a5"
  },
  {
    "url": "home/backendtechnology/database/index.html",
    "revision": "9adb21be19e15b7787e6d1725102c2b2"
  },
  {
    "url": "home/backendtechnology/datastructure/0_ArrayQueue.html",
    "revision": "297810eb572ac9fa6667de26b42185bf"
  },
  {
    "url": "home/backendtechnology/datastructure/1_CircleArrayQueue.html",
    "revision": "26e62782b2e3c120d9180cdce5cc2339"
  },
  {
    "url": "home/backendtechnology/datastructure/2_singlelinklist.html",
    "revision": "108df7a9d38e3ac496f356cac2ef6e1f"
  },
  {
    "url": "home/backendtechnology/datastructure/3_loadbalance.html",
    "revision": "81aa439b01c9b07e950ddda644201f78"
  },
  {
    "url": "home/backendtechnology/datastructure/index.html",
    "revision": "4bacc2682a47b4a189054dfaf61e4204"
  },
  {
    "url": "home/backendtechnology/deploy/0_linux.html",
    "revision": "d2d59b64cd20ab5968f41f68b19e1179"
  },
  {
    "url": "home/backendtechnology/deploy/1_docker.html",
    "revision": "836c15b6cdcf114ed6bb91a49d060034"
  },
  {
    "url": "home/backendtechnology/deploy/10_nginx.html",
    "revision": "0312b738f8cb4cb7c7b6c3921f96343a"
  },
  {
    "url": "home/backendtechnology/deploy/11_nginx.html",
    "revision": "de92d949edf0087b5dbebacb799bf3df"
  },
  {
    "url": "home/backendtechnology/deploy/12_nginx.html",
    "revision": "18ca75999dd2e78e9b00c5599e985a72"
  },
  {
    "url": "home/backendtechnology/deploy/13_nginx.html",
    "revision": "e8369b41dc12a93392ea827689d248c8"
  },
  {
    "url": "home/backendtechnology/deploy/2_docker.html",
    "revision": "f71438e3ebc04f8ec66386e16fa03c53"
  },
  {
    "url": "home/backendtechnology/deploy/3_docker.html",
    "revision": "ce28294526d8bc6c3b662fee551a627b"
  },
  {
    "url": "home/backendtechnology/deploy/4_docker.html",
    "revision": "a3bf0b054ae8e0681497910993185e1d"
  },
  {
    "url": "home/backendtechnology/deploy/5_docker.html",
    "revision": "0880cd698080debdf0202174ba3c8488"
  },
  {
    "url": "home/backendtechnology/deploy/6_nginx.html",
    "revision": "e50abfa44d911a20ad052cd4478adfbb"
  },
  {
    "url": "home/backendtechnology/deploy/6.1_docker.html",
    "revision": "d97760fba029b2f5c7903dc47d7ff1ec"
  },
  {
    "url": "home/backendtechnology/deploy/7_nginx.html",
    "revision": "8c0ead0d01956c12504b66e6f94ba465"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/1_gitlab.html",
    "revision": "e8ba39ffde1848e0c87d73130a334981"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/2_nexus.html",
    "revision": "aeff83ef9c50d61a9cf57aaa8ac6123e"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/3_registry.html",
    "revision": "361c6bb7b862c865f69c15a574487ebb"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/4_rellaydeploy.html",
    "revision": "3ce20b84ed5b3466cb4c3227336f7819"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/5_gitlab.html",
    "revision": "79f37a3d7bd281aa3c4ef0c9b9d9db0b"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/6_Jenkins.html",
    "revision": "5e7ec01ee52dacec94ec25b9d61981fc"
  },
  {
    "url": "home/backendtechnology/deploy/deployplatform/index.html",
    "revision": "334c7143a04fe60519c454ceade3af39"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/0_mysql.html",
    "revision": "122a5560916fdff94f8ad39de02936a6"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/1_tomcat.html",
    "revision": "d32503534e78c7cf306242c1bd4a7ca5"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/2_nginx.html",
    "revision": "a4a65839338f68fb31d8ca8c5076ce80"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/3_sentinel.html",
    "revision": "14d4f8f327f12263dd8a7320f9428bd3"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/4_portainer.html",
    "revision": "29bdb29c567a42ce847e9a1b23571559"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/5_rabbitmq.html",
    "revision": "6d3a5e9a1796901ce31c74d8932e6e51"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/6_blog_nginx.html",
    "revision": "f38f9068abc1afc53039a3e733dd721e"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/7_es.html",
    "revision": "6dea67fbe045b4c753a0df6ee4d599b6"
  },
  {
    "url": "home/backendtechnology/deploy/dockerinstall/index.html",
    "revision": "f433ed6f242bccc65ecd549c33db6585"
  },
  {
    "url": "home/backendtechnology/deploy/index.html",
    "revision": "3dd21deeeee8c0c6a70c8ef980fb0533"
  },
  {
    "url": "home/backendtechnology/design/0_adapter.html",
    "revision": "183e1c08407b7df4b5ef6d326d4243fb"
  },
  {
    "url": "home/backendtechnology/design/1_decorative.html",
    "revision": "f63e461eba4921e758daa6a2febd4da4"
  },
  {
    "url": "home/backendtechnology/design/10_singleton.html",
    "revision": "4174a6c413b3ad5dd2101f93c5a14f94"
  },
  {
    "url": "home/backendtechnology/design/11_proxyCglib.html",
    "revision": "52cabd07f9ebb8d434647520e09b0c85"
  },
  {
    "url": "home/backendtechnology/design/12_proxyJdk.html",
    "revision": "ba784d3c3d8c4a08fa72b43aab17b511"
  },
  {
    "url": "home/backendtechnology/design/13_ownProxy.html",
    "revision": "5859476c1408921162328a2a3e67c635"
  },
  {
    "url": "home/backendtechnology/design/14_chain.html",
    "revision": "17b225f701b6754e0f525bbef9196c5c"
  },
  {
    "url": "home/backendtechnology/design/15_builder.html",
    "revision": "c83b8a158b22f65b3b62d55da78604e3"
  },
  {
    "url": "home/backendtechnology/design/2_delegation.html",
    "revision": "bdbbcac051b1965a298ec6e757739f24"
  },
  {
    "url": "home/backendtechnology/design/3_simpleFactory.html",
    "revision": "db65f5ed920810d72642e83b2f6d9702"
  },
  {
    "url": "home/backendtechnology/design/4_abstractFactory.html",
    "revision": "97903d04c042185198d489d50d2b53df"
  },
  {
    "url": "home/backendtechnology/design/5_observable.html",
    "revision": "438a7d67334b66834090246e6c3057ec"
  },
  {
    "url": "home/backendtechnology/design/6_handleObservable.html",
    "revision": "61ed39002f0035d60b6b7f1f8779b87e"
  },
  {
    "url": "home/backendtechnology/design/7_protoType.html",
    "revision": "cf01a38e1f8c5cb439762830a387126b"
  },
  {
    "url": "home/backendtechnology/design/8_Strategy.html",
    "revision": "ca4e57303f945903499c9c28c88db628"
  },
  {
    "url": "home/backendtechnology/design/9_template.html",
    "revision": "1ac1eb9b471e4255719fbaeda8054ed1"
  },
  {
    "url": "home/backendtechnology/design/index.html",
    "revision": "ad4df85d16ae5feb471cdec645ecb4f8"
  },
  {
    "url": "home/backendtechnology/es/1_es.html",
    "revision": "b21bf3853edff9203cb909b6e44abe2a"
  },
  {
    "url": "home/backendtechnology/es/index.html",
    "revision": "a5344bd60d6b7ebe991ef229d54775f5"
  },
  {
    "url": "home/backendtechnology/frame/index.html",
    "revision": "f15a6537dea1646a976eea5128699a17"
  },
  {
    "url": "home/backendtechnology/frame/spring/0_spring.html",
    "revision": "4e18d27cf5abc54e1a1aca365c9badc3"
  },
  {
    "url": "home/backendtechnology/frame/spring/1_springsecurity.html",
    "revision": "5a884b8f983a4dac6e9521668f1fdc1e"
  },
  {
    "url": "home/backendtechnology/frame/spring/2_springsecurity.html",
    "revision": "5d14b89dfaba6f81ffbdb405e09ac713"
  },
  {
    "url": "home/backendtechnology/frame/spring/3_springboot.html",
    "revision": "849f2639857396e7ee773a07d15be6b4"
  },
  {
    "url": "home/backendtechnology/frame/spring/index.html",
    "revision": "0393307c51bce9bec5d619a989d5f585"
  },
  {
    "url": "home/backendtechnology/java/1_objectoriented.html",
    "revision": "2ce2161a69fd091a23b83db7042a74fe"
  },
  {
    "url": "home/backendtechnology/java/2_class.html",
    "revision": "7cdbada368b7c9d9f7843e78ebf4105b"
  },
  {
    "url": "home/backendtechnology/java/index.html",
    "revision": "cd15ab145162320824a8685a9b471522"
  },
  {
    "url": "home/backendtechnology/jvm/1_jvm.html",
    "revision": "05cd660b1dbf86e06dc234fee8020fd0"
  },
  {
    "url": "home/backendtechnology/jvm/2_gc.html",
    "revision": "a5fc9c43576bb09626384c9ee55532a0"
  },
  {
    "url": "home/backendtechnology/jvm/index.html",
    "revision": "e63997e3ac76a9bc2c18cb4bf65c67f6"
  },
  {
    "url": "home/backendtechnology/microservice/1_springcloud.html",
    "revision": "3792bb2adbf4d968cbe5e465a3826d84"
  },
  {
    "url": "home/backendtechnology/microservice/10_rpc.html",
    "revision": "2b2c029c927f0fe14fb0302571309b63"
  },
  {
    "url": "home/backendtechnology/microservice/11_limit.html",
    "revision": "d2d57440b5d0b149644b7ded0a7eb260"
  },
  {
    "url": "home/backendtechnology/microservice/4_lock.html",
    "revision": "fe59be138eeb63a6974d05709bd158af"
  },
  {
    "url": "home/backendtechnology/microservice/5_zk.html",
    "revision": "0df614daa602592ad796711f5cd88217"
  },
  {
    "url": "home/backendtechnology/microservice/6_quartz.html",
    "revision": "15c20fa676e428cdd25eb587161801fa"
  },
  {
    "url": "home/backendtechnology/microservice/index.html",
    "revision": "2131c3e991ff80bef44ca7b92278c41c"
  },
  {
    "url": "home/backendtechnology/middleware/1_mq.html",
    "revision": "99570b1d00e0ae305017f4710ae1d7d4"
  },
  {
    "url": "home/backendtechnology/middleware/index.html",
    "revision": "76b55e07f2fb7248e0534ad49ac8a523"
  },
  {
    "url": "home/backendtechnology/redis/1_redis.html",
    "revision": "e8b4b205f7c3aa20b5279484e850a87d"
  },
  {
    "url": "home/backendtechnology/redis/index.html",
    "revision": "da1f820cf29011cd498ece753f28f170"
  },
  {
    "url": "home/backendtechnology/spring/1_es.html",
    "revision": "3454c6125c866a116036d91a053fefde"
  },
  {
    "url": "home/backendtechnology/spring/index.html",
    "revision": "3d2ed30b3daf5c46b1f7ddc12a1a76af"
  },
  {
    "url": "home/backendtechnology/video/1_live.html",
    "revision": "bede5547d8fd3d17c51d0bc15cd5f73c"
  },
  {
    "url": "home/backendtechnology/video/index.html",
    "revision": "9b787d34a8fccce4a30242fc7c559b52"
  },
  {
    "url": "home/index.html",
    "revision": "7bd670a4df03f01056a41ff9c86c9735"
  },
  {
    "url": "home/openuphorizons/interview/0_interviewtopic.html",
    "revision": "0c71b9873f496c945d1164b5a19ead15"
  },
  {
    "url": "home/openuphorizons/interview/1_cas.html",
    "revision": "60642b4d9bc72fe5ec40aea0520b1bc6"
  },
  {
    "url": "home/openuphorizons/interview/2_class.html",
    "revision": "598953092b6f02db444dd34964b1721f"
  },
  {
    "url": "home/openuphorizons/interview/3_synchronized.html",
    "revision": "d34ddddb41ef7ae94f47d777fdf3ff02"
  },
  {
    "url": "home/openuphorizons/interview/4_parent.html",
    "revision": "2dd9bf854c3094ef5b855bc1603f8855"
  },
  {
    "url": "home/openuphorizons/interview/index.html",
    "revision": "d63274d00270a7019be45447d547cb02"
  },
  {
    "url": "home/openuphorizons/other/1_deployhttps.html",
    "revision": "9c570673d5c869127dc2a0230f80afca"
  },
  {
    "url": "home/openuphorizons/other/2_maven.html",
    "revision": "66f6df9cab5d00bfd40ac5a8c0bf8b06"
  },
  {
    "url": "home/openuphorizons/other/3_springboot_mybatis.html",
    "revision": "fdd4ce7a41e7858c527a3b54315884c8"
  },
  {
    "url": "home/openuphorizons/other/4_github.html",
    "revision": "679f054dce87f47752adfd12574eeb45"
  },
  {
    "url": "home/openuphorizons/other/5_io.html",
    "revision": "db6cb084ed2622b94b5528830202ac31"
  },
  {
    "url": "home/openuphorizons/other/6_classLoad.html",
    "revision": "271ae8e03b6ca995fdc2e2486f65c355"
  },
  {
    "url": "home/openuphorizons/other/7_code.html",
    "revision": "c9a795a7952707d4b32367f8038bd007"
  },
  {
    "url": "home/openuphorizons/other/8_youhua.html",
    "revision": "f55af2dd3102c1f8709d1b6a4bca69c7"
  },
  {
    "url": "home/openuphorizons/other/99_atmsproject.html",
    "revision": "768111498b40575436ea1ea5392a12bc"
  },
  {
    "url": "home/openuphorizons/other/index.html",
    "revision": "9bb0ced97eab690ace6e930c6ac903ba"
  },
  {
    "url": "home/openuphorizons/trap/1_javatrap.html",
    "revision": "8e5e5505f2359ab432b5b267f0c36b20"
  },
  {
    "url": "home/openuphorizons/trap/2_trap.html",
    "revision": "441fa5a288cc75bcf91dca299e1455c6"
  },
  {
    "url": "home/openuphorizons/trap/index.html",
    "revision": "e426a6faa3bacda28e2c0f356cd2c077"
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
    "revision": "8901889eeccbc20701396a4b5562f52b"
  },
  {
    "url": "massage/index.html",
    "revision": "863318f2f539ba7a09d7f111c8894ddb"
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
