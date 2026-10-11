import{a as u,i as q,S as I,N,P as R}from"./assets/vendor-C7N43mRl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();u.defaults.baseURL="https://deserts-store.b.goit.study/api";const g={CATEGORIES:"/categories",DESSERTS:"/desserts",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},b=8,y=10;async function j(){return(await u(`${g.CATEGORIES}`)).data}async function L(e,t,a){const o={limit:e,page:t,category:a||void 0};return(await u(`${g.DESSERTS}`,{params:o})).data}async function x(e){return(await u(`${g.DESSERTS}/${e}`)).data}async function k(e,t){return(await u(`${g.FEEDBACKS}?page=${e}&limit=${t}`)).data}const r={loader:document.querySelector(".loader"),burgerMenu:document.querySelector(".burger-menu"),closeMobileMenuBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),dessertCategoriesListForDesktop:document.querySelector(".sweet-categories"),dessertCategoriesListForMobileAndTablet:document.querySelector(".sweet-select"),dessertsList:document.querySelector(".sweet-list"),showMoreProductsBtn:document.querySelector(".sweet-list-btn"),feedbackSwiper:document.querySelector(".feedback-swiper-wrapper"),productDetailsModal:document.querySelector(".product-modal-backdrop")},p="/sweet-craft-studio/assets/sprite-D2XxoFka.svg";function H(e){if(window.innerWidth>=1440){const t=e.map(z).join("");r.dessertCategoriesListForDesktop.insertAdjacentHTML("beforeend",t)}else{const t=e.map(K).join("");r.dessertCategoriesListForMobileAndTablet.insertAdjacentHTML("beforeend",t)}}function z({name:e,_id:t}){return`<li class="sweet-categories-item">
          <button type="button" class="sweet-categories-btn" data-id="${t}">${e}</button>
        </li>`}function K({name:e,_id:t}){return`<option value="${t}">${e}</option>`}function $(e){const t=e.map(U).join("");r.dessertsList.insertAdjacentHTML("beforeend",t)}function U({category:e,description:t,image:a,name:o,price:s,_id:n}){return`
  <li class="sweet-item">
        <img class="sweet-img" src="${a}" alt="${o}" />
        <p class="sweet-overtitle">${e.name}</p>
        <h3 class="sweet-title">${o}</h3>
        <p class="sweet-description">
          ${t}
        </p>
        <div class="sweet-list-inner">
          <p class="sweet-price">${s} грн</p>
          <button type="button" class="sweet-list-item-btn" data-id="${n}">
            <svg class="sweet-list-svg" width="24" height="24">
              <use href="./img/sprite.svg#arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>`}function S(e){const t=e.map(({author:a,description:o,rate:s})=>{const n=D(s);return G(a,o,n)}).join("");r.feedbackSwiper.insertAdjacentHTML("beforeend",t)}function G(e,t,a){const o=C();return`<div class="feedback-swiper-slide swiper-slide">
      <div class="rating ${a}">
            <div class="star-container">
              ${o}
            </div>
          </div>
          <p class="feedback-description">"${t}"</p>
          <p class="feedback-name">${e}</p></div>`}function D(e){return Number.isInteger(e)?`value-${e}`:`value-${Number.parseInt(e)} half`}function V({composition:e,description:t,image:a,name:o,price:s,rate:n,_id:d}){const F=C(),A=D(n),O=`
  <div class="container">
    <div class="product-modal section container">
      <button class="close-modal-btn product-modal-btn" type="button">
        <svg class="close-modal-svg" width="24px" height="24px">
          <use href="${p}#close"></use>
        </svg>
      </button>
      <img class="product-modal-img" src="${a}" />
      <div class="product-modal-details">
        <h2 class="product-modal-title">${o}</h2>
        <p class="product-modal-price">${s} грн</p>
        <div class="rating ${A}">
          <div class="star-container">
            ${F}
          </div>
        </div>
        <p class="product-modal-descr">
          ${t}
        </p>
        <p class="product-modal-ingredients">
          <span>Склад</span>: ${e}
        </p>
        <button class="btn product-modal-order-btn" type="button" data-id="${d}">
          Перейти до замовлення
        </button>
        
        </div>
    </div>
  </div>`;r.productDetailsModal.innerHTML=O}function C(){return`<div class="star">
              <svg class="star-empty">
                <use href="${p}#star-empty"></use>
              </svg>
              <svg class="star-half">
                <use href="${p}#star-half"></use>
              </svg>
              <svg class="star-filled">
                <use href="${p}#star-filled"></use>
              </svg>
            </div>`.repeat(5)}function w(){r.loader.classList.add("visible")}function W(){r.showMoreProductsBtn.style.display="block"}function E(){r.loader.classList.remove("visible")}function m(){r.showMoreProductsBtn.style.display="none"}function X(){r.dessertsList.innerHTML=""}function l(e,t){q[e]({message:t,position:"topRight"})}function _(e,t){e.currentTarget.querySelectorAll("button").forEach(o=>{o.dataset.id===t?o.classList.add("active"):o.classList.remove("active")})}function B(e,t){e<t?W():m()}let T=null;const J={modules:[N,R],grabCursor:!0,spaceBetween:20,slidesPerView:1,breakpoints:{768:{slidesPerView:3,spaceBetween:24}},pagination:{el:".feedback-swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange(e){e.realIndex+1>=e.slides.length-2&&T(e)}}},h=e=>(T=e,new I(".feedback-swiper",J));let c=1,v=null,i=null,f=1,P=null;async function Q(){w(),m();try{const e=await j();H(e)}catch(e){l("error",`Помилка пiд час отримання categories: ${e}`)}M(i);try{const{feedbacks:e,total:t}=await k(f,y);P=Math.ceil(t/y),S(e),h()}catch(e){l("error",`Помилка отримання Фiдбекiв пiд час ініціалізації ${e}`)}h(ne)}async function Y(){c+=1,w(),m();try{const{desserts:e}=await L(b,c,i);$(e)}catch(e){l("error",`Помилка пiд час завантаження додаткового списку десертiв: ${e}`)}finally{E(),B(c,v)}}async function Z(e){e.target.nodeName==="BUTTON"&&(w(),i=e.target.dataset.id,_(e,i),M(i))}async function ee(e){i=e.target.value,M(i)}async function M(e){c=1,X(),m();try{const{desserts:t,totalItems:a}=await L(b,c,e);v=Math.ceil(a/b),$(t)}catch(t){l("error",`Помилка отримання списку десертiв за обраною category: ${t}`)}finally{E(),B(c,v)}}async function te(e){const t=e.target.closest(".sweet-list-item-btn");if(!t)return;const a=t.dataset.id,o=await x(a);V(o),se()}function se(){r.productDetailsModal.classList.add("is-open"),document.querySelector(".product-modal-btn").addEventListener("click",re)}function re(){r.productDetailsModal.classList.remove("is-open")}function oe(){r.mobileMenu.classList.add("is-open"),document.body.style.overflow="hidden"}function ae(){r.mobileMenu.classList.remove("is-open"),document.body.style.overflow=""}async function ne(e){if(!(f>=P))try{f+=1;const{feedbacks:t}=await k(f,y);S(t),e.update()}catch(t){l("error",`Помилка отримання відгуків під час довантаження ${t}`)}}document.addEventListener("DOMContentLoaded",Q);r.burgerMenu.addEventListener("click",oe);r.closeMobileMenuBtn.addEventListener("click",ae);r.dessertCategoriesListForDesktop.addEventListener("click",Z);r.dessertCategoriesListForMobileAndTablet.addEventListener("change",ee);r.dessertsList.addEventListener("click",te);r.showMoreProductsBtn.addEventListener("click",Y);
//# sourceMappingURL=index.js.map
