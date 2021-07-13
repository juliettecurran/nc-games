import axios from 'axios';

const reviewsApi = axios.create({
  baseURL: 'https://ncgames-juliette.herokuapp.com/api',
});

export const getReviews = async () => {
  const { data } = await reviewsApi.get('/reviews');
  return data.reviews;
};

export const getCategories = async () => {
  const { data } = await reviewsApi.get('/categories');
  console.log(data, 'DATA');
  return data;
};

/* , {
  params: {
    category: category
  },
} */
