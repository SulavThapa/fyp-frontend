import React, {Component} from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Navbar, Nav} from 'react-bootstrap';

class TestDesign extends React.Component{
  render(){
    return(
      <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">React Practice Project</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#staff">Staff</Nav.Link>
          <Nav.Link href="#Admin">Admin</Nav.Link>
        </Nav>
      </Navbar>
      <br/>
      <Card className='mx-auto' bg="light" text="white" style={{ width: '22rem',height:'20rem', padding: 25}}>
         <h1 className='new'>Login Here</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" placeholder="Enter User Name" />
                <Form.Text className="text-muted">
              </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
      </Card>
      </div>
    );
  }
}

export default TestDesign;