import axios from 'axios';

axios.defaults.baseURL = 'https://deserts-store.b.goit.study/api';

export const ENDPOINTS = {
  CATEGORIES: '/categories',
  DESSERTS: '/desserts',
  ORDERS: '/orders',
  FEEDBACKS: '/feedbacks',
};

export const limit = 8;
export const feedbacksLimit = 10;

export const LOCAL_STORAGE_KEY = 'userOrder';
