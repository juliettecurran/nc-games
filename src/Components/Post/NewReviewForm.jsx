import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '././newReviewForm.css';

const NewReviewForm = () => {
  return (
    <div>
      <Form className='postReviewForm'>
        <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
          <Form.Label column sm='2'>
            Email
          </Form.Label>
          <Col sm='10'>
            <Form.Control plaintext readOnly defaultValue='email@example.com' />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='formPlaintextPassword'>
          <Form.Label column sm='2'>
            Review
          </Form.Label>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Control as='textarea' rows={6} />
          </Form.Group>
        </Form.Group>
        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Control type='file' />
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewReviewForm;
