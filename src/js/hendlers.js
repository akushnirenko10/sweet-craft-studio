import {
  getDessertById,
  getDessertCategoryList,
  getDessertsList,
  getFeedbacks,
} from './api-functions';
import { refs } from './refs';
import {
  createDessertCategoriesMarkup,
  createDessertsListMarkup,
  createProductModalMarkup,
  renderFeedbacks,
} from './render-functions';
import {
  changeActiveCategoryBtn,
  hideLoader,
  hideLoadMoreBtn,
  resetDesertList,
  showLoader,
  showToast,
  updateLoadMoreBtn,
} from './helpers';
import { feedbacksLimit, limit, LOCAL_STORAGE_KEY } from './constants';
import { createFeedbackSwiper } from './swiper';

let page = 1;
let totalPages = null;
let categoryId = null;
let feedbacksPage = 1;
let feedbacksTotalPages = null;

//=================ПОЧАТОК HANDLERS==============

export async function initPage() {
  showLoader();
  hideLoadMoreBtn();
  try {
    const dessertsCategoriesList = await getDessertCategoryList();
    createDessertCategoriesMarkup(dessertsCategoriesList);
  } catch (err) {
    showToast('error', `Помилка пiд час отримання categories: ${err}`);
  }
  loadDessertsList(categoryId);

  // =====================FEEDBACKS=========
  try {
    const { feedbacks, total } = await getFeedbacks(
      feedbacksPage,
      feedbacksLimit
    );
    feedbacksTotalPages = Math.ceil(total / feedbacksLimit);
    renderFeedbacks(feedbacks);
    createFeedbackSwiper();
  } catch (err) {
    showToast(
      'error',
      `Помилка отримання Фiдбекiв пiд час ініціалізації ${err}`
    );
  }
  createFeedbackSwiper(loadMoreFeedbacks);
}

// ==============SHOW MORE BTN===================
export async function onShowMoreProductsBtn() {
  page += 1;
  showLoader();
  hideLoadMoreBtn();
  try {
    const { desserts } = await getDessertsList(limit, page, categoryId);
    createDessertsListMarkup(desserts);
  } catch (err) {
    showToast(
      'error',
      `Помилка пiд час завантаження додаткового списку десертiв: ${err}`
    );
  } finally {
    hideLoader();
    updateLoadMoreBtn(page, totalPages);
  }
}

// ====================CATEGORY ITEM CLICK================
export async function onCategoryItemClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  showLoader();
  categoryId = e.target.dataset.id;
  changeActiveCategoryBtn(e, categoryId);
  loadDessertsList(categoryId);
}

export async function onCategoryItemChange(e) {
  categoryId = e.target.value;
  loadDessertsList(categoryId);
}

async function loadDessertsList(categoryId) {
  page = 1;
  resetDesertList();
  hideLoadMoreBtn();
  try {
    const { desserts, totalItems } = await getDessertsList(
      limit,
      page,
      categoryId
    );
    totalPages = Math.ceil(totalItems / limit);
    createDessertsListMarkup(desserts);
  } catch (err) {
    showToast(
      'error',
      `Помилка отримання списку десертiв за обраною category: ${err}`
    );
  } finally {
    hideLoader();
    updateLoadMoreBtn(page, totalPages);
  }
}

// ==============PRODUCT MODAL=================
export async function onOpenDessertModalBtnClick(e) {
  const btn = e.target.closest('.sweet-list-item-btn');
  if (!btn) return;

  await showDessertDetails(btn.dataset.id);
}

async function showDessertDetails(dessertId) {
  try {
    const dessertDetails = await getDessertById(dessertId);
    createProductModalMarkup(dessertDetails);
    openProductDetailsModal();
    const openOrderModalBtnEl = document.querySelector(
      '.product-modal-order-btn'
    );
    openOrderModalBtnEl.addEventListener('click', () =>
      onOpenOrderModalBtnClick(dessertId)
    );
  } catch (err) {
    showToast('error', `Помилка отримання десерту по ID: ${err}`);
  }
}

function openProductDetailsModal() {
  refs.productDetailsModal.classList.add('is-open');

  refs.productModalCloseBtn.addEventListener(
    'click',
    onProductDetailsModalCloseBtn
  );
  refs.productDetailsModal.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onProductModalEscPress);
}

export function closeProductModal() {
  refs.productDetailsModal.classList.remove('is-open');

  refs.productModalCloseBtn.removeEventListener(
    'click',
    onProductDetailsModalCloseBtn
  );
  refs.productDetailsModal.removeEventListener('click', onBackdropClick);
  window.removeEventListener('keydown', onProductModalEscPress);
}

export function onProductDetailsModalCloseBtn() {
  closeProductModal();
}

function onBackdropClick(e) {
  if (e.target !== e.currentTarget) return;
  closeProductModal();
}

function onProductModalEscPress(e) {
  if (e.key === 'Escape') {
    closeProductModal();
  }
}

// ====================ORDER MODAL=================
function onOpenOrderModalBtnClick(dessertId) {
  closeProductModal();
  refs.orderModal.classList.add('is-open');
  refs.closeOrderModalBtn.addEventListener('click', () =>
    onCloseOrderModalBtnClick(dessertId)
  );
  refs.orderModal.addEventListener('click', e =>
    onOrderModalBackdropClick(e, dessertId)
  );
  window.addEventListener('keydown', e => onOrderModalEscPress(e, dessertId));

  refs.orderModalForm.addEventListener('input', e =>
    onOrderModalFormInput(e, dessertId)
  );
  refs.orderModalForm.addEventListener('submit', e =>
    onSubmitOrderBtnClick(e, dessertId)
  );
}

function onCloseOrderModalBtnClick(dessertId) {
  closeOrderModal();
  showDessertDetails(dessertId);
}

function onOrderModalBackdropClick(e, dessertId) {
  if (e.target !== e.currentTarget) return;
  closeOrderModal();
  showDessertDetails(dessertId);
}

function onOrderModalEscPress(e, dessertId) {
  if (e.key === 'Escape') {
    closeOrderModal();
    showDessertDetails(dessertId);
  }
}

function closeOrderModal() {
  refs.orderModal.classList.remove('is-open');

  refs.closeOrderModalBtn.removeEventListener(
    'click',
    onCloseOrderModalBtnClick
  );
  refs.orderModal.removeEventListener('click', onOrderModalBackdropClick);
  window.removeEventListener('keydown', onOrderModalEscPress);
  refs.orderModalForm.removeEventListener('click', onSubmitOrderBtnClick);
}

function onOrderModalFormInput(e, dessertId) {
  const formData = new FormData(e.currentTarget);
  const userOrder = { ...Object.fromEntries(formData), dessertId };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userOrder));
}

async function onSubmitOrderBtnClick(e, dessertId) {
  e.preventDefault();
}

//============ MOBILE MENU HANDLERS============
export function onBurgerMenuClick() {
  refs.mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

export function onCloseMobileMenuBtn() {
  refs.mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
}

// ============FEEDBACKS============

async function loadMoreFeedbacks(swiper) {
  if (feedbacksPage >= feedbacksTotalPages) return;

  try {
    feedbacksPage += 1;
    const { feedbacks } = await getFeedbacks(feedbacksPage, feedbacksLimit);
    renderFeedbacks(feedbacks);
    swiper.update();
  } catch (err) {
    showToast(
      'error',
      `Помилка отримання відгуків під час довантаження ${err}`
    );
  }
}
