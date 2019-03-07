import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'

class MyNavBar extends Component {
  render() {
    return (
      <Navbar id="navbar" expand="lg">
        <Navbar.Brand href="#home" className="navbar-text">
        Front-End Web Developer - Technical Test</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Navbar.Text className="navbar-text">
          Candidat: Yacine Sidi Attallah
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavBar;
