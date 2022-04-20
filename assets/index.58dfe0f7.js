import{r as d,j as i,a as e,s as v,S as m,_ as p,R as u,b as f}from"./vendor.abaf1cc9.js";const k=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};k();const b=()=>{const[c,r]=d.exports.useState("Frontend"),s=(n,o)=>{const l=document.getElementsByClassName("avatar-filter")[0];n===">"&&(l.scrollLeft+=150),n==="<"&&(l.scrollLeft-=150)},a=n=>n===c?"active":"",t=n=>{console.log(n.innerText),r(n.innerText)};return i("div",{className:"avatar",children:[i("div",{className:"avatar-filter",children:[e("span",{onClick:()=>s("<"),children:"<"}),e("p",{className:a("Frontend"),onClick:n=>t(n.target),children:"Frontend"}),e("p",{className:a("Backend"),onClick:n=>t(n.target),children:"Backend"}),e("p",{className:a("Tools"),onClick:n=>t(n.target),children:"Tools"}),e("p",{className:a("Learning"),onClick:n=>t(n.target),children:"Learning"}),e("span",{onClick:()=>s(">"),children:">"})]}),c==="Frontend"&&i("div",{className:"avatar-images",children:[e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"})]}),c==="Backend"&&i("div",{className:"avatar-images",children:[e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"})]}),c==="Tools"&&i("div",{className:"avatar-images",children:[e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"})]}),c==="Learning"&&i("div",{className:"avatar-images",children:[e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"}),e("img",{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"}),e("img",{src:"https://www.svgrepo.com/show/306098/githubactions.svg"}),e("img",{src:"https://www.svgrepo.com/show/339568/systems-devops-cicd-pipeline.svg"})]})]})};var w="/portfolio2/assets/cv.5604cc8e.png",N="/portfolio2/assets/cv-hector.8e009986.pdf";const S=()=>e("div",{className:"cvDownload",children:e("a",{href:N,download:"cv-hector-llorca",children:e("img",{src:w,alt:"cv"})})}),C=v(m)(({theme:c})=>({width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`},"& + .MuiSwitch-track":{opacity:1,backgroundColor:c.palette.mode==="dark"?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:c.palette.mode==="dark"?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`}},"& .MuiSwitch-track":{opacity:1,backgroundColor:c.palette.mode==="dark"?"#8796A5":"#aab4be",borderRadius:20/2}}));function E({theme:c,switchTheme:r}){return e(C,{onClick:r,sx:{m:1},checked:c!=="light"})}const h=()=>i("div",{className:"contact",children:[e("h2",{children:"Contact"}),i("ul",{children:[e("li",{children:"Barcelona"}),e("li",{children:"hectorllorca7@gmail.com"}),e("a",{href:"http://github.com/Zoor7",target:"_blank",rel:"noreferrer",children:e("li",{children:" github.com/Zoor7"})})]})]});const g=()=>i("div",{className:"languages",children:[e("h2",{children:"Languages"}),i("ul",{children:[e("li",{children:"Catalan native"}),e("li",{children:"Spanish native"}),e("li",{children:"English B2"})]})]});const T=({switchTheme:c,theme:r})=>i("div",{className:"sidebar",children:[e(b,{}),i("div",{className:"name-role",children:[e("p",{className:"name",children:"H\xE9ctor LLorca"}),e("p",{className:"role",children:"Junior FullStack"}),i("div",{className:"themeCv",children:[e(E,{theme:r,switchTheme:c}),e(S,{})]})]}),e("hr",{}),i("div",{className:"lan-contact",children:[e(g,{}),e(h,{})]})]});const j=({project:c,handleClose:r})=>i("div",{className:"card",children:[e("div",{className:"close",children:e("span",{onClick:r,children:"X"})}),e("div",{className:"card-image",children:e("a",{href:c.link,target:"_blank",rel:"noreferrer",children:e("img",{src:c.img,alt:""})})}),e("div",{className:"description",children:c.descripcion})]});const R={img:"https://i.ibb.co/jLh7kvZ/basket.png",descripcion:"MERN stack, socket.io y tests.",link:"https://basketrank.herokuapp.com/"};var M={BasketRank:R,"aerolab-challenge-vite":{img:"https://i.ibb.co/3Cd7w0T/image.png",descripcion:"Doing this challenge with React https://github.com/Aerolab/frontend-developer-coding-challenge#Acceptance-Criteria",link:"https://zoor7.github.io/aerolab-challenge-vite/"}};const x=()=>{const[c,r]=d.exports.useState(),s=t=>{r(M[t.target.innerText])};return i("div",{className:"projects",children:[e("div",{className:"title",children:e("p",{children:"PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS"})}),c?e(j,{project:c,handleClose:()=>r("")}):i("ul",{children:[e("li",{onClick:s,children:"BasketRank"}),e("li",{onClick:s,children:"aerolab-challenge-vite"})]})]})};function I(){const c=window.matchMedia("(prefers-color-scheme: dark)").matches,[r,s]=p("theme",c?"dark":"light");return i("div",{className:"App","data-theme":r,children:[e(T,{theme:r,switchTheme:()=>{s(r==="light"?"dark":"light")}}),i("div",{className:"main",children:[i("div",{className:"about-me",children:[e("div",{className:"title",children:e("p",{children:"ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME"})}),e("div",{children:e("p",{children:"Hi, I'm H\xE9ctor, I like to spend time clicking buttons and creating things."})})]}),i("div",{className:"studies",children:[e("div",{className:"title",children:i("p",{children:["STUDIES STUDIES STUDIES STUDIES STUDIES STUDIES STUDIES STUDIES"," "]})}),i("div",{children:[e("h4",{children:"Web development (mobile focused)"}),e("p",{children:"-Institut tecnol\xF2gic de Barcelona, (2019-2021)."})]}),i("div",{children:[e("h4",{children:"FullStack Bootcamp"}),i("p",{children:["-",e("a",{className:"link",href:"https://www.fullstackopen.com/en",target:"_blank",rel:"noopener noreferrer",children:"fullstackopen.com/en"})]})]})]}),i("div",{className:"experience",children:[e("div",{className:"title",children:e("p",{children:"PROFESSIONAL EXPERIENCE PROFESSIONAL EXPERIENCE"})}),i("div",{children:[e("h4",{children:"Internship Front-end (React, React native)"}),e("p",{children:"-Grupo Hostienda, Barcelona (January, 2021 - May, 2021)"})]}),e("div",{children:e("h4",{children:"Looking for an opportunity"})})]}),e(x,{}),i("div",{className:"footer",children:[e(h,{}),e(g,{})]})]})]})}u.render(e(f.StrictMode,{children:e(I,{})}),document.getElementById("root"));