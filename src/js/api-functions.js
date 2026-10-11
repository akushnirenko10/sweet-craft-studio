import axios from 'axios';
import { ENDPOINTS } from './constants';

export async function getDessertCategoryList() {
  const res = await axios(`${ENDPOINTS.CATEGORIES}`);
  return res.data;
}

export async function getDessertsList(limit, page, category) {
  const params = {
    limit,
    page,
    category: category || undefined,
  };

  const res = await axios(`${ENDPOINTS.DESSERTS}`, { params });
  return res.data;
}

export async function getDessertById(dessertId) {
  const res = await axios(`${ENDPOINTS.DESSERTS}/${dessertId}`);
  return res.data;
}

export async function getFeedbacks(feedbacksPage, feedbacksLimit) {
  const res = await axios(
    `${ENDPOINTS.FEEDBACKS}?page=${feedbacksPage}&limit=${feedbacksLimit}`
  );
  return res.data;
}
