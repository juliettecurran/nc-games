import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '././newReviewForm.css';

const NewReviewForm = () => {
  return (
    <div>
      <Form className='postReviewForm'>
        <h3>Submit your review</h3>
        <hr></hr>
        <Form.Group as={Row} className='mb-3' controlId='formHorizontalEmail'>
          <Form.Label column sm={2}>
            Username
          </Form.Label>
          <Col sm={3}>
            <Form.Control as='textarea' placeholder='Your username' />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className='mb-3'
          controlId='formHorizontalPassword'
        >
          <Form.Label column sm={2}>
            Review
          </Form.Label>
          <Col sm={10}>
            <Form.Control as='textarea' placeholder='Your review' />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='formFile'>
          <Form.Label column sm={2}>
            Image
          </Form.Label>
          <Col sm={10}>
            <Form.Control type='file' />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row} className='mb-3'>
            <Form.Label as='legend' column sm={2}>
              Categories
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type='radio'
                label='Dexterity'
                name='formHorizontalRadios'
                id='formHorizontalRadios1'
              />
              <Form.Check
                type='radio'
                label='Deck Building'
                name='formHorizontalRadios'
                id='formHorizontalRadios2'
              />
              <Form.Check
                type='radio'
                label='Engine Building'
                name='formHorizontalRadios'
                id='formHorizontalRadios2'
              />
              <Form.Check
                type='radio'
                label='Hidden Roles'
                name='formHorizontalRadios'
                id='formHorizontalRadios3'
              />
              <Form.Check
                type='radio'
                label='Strategy'
                name='formHorizontalRadios'
                id='formHorizontalRadios3'
              />
              <Form.Check
                type='radio'
                label='Other'
                name='formHorizontalRadios'
                id='formHorizontalRadios3'
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row} className='mb-3'>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className='submitBtn' type='submit'>
              Submit
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewReviewForm;
