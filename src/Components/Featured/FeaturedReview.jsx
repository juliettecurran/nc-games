import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FeaturedReview = () => {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();
  useEffect(() => {
    console.log('in useEffect for ID');
    return axios
      .get(`https://ncgames-juliette.herokuapp.com/api/reviews/${review_id}`)
      .then((response) => {
        setSingleReview(response.data.review);
      });
  }, [review_id]);

  return (
    <div>
      <h2>This will be a featured review</h2>
      {/*  <img
        style={{ height: '600px' }}
        src={singleReview.review_img_url}
        alt='game'
      ></img> */}
      <h3>
        {singleReview.title} - {singleReview.designer}
      </h3>
      <p>{singleReview.owner}</p>
      <p>{singleReview.review_body}</p> {/* Truncate body */}
      <p>{singleReview.category}</p>
      <p>{singleReview.votes}</p>
    </div>
  );
};

export default FeaturedReview;
