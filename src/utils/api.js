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

export const getComments = async (review_id) => {
  const { data } = await reviewsApi.get(`/reviews/${review_id}/comments`);
  console.log(data.comments, 'COMMENTS');
  return data.comments;
};

export const patchVotes = async (id, isUpvote, voteType) => {
  const { data } = await reviewsApi.patch(`/${voteType}/${id}`, {
    inc_votes: isUpvote ? 1 : -1,
  });
};

export const postComment = async (user, reviewID, body) => {
  const { data } = await reviewsApi.post(`/reviews/${reviewID}/comments`, {
    user: body,
  });
};
