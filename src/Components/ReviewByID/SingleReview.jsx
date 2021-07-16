import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Voter from '../Shared/Voter';
import CommentSection from './CommentSection';
import '././singleReview.css';

const SingleReview = () => {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    return axios
      .get(`https://games-juliette.herokuapp.com/api/reviews/${review_id}`)
      .then((response) => {
        setSingleReview(response.data.review);
      });
  }, [review_id]);

  return (
    <main>
      <div className='review'>
        <img
          id='singleReviewImg'
          style={{ height: '600px' }}
          src={singleReview.review_img_url}
          alt='game'
        ></img>
        <h3 className='reviewTitle'>{singleReview.title}</h3>
        <h5 id='designer'>{singleReview.designer}</h5>

        <Badge className='userBadge' pill bg='warning' text='dark'>
          {singleReview.owner}
        </Badge>
        <p className='singleReviewBody'>{singleReview.review_body}</p>
        <p>Category: {singleReview.category}</p>

        <Voter
          vote_type={'reviews'}
          id={singleReview.review_id}
          votes={singleReview.votes}
        />
      </div>
      <hr className='commentDivider'></hr>
      <CommentSection />
    </main>
  );
};

export default SingleReview;
