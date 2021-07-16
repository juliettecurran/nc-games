import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import '././newReviewForm.css';

const NewReviewForm = () => {
  return (
    <div>
      <Form className='postReviewForm'>
        <h3>Submit your review</h3>
        <hr></hr>
        <Form.Group as={Row} className='mb-3' controlId='formHorizontalEmail'>
          <InputGroup className='mb-2'>
            <InputGroup.Text>@</InputGroup.Text>
            <FormControl id='inlineFormInputGroup' placeholder='Username' />
          </InputGroup>
        </Form.Group>

        <Form.Group
          as={Row}
          className='mb-3'
          controlId='formHorizontalPassword'
        >
          <Col sm={10}>
            <Form.Control as='textarea' placeholder='Your review' />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mb-3' controlId='formFile'>
          <Col sm={10}>
            <Form.Control type='file' />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group></Form.Group>
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


.postReviewForm {
    margin: auto;
    width: 50%;
    background-color: #0e37cc;
    padding: 1.2em;
    margin-top: 2em;
    padding-bottom: 4em;
    color: white;
    font-weight: 600;
    margin-bottom: 5em;
  }
  
  hr {
    border: 0;
    clear: both;
    display: block;
    width: 50%;
    background-color: #ffff00;
    height: 1px;
    margin-bottom: 2.4em;
  }
  
  h3 {
    padding-top: 0.5em;
    font-weight: 600;
  }
  
  .submitBtn {
    color: white;
    font-weight: 600;
  }
  
  .mb-3 {
    padding-top: 1em;
    margin-left: 3em;
  }
  
  .mb-2 {
    width: 30%;
    margin-left: 3em;
  }