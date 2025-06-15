import{a as d,S as f,i as c}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="50866532-7da9a026719ecf3bca8b50bdf",m="https://pixabay.com/api/";async function y(s){return(await d.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),i=document.querySelector(".loader");console.log("loaderEl:",i);const h=new f(".gallery a");function g(s){const o=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){l.innerHTML=""}function L(){i.classList.remove("hidden")}function w(){i.classList.add("hidden")}const u=document.querySelector(".form"),S=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const o=S.value.trim();if(o){b(),L();try{const t=await y(o);t.hits.length?g(t.hits):c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})}catch{c.error({message:"Something went wrong. Please try again later.",position:"bottomRight"})}finally{w()}}});
//# sourceMappingURL=index.js.map
