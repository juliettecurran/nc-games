import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useVote from '../../Hooks/useVote';
import heartDice from '../../imgs/heartDice.svg';

const SingleReview = () => {
  const [singleReview, setSingleReview] = useState({});
  const { vote, incrementVote } = useVote(0);
  const { review_id } = useParams();
  useEffect(() => {
    console.log('in useEffect for ID');
    return axios
      .get(`https://games-juliette.herokuapp.com/api/reviews/${review_id}`)
      .then((response) => {
        console.log(response, '<-- singlereview response');
        setSingleReview(response.data.review);
      });
  }, [review_id]);

  return (
    <div>
      <img
        style={{ height: '600px' }}
        src={singleReview.review_img_url}
        alt='game'
      ></img>
      <h3>
        {singleReview.title} - {singleReview.designer}
      </h3>
      <p>{singleReview.owner}</p>
      <p className='singleReviewBody'>{singleReview.review_body}</p>
      <p>Category: {singleReview.category}</p>
      <p>{singleReview.votes}</p>
      <div>
        <p>{vote}</p>
        <img
          src={heartDice}
          alt='Logo'
          style={{ height: '40px' }}
          id='heartDice'
          onClick={incrementVote}
        />
      </div>
    </div>
  );
};

export default SingleReview;
