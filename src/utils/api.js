import axios from 'axios';

const reviewsApi = axios.create({
  baseURL: 'https://games-juliette.herokuapp.com/api',
});

export const getReviews = async (category, sortBy) => {
  if (category === 'all') {
    category = undefined;
  }
  const { data } = await reviewsApi.get('/reviews', {
    params: { category: category, sort_by: sortBy },
  });
  return data.reviews;
};

export const getCategories = async () => {
  const { data } = await reviewsApi.get('/categories');
  return data;
};

export const getComments = async (review_id) => {
  const { data } = await reviewsApi.get(`/reviews/${review_id}/comments`);
  return data.comments;
};

export const patchVotes = async (id, isUpvote, voteType) => {
  const { data } = await reviewsApi.patch(`/${voteType}/${id}`, {
    inc_votes: isUpvote ? 1 : -1,
  });
};

export const postComment = async (reviewID, newComment) => {
  const { data } = await reviewsApi.post(
    `/reviews/${reviewID}/comments`,
    newComment
  );
  return data.comment;
};
