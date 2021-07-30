import{l as e,w as t,j as n,M as a,H as l,N as i}from"./vendor.d030b03c.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,i)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const s=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){i(new Error(`Failed to import: ${e}`)),l(r)},onload(){n(self[t].moduleMap[o]),l(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("/slides_bootstrap5/assets/");var o=[{filename:"00_01",title:"The Most Popular"},{filename:"00_02",title:"Using the Exercises"},{filename:"01_01",title:"Under the Hood"},{filename:"99_01",title:"Next Steps"},{filename:"demo",title:"Opinionated Reveal.js"},{filename:"slides",title:""},{filename:"03_02",title:"Bootstrap Icons"},{filename:"01_02",title:"The Grid"},{filename:"01_03",title:"RTL"},{filename:"01_04",title:"Typography"},{filename:"02_01",title:"Tables"},{filename:"02_02",title:"Forms"},{filename:"03_01",title:"Accordion"},{filename:"01_05",title:"Utilities"},{filename:"01_06",title:"Helpers"},{filename:"02_03",title:"Regular Components"},{filename:"02_04",title:"Interactive Components"},{filename:"03_03",title:"Offcanvas Component"}];function s(){let e,t=[],n=window.location.href.slice(window.location.href.indexOf("?")+1).split("&");for(let a=0;a<n.length;a++)e=n[a].split("="),t.push(e[0]),t[e[0]]=e[1];return t}e.highlightAll(),t.load({google:{families:["Source Code Pro:400","Source Sans Pro:200,300,400,500,700,800,900"]}});let r=s().d;s().d?document.querySelector("section").dataset.markdown="slides/"+r+".md":r="index",n.initialize({plugins:[a,l,i],fragments:!0,footer:!1,margin:0,minScale:0,maxScale:4,display:"flex",history:!0,disableLayout:!1,center:!1,hideInactiveCursor:!0,hideCursorTime:250,controls:!1,progress:!1,rollingLinks:!1}),n.addKeyBinding({keyCode:84,key:"T",description:"Toggle footer display"},(()=>{var e=document.querySelector(".footer");null!==e&&e.classList.toggle("fadeout")})),n.addKeyBinding({keyCode:77,key:"M",description:"Toggle menu display"},(()=>{var e=document.querySelector(".sidebar-menu");switch(e.className){case"sidebar-menu":e.classList.add("menuin");break;case"sidebar-menu menuin":e.className="sidebar-menu menuout";break;case"sidebar-menu menuout":e.className="sidebar-menu menuin"}})),n.on("ready",(()=>{let e=n.getSlides();n.hasPlugin("markdown"),e.forEach((e=>{let t=null;if(t=!(e.dataset.state&&e.dataset.state.includes("no-fragment")||!n.getConfig().fragments),t){e.querySelectorAll("li,  section > p, pre code:not(.has-highlights),embed, iframe:not(data-allowfullscreen), table:not(.hljs-ln), canvas").forEach((e=>e.classList.add("fragment","fade-left")))}e.querySelectorAll("pre code").forEach((e=>e.dataset.lineNumbers=!0)),e.querySelectorAll("code").forEach((e=>e.contentEditable=!0))}));let t=document.querySelector(".reveal");if(1==n.getConfig().footer){let e=document.createElement("footer");e.className="footer fadein",e.innerHTML='<div class="persistent">\n  <strong class="text-warning">Links:</strong>\n  <a class="text-decoration-none" href="https://raybo.org/slides_bootstrap5/#/"\n    >raybo.org/slides_bootstrap5</a\n  >\n  <a\n    class="text-decoration-none"\n    href="https://www.linkedin.com/learning/instructors/ray-villalobos"\n    >courses</a\n  >\n  <a class="text-decoration-none" href="https://raybo.org">blog</a> |\n  <strong class="text-warning ml-1">Contact:</strong>\n  <a\n    class="text-decoration-none"\n    href="https://www.linkedin.com/in/planetoftheweb"\n    >LinkedIn</a\n  >\n  <a class="text-decoration-none" href="http://github.com/planetoftheweb"\n    >Github</a\n  >\n</div>\n\n<div class="small mt-1">\n  <span class="badge bg-secondary mr-1 ml-2 font-weight-bold"\n    >&larr; &rarr;</span\n  >\n  navigate\n  <span class="badge bg-secondary mr-1 ml-2 font-weight-bold">t</span>toolbar\n  <span class="badge bg-secondary mr-1 ml-2 font-weight-bold">m</span>menu\n</div>\n',t.parentNode.insertBefore(e,t.nextSibling)}let a=document.createElement("nav");a.className="sidebar-menu menuout",t.parentNode.insertBefore(a,t);let l=document.createElement("div");l.className="menu-headline",l.innerText="Documents",a.appendChild(l),o.sort(((e,t)=>{var n=e.filename.toLowerCase(),a=t.filename.toLowerCase();return n<a?-1:n>a?1:0})).map((e=>{if("demo"!==e.filename&&"slides"!==e.filename&&!e.filename.startsWith("00_")&&!e.filename.startsWith("99_")){let t=document.createElement("div"),n=document.createElement("div");e.filename==r?t.className="menu-container active":t.className="menu-container",a.appendChild(t);let l=document.createElement("a");l.className="menu-link",l.href=`?d=${e.filename}&`,t.appendChild(l),n.className="menu-filename",n.innerText=`${e.filename}`,l.appendChild(n);let i=document.createElement("div");i.className="menu-title",i.innerText=`${e.title}`,l.appendChild(i);let o=document.createElement("a");o.className="menu-notes",o.href=`site/slides/${e.filename}/index.html`,o.innerText="notes",t.appendChild(o)}}))}));
