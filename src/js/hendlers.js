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
import { feedbacksLimit, limit } from './constants';
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

  // FEEDBACKS
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

export async function onOpenDessertModalBtnClick(e) {
  const btn = e.target.closest('.sweet-list-item-btn');
  if (!btn) return;

  const dessertId = btn.dataset.id;
  const dessertDetails = await getDessertById(dessertId);
  createProductModalMarkup(dessertDetails);
  openProductDetailsModal();
}

function openProductDetailsModal() {
  refs.productDetailsModal.classList.add('is-open');
  const productDetailsModalCloseBtnEl =
    document.querySelector('.product-modal-btn');
  productDetailsModalCloseBtnEl.addEventListener(
    'click',
    onProductDetailsModalCloseBtn
  );
}

export function onProductDetailsModalCloseBtn() {
  refs.productDetailsModal.classList.remove('is-open');
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
