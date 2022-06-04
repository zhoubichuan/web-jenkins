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
    "revision": "062a2f5c6849c3fb48efaf3fb23af418"
  },
  {
    "url": "assets/css/0.styles.7943da19.css",
    "revision": "6655a2ab58a08125ce52960a34417888"
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
    "url": "assets/js/10.514c9901.js",
    "revision": "654af36facb456c885a63802bdfb3498"
  },
  {
    "url": "assets/js/11.d2917bab.js",
    "revision": "f7ffcce4672e91be7959dbcaf01ead18"
  },
  {
    "url": "assets/js/12.fd91293d.js",
    "revision": "dcb75b1757019552012cfc218f6db865"
  },
  {
    "url": "assets/js/13.00bc4fa7.js",
    "revision": "57c6450753e2e1874c1203bf5798769d"
  },
  {
    "url": "assets/js/14.056f7237.js",
    "revision": "6b4163f1ce165f10710d6bc7e1aaf374"
  },
  {
    "url": "assets/js/15.af63a5e7.js",
    "revision": "bdc93b9f75b924fcda929c16d2df73f7"
  },
  {
    "url": "assets/js/16.3bbe5f8a.js",
    "revision": "d66179d914b1d1a0cee380b1a861a122"
  },
  {
    "url": "assets/js/17.07a4c1e7.js",
    "revision": "b50a3c1c8740298b2ce7f572c4119908"
  },
  {
    "url": "assets/js/18.dde24605.js",
    "revision": "16ade7163ba2e691e4e54631b97889d9"
  },
  {
    "url": "assets/js/19.79165b3f.js",
    "revision": "1987f35940618c6ced7d387c2b40940d"
  },
  {
    "url": "assets/js/2.7a1c693c.js",
    "revision": "337756a63be99d786cca88daa3920400"
  },
  {
    "url": "assets/js/20.41f431c9.js",
    "revision": "13b6d8f2a651d385e894ab323b7b2bda"
  },
  {
    "url": "assets/js/21.35352b45.js",
    "revision": "26e80be7af58945060e7a75ec135a97f"
  },
  {
    "url": "assets/js/22.50c4e1a3.js",
    "revision": "632a10eb0cd8ba5d459b2dc902b24150"
  },
  {
    "url": "assets/js/23.a167708d.js",
    "revision": "213c0fa8244b14b78cb36edb06686592"
  },
  {
    "url": "assets/js/24.b52102d8.js",
    "revision": "4532ce70e4b2308baa2aa8e31349f998"
  },
  {
    "url": "assets/js/25.9ea8fe96.js",
    "revision": "007d34891143fdc57d5656ca76b4c5e0"
  },
  {
    "url": "assets/js/26.b6b10341.js",
    "revision": "6616b434006ea6efe2ec9349558c85e6"
  },
  {
    "url": "assets/js/27.e1ab367e.js",
    "revision": "7f59059bb528f2c4dafbdf16a66682cb"
  },
  {
    "url": "assets/js/3.a820ac8d.js",
    "revision": "bdb803965f451d46e5241d8e1f3d452f"
  },
  {
    "url": "assets/js/4.60dd7cb6.js",
    "revision": "e645c4341fc4fab10d25620ab1dcbb40"
  },
  {
    "url": "assets/js/5.a1571bef.js",
    "revision": "3de0cac8688484ae760d2239f5b61465"
  },
  {
    "url": "assets/js/6.8502cf03.js",
    "revision": "3a17e60b26e10cd249474e9099aab544"
  },
  {
    "url": "assets/js/7.3287a0d2.js",
    "revision": "e9d31e2740ed15b21fb66db07a940836"
  },
  {
    "url": "assets/js/8.c6d35d19.js",
    "revision": "86d26cc80b22c434b516d5a0a8159907"
  },
  {
    "url": "assets/js/9.d598bb2c.js",
    "revision": "83655f6e0f6715e8bc991212c5a5ece3"
  },
  {
    "url": "assets/js/app.35c51616.js",
    "revision": "d5fe5ce82d5f044476204a34210790d1"
  },
  {
    "url": "base/practice/1.Jenkins.html",
    "revision": "8b217ca7ada3d1cd0860dd579de2e18b"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "95daa92c4b0797a3f2dec769023dc7aa"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "211600bbe443e4888783b7716ba619b2"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "beeea2a705aebf3af4bd4b7b70254076"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "889cc8c95d40141c56a294b22e56d3a0"
  },
  {
    "url": "base/practice/test.html",
    "revision": "216fb3529a48c76784f330219529c0d4"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "f2d5101825a994ecf6f8c163f5082cb3"
  },
  {
    "url": "home.png",
    "revision": "15233f5abadd12afe193fa40eea709fa"
  },
  {
    "url": "index.html",
    "revision": "ffdb1eaae90959c9d541ca907dd050b0"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "ced410ca7cb0b163ee049de650518a17"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "04b6d0ac241193c46893736efeff983c"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "02a834715a664c28d1b4592dbaec0d58"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "3bd5c96bd1b354c801305018ff475b10"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "6349034a9dbacbdf9cac047876bffd14"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "9ead03707eb9a3d495db53109b496653"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "681b990d90e3a6c4f92989c2017d37f6"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "edbd5a5881e2884ff939496f3798352b"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "021409c1428c604206194f7865c56d81"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "922df3d0d92ab2863e75099c82462b3b"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "fd892929c8ef3f9874b374b09624cb92"
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
