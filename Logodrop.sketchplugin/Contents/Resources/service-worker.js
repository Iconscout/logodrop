"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","ff69179a5738cba2b99b32c0dfe9df7b"],["static/css/main.e55939ff.css","9b903c259bc4fcaa5463754a5ac58509"],["static/js/main.61bcb2ad.js","c8d0f1834013fb991c3b91bcbc867766"],["static/media/Lato-Black.77d35374.ttf","77d353744697c77955f9bacc7f3ed90a"],["static/media/Lato-BlackItalic.6c522f09.ttf","6c522f09efc8b83271666585f9fc6bf0"],["static/media/Lato-Bold.44dfe8cc.ttf","44dfe8cc676882243911a3197a50169e"],["static/media/Lato-BoldItalic.1ba4767e.ttf","1ba4767ee37aab7e8d34fc339c3538cc"],["static/media/Lato-Hairline.db15ac79.ttf","db15ac7981b2d2897d1a3c22892b5a51"],["static/media/Lato-HairlineItalic.a567f4a8.ttf","a567f4a8e101cb600004e09526a1a170"],["static/media/Lato-Italic.56c4cb26.ttf","56c4cb26fd6a48b9c0ebcc07b376ee38"],["static/media/Lato-Light.5b761f2d.ttf","5b761f2d1e4259ea6ac7ab3ebf7f3c49"],["static/media/Lato-LightItalic.3d747d8b.ttf","3d747d8bf464744eecb91556d86de11b"],["static/media/Lato-Regular.7f690e50.ttf","7f690e503a254e0b8349aec0177e07aa"],["static/media/no-results.e43118a5.svg","e43118a523b5a7fd004d57a1c6841952"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("./index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});