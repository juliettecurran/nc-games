import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import { getComments, postComment } from '../../utils/api';
import Expandable from '../Shared/Expandable';
import Voter from '../Shared/Voter';

import '././singleReview.css';

const SingleReview = () => {
  const [singleReview, setSingleReview] = useState({});
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
    <main>
      <div className='review'>
        <img
          style={{ height: '600px' }}
          src={singleReview.review_img_url}
          alt='game'
        ></img>
        <h3 className='reviewTitle'>{singleReview.title}</h3>
        <h5>{singleReview.designer}</h5>

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
      <Expandable>
        <div className='comments'>
          <ul className='commentsList'>
            <h3>Comments</h3>
            <hr className='commentDivider'></hr>
            <section className='commentArea'>
              <Form>
                <Form.Group as={Row} className='mb-3' controlId='review'>
                  <Col sm={12} md={12}>
                    <Form.Control as='textarea' placeholder='Your comment' />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                  <Button className='submitBtn' type='submit'>
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </section>
          </ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <p>
                  <Badge className='userBadge' pill bg='warning' text='dark'>
                    {comment.author}
                  </Badge>{' '}
                  - {comment.body}
                </p>
                <p className='created_at'> posted at {comment.created_at}</p>

                <Voter
                  vote_type={'comments'}
                  id={comment.comment_id}
                  votes={comment.votes}
                />
              </li>
            );
          })}
        </div>
      </Expandable>
    </main>
  );
};

export default SingleReview;
