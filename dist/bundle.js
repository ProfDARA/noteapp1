(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #f0f0f0;\n}\n\napp-bar {\n    width: 100%;\n    background-color: #6200ea;\n    color: white;\n    padding: 1rem;\n    text-align: center;\n    font-size: 1.5rem;\n    position: fixed;\n}\n\n.tab-nav {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    background-color: #e0e0e0;\n    padding: 0.5rem 0;\n    margin-top: 50px;\n    position: fixed;\n}\n\n.tab-button {\n    background-color: #6200ea;\n    color: white;\n    border: none;\n    padding: 0.5rem 1rem;\n    margin: 0 0.5rem;\n    cursor: pointer;\n}\n\n.tab-button.active {\n    background-color: #3700b3;\n}\n\n.container {\n    width: 90%;\n    max-width: 800px;\n    margin: 1rem auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 1rem;\n    margin-top: 120px;\n}\n\n.note-item {\n    background-color: white;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n    padding: 1rem;\n}\n\n.note-item h3 {\n    margin: 0 0 0.5rem 0;\n}\n\nform {\n    background-color: white;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n    padding: 1rem;\n    margin-bottom: 1rem;\n    margin-top: 50px;\n}\n\nform div {\n    margin-bottom: 1rem;\n}\n\nform label {\n    display: block;\n    margin-bottom: 0.5rem;\n}\n\nform input, form textarea {\n    width: 90%;\n    padding: 0.5rem;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    margin-right: 2px;\n}\n\nform button {\n    background-color: #d671fd;\n    color: white;\n    border: none;\n    padding: 0.5rem 1rem;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n/* bagian loading bar */\n.loading-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 9999;\n}\n.loading-bar-container {\n    width: 80%;\n    max-width: 600px;\n    background: #fff;\n    padding: 20px;\n    border-radius: 10px;\n    text-align: center;\n}\n.loading-bar {\n    height: 30px;\n    background: #4caf50;\n    width: 0%;\n    transition: width 0.1s;\n}\n.loading-text {\n    margin-top: 10px;\n}\n\n@media (max-width: 768px) {\n    .tab-nav {\n        flex-direction: row;\n        padding: 0.5rem 0;\n        display: flex;\n    }\n\n    .tab-button {\n        margin: 0.5rem 0;\n    }\n\n    .container {\n        grid-template-columns: 1fr;\n        width: 90%;\n    }\n\n    form input, form textarea {\n        width: 90%;\n        padding: 0.5rem;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        margin-right: 2px;\n    }\n}",""]);const d=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],d=0;d<n.length;d++){var c=n[d],s=r.base?c[0]+r.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=d,e.splice(d,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var c=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),d=t(659),c=t.n(d),s=t(56),l=t.n(s),u=t(540),p=t.n(u),m=t(113),f=t.n(m),h=t(208),b={};b.styleTagTransform=f(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(h.A,b),h.A&&h.A.locals&&h.A.locals;const g="https://notes-api.dicoding.dev/v2";class v extends HTMLElement{connectedCallback(){this.innerHTML=`<div>${this.textContent}</div>`}}customElements.define("app-bar",v);class y extends HTMLElement{connectedCallback(){this.innerHTML='\n            <div class="loading-overlay">\n                <div class="loading-bar-container">\n                    <div class="loading-bar"></div>\n                    <div class="loading-text">Loading... <span class="loading-percent">0%</span></div>\n                </div>\n            </div>\n        ',this.updateProgress(0)}updateProgress(n){const e=this.querySelector(".loading-bar"),t=this.querySelector(".loading-percent");e.style.width=`${n}%`,t.textContent=`${n}%`}simulateLoading(n){let e=0;const t=setInterval((()=>{e<100?(e+=10,this.updateProgress(e)):clearInterval(t)}),n/100)}}customElements.define("loading-bar",y);class x extends HTMLElement{set noteData(n){this.innerHTML=`\n            <div class="note-item">\n                <h3>${n.title}</h3>\n                <h4>${new Date(n.createdAt).toLocaleString()}</h4>\n                <p>${n.body}</p>\n                <button class="archive-button">${n.archived?"Unarchive":"Archive"}</button>\n                <button class="delete-button">Hapus</button>\n            </div>\n        `,this.querySelector(".archive-button").addEventListener("click",(async()=>{confirm(`Apa anda yakin untuk melakukan operasi ${n.archived?"unarchive":"archive"} pada note ini ?`)&&(n.archived=!n.archived,await async function(n,e){try{if(!(await fetch(`${g}/notes/${n}/${e?"archive":"unarchive"}`,{method:"POST"})).ok)throw new Error("Gagal mengupdate status note")}catch(n){console.error("Error mengupdate status:",n)}}(n.id,n.archived),E())})),this.querySelector(".delete-button").addEventListener("click",(async()=>{confirm("Apa anda yakin untuk menghapus note ini?")&&(await async function(n){try{if(!(await fetch(`${g}/notes/${n}`,{method:"DELETE"})).ok)throw new Error("Gagal menghapus note")}catch(n){console.error("Error menghapus note :",n)}}(n.id),E())}))}}customElements.define("note-item",x);class w extends HTMLElement{connectedCallback(){this.innerHTML='\n            <form id="noteForm">\n                <div>\n                    <label for="title">Title</label>\n                    <input type="text" id="title" name="title" required>\n                </div>\n                <div>\n                    <label for="body">Body</label>\n                    <textarea id="body" name="body" required></textarea>\n                </div>\n                <button type="submit">Submit</button>\n            </form>\n        ',this.querySelector("#noteForm").addEventListener("submit",this.addNote)}addNote=async n=>{n.preventDefault();const e=this.querySelector("#title").value,t=this.querySelector("#body").value,r=this.querySelector('button[type="submit"]'),o=document.createElement("loading-bar");document.body.appendChild(o),r.disabled=!0,o.simulateLoading(3e3);try{(await fetch(`${g}/notes`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e,body:t})})).ok?window.location.href="index.html":console.error("Failed to add note")}catch(n){console.error("Error adding note:",n)}finally{r.disabled=!1,document.body.removeChild(o)}}}async function E(n="not-archived"){const e=document.getElementById("notesContainer"),t=document.createElement("loading-bar");document.body.appendChild(t),t.simulateLoading(3e3);try{const t="archived"===n?"notes/archived":"notes",r=await fetch(`${g}/${t}`);if(r.ok){const n=(await r.json()).data;e.innerHTML="",n.forEach((n=>{const t=document.createElement("note-item");t.noteData=n,e.appendChild(t)}))}else e.innerHTML="Failed to load notes"}catch(n){console.error("Error fetching notes:",n),e.innerHTML="Error loading notes"}finally{document.body.removeChild(t)}}customElements.define("note-form",w),document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("addNoteButton").addEventListener("click",(()=>{window.location.href="addNote.html"}));const n=document.querySelectorAll(".tab-button");n.forEach((e=>{e.addEventListener("click",(e=>{"addNoteButton"!==e.target.id&&(n.forEach((n=>n.classList.remove("active"))),e.target.classList.add("active"),E(e.target.getAttribute("data-tab")))}))})),E(),document.querySelector('.tab-button[data-tab="not-archived"]').classList.add("active")}))})();