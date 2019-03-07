import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import {Container, Row, Col} from 'react-bootstrap'

class DataDisplay extends Component {
  render() {
    return (
    <Container style={containerStyle}>
    <h3>{this.props.correctPhrase}</h3>
      <ListGroup>
        <ListGroup.Item>Name: {this.props.name}</ListGroup.Item>
        <ListGroup.Item>Email: {this.props.email}</ListGroup.Item>
        <ListGroup.Item>Phone: {this.props.phone}</ListGroup.Item>
        <ListGroup.Item>Company Name: {this.props.companyName}</ListGroup.Item>
        <ListGroup.Item>CatchPhrase: {this.props.catchPhrase}</ListGroup.Item>
      </ListGroup>
    </Container>

    );
  }
}

const containerStyle={
  marginTop:"15px"
}

export default DataDisplay;
