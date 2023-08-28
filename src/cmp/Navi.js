import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant='dark' expand="lg" className='fixed-top'>
          <Container>
            <Navbar.Brand as={Link} to='/'>InfoSphere</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <NavDropdown title="Category" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to='/business'>Business</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/entertainment'>Entertainment</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/sports'>Sports</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/technology'>Technology</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/science'>Science</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/health'>Health</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

