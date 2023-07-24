(function(){"use strict";var e={7197:function(e,t,n){var r={};n.r(r),n.d(r,{createEntry:function(){return k},deleteEntry:function(){return R},loadEntries:function(){return w},updateEntry:function(){return O}});var o={};n.r(o),n.d(o,{getEntriesByTerm:function(){return T},getEntryById:function(){return C}});var i={};n.r(i),n.d(i,{addEntry:function(){return S},deleteEntry:function(){return x},setEntries:function(){return L},setLoading:function(){return N},updateEntry:function(){return A}});var a=n(9242),u=n(3396);function c(e,t,n,r,o,i){const a=(0,u.up)("router-view");return(0,u.wg)(),(0,u.j4)(a)}var s={name:"App"},f=n(89);const d=(0,f.Z)(s,[["render",c]]);var l=d,p=n(2483),m={name:"daybook",component:()=>n.e(555).then(n.bind(n,3555)),children:[{path:"",name:"no-entry",component:()=>n.e(287).then(n.bind(n,8287))},{path:":id",name:"entry",component:()=>n.e(75).then(n.bind(n,7075)),props:e=>({id:e.params.id})}]};const h=[{path:"/",component:()=>n.e(132).then(n.bind(n,2132))},{path:"/daybook",...m}],v=(0,p.p7)({history:(0,p.r5)(),routes:h});var y=n(65),g=()=>({isLoading:!1,entries:[]}),b=(n(7658),n(4161));const E=b.Z.create({baseURL:"https://journal-api-cc62e-default-rtdb.firebaseio.com"});var j=E;const w=async({commit:e})=>{e("setLoading");const{data:t}=await j.get("/entries.json");if(!t)return e("setEntries",[]);const n=[];for(let o of Object.keys(t))n.push({id:o,...t[o]});try{e("setEntries",n)}catch(r){console.log("ERROR LOADING ENTRIES")}},O=async({commit:e},t)=>{try{const{id:n,...r}=t,{data:o}=await j.put(`/entries/${n}.json`,r);e("updateEntry",{...o,...t})}catch(n){console.log("ERROR UPDATE ENTRY",n)}},k=async({commit:e},t)=>{try{const{data:n}=await j.post("/entries.json",t),r=n.name,o={...t,id:r};e("addEntry",o)}catch(n){console.log("ERROR CREATE ENTRY",n)}},R=async({commit:e},t)=>{try{await j["delete"](`/entries/${t}.json`),e("deleteEntry",t)}catch(n){console.log("ERROR DELETE ENTRY",n)}},T=e=>(t="")=>0===t.length?e.entries:e.entries.filter((e=>e.text.toLowerCase().includes(t.toLowerCase()))),C=e=>(t="")=>{const n=e.entries.find((e=>e.id===t));return n?{...n}:n};n(541);const L=(e,t)=>{e.entries=[],e.entries=[...e.entries,...t],e.isLoading=!1},N=e=>{e.isLoading=!e.isLoading},A=(e,t)=>{const n=e.entries.map((e=>e.id===t.id?t:e));e.entries=n},S=(e,t)=>{e.entries.unshift(t)},x=(e,t)=>{const n=e.entries.filter((e=>e.id!==t));e.entries=n},P={namespaced:!0,actions:r,getters:o,mutations:i,state:g};var _=P;const B=(0,y.MT)({modules:{journal:_}});var D=B;(0,a.ri)(l).use(D).use(v).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{75:"7ce1db00",132:"33c06027",231:"a9cede69",287:"c4e2aa43",457:"252ee7e9",534:"821ff5d2",555:"b18801ec",935:"a545de92"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{75:"f762c9c0",231:"47b4fabb",287:"798f6afd",457:"9c0f072d",534:"cb796926"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="journal:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var l=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={75:1,231:1,287:1,457:1,534:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkjournal"]=self["webpackChunkjournal"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7197)}));r=n.O(r)})();
//# sourceMappingURL=app.e65e15c6.js.map