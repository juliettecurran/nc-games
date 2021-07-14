import axios from 'axios';

const reviewsApi = axios.create({
  baseURL: 'https://games-juliette.herokuapp.com/api',
});

export const getReviews = async (category) => {
  if (category === 'all') {
    category = undefined;
  }
  console.log(category, '<< category');
  const { data } = await reviewsApi.get('/reviews', {
    params: { category: category },
  });
  console.log(data, 'DATA');
  return data.reviews;
};

export const getCategories = async () => {
  const { data } = await reviewsApi.get('/categories');
  console.log(data, 'DATA');
  return data;
};

/* export const getReviews = async (category) => {
  const { data } = await gamesApi.get('/reviews', {
    params: { category: category }
  });
  return data.reviews;
};,
} */
