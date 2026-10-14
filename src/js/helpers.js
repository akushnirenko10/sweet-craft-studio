import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './refs';
import { LOCAL_STORAGE_KEY } from './constants';

export function showLoader() {
  refs.loader.classList.add('visible');
}

export function showLoadMoreBtn() {
  refs.showMoreProductsBtn.style.display = 'block';
}

export function hideLoader() {
  refs.loader.classList.remove('visible');
}

export function hideLoadMoreBtn() {
  refs.showMoreProductsBtn.style.display = 'none';
}

export function resetDesertList() {
  refs.dessertsList.innerHTML = '';
}

export function showToast(type, message) {
  iziToast[type]({
    message,
    position: 'topRight',
  });
}

export function changeActiveCategoryBtn(e, activeBtnId) {
  const btns = e.currentTarget.querySelectorAll('button');

  btns.forEach(btn => {
    if (btn.dataset.id === activeBtnId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

export function updateLoadMoreBtn(page, totalPages) {
  if (page < totalPages) {
    showLoadMoreBtn();
  } else {
    hideLoadMoreBtn();
  }
}

// export function saveToLS(value) {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
// }

// export function getFromLS() {
//   return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || '';
// }
