import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <Navbar bg="dark" variant="dark">
    <Link to="/"><Navbar.Brand>React Practice Project</Navbar.Brand></Link>
    <Nav className="mr-auto">
      <Link to="/admin">
        <Nav.Link>Admin</Nav.Link>
      </Link>
    </Nav>
  </Navbar>
);

export default NavBar;