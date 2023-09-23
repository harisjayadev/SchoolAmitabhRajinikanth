"use strict";(self.webpackChunkangular14_react_react_user_list=self.webpackChunkangular14_react_react_user_list||[]).push([[306],{306:(e,n,t)=>{t.r(n),t.d(n,{ListUserReactComponent:()=>g});var r=t(747),a=t(379),o=t.n(a),i=t(795),c=t.n(i),s=t(569),l=t.n(s),u=t(565),d=t.n(u),p=t(216),f=t.n(p),m=t(589),h=t.n(m),v=t(930),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=l().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=f(),o()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;var g=function(e){return r.createElement("div",{className:"container"},e.users.length?r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Email"),r.createElement("th",null,"Action"))),r.createElement("tbody",null,e.users.map((function(n,t){return r.createElement("tr",{key:t},r.createElement("td",null,n.name),r.createElement("td",null,n.email),r.createElement("td",null,r.createElement("button",{onClick:function(){return t=n,void e.onClick(t);var t}},"Remove User")))})))):r.createElement("h3",{className:"empty-list-message"},"----- Create user to see data here -----")," ")}},930:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"table {\r\n    font-family: Inter, sans-serif;\r\n    font-weight: 400;\r\n    line-height: 1.43;\r\n    margin-top: 15px;\r\n}\r\n\r\nthead {\r\n    line-height: 1.5;\r\n    text-transform: uppercase;\r\n}\r\n\r\ntd, th {\r\n    width: 250px;\r\n    border-bottom: 1px solid rgb(224, 224, 224);\r\n    text-align: center;\r\n    padding: 16px;\r\n    font-weight: 300;\r\n}\r\n\r\n.empty-list-message {\r\n    font-family: Inter, sans-serif;\r\n    color: rgb(207, 202, 202);\r\n    font-weight: 300;\r\n}\r\n\r\nbutton {\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    font-family: Inter, sans-serif;\r\n    font-size: 0.9375rem;\r\n    line-height: 1.75;\r\n    min-width: 64px;\r\n    padding: 10px 21px;\r\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\r\n    border: 1px solid rgba(55, 125, 255, 0.5);\r\n    color: rgb(55, 125, 255);\r\n    font-weight: 400;\r\n    border-radius: 5px;\r\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=a(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),l=0;l<o.length;l++){var u=t(o[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}}]);