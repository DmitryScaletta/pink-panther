!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="js/",t(t.s=2)}([function(e,t,n){!function(){var e=document.querySelector(".header"),t=document.querySelector(".main-menu"),n=document.querySelector(".main-menu-crutch"),o=document.querySelector(".main-menu-mobile");if(null!==t&&null!==e&&null!==n){var r=function(){window.pageYOffset>e.clientHeight?(t.classList.add("main-menu--fixed"),n.classList.add("main-menu-crutch--show"),o.classList.add("main-menu-mobile--logo")):(t.classList.remove("main-menu--fixed"),n.classList.remove("main-menu-crutch--show"),o.classList.remove("main-menu-mobile--logo"))};document.addEventListener("scroll",r),document.addEventListener("load",r)}}(),function(){var e=document.getElementById("main-menu-toggler"),t=document.querySelector(".main-menu__list"),n=document.querySelector(".main-menu-overlay");if(null!==e&&null!==t){var o=function(){t.classList.toggle("main-menu__list--opened"),null!==n&&n.classList.toggle("main-menu-overlay--show")};e.addEventListener("click",o),null!==n&&n.addEventListener("click",o)}}(),function(){!function(e){var t=function(e){e.style.height=0,e.style.height=e.contentWindow.document.body.scrollHeight+"px"},n=document.getElementById(e);null!==n&&(n.addEventListener("load",t.bind(null,n)),window.addEventListener("resize",t.bind(null,n)))}("iframe-instagram")}(),function(){var e=document.querySelector(".slider");if(null!==e){var t=e.getElementsByClassName("slider__item"),n=e.getElementsByClassName("slider__dot"),o=t.length;if(0!==o){var r=0,a=0,i=function(e){t[r].classList.remove("slider__item--active"),n[r].classList.remove("slider__dot--active"),t[e].classList.add("slider__item--active"),n[e].classList.add("slider__dot--active"),r=e,a=0},s=function(){return i(r===o-1?0:r+1)};Array.prototype.forEach.call(n,function(e,t){return e.addEventListener("click",i.bind(null,t))});setInterval(function(){(a+=1e3/30)>=4e3&&s()},1e3/30)}}}();var o=n(1);!function(){Array.prototype.forEach.call(document.querySelectorAll("select.select"),function(e){return o(e)})}(),function(){var e=document.querySelector(".modal"),t=document.querySelector(".modal__close");if(null!==e&&null!==t){var n=function(){return e.classList.toggle("modal--opened")};t.addEventListener("click",n),window.addEventListener("click",function(t){t.target===e&&n()}),Array.prototype.forEach.call(document.getElementsByClassName("open-modal-window"),function(e){return e.addEventListener("click",n)})}}()},function(e,t,n){var o,r,a;!function(n,i){r=[],o=i,void 0!==(a="function"==typeof o?o.apply(t,r):o)&&(e.exports=a)}(0,function(){var e=document.querySelector.bind(document),t=document.querySelectorAll.bind(document),n={SPACE:32,UP:38,DOWN:40,ENTER:13};NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach),HTMLCollection.prototype.forEach||(HTMLCollection.prototype.forEach=Array.prototype.forEach),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector);var o=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n};if(o.prototype=window.Event.prototype,window.CustomEvent=o,!(document.documentElement.dataset||Object.getOwnPropertyDescriptor(Element.prototype,"dataset")&&Object.getOwnPropertyDescriptor(Element.prototype,"dataset").get)){var r={enumerable:!0,get:function(){"use strict";var e,t,n,o,r,a,i=this,s=this.attributes,c=s.length,l=function(e){return e.charAt(1).toUpperCase()},d=function(){return this},u=function(e,t){return void 0!==t?this.setAttribute(e,t):this.removeAttribute(e)};try{({}).__defineGetter__("test",function(){}),t={}}catch(e){t=document.createElement("div")}for(e=0;e<c;e++)if((a=s[e])&&a.name&&/^data-\w[\w\-]*$/.test(a.name)){n=a.value,o=a.name,r=o.substr(5).replace(/-./g,l);try{Object.defineProperty(t,r,{enumerable:this.enumerable,get:d.bind(n||""),set:u.bind(i,o)})}catch(e){t[r]=n}}return t}};try{Object.defineProperty(Element.prototype,"dataset",r)}catch(e){r.enumerable=!1,Object.defineProperty(Element.prototype,"dataset",r)}}var a=function(e,t,n){var o=e.parentNode;if(n&&e.matches(t))return!0;for(;o&&o.nodeType&&1===o.nodeType;){if(o.matches(t))return!0;o=o.parentNode}return!1},i=function(){return"ss-xxxx-xxxx-xxxx-xxxx-xxxx".replace(/x/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})};return function(r){if(!navigator.userAgent.match(/iPad|iPhone|Android/i)){var s,c="object"==typeof r?r:e(r),l=c.children,d=c.selectedIndex,u=i(),m='<div class="style-select" aria-hidden="true" data-ss-uuid="'+u+'">',p=l.length-1;c.setAttribute("data-ss-uuid",u),c.setAttribute("aria-hidden","false");var f,v='<div class="ss-dropdown">';l.forEach(function(e,t){var n=e.textContent,o=e.getAttribute("value")||"",r="ss-option";t===d&&(f='<div class="ss-selected-option" tabindex="0" data-value="'+o+'">'+n+"</div>"),e.disabled&&(r+=" disabled"),v+='<div class="'+r+'" data-value="'+o+'">'+n+"</div>"}),v+="</div>",m+=f+=v+="</div>",c.insertAdjacentHTML("afterend",m);var h=e('.style-select[data-ss-uuid="'+u+'"]'),y=h.querySelectorAll(".ss-option"),g=h.querySelector(".ss-selected-option"),E=function(e,t){h.classList.remove("open"),g.textContent=t,g.dataset.value=e,y.forEach(function(t){t.dataset.value===e?t.classList.add("ticked"):t.classList.remove("ticked")}),c.value=e;var n=new o("change");c.dispatchEvent(n)};y.forEach(function(e,t){var n=y.item(t);n.className.match(/\bdisabled\b/)||(n.addEventListener("click",function(e){var t=e.target,n=t.parentNode.parentNode,o=(n.getAttribute("data-ss-uuid"),t.getAttribute("data-value")),r=t.textContent;E(o,r)}),n.dataset.value===c.value&&(s=t,n.classList.add("ticked"),n.classList.add("highlighted")),n.addEventListener("mouseover",function(e){n.parentNode.childNodes.forEach(function(t,n){t===e.target?(t.classList.add("highlighted"),s=n):t.classList.remove("highlighted")})}))});var b=function(e){t(".style-select").forEach(function(t){t!==e&&t.classList.remove("open")})},L=function(e){e.classList.contains("open")||b(e),e.classList.toggle("open")},x=e('.style-select[data-ss-uuid="'+u+'"] .ss-selected-option');x.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),L(e.target.parentNode)}),x.addEventListener("keydown",function(e){var t=e.target.parentNode;switch(e.keyCode){case n.SPACE:L(t);break;case n.DOWN:case n.UP:t.classList.contains("open")?(e.keyCode===n.UP?0!==s&&(s-=1):s<p&&(s+=1),y.forEach(function(e,t){t===s?e.classList.add("highlighted"):e.classList.remove("highlighted")})):L(t),e.preventDefault(),e.stopPropagation();break;case n.ENTER:var o=x.parentNode.querySelectorAll(".ss-option")[s],r=o.dataset.value,a=o.textContent;E(r,a),e.preventDefault(),e.stopPropagation()}}),e("body").addEventListener("click",function(e){a(e.target,".style-select",!0)||b()})}}})},function(e,t,n){e.exports=n(0)}]);