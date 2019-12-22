import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import admin from '../../Assets/admin.png';

const NavBar = () => (
  <div>
    <Card body>
      Logo is Not displaying.
      <adminLogo />
    </Card>
    <Navbar bg="dark" variant="dark"
      style={{ display: 'block', width: '15%', float: 'left', height: '100%', position: 'fixed' }}
    >
      <Link to="/">
        <Navbar.Brand>Simple CRUD App</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/admin">
          <Nav.Link href="#admin">
            <adminLogo />
            Admin</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  </div>
);

export default NavBar;


function adminLogo() {
  return (
    <img src={admin} alt="admin" />
  );
}

