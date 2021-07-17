import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Voter from '../Shared/Voter';
import { getComments } from '../../utils/api';
import { useParams } from 'react-router-dom';
import Expandable from '../Shared/Expandable/Expandable';

const CommentSection = () => {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

  return (
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
            <li key={comment.comment_id} className='singleComment'>
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
  );
};

export default CommentSection;
