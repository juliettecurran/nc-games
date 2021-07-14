import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from '../../utils/api';

const AllReviews = () => {
  const categoryParameter = useParams();
  const [reviews, setReviews] = useState([]);

  console.log(categoryParameter, 'categoryParameter here');

  useEffect(() => {
    getReviews(categoryParameter.category_slug).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [categoryParameter]);

  return (
    <div>
      {/* <h3>{category ? `${category} reviews` : `All reviews`}</h3> */}
      <ul className='flex-container'>
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
