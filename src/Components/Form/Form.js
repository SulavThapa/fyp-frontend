import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class FormFunc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: ""
    };
  }

  onFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  }

  onLasttNameChange = e => {
    this.setState({ lastName: e.target.value });
  }

  onUserNameChange = e => {
    this.setState({ userName: e.target.value });
  }

  onClick = () => {
    // let fName = this.state.firstName;
    // let lName = this.state.lastName;
    // let uName = this.state.userName;
    // this.setState({ firstName : fName, lastName : lName, userName : uName});
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name"
            value={this.state.firstName}
            onChange={this.onFirstNameChange} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name"
            value={this.state.lastName}
            onChange={this.onLastNameChange} />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="UserName"
            value={this.state.userName}
            onChange={this.onUserNameChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default FormFunc;