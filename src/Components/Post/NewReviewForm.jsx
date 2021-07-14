import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NewReviewForm = () => {
  return (
    <div>
      <Form>
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
            Password
          </Form.Label>
          <Col sm='10'>
            <Form.Control type='password' placeholder='Password' />
          </Col>
        </Form.Group>
        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Control type='file' />
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewReviewForm;
