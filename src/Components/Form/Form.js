import React, {Component, useState} from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class FormFunc extends React.Component {

  state: {
    id: '',
    fullName: '',
    temporaryAddress: '',
    permanentAddress: '',
    phone: '',
    maritalStatus:''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = e => {
    // e.preventDefault();

    axios.post(`http://localhost:5000/drivers`,
      {
        id: `${this.state.id}`,
        fullName: `${this.state.fullName}`,
        temporaryAddress: `${this.state.temporaryAddress}`,
        permanentAddress: `${this.state.permanentAddress}`,
        phone: `${this.state.phone}`,
        maritalStatus:`${this.state.maritalStatus}`
      } ,
      {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      },
    })
      .then( res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(`This is the ${err} error.`)
      })
    };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Row>
          <Col>
            <Form.Control
              placeholder="Id"
              type="text"
              name="id"
              onChange={this.handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Full name"
              type="text"
              name="fullName"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Form.Control
              placeholder="Temporary Address"
              type="text"
              name="temporaryAddress"
              onChange={this.handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Permanent Address"
              type="text"
              name="permanentAddress"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Form.Control
              placeholder="Phone"
              type="text"
              name="phone"
              onChange={this.handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Marital Status"
              type="text"
              name="maritalStatus"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default FormFunc;