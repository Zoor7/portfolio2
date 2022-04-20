import{r as d,j as i,a as e,s as v,S as m,_ as p,R as u,b as f}from"./vendor.abaf1cc9.js";const k=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}};k();const w=()=>{const[c,t]=d.exports.useState("Frontend"),s=(n,o)=>{const l=document.getElementsByClassName("avatar-filter")[0];n===">"&&(l.scrollLeft+=150),n==="<"&&(l.scrollLeft-=150)},a=n=>n===c?"active":"",r=n=>{console.log(n.innerText),t(n.innerText)};return i("div",{className:"avatar",children:[i("div",{className:"avatar-filter",children:[e("span",{onClick:()=>s("<"),children:"<"}),e("p",{className:a("Frontend"),onClick:n=>r(n.target),children:"Frontend"}),e("p",{className:a("Backend"),onClick:n=>r(n.target),children:"Backend"}),e("p",{className:a("Tools"),onClick:n=>r(n.target),children:"Tools"}),e("p",{className:a("Learning"),onClick:n=>r(n.target),children:"Learning"}),e("span",{onClick:()=>s(">"),children:">"})]}),c==="Frontend"&&i("div",{className:"avatar-images",children:[e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"})]}),c==="Backend"&&i("div",{className:"avatar-images",children:[e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"})]}),c==="Tools"&&i("div",{className:"avatar-images",children:[e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"})]}),c==="Learning"&&i("div",{className:"avatar-images",children:[e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"}),e("img",{src:"https://www.svgrepo.com/show/306098/githubactions.svg"}),e("img",{src:"https://www.svgrepo.com/show/339568/systems-devops-cicd-pipeline.svg"})]})]})};var b="/portfolio2/assets/cv.5604cc8e.png",N="/portfolio2/assets/cv-hector.8e009986.pdf";const S=()=>e("div",{className:"cvDownload",children:e("a",{href:N,download:"cv-hector-llorca",children:e("img",{src:b,alt:"cv"})})}),C=v(m)(({theme:c})=>({width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`},"& + .MuiSwitch-track":{opacity:1,backgroundColor:c.palette.mode==="dark"?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:c.palette.mode==="dark"?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`}},"& .MuiSwitch-track":{opacity:1,backgroundColor:c.palette.mode==="dark"?"#8796A5":"#aab4be",borderRadius:20/2}}));function E({theme:c,switchTheme:t}){return e(C,{onClick:t,sx:{m:1},checked:c!=="light"})}const h=()=>i("div",{className:"contact",children:[e("h2",{children:"Contact"}),i("ul",{children:[e("li",{children:"Barcelona"}),e("li",{children:"hectorllorca7@gmail.com"}),e("a",{href:"http://github.com/Zoor7",target:"_blank",rel:"noreferrer",children:e("li",{children:" github/zoor7"})}),e("a",{href:"https://www.linkedin.com/in/hector-llorca/",target:"_blank",rel:"noreferrer",children:e("li",{children:"linkedin"})})]})]});const g=()=>i("div",{className:"languages",children:[e("h2",{children:"Languages"}),i("ul",{children:[e("li",{children:"Catalan native"}),e("li",{children:"Spanish native"}),e("li",{children:"English B2"})]})]});const T=({switchTheme:c,theme:t})=>i("div",{className:"sidebar",children:[e(w,{}),i("div",{className:"name-role",children:[e("p",{className:"name",children:"H\xE9ctor LLorca"}),e("p",{className:"role",children:"Junior FullStack"}),i("div",{className:"themeCv",children:[e(E,{theme:t,switchTheme:c}),e(S,{})]})]}),e("hr",{}),i("div",{className:"lan-contact",children:[e(g,{}),e(h,{})]})]});const j=({project:c,handleClose:t})=>i("div",{className:"card",children:[e("div",{className:"close",children:e("span",{onClick:t,children:"X"})}),e("div",{className:"card-image",children:e("a",{href:c.link,target:"_blank",rel:"noreferrer",children:e("img",{src:c.img,alt:""})})}),e("div",{className:"description",children:c.descripcion})]});const R={img:"https://i.ibb.co/jLh7kvZ/basket.png",descripcion:"MERN stack, socket.io y tests.",link:"https://basketrank.herokuapp.com/"};var M={BasketRank:R,"aerolab-challenge-vite":{img:"https://i.ibb.co/3Cd7w0T/image.png",descripcion:"Doing this challenge with React https://github.com/Aerolab/frontend-developer-coding-challenge#Acceptance-Criteria",link:"https://zoor7.github.io/aerolab-challenge-vite/"}};const x=()=>{const[c,t]=d.exports.useState(),s=r=>{t(M[r.target.innerText])};return i("div",{className:"projects",children:[e("div",{className:"title",children:e("p",{children:"PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS"})}),c?e(j,{project:c,handleClose:()=>t("")}):i("ul",{children:[e("li",{onClick:s,children:"BasketRank"}),e("li",{onClick:s,children:"aerolab-challenge-vite"})]})]})};function I(){const c=window.matchMedia("(prefers-color-scheme: dark)").matches,[t,s]=p("theme",c?"dark":"light");return i("div",{className:"App","data-theme":t,children:[e(T,{theme:t,switchTheme:()=>{s(t==="light"?"dark":"light")}}),i("div",{className:"main",children:[i("div",{className:"about-me",children:[e("div",{className:"title",children:e("p",{children:"ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME"})}),e("div",{children:e("p",{children:"Hi, I'm H\xE9ctor, I like to spend time clicking buttons and creating things."})})]}),i("div",{className:"studies",children:[e("div",{className:"title",children:i("p",{children:["STUDIES STUDIES STUDIES STUDIES STUDIES STUDIES STUDIES STUDIES"," "]})}),i("div",{children:[e("h4",{children:"Web development (mobile focused)"}),e("p",{children:"-Institut tecnol\xF2gic de Barcelona, (2019-2021)."})]}),i("div",{children:[e("h4",{children:"FullStack Bootcamp"}),i("p",{children:["-",e("a",{className:"link",href:"https://www.fullstackopen.com/en",target:"_blank",rel:"noopener noreferrer",children:"fullstackopen.com/en"})]})]})]}),i("div",{className:"experience",children:[e("div",{className:"title",children:e("p",{children:"PROFESSIONAL EXPERIENCE PROFESSIONAL EXPERIENCE"})}),i("div",{children:[e("h4",{children:"Internship Front-end (React, React native)"}),e("p",{children:"-Grupo Hostienda, Barcelona (January, 2021 - May, 2021)"})]}),e("div",{children:e("h4",{children:"Looking for an opportunity"})})]}),e(x,{}),i("div",{className:"footer",children:[e(h,{}),e(g,{})]})]})]})}u.render(e(f.StrictMode,{children:e(I,{})}),document.getElementById("root"));
