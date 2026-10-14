import { refs } from './refs';
import iconsUrl from '../img/sprite.svg';
import 'css-star-rating/css/star-rating.css';
import { slimSelect } from './sweet-list-select';

export function createDessertCategoriesMarkup(categoriesList) {
  if (window.innerWidth >= 1440) {
    const markup = categoriesList
      .map(createDessertCategoryMarkupForDesktop)
      .join('');
    refs.dessertCategoriesListForDesktop.insertAdjacentHTML(
      'beforeend',
      markup
    );
  } else {
    slimSelect.setData([
      { text: 'Всі десерти', value: '' },
      ...categoriesList.map(({ name, _id }) => ({ text: name, value: _id })),
    ]);
    // const markup = categoriesList
    //   .map(createDessertCategoryMarkupForMobileAndTablet)
    //   .join('');
    // refs.dessertCategoriesListForMobileAndTablet.insertAdjacentHTML(
    //   'beforeend',
    //   markup
    // );
  }
}

function createDessertCategoryMarkupForDesktop({ name, _id }) {
  return `<li class="sweet-categories-item">
          <button type="button" class="sweet-categories-btn" data-id="${_id}">${name}</button>
        </li>`;
}

// function createDessertCategoryMarkupForMobileAndTablet({ name, _id }) {
//   return `<option value="${_id}">${name}</option>`;
// }

export function createDessertsListMarkup(dessertsList) {
  const markup = dessertsList.map(createDessertMarkup).join('');
  refs.dessertsList.insertAdjacentHTML('beforeend', markup);
}

function createDessertMarkup({
  category,
  description,
  image,
  name,
  price,
  _id,
}) {
  return `
  <li class="sweet-item">
        <img class="sweet-img" src="${image}" alt="${name}" />
        <p class="sweet-overtitle">${category.name}</p>
        <h3 class="sweet-title">${name}</h3>
        <p class="sweet-description">
          ${description}
        </p>
        <div class="sweet-list-inner">
          <p class="sweet-price">${price} грн</p>
          <button type="button" class="sweet-list-item-btn" data-id="${_id}">
            <svg class="sweet-list-svg" width="24" height="24">
              <use href="${iconsUrl}#arrow_outward"></use>
            </svg>
          </button>
        </div>
      </li>`;
}

// =================FEEDBACKS========================
export function renderFeedbacks(feedbacks) {
  const markup = feedbacks
    .map(({ author, description, rate }) => {
      const ratingClass = createClassFromRate(rate);
      return createFeedbacksMarkup(author, description, ratingClass);
    })
    .join('');
  refs.feedbackSwiper.insertAdjacentHTML('beforeend', markup);
}

function createFeedbacksMarkup(author, description, ratingClass) {
  const ratingStarsMarkup = createRatingStarsMarkup();
  return `<div class="feedback-swiper-slide swiper-slide">
      <div class="rating ${ratingClass}">
            <div class="star-container">
              ${ratingStarsMarkup}
            </div>
          </div>
          <p class="feedback-description">"${description}"</p>
          <p class="feedback-name">${author}</p></div>`;
}

function createClassFromRate(rate) {
  if (Number.isInteger(rate)) {
    return `value-${rate}`;
  }
  const normalizeRate = Number.parseInt(rate);
  return `value-${normalizeRate} half`;
}

// ==============PRODUCT MODAL===================
export function createProductModalMarkup({
  composition,
  description,
  image,
  name,
  price,
  rate,
  _id,
}) {
  const ratingStarsMarkup = createRatingStarsMarkup();
  const ratingClass = createClassFromRate(rate);
  const markup = `
      <img class="product-modal-img" src="${image}" />
      <div class="product-modal-details">
        <h2 class="product-modal-title">${name}</h2>
        <p class="product-modal-price">${price} грн</p>
        <div class="rating ${ratingClass}">
          <div class="star-container">
            ${ratingStarsMarkup}
          </div>
        </div>
        <p class="product-modal-descr">
          ${description}
        </p>
        <p class="product-modal-ingredients">
          <span>Склад</span>: ${composition}
        </p>
        <button class="btn product-modal-order-btn" type="button" data-id="${_id}">
          Перейти до замовлення
        </button>
        
        </div>
    </div>
  </div>`;
  refs.productDetailsModalWrapper.innerHTML = markup;
}

function createRatingStarsMarkup() {
  const markup = `<div class="star">
              <svg class="star-empty">
                <use href="${iconsUrl}#star-empty"></use>
              </svg>
              <svg class="star-half">
                <use href="${iconsUrl}#star-half"></use>
              </svg>
              <svg class="star-filled">
                <use href="${iconsUrl}#star-filled"></use>
              </svg>
            </div>`;
  return markup.repeat(5);
}
