import { useEffect, useState } from 'react';
import { getReviews } from '../../utils/api';
import { Link, useParams } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';

/* const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      console.log(reviewsFromApi);
      setReviews(reviewsFromApi);
    });
  }, []); */

const AllReviews = () => {
  const { category } = useParams();
  const { reviews } = useReviews(category);

  return (
    <div>
      <h3>{category ? `${category} reviews` : `All reviews`}</h3>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <Link to={`/reviews/${review.review_id}`}>
                <img
                  style={{ height: '300px' }}
                  src={review.review_img_url}
                  alt='game'
                ></img>
                <h3>
                  {review.title} - {review.designer}
                </h3>
              </Link>
              <p>by {review.owner}</p>
              <p>Category: {review.category}</p>
              <p>{review.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllReviews;
