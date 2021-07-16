import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from '../../utils/api';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import '././allReviews.css';

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
              <Card style={{ width: '25rem' }} className='myCards'>
                <Link to={`/reviews/${review.review_id}`}>
                  <Card.Img
                    variant='top'
                    src={review.review_img_url}
                    alt='game'
                  />
                </Link>
                <Card.Body>
                  <Link to={`/reviews/${review.review_id}`}>
                    <Card.Title className='cardTitle'>
                      {review.title}
                    </Card.Title>
                  </Link>
                  <Card.Text>by {review.owner}</Card.Text>
                  {/*  if category = dexterity, background red, link to/category/dexterity */}
                  <Card.Text>Category: {review.category}</Card.Text>

                  <Badge className='voteBadge' pill bg='primary'>
                    {review.votes}
                  </Badge>
                </Card.Body>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllReviews;
