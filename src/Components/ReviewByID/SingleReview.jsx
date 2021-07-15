import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useVote from '../../Hooks/useVote';
import heartDice from '../../imgs/heartDice.svg';
import { getComments } from '../../utils/api';
import '././singleReview.css';

const SingleReview = () => {
  const [singleReview, setSingleReview] = useState({});
  const { vote, incrementVote } = useVote(0);
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log('in useEffect for ID: single reviews');
    return axios
      .get(`https://games-juliette.herokuapp.com/api/reviews/${review_id}`)
      .then((response) => {
        console.log(response, '<-- singlereview response');
        setSingleReview(response.data.review);
      });
  }, [review_id]);

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
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
      <p>
        <span>{singleReview.owner}</span>
      </p>
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
      <hr className='commentDivider'></hr>
      <div className='comments'>
        <ul className='commentsList'>
          <h3>Comments</h3>
          <hr className='commentDivider'></hr>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <p>
                  <span>{comment.author}</span> - {comment.body}
                </p>
                <p className='created_at'> posted at {comment.created_at}</p>
                <p>{comment.votes}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SingleReview;
