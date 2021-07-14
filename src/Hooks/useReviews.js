import { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';

const useReviews = (category) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [category]);
  return { reviews, setReviews };
};

export default useReviews;
