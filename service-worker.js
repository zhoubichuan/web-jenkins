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
    "url": "404.html",
    "revision": "61a203ea00d5c4cc25fcc544ec2a8f6b"
  },
  {
    "url": "assets/css/0.styles.09ad3957.css",
    "revision": "d02773bf6d97259cddf489a4c8ee498e"
  },
  {
    "url": "assets/img/1.1.abd04bb6.png",
    "revision": "abd04bb6a2ce23d66b66eeb0bd087033"
  },
  {
    "url": "assets/img/1.2.563ced0d.png",
    "revision": "563ced0d31f24f8af7fcf42a22ad8749"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8f7f53c9.js",
    "revision": "d5a00aa9315f27bb1062930e4382a0bf"
  },
  {
    "url": "assets/js/11.635f6898.js",
    "revision": "88e19efc40e7c15391927266fa32d814"
  },
  {
    "url": "assets/js/12.8690eafa.js",
    "revision": "55550034d423c9e4dcd60db3e57edfc2"
  },
  {
    "url": "assets/js/13.95153554.js",
    "revision": "793d9d9bb5b7d14d3ab20d470a09ff65"
  },
  {
    "url": "assets/js/14.f7c57361.js",
    "revision": "c665ad8cf80aea7aafbd547f9e1ef62b"
  },
  {
    "url": "assets/js/15.017ead7b.js",
    "revision": "8bf37e89390b11ea2477d391d9a94b6d"
  },
  {
    "url": "assets/js/16.cd9b2f3f.js",
    "revision": "0f414954bc11eaa3e4f486db0de7bb99"
  },
  {
    "url": "assets/js/17.5bcdc54d.js",
    "revision": "d15239bf23239fdac461eb893ddaa53d"
  },
  {
    "url": "assets/js/18.145d1cf9.js",
    "revision": "50ed4b4f150aa7c5fe88c012eeff4d7f"
  },
  {
    "url": "assets/js/19.350aed7e.js",
    "revision": "fc656efcdfe6546e83ebbbcba7c61dec"
  },
  {
    "url": "assets/js/2.3a978a71.js",
    "revision": "fbf67b79e4688c75cbc0a7cac10734ef"
  },
  {
    "url": "assets/js/20.dbc10533.js",
    "revision": "b3e28e9db71f6109be4124164b1bd0b8"
  },
  {
    "url": "assets/js/21.8412c339.js",
    "revision": "474afc6d7152917cc3e418d01ef7da53"
  },
  {
    "url": "assets/js/22.c27e24ee.js",
    "revision": "79f445361eee4e5abcf1d7d2c20dfa1c"
  },
  {
    "url": "assets/js/23.06f5db83.js",
    "revision": "9e56fde38d27df54bf54a3c52be6901b"
  },
  {
    "url": "assets/js/24.6d5831ce.js",
    "revision": "befd8b324426fdb23440b99a9b8cf990"
  },
  {
    "url": "assets/js/25.06c5e408.js",
    "revision": "ce96e72f3e60fec715520b5d537b7354"
  },
  {
    "url": "assets/js/26.a2b575ba.js",
    "revision": "47d24926c6f7bcc49f31c0ab699f7e55"
  },
  {
    "url": "assets/js/27.4074b3de.js",
    "revision": "b9a6f56fa88966cfbed5f2be43866a71"
  },
  {
    "url": "assets/js/3.1bbed42d.js",
    "revision": "53bf884d0c37cf7614745d0de9b96d34"
  },
  {
    "url": "assets/js/4.953c668c.js",
    "revision": "2356c34424d769cabcbe287f0afc7a6b"
  },
  {
    "url": "assets/js/5.670a3fad.js",
    "revision": "3802a72066bf5c6d53e14c5692e20983"
  },
  {
    "url": "assets/js/6.28c9ccc9.js",
    "revision": "870abeb30aca24ff6f77ec1024ecca49"
  },
  {
    "url": "assets/js/7.55492ac5.js",
    "revision": "c6fc118187e28a96789866ed30aa5e59"
  },
  {
    "url": "assets/js/8.eb371750.js",
    "revision": "ae054b66b0a012f94463a2554973576e"
  },
  {
    "url": "assets/js/9.6eb4e3c1.js",
    "revision": "520d2d5fc19106e98f9a96165f2b8f35"
  },
  {
    "url": "assets/js/app.72aa2273.js",
    "revision": "2d51afbf410303601389410613438b5f"
  },
  {
    "url": "base/practice/1.Jenkins.html",
    "revision": "72081cc427573b284039b19797419174"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "1fd0b5fd08cdc9606c5c78b97e1e3c03"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "f57fb40deab943ba6efb2da2a27b6236"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "63d211022d4321a21280d6d95a3398bc"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "b18859cb973b32abee60d5b055e6feba"
  },
  {
    "url": "base/practice/test.html",
    "revision": "db71fea1cfce271aacf7eb0610f999a3"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "74a15ec44cea63f2a66f4b1918cb4b6e"
  },
  {
    "url": "home.png",
    "revision": "15233f5abadd12afe193fa40eea709fa"
  },
  {
    "url": "index.html",
    "revision": "f5742c98542063031048d7d81a15f409"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "3d14e838cd153d561e2dc2a9b080b127"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "1e8e6c41947e2cde2fa08ec210497572"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "3c7a269de5fcdeeedaf40d36dd70b82f"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "0ff4879e7478e5bdf3f5a4635fb83149"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "0cb101dd4cb179350423860a217e6ff0"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "69f9985a6de3f60c81cc8aa88d993b56"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "a228edf2f0149e5cf0ee604944702b86"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "eb96b201a4ccf2ebc34ec8a290ac2728"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "0a7a44695c9482a40bd10bb06411bd36"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "5b10ab562d55cf527e6f658538a63cde"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "fe20fe2ab66709a3aafc76b57779336f"
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
