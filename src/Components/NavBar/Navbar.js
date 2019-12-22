import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Link to="/">
      <Navbar.Brand>Simple CRUD App</Navbar.Brand>
    </Link>
    <Nav className="mr-auto">
    <Link to="/admin">
      <Nav.Link href="#admin">Admin</Nav.Link>
      </Link>
    </Nav>
  </Navbar>
);

export default NavBar;

