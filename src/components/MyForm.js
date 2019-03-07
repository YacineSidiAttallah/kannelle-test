import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Container, Row, Col} from 'react-bootstrap'

class MyForm extends Component {
  render() {
    return (
      <Container>

        <Row>
          <Col>
            <h3>Enter the needed informations: </h3>
          </Col>
        </Row>

      <Form onSubmit={this.props.handleSubmit}>
        <Row>
          <Col md={6} xs={12}>
            <h4>Personal Informations</h4>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name: </Form.Label>
              <Form.Control
              type="text"
              placeholder="Enter your name"
              ref={this.props.name}/>
            </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                 type="email"
                 placeholder="Enter email"
                ref={this.props.email}/>
              </Form.Group>

              <Form.Group controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                 type="text"
                 placeholder="06-**-**-**-**"
                 ref={this.props.phone}/>
              </Form.Group>
            </Col>

            <Col md={6} xs={12}>
            <h4>Company Informations</h4>
            <Form.Group controlId="formBasicCompanyName">
              <Form.Label>Company Name: </Form.Label>
              <Form.Control
               type="text"
               placeholder="Company Name"
               ref={this.props.companyName}/>
            </Form.Group>

              <Form.Group controlId="formBasicCatchPhrase">
                <Form.Label>Catch Phrase: </Form.Label>
                <Form.Control
                 type="text"
                 placeholder="CatchPhrase"
                 ref={this.props.catchPhrase}/>
              </Form.Group>

              <Button variant="primary" type="submit" id="button">
                Submit
              </Button>
            </Col>

          </Row>
      </Form>
    </Container>

    );
  }
}

export default MyForm;
