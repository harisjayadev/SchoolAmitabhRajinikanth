(()=>{"use strict";var e,r,t={82:(e,r,t)=>{var n=t(747),o=t.n(n),i=t(56),u=t.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,r){if("object"!==a(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}function l(e,r){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},l(e,r)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}const s=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&l(e,r)}(s,e);var r,t,n,i,u=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f(n);if(i){var t=f(this).constructor;e=Reflect.construct(r,arguments,t)}else e=r.apply(this,arguments);return function(e,r){if(r&&("object"===a(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function s(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,s),u.apply(this,arguments)}return r=s,(t=[{key:"render",value:function(){return o().createElement("div",null,o().createElement("h1",null,"Webpack + React setup"))}}])&&c(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),s}(n.Component);u().render(o().createElement(s,null),document.getElementById("app"))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,o.c=n,o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="angular14-react_react-user-list:",o.l=(t,n,i,u)=>{if(e[t])e[t].push(n);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+i){a=s;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",r+i),a.src=t),e[t]=[n];var p=(r,n)=>{a.onerror=a.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}},(()=>{o.S={};var e={},r={};o.I=(t,n)=>{n||(n=[]);var i=r[t];if(i||(i=r[t]={}),!(n.indexOf(i)>=0)){if(n.push(i),e[t])return e[t];o.o(o.S,t)||(o.S[t]={});var u=o.S[t],a="angular14-react_react-user-list",c=(e,r,t,n)=>{var o=u[e]=u[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:a>i.from))&&(o[r]={get:t,from:a,eager:!!n})},l=[];return"default"===t&&(c("react-dom","18.2.0",(()=>Promise.all([o.e(935),o.e(747)]).then((()=>()=>o(935))))),c("react","18.2.0",(()=>o.e(294).then((()=>()=>o(294)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,i=1;i<e.length;i++)o--,n+="u"==(typeof(a=e[i]))[0]?"-":(o>0?".":"")+(o=2,a);return n}var u=[];for(i=1;i<e.length;i++){var a=e[i];u.push(0===a?"not("+c()+")":1===a?"("+c()+" || "+c()+")":2===a?u.pop()+" "+u.pop():r(a))}return c();function c(){return u.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],i=o<0;i&&(o=-o-1);for(var u=0,a=1,c=!0;;a++,u++){var l,f,s=a<r.length?(typeof r[a])[0]:"";if(u>=n.length||"o"==(f=(typeof(l=n[u]))[0]))return!c||("u"==s?a>o&&!i:""==s!=i);if("u"==f){if(!c||"u"!=s)return!1}else if(c)if(s==f)if(a<=o){if(l!=r[a])return!1}else{if(i?l>r[a]:l<r[a])return!1;l!=r[a]&&(c=!1)}else if("s"!=s&&"n"!=s){if(i||a<=o)return!1;c=!1,a--}else{if(a<=o||f<s!=i)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,a--)}}var p=[],d=p.pop.bind(p);for(u=1;u<r.length;u++){var h=r[u];p.push(1==h?d()|d():2==h?d()&d():h?t(h,n):!d())}return!!d()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],i=(typeof o)[0];if(n>=t.length)return"u"==i;var u=t[n],a=(typeof u)[0];if(i!=a)return"o"==i&&"n"==a||"s"==a||"u"==i;if("o"!=i&&"u"!=i&&o!=u)return o<u;n++}})(r,t)?t:r),0)},i=(e,o,i,a)=>{var c=n(e,i);return t(a,c)||"undefined"!=typeof console&&console.warn&&console.warn(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,i,c,a)),u(e[i][c])},u=e=>(e.loaded=1,e.get()),a=(e=>function(r,t,n,i){var u=o.I(r);return u&&u.then?u.then(e.bind(e,r,o.S[r],t,n,i)):e(r,o.S[r],t,n,i)})(((e,r,t,n,u)=>r&&o.o(r,t)?i(r,0,t,n):u())),c={},l={747:()=>a("default","react",[4,18,2,0],(()=>o.e(294).then((()=>()=>o(294))))),56:()=>a("default","react-dom",[4,18,2,0],(()=>o.e(935).then((()=>()=>o(935)))))};[747,56].forEach((e=>{o.m[e]=r=>{c[e]=0,delete o.c[e];var t=l[e]();if("function"!=typeof t)throw new Error("Shared module is not available for eager consumption: "+e);r.exports=t()}}));var f={747:[747]};o.f.consumes=(e,r)=>{o.o(f,e)&&f[e].forEach((e=>{if(o.o(c,e))return r.push(c[e]);var t=r=>{c[e]=0,o.m[e]=t=>{delete o.c[e],t.exports=r()}},n=r=>{delete c[e],o.m[e]=t=>{throw delete o.c[e],r}};try{var i=l[e]();i.then?r.push(c[e]=i.then(t).catch(n)):t(i)}catch(e){n(e)}}))}})(),(()=>{var e={179:0,747:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(747!=r){var i=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=i);var u=o.p+o.u(r),a=new Error;o.l(u,(t=>{if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,n[1](a)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,i,[u,a,c]=t,l=0;if(u.some((r=>0!==e[r]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);c&&c(o)}for(r&&r(t);l<u.length;l++)i=u[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},t=self.webpackChunkangular14_react_react_user_list=self.webpackChunkangular14_react_react_user_list||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),o(82)})();