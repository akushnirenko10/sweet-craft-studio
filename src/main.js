import {
  initPage,
  onBurgerMenuClick,
  onCategoryItemChange,
  onCategoryItemClick,
  onCloseMobileMenuBtn,
  onOpenDessertModalBtnClick,
  onShowMoreProductsBtn,
} from './js/hendlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', initPage);

refs.burgerMenu.addEventListener('click', onBurgerMenuClick);
refs.closeMobileMenuBtn.addEventListener('click', onCloseMobileMenuBtn);

refs.dessertCategoriesListForDesktop.addEventListener(
  'click',
  onCategoryItemClick
);
refs.dessertCategoriesListForMobileAndTablet.addEventListener(
  'change',
  onCategoryItemChange
);

refs.dessertsList.addEventListener('click', onOpenDessertModalBtnClick);

refs.showMoreProductsBtn.addEventListener('click', onShowMoreProductsBtn);
