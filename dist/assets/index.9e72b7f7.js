import{j as u,r as o,a as x}from"./vendor.56bbb4d3.js";const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}};v();const b="modulepreload",m={},y="/",h=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${y}${n}`,n in m)return;m[n]=!0;const s=n.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${c}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":b,s||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),s)return new Promise((p,f)=>{a.addEventListener("load",p),a.addEventListener("error",f)})})).then(()=>t())},e=u.exports.jsx,i=u.exports.jsxs;var g=()=>e("div",{className:"w-auto m-4 flex justify-center items-center",children:e("div",{className:"w-10 h-10 bg-indigo-600 rounded-full replace-animation"})});const d=o.exports.createContext([]);function N({children:l}){const[t,r]=o.exports.useState([{title:"Xcitedu",color:"#f97316",background:0,baseline:"Internships",punchline:"looking for internships"},{title:"XcitEducation",color:"#10b981",background:1,baseline:"Trainings",punchline:"looking forward to scale your skills"},{title:"Xcitedu",color:"#111827",background:2,baseline:"Capitals",punchline:"building startups"},{title:"Xciteducation",color:"#facc15",background:3,baseline:"Foundations",punchline:"reshaping villages"}]),[n,s]=o.exports.useState(1),[c,a]=o.exports.useState(0);return e(d.Provider,{value:{products:t,setProducts:r,selected:n,setSelected:s,menuNav:c,setMenuNav:a},children:l})}function w(){const l=o.exports.useContext(d);return i("nav",{className:"flex justify-between mx-2 py-2 shadow-lg",style:{zIndex:"1001 !important"},children:[e("h1",{className:"bg-gray-700 text-white p-2 text-xl text-center  mx-4 font-bold",style:{width:"10rem"},children:"XcitEducation"}),i("div",{className:"relative  w-auto flex text-gray-800 bg-white justify-end fon font-semibold",children:[e("button",{className:"  hover:bg-gray-100 px-4   sm-hide",children:"TRAININGS"}),e("button",{className:" sm-hide  px-4 hover:bg-gray-100",children:"INTERNSHIP"}),e("button",{className:" sm-hide px-4 hover:bg-gray-100",children:"CAPITALS"}),e("button",{className:" sm-hide px-4 hover:bg-gray-100",children:"FOUNDATIONS"}),e("button",{className:"text-gray-800 text-xl  mx-2 sm-show ",onClick:()=>{l.setMenuNav(1)},children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})})]})]})}var C="assets/barrierBreaking.90ced45a.svg",k="assets/training.e71a04e3.svg",I="assets/feelingProud.46538f8f.svg",E="assets/foundation.b2fa38d1.svg";function j(l){const t=[C,k,I,E],r=o.exports.useContext(d);return e("div",{className:"dial-container overflow-hidden rounded-xl",children:e("div",{className:"rect-outer bg-red-400 rounded-xl shadow-lg",id:"outer-rect",children:e("div",{className:" rect-inner bg-red-50 shadow-lg  rounded-xl",children:e("img",{src:t[r.products[r.selected].background],alt:r.products[r.selected].title})})})})}var S=({})=>i("div",{className:" ",children:[e("div",{className:"w-full"}),e("div",{className:"w-full ",children:e(j,{})})]});function P(l){o.exports.useLayoutEffect(()=>{const r=document.getElementById("counter");r.style.backgroundColor=t.products[t.selected].color;const n=document.getElementById("outer-rect");n.style.backgroundColor=t.products[t.selected].color});const t=o.exports.useContext(d);return i("div",{className:"",children:[i("div",{className:" text-white flex justify-center items-center",id:"counter",children:["0",t.selected+1]}),e("img",{className:"bg-dotted",src:"http://www.clker.com/cliparts/8/e/a/b/1194989365666493578pattern-dots-square-grid-01.svg.med.png",alt:"Dots Square Grid 01 Pattern Clip Art at Clker.com - vector clip art online,  royalty free &amp; public domain"}),i("div",{className:"down absolute",children:[e("div",{className:"line bg-gray-400"}),e("div",{onClick:()=>{const r=document.getElementById("counter");r.style.backgroundColor=t.products[t.selected].color;const n=document.getElementById("outer-rect");n.style.backgroundColor=t.products[t.selected].color,t.setSelected(t.selected-1<0?t.products.length-1:t.selected-1)},className:"btn-1 w-10 h-10 bg-white flex justify-center items-center rounded-full relative",children:e("div",{className:"hover-btn w-10 h-10 rounded-full"})}),e("div",{onClick:()=>{const r=document.getElementById("counter");r.style.backgroundColor=t.products[t.selected].color;const n=document.getElementById("outer-rect");n.style.backgroundColor=t.products[t.selected].color,t.setSelected(t.selected+1>t.products.length-1?0:t.selected+1)},className:"btn-2 w-10 h-10 bg-white flex justify-center items-center rounded-full relative mt-3",children:e("div",{className:"hover-btn w-10 h-10 rounded-full"})})]})]})}var L=()=>{const l=o.exports.useContext(d);return i("div",{className:"w-full",children:[e(P,{}),i("div",{className:"px-4 py-4",children:[e("h2",{className:"text-6xl text-gray-400",children:l.products[l.selected].title}),e("h2",{className:"text-6xl font-semibold text-gray-800",children:l.products[l.selected].baseline}),e("h2",{className:"text-lg text-gray-400 ",children:l.products[l.selected].punchline})]})]})},_=()=>e(o.exports.Fragment,{children:i("main",{className:"flex sm-wrap  m-6",children:[e("div",{className:"w-full",children:e(L,{})}),e("div",{className:"w-full",children:e(S,{})})]})});const A=o.exports.lazy(()=>h(()=>import("./Menubar.282a34be.js"),["assets/Menubar.282a34be.js","assets/vendor.56bbb4d3.js"])),B=o.exports.lazy(()=>h(()=>import("./Footer.579d3ec6.js"),["assets/Footer.579d3ec6.js","assets/vendor.56bbb4d3.js"]));function R(){const[l,t]=o.exports.useState([]);return o.exports.useContext(d),o.exports.useEffect(()=>{fetch("/src/data/cards.json").then(r=>r.json()).then(r=>{t(r)})},[]),i("div",{className:"App    mx-auto",children:[e(w,{}),e(_,{}),e(o.exports.Suspense,{fallback:e(g,{}),children:e(A,{})}),e(o.exports.Suspense,{fallback:e(g,{}),children:e(B,{})})]})}x.exports.render(e(o.exports.StrictMode,{children:e(N,{children:e(R,{})})}),document.getElementById("root"));export{e as a,d as c,i as j};