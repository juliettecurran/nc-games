import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import '../ReviewByID/singleReview.css';

const FeaturedReview = () => {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    return axios
      .get(`https://games-juliette.herokuapp.com/api/reviews/6`)
      .then((response) => {
        setSingleReview(response.data.review);
        setIsLoading(false);
      });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <div className='review'>
        <img
          id='singleReviewImg'
          style={{ height: '600px' }}
          src={singleReview.review_img_url}
          alt='game'
        ></img>
        <Link to='/reviews/6'>
          <h3 className='reviewTitle'>{singleReview.title}</h3>
        </Link>
        <h5 id='designer'>{singleReview.designer}</h5>

        <Badge className='userBadge' pill bg='warning' text='dark'>
          {singleReview.owner}
        </Badge>
        <p className='singleReviewBody'>{singleReview.review_body}</p>
        <p>Category: {singleReview.category}</p>
      </div>
    </main>
  );
};

export default FeaturedReview;
