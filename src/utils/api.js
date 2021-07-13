import axios from 'axios';

const reviewsApi = axios.create({
  baseURL: 'https://ncgames-juliette.herokuapp.com/api',
});

export const getCategories = async (category) => {
  const { data } = await reviewsApi.get('/categories');
  return data.categories;
};

export const getReviews = async (category) => {
  const { data } = await reviewsApi.get('/reviews', {
    params: {
      category: category,
      sort_order: 'asc',
    },
  });
  return data.reviews;
};
