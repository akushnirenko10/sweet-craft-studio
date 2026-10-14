import{a as u,B as U,i as W,S as _,N as V,P as J}from"./assets/vendor-CyF0_Zip.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();u.defaults.baseURL="https://deserts-store.b.goit.study/api";const m={CATEGORIES:"/categories",DESSERTS:"/desserts",ORDERS:"/orders",FEEDBACKS:"/feedbacks"},w=8,y=10,X="userOrder";async function Y(){return(await u(`${m.CATEGORIES}`)).data}async function S(e,t,o){const n={limit:e,page:t,category:o||void 0};return(await u(`${m.DESSERTS}`,{params:n})).data}async function Q(e){return(await u(`${m.DESSERTS}/${e}`)).data}async function D(e,t){return(await u(`${m.FEEDBACKS}?page=${e}&limit=${t}`)).data}const r={loader:document.querySelector(".loader"),burgerMenu:document.querySelector(".burger-menu"),closeMobileMenuBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),dessertCategoriesListForDesktop:document.querySelector(".sweet-categories"),dessertCategoriesListForMobileAndTablet:document.querySelector(".sweet-select"),dessertsList:document.querySelector(".sweet-list"),sweetSelect:document.querySelector(".sweet-select"),showMoreProductsBtn:document.querySelector(".sweet-list-btn"),feedbackSwiper:document.querySelector(".feedback-swiper-wrapper"),productDetailsModal:document.querySelector(".product-modal-backdrop"),productDetailsModalWrapper:document.querySelector(".product-modal-wrapper"),productModalCloseBtn:document.querySelector(".product-modal-btn"),orderModal:document.querySelector(".contact-modal-backdrop"),closeOrderModalBtn:document.querySelector(".contact-modal-btn"),orderModalForm:document.querySelector(".contact-form")},p="/sweet-craft-studio/assets/sprite-D2XxoFka.svg",Z=new U({select:r.sweetSelect,settings:{showSearch:!1}});function ee(e){if(window.innerWidth>=1440){const t=e.map(te).join("");r.dessertCategoriesListForDesktop.insertAdjacentHTML("beforeend",t)}else Z.setData([{text:"Всі десерти",value:""},...e.map(({name:t,_id:o})=>({text:t,value:o}))])}function te({name:e,_id:t}){return`<li class="sweet-categories-item">
          <button type="button" class="sweet-categories-btn" data-id="${t}">${e}</button>
        </li>`}function $(e){const t=e.map(re).join("");r.dessertsList.insertAdjacentHTML("beforeend",t)}function re({category:e,description:t,image:o,name:n,price:s,_id:a}){return`
  <li class="sweet-item">
        <img class="sweet-img" src="${o}" alt="${n}" />
        <p class="sweet-overtitle">${e.name}</p>
        <h3 class="sweet-title">${n}</h3>
        <p class="sweet-description">
          ${t}
        </p>
        <div class="sweet-list-inner">
          <p class="sweet-price">${s} грн</p>
          <button type="button" class="sweet-list-item-btn" data-id="${a}">
            <svg class="sweet-list-svg" width="24" height="24">
              <use href="${p}#arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>`}function C(e){const t=e.map(({author:o,description:n,rate:s})=>{const a=B(s);return se(o,n,a)}).join("");r.feedbackSwiper.insertAdjacentHTML("beforeend",t)}function se(e,t,o){const n=O();return`<div class="feedback-swiper-slide swiper-slide">
      <div class="rating ${o}">
            <div class="star-container">
              ${n}
            </div>
          </div>
          <p class="feedback-description">"${t}"</p>
          <p class="feedback-name">${e}</p></div>`}function B(e){return Number.isInteger(e)?`value-${e}`:`value-${Number.parseInt(e)} half`}function oe({composition:e,description:t,image:o,name:n,price:s,rate:a,_id:l}){const K=O(),z=B(a),G=`
      <img class="product-modal-img" src="${o}" />
      <div class="product-modal-details">
        <h2 class="product-modal-title">${n}</h2>
        <p class="product-modal-price">${s} грн</p>
        <div class="rating ${z}">
          <div class="star-container">
            ${K}
          </div>
        </div>
        <p class="product-modal-descr">
          ${t}
        </p>
        <p class="product-modal-ingredients">
          <span>Склад</span>: ${e}
        </p>
        <button class="btn product-modal-order-btn" type="button" data-id="${l}">
          Перейти до замовлення
        </button>
        
        </div>
    </div>
  </div>`;r.productDetailsModalWrapper.innerHTML=G}function O(){return`<div class="star">
              <svg class="star-empty">
                <use href="${p}#star-empty"></use>
              </svg>
              <svg class="star-half">
                <use href="${p}#star-half"></use>
              </svg>
              <svg class="star-filled">
                <use href="${p}#star-filled"></use>
              </svg>
            </div>`.repeat(5)}function k(){r.loader.classList.add("visible")}function ne(){r.showMoreProductsBtn.style.display="block"}function P(){r.loader.classList.remove("visible")}function g(){r.showMoreProductsBtn.style.display="none"}function ae(){r.dessertsList.innerHTML=""}function d(e,t){W[e]({message:t,position:"topRight"})}function ie(e,t){e.currentTarget.querySelectorAll("button").forEach(n=>{n.dataset.id===t?n.classList.add("active"):n.classList.remove("active")})}function T(e,t){e<t?ne():g()}let F=null;const ce={modules:[V,J],grabCursor:!0,spaceBetween:20,slidesPerView:1,breakpoints:{768:{slidesPerView:3,spaceBetween:24}},pagination:{el:".feedback-swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange(e){e.realIndex+1>=e.slides.length-2&&F(e)}}},h=e=>(F=e,new _(".feedback-swiper",ce));let c=1,M=null,i=null,f=1,q=null;async function de(){k(),g();try{const e=await Y();ee(e)}catch(e){d("error",`Помилка пiд час отримання categories: ${e}`)}L(i);try{const{feedbacks:e,total:t}=await D(f,y);q=Math.ceil(t/y),C(e),h()}catch(e){d("error",`Помилка отримання Фiдбекiв пiд час ініціалізації ${e}`)}h(ye)}async function le(){c+=1,k(),g();try{const{desserts:e}=await S(w,c,i);$(e)}catch(e){d("error",`Помилка пiд час завантаження додаткового списку десертiв: ${e}`)}finally{P(),T(c,M)}}async function ue(e){e.target.nodeName==="BUTTON"&&(k(),i=e.target.dataset.id,ie(e,i),L(i))}async function pe(e){i=e.target.value,L(i)}async function L(e){c=1,ae(),g();try{const{desserts:t,totalItems:o}=await S(w,c,e);M=Math.ceil(o/w),$(t)}catch(t){d("error",`Помилка отримання списку десертiв за обраною category: ${t}`)}finally{P(),T(c,M)}}async function fe(e){const t=e.target.closest(".sweet-list-item-btn");t&&await v(t.dataset.id)}async function v(e){try{const t=await Q(e);oe(t),me(),document.querySelector(".product-modal-order-btn").addEventListener("click",()=>ge(e))}catch(t){d("error",`Помилка отримання десерту по ID: ${t}`)}}function me(){r.productDetailsModal.classList.add("is-open"),r.productModalCloseBtn.addEventListener("click",A),r.productDetailsModal.addEventListener("click",N),window.addEventListener("keydown",R)}function b(){r.productDetailsModal.classList.remove("is-open"),r.productModalCloseBtn.removeEventListener("click",A),r.productDetailsModal.removeEventListener("click",N),window.removeEventListener("keydown",R)}function A(){b()}function N(e){e.target===e.currentTarget&&b()}function R(e){e.key==="Escape"&&b()}function ge(e){b(),r.orderModal.classList.add("is-open"),r.closeOrderModalBtn.addEventListener("click",()=>I(e)),r.orderModal.addEventListener("click",t=>j(t,e)),window.addEventListener("keydown",t=>x(t,e)),r.orderModalForm.addEventListener("input",t=>ve(t,e)),r.orderModalForm.addEventListener("submit",t=>H(t))}function I(e){E(),v(e)}function j(e,t){e.target===e.currentTarget&&(E(),v(t))}function x(e,t){e.key==="Escape"&&(E(),v(t))}function E(){r.orderModal.classList.remove("is-open"),r.closeOrderModalBtn.removeEventListener("click",I),r.orderModal.removeEventListener("click",j),window.removeEventListener("keydown",x),r.orderModalForm.removeEventListener("click",H)}function ve(e,t){const o=new FormData(e.currentTarget),n={...Object.fromEntries(o),dessertId:t};localStorage.setItem(X,JSON.stringify(n))}async function H(e,t){e.preventDefault()}function be(){r.mobileMenu.classList.add("is-open"),document.body.style.overflow="hidden"}function we(){r.mobileMenu.classList.remove("is-open"),document.body.style.overflow=""}async function ye(e){if(!(f>=q))try{f+=1;const{feedbacks:t}=await D(f,y);C(t),e.update()}catch(t){d("error",`Помилка отримання відгуків під час довантаження ${t}`)}}document.addEventListener("DOMContentLoaded",de);r.burgerMenu.addEventListener("click",be);r.closeMobileMenuBtn.addEventListener("click",we);r.dessertCategoriesListForDesktop.addEventListener("click",ue);r.dessertCategoriesListForMobileAndTablet.addEventListener("change",pe);r.dessertsList.addEventListener("click",fe);r.showMoreProductsBtn.addEventListener("click",le);
//# sourceMappingURL=index.js.map
