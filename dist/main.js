!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(){const e=document.getElementById("content");e.removeChild(e.lastChild)}function d(){const e=document.getElementById("content");"NAV"!==e.lastChild.nodeName&&o();const t=document.createElement("div");t.id="img-holder";const n=document.createElement("div");n.id="img-holder1";const d=document.createElement("div");d.id="img-holder2";const c=document.createElement("div");c.id="img-holder3";const i=document.createElement("img"),r=document.createElement("img"),a=document.createElement("img"),l=document.createElement("h3"),u=document.createElement("h3"),m=document.createElement("h3"),p=document.createElement("h3"),s=document.createElement("h3"),h=document.createElement("h3");l.innerText="Pizza",u.innerText="cocktail",m.innerText="desert",p.innerText="$15",s.innerText="$20",h.innerText="$10",i.src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",r.src="https://cdn.pixabay.com/photo/2010/12/13/10/25/appetizer-2802_960_720.jpg",a.src="https://cdn.pixabay.com/photo/2015/09/02/12/41/dish-918613_960_720.jpg",n.appendChild(l),n.appendChild(p),n.appendChild(i),d.appendChild(u),d.appendChild(s),d.appendChild(r),c.appendChild(m),c.appendChild(h),c.appendChild(a),t.appendChild(n),t.appendChild(d),t.appendChild(c),e.appendChild(t)}n.r(t);const c={menu:d,aboutUs:function(){o();const e=document.getElementById("content"),t=document.createElement("div");t.innerText="Passionately personal and genuinely delicious!\n At Sofiri, we turn the ordinary into the extraordinary every day. So, stop in for a romantic dinner, relaxing lunch, or after work gathering at our cozy, sit-down bar...make everyday life a little more special at Sofiri Restaurant! ",e.appendChild(t)},contactUs:function(){o();const e=document.createElement("div"),t=document.getElementById("content"),n=document.createElement("h1");n.innerText="Email: fakeowner@gmail.com";const d=document.createElement("h1");d.innerText="Mobile: +23458903885",e.appendChild(n),e.appendChild(d),t.appendChild(e)}};!function(){const e=document.getElementById("content"),t=document.createElement("nav"),n=document.createElement("div"),o=document.createElement("h1");o.innerText="Sofiri";const d=document.createElement("button");d.innerText="Menu",d.id="menu";const c=document.createElement("button");c.innerText="About us",c.id="about-us";const i=document.createElement("button");i.innerText="Contact us",i.id="contact-us",t.appendChild(o),n.appendChild(d),n.appendChild(c),n.appendChild(i),t.appendChild(n),e.appendChild(t)}(),d(),function(){const e=document.getElementById("menu"),t=document.getElementById("about-us"),n=document.getElementById("contact-us");e.addEventListener("click",c.menu,!1),t.addEventListener("click",c.aboutUs,!1),n.addEventListener("click",c.contactUs,!1)}()}]);