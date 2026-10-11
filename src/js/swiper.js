import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let loadMore = null;

const swiperOptions = {
  modules: [Navigation, Pagination],
  grabCursor: true,
  spaceBetween: 20,
  slidesPerView: 1,

  breakpoints: {
    768: { slidesPerView: 3, spaceBetween: 24 },
  },

  pagination: {
    el: '.feedback-swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  on: {
    slideChange(swiper) {
      const isNearEnd = swiper.realIndex + 1 >= swiper.slides.length - 2;
      if (isNearEnd) loadMore(swiper);
    },
  },
};

export const createFeedbackSwiper = onNearEnd => {
  loadMore = onNearEnd;
  return new Swiper('.feedback-swiper', swiperOptions);
};
