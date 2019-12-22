import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Link to="/">
      <Navbar.Brand>Simple CRUD App</Navbar.Brand>
    </Link>
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
);

export default NavBar;

