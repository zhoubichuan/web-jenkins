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
    "url": "1.base/1.html/1.element.html",
    "revision": "86257a8e787a8d8a5c3d5b35839db85d"
  },
  {
    "url": "1.base/1.html/1.index.html",
    "revision": "f8c5bf1a844048e5a07680bbb65b862b"
  },
  {
    "url": "1.base/1.html/2.attrs.html",
    "revision": "b5dcc864d63894ee279f9ac5f750aca5"
  },
  {
    "url": "1.base/1.html/3.events.html",
    "revision": "64ecb71bde12f548114c9d9b4ca9dd4b"
  },
  {
    "url": "1.base/1.html/4.code.html",
    "revision": "30cab60784bdf6c40beac6f95f73542d"
  },
  {
    "url": "1.base/1.html/6.2.html",
    "revision": "6111f9e985a63dd105f2af2d0bb26166"
  },
  {
    "url": "1.base/2.css/1.grammar.html",
    "revision": "5e2f0dc16c0522045630dd926446c74b"
  },
  {
    "url": "1.base/2.css/1.index.html",
    "revision": "36989e9f03f89e3ab1f074e54dad9080"
  },
  {
    "url": "1.base/2.css/2.select.html",
    "revision": "1ebba16e68d03a33cfcc990511ace874"
  },
  {
    "url": "1.base/2.css/3.position.html",
    "revision": "ca2bd0b381570da96b8eae8b30faeb90"
  },
  {
    "url": "1.base/2.css/4.layout.html",
    "revision": "7390b1b86c1e428b79abbc2d50807b13"
  },
  {
    "url": "1.base/2.css/5.style.html",
    "revision": "a2f5d744425858e616b005419e2baf09"
  },
  {
    "url": "1.base/2.css/6.animation.html",
    "revision": "c85078e2445377e1980a1713d3fbcf01"
  },
  {
    "url": "1.base/2.css/7.yong.html",
    "revision": "0875d783ca75c036a0aae85b7a61d0ba"
  },
  {
    "url": "2.advanced/1.h5/1.index.html",
    "revision": "24377a763e72a899b8a7e6cf12b996e5"
  },
  {
    "url": "2.advanced/1.h5/1.page.html",
    "revision": "8fe06f19cc3f54708900d61027c61df2"
  },
  {
    "url": "2.advanced/1.h5/10.html",
    "revision": "025d5a57f800a2ad24bb4affd3bafe15"
  },
  {
    "url": "2.advanced/1.h5/2.html",
    "revision": "9c88a4e9089f021a7304fdcae6639083"
  },
  {
    "url": "2.advanced/1.h5/3.html",
    "revision": "f814b69d03df6e0494326aec39879e78"
  },
  {
    "url": "2.advanced/1.h5/4.html",
    "revision": "f7e0cedf18e9e86de05152a9b1dfc63c"
  },
  {
    "url": "2.advanced/1.h5/5.html",
    "revision": "2b2a52b7fbb06f61265056926993decf"
  },
  {
    "url": "2.advanced/1.h5/6.html",
    "revision": "ccfe75daae50f2f90811f1cdae95025f"
  },
  {
    "url": "2.advanced/1.h5/7.html",
    "revision": "eb865c0b95f98875acc2e00121257634"
  },
  {
    "url": "2.advanced/1.h5/8.html",
    "revision": "d7c2a463891a0713e2e0fa756898a505"
  },
  {
    "url": "2.advanced/1.h5/9.html",
    "revision": "d5df7bb3d787d085f807b834e9055537"
  },
  {
    "url": "404.html",
    "revision": "28e92cebe98074ab2726bd84584a959b"
  },
  {
    "url": "7.read/book1/1.index.html",
    "revision": "7b816a1a57292206fd71a8504eff001d"
  },
  {
    "url": "7.read/book1/chapter1.html",
    "revision": "a97ad42462a81556b7f03d2913771371"
  },
  {
    "url": "7.read/book1/chapter2.html",
    "revision": "da29dbbf5de57cca35ec8a129e800852"
  },
  {
    "url": "7.read/book1/chapter3.html",
    "revision": "4258ce67b14efe4d2a36c97630f9d243"
  },
  {
    "url": "7.read/book1/chapter4.html",
    "revision": "7835048f6a65a75ba6329faccb60869d"
  },
  {
    "url": "7.read/book1/chapter5.html",
    "revision": "515d416262e3bd7282f1036a4f17b976"
  },
  {
    "url": "7.read/book1/chapter6.html",
    "revision": "668d7f38db6ff3ae443d622f51799f73"
  },
  {
    "url": "7.read/book1/chapter7.html",
    "revision": "9cf8a459cd897c7242d96308680dea4b"
  },
  {
    "url": "7.read/book2/1.index.html",
    "revision": "134f68fcda664da200bf8de105b0e6b4"
  },
  {
    "url": "7.read/book2/chapter1.html",
    "revision": "59e81f2433a911ae367a7d2375264ba8"
  },
  {
    "url": "7.read/book2/chapter2.html",
    "revision": "f4236f43f6443c21ecbe69b1d4177fd1"
  },
  {
    "url": "7.read/book2/chapter3.html",
    "revision": "96e5efd83c8decbfe48fca339e40970f"
  },
  {
    "url": "7.read/book2/chapter4.html",
    "revision": "60dab55cfa30721d66034ad32bedca37"
  },
  {
    "url": "7.read/book2/chapter5.html",
    "revision": "e22bd8f29a23804622acb323220c8221"
  },
  {
    "url": "7.read/book2/chapter6.html",
    "revision": "7e0064a677c707ac52ece7b7e71d55f3"
  },
  {
    "url": "7.read/book2/chapter7.html",
    "revision": "3695eaa51ca41da8dbeccf98882b4647"
  },
  {
    "url": "7.read/book3/1.index.html",
    "revision": "c393bebaa33358c420a3d8ac53bbe751"
  },
  {
    "url": "7.read/book3/chapter1.html",
    "revision": "816be07f95c86ef36e66b5672309bd72"
  },
  {
    "url": "7.read/book3/chapter2.html",
    "revision": "99040e1f571f3147edc0b4cc7dae812a"
  },
  {
    "url": "7.read/book3/chapter3.html",
    "revision": "20f20b93e9ea339298413a640248bb32"
  },
  {
    "url": "7.read/book3/chapter4.html",
    "revision": "46308e66d37b2e79296f63c6d23428ea"
  },
  {
    "url": "7.read/book3/chapter5.html",
    "revision": "f1ef4e4879501e92ace920fd6689ff44"
  },
  {
    "url": "7.read/book3/chapter6.html",
    "revision": "72fe302e5c40121df68518fb58a2093f"
  },
  {
    "url": "7.read/book3/chapter7.html",
    "revision": "c8f7bdb72e1e5c5be24342d247a2b067"
  },
  {
    "url": "7.read/book4/1.index.html",
    "revision": "057d879fa1d5bbf2384e4e6d2f0c7eba"
  },
  {
    "url": "7.read/book4/chapter1.html",
    "revision": "e581e4925ea547e1d0fc9ecece1b2685"
  },
  {
    "url": "7.read/book4/chapter2.html",
    "revision": "5db26462f01a01df7da19656cffd5856"
  },
  {
    "url": "7.read/book4/chapter3.html",
    "revision": "cf7a04c479de2ba08d2d38a9e36e73a5"
  },
  {
    "url": "7.read/book4/chapter4.html",
    "revision": "e0b28634de284e04cd62a87286cbea8c"
  },
  {
    "url": "7.read/book4/chapter5.html",
    "revision": "497ae7c34ff82ee9e2f72e743b3b05ae"
  },
  {
    "url": "7.read/book4/chapter6.html",
    "revision": "291f5aac56552bdc454a272845dab877"
  },
  {
    "url": "7.read/book4/chapter7.html",
    "revision": "44af6c4ab53a16f1808bd42a5b25b567"
  },
  {
    "url": "7.read/book5/1.index.html",
    "revision": "232b86caa58ce9f9d390f97e36793c8e"
  },
  {
    "url": "7.read/book5/chapter1.html",
    "revision": "da3cb9e05c2dcfa325df8f0465e0ceed"
  },
  {
    "url": "7.read/book5/chapter2.html",
    "revision": "87a419e41bb6fb525e1349a952e65430"
  },
  {
    "url": "7.read/book5/chapter3.html",
    "revision": "e2325ab3bacc84599c2f9ebdfc71f05f"
  },
  {
    "url": "7.read/book5/chapter4.html",
    "revision": "f3d86564170419ba97ee99d0ea80076a"
  },
  {
    "url": "7.read/book5/chapter5.html",
    "revision": "4220b7fcb0e284562b76e23825ff3a47"
  },
  {
    "url": "7.read/book5/chapter6.html",
    "revision": "2d7a377d6b25a463b3ac37ab8c6c4216"
  },
  {
    "url": "7.read/book5/chapter7.html",
    "revision": "d04a3892e28378944ddaaa943b3d1a1b"
  },
  {
    "url": "assets/css/0.styles.2852384c.css",
    "revision": "abe02f95a93ef1f5fb676830abfa9ca6"
  },
  {
    "url": "assets/img/1.29ac119d.jpg",
    "revision": "29ac119d42b0dedc5da7ee5c4527893f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.51966988.js",
    "revision": "26486ce0c20788f772988fa1e24aaf44"
  },
  {
    "url": "assets/js/11.f72fc75c.js",
    "revision": "2c62913401cfc1c8e81d7bfd5a193336"
  },
  {
    "url": "assets/js/12.59aac6e2.js",
    "revision": "d191782cd80670c1100dee344851a020"
  },
  {
    "url": "assets/js/13.5f0f4f37.js",
    "revision": "09a04424163b0c1acc1ca8ab6494a164"
  },
  {
    "url": "assets/js/14.74a17569.js",
    "revision": "e5a01b7485250e02a3648cea185180f8"
  },
  {
    "url": "assets/js/15.14d1612a.js",
    "revision": "fe2a4e4f840278e72c37b28133548bb5"
  },
  {
    "url": "assets/js/16.9db497d3.js",
    "revision": "009f23772efbcfcfdb6f951888de77c6"
  },
  {
    "url": "assets/js/17.0481ff30.js",
    "revision": "33ffb5ba83043ac67c0e451d21efe584"
  },
  {
    "url": "assets/js/18.1a347271.js",
    "revision": "2b501871fbe56822a431d76d8d3e70c5"
  },
  {
    "url": "assets/js/19.cb670b4f.js",
    "revision": "e673173a33c0ead02da5e0a6397e0344"
  },
  {
    "url": "assets/js/2.3ac9e3db.js",
    "revision": "4318ee82d711c00c53ab458ca763c9a4"
  },
  {
    "url": "assets/js/20.84a69863.js",
    "revision": "5ea9e14f1c81904ee2731b480882e97e"
  },
  {
    "url": "assets/js/21.291f0d02.js",
    "revision": "cfd64f535ae9d7596a1fa3e42895dcc9"
  },
  {
    "url": "assets/js/22.12e82a26.js",
    "revision": "46af75e083a07612fe2edf856d05e271"
  },
  {
    "url": "assets/js/23.0aad66f4.js",
    "revision": "f3d519441f6adf7ddbd02b4872d3cba6"
  },
  {
    "url": "assets/js/24.b82a97c0.js",
    "revision": "61a221794de848416c89356985f90951"
  },
  {
    "url": "assets/js/25.77be26fa.js",
    "revision": "7c7e34eed9b697cc1a421463532c348c"
  },
  {
    "url": "assets/js/26.65ef0897.js",
    "revision": "5539538010e50f04c59b22b82c869dd5"
  },
  {
    "url": "assets/js/27.3f8f8dbd.js",
    "revision": "57060c6259c5e3a5239bbef519839802"
  },
  {
    "url": "assets/js/28.1f2fd5f9.js",
    "revision": "601b0aa5b8d444dd96bcf1f79a28d166"
  },
  {
    "url": "assets/js/29.812c74d3.js",
    "revision": "38361309642361056823101e5e4b422a"
  },
  {
    "url": "assets/js/3.31c80b79.js",
    "revision": "8cfc461a93660c5d0a4f51ed359b2ab1"
  },
  {
    "url": "assets/js/30.0f38d9e9.js",
    "revision": "f4de2070200e0a388131cc80e5f37413"
  },
  {
    "url": "assets/js/31.5bd65eee.js",
    "revision": "259bb984952e36e4fd0dff2bd6f151b1"
  },
  {
    "url": "assets/js/32.7d8eeea3.js",
    "revision": "5db9d7d826deff9d4f32bae712c01b49"
  },
  {
    "url": "assets/js/33.380f9a58.js",
    "revision": "1bbfb80d3c06d3eaa469ff6a7ba17889"
  },
  {
    "url": "assets/js/34.706aab9e.js",
    "revision": "859828243290beee9c88f2129364154d"
  },
  {
    "url": "assets/js/35.ab9e0057.js",
    "revision": "7435305c183abc4909fc79b440e070ca"
  },
  {
    "url": "assets/js/36.d21d4e3c.js",
    "revision": "adc74fb9b00dc233046c9e8349ec4e84"
  },
  {
    "url": "assets/js/37.a88ffbb8.js",
    "revision": "0c663d1adf038f5809f173ce9ab2d634"
  },
  {
    "url": "assets/js/38.ff4ae952.js",
    "revision": "697f7b84be9bd48406ac5f0d3040ba1a"
  },
  {
    "url": "assets/js/39.8c0cb8f4.js",
    "revision": "6f5c6289c570a494525795593b84e379"
  },
  {
    "url": "assets/js/4.dff6537c.js",
    "revision": "300897ed48ac3705c31d3debde0855ac"
  },
  {
    "url": "assets/js/40.5315a107.js",
    "revision": "cb83af916f640fd9e3a508dac3437309"
  },
  {
    "url": "assets/js/41.94a08b52.js",
    "revision": "a11d8e30ea44483bf1696a308e9bea67"
  },
  {
    "url": "assets/js/42.c21fe9c3.js",
    "revision": "b26ac615bebdb62658a1ef80558b2c72"
  },
  {
    "url": "assets/js/43.f138aa16.js",
    "revision": "0c14b6ccc353dd252dfe37b66fbda45e"
  },
  {
    "url": "assets/js/44.219ec5f7.js",
    "revision": "e6d081f698fac3508f92ee1890dcc2f1"
  },
  {
    "url": "assets/js/45.f9bef0da.js",
    "revision": "1fec6c6ab037c510f167fd31b078648a"
  },
  {
    "url": "assets/js/46.531f664b.js",
    "revision": "b1210711f6e34d0100eaa862fb80b475"
  },
  {
    "url": "assets/js/47.9d20ae30.js",
    "revision": "fe30a8daf0267c1c53d828fe9c31e26a"
  },
  {
    "url": "assets/js/48.9be82d40.js",
    "revision": "e7a8a78e8d2827185f946ec76accef53"
  },
  {
    "url": "assets/js/49.bf29edce.js",
    "revision": "d8830f55f5463d47661a0e26a75d1bc0"
  },
  {
    "url": "assets/js/5.21652a3d.js",
    "revision": "570050d64eec60390dab425690d55afe"
  },
  {
    "url": "assets/js/50.0a24591e.js",
    "revision": "53bc42d7b3264ab43fa5ae7205d57986"
  },
  {
    "url": "assets/js/51.76e1c245.js",
    "revision": "bf6e38db11a775ad6750c460ca52830c"
  },
  {
    "url": "assets/js/52.c999b75a.js",
    "revision": "a8d669382c8c292a326dfd46df56c620"
  },
  {
    "url": "assets/js/53.752f3d1b.js",
    "revision": "dd2a35a5c006dafe63f9ebc4642a824f"
  },
  {
    "url": "assets/js/54.a01002ed.js",
    "revision": "f599b0a4608f90c1123c52221274d73a"
  },
  {
    "url": "assets/js/55.29b334ed.js",
    "revision": "6bbc31c1fa9595043a81bd2bd33e1a54"
  },
  {
    "url": "assets/js/56.5d93ccb2.js",
    "revision": "ada4960ec90289cb5e5f414bd1d7c498"
  },
  {
    "url": "assets/js/57.17bcab17.js",
    "revision": "ae05dc9091d017934e96b6e04dae156b"
  },
  {
    "url": "assets/js/58.60d4887a.js",
    "revision": "e2628b2a055f49affb37fef9714ebd00"
  },
  {
    "url": "assets/js/59.2dc0857c.js",
    "revision": "394c0a5d6d61b7e51454687ee7d6f86a"
  },
  {
    "url": "assets/js/6.ac617621.js",
    "revision": "63a15b58dbc33e206a023aafbbfb7c49"
  },
  {
    "url": "assets/js/60.73099e6a.js",
    "revision": "f16de43f5d6d38e3b3d75e9224b399e7"
  },
  {
    "url": "assets/js/61.eb110998.js",
    "revision": "a9b3174fe27ff7db101d25b3f661195c"
  },
  {
    "url": "assets/js/62.08f4d6cb.js",
    "revision": "776d4e60ccf633e236ddca4f77366c8d"
  },
  {
    "url": "assets/js/63.7d7738d7.js",
    "revision": "9d6f6234a5e5bb375f0c79ea6a37aef5"
  },
  {
    "url": "assets/js/64.81fb44e0.js",
    "revision": "16d2ec47152dc6ce60d75d62112219a5"
  },
  {
    "url": "assets/js/65.059ff071.js",
    "revision": "3c70d84b2c7685547b8347ecd501d53c"
  },
  {
    "url": "assets/js/66.bc4a91e0.js",
    "revision": "f1290ceca4df63a4d7ae0cb6c2513185"
  },
  {
    "url": "assets/js/67.41e55d24.js",
    "revision": "2b512a8eecdd35e11d8a4e6142edcf59"
  },
  {
    "url": "assets/js/68.b040a009.js",
    "revision": "350025dd8da479bb3f7bd80d25711600"
  },
  {
    "url": "assets/js/69.dbe96f78.js",
    "revision": "f207526998672302f58c92dee029f74d"
  },
  {
    "url": "assets/js/7.25ac9336.js",
    "revision": "a5a915455bed72d5f5a21b13654220fb"
  },
  {
    "url": "assets/js/70.0c2faa59.js",
    "revision": "2bf2a4e34cb4425b205a31b53e4f5a26"
  },
  {
    "url": "assets/js/71.5a8349e7.js",
    "revision": "b30d3d30054274f8f1e3bc152b26e5a8"
  },
  {
    "url": "assets/js/72.e3bf4426.js",
    "revision": "f91f1ac5a3ad719ce7aecf81d6d20663"
  },
  {
    "url": "assets/js/73.bd2c27d1.js",
    "revision": "9c1b4ad67f41181f8e5a23148d2fa1e4"
  },
  {
    "url": "assets/js/74.af6c9758.js",
    "revision": "581ffa8eb8b3e35cc3b6d3379bb70a16"
  },
  {
    "url": "assets/js/8.2e9b999a.js",
    "revision": "10d87b22275d5000aa12e6aea6456993"
  },
  {
    "url": "assets/js/9.88748a8b.js",
    "revision": "430ccfecf11951773057657a982084b5"
  },
  {
    "url": "assets/js/app.927016d7.js",
    "revision": "363297dd9001398ff7141611dea39c24"
  },
  {
    "url": "home.png",
    "revision": "15233f5abadd12afe193fa40eea709fa"
  },
  {
    "url": "index.html",
    "revision": "b3bfa46d103f5a704c761555f8e8dbea"
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
