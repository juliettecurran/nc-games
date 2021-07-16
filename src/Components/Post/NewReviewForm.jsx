import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FormControl from 'react-bootstrap/FormControl';
import '././newReviewForm.css';

const NewReviewForm = () => {
  return (
    <div>
      <div class='container'>
        <Form className='postReviewForm'>
          <div class='formHeader'>
            <h3>Submit your review</h3>
            <hr></hr>
          </div>
          <div class='username'>
            <Form.Group as={Row} controlId='username'>
              <Col sm={12} md={12}>
                <FormControl id='inlineFormInputGroup' placeholder='Username' />
              </Col>
            </Form.Group>
          </div>
          <div class='review'>
            <Form.Group as={Row} className='mb-3' controlId='review'>
              <Col sm={12} md={12}>
                <Form.Control as='textarea' placeholder='Your review' />
              </Col>
            </Form.Group>
          </div>
          <div class='uploadFile'>
            <Form.Group as={Row} className='mb-3' controlId='formFile'>
              <Col md={10}>
                <Form.Control type='file' />
              </Col>
            </Form.Group>
          </div>
          <div class='categories'>
            <fieldset>
              <Form.Group></Form.Group>
              <Form.Group as={Row} className='mb-3'>
                <Form.Label as='legend' column sm={2}>
                  Categories
                </Form.Label>

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
              </Form.Group>
            </fieldset>
          </div>
          <div class='submitBtn'>
            <Form.Group as={Row} className='mb-3'>
              <Button className='submitBtn' type='submit'>
                Submit
              </Button>
            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewReviewForm;
