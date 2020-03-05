import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';


class EditForm extends React.Component{
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <Form.Control placeholder="Id" type="text" name="id" defaultValue={this.props.id} onChange={this.handleChange}/>
          </Col>
          <Col>
            <Form.Control placeholder="Full name" type="text" name="fullName" onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Form.Control placeholder="Temporary Address" type="text" name="temporaryAddress" onChange={this.handleChange}/>
          </Col>
          <Col>
            <Form.Control placeholder="Permanent Address" type="text" name="permanentAddress" onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Form.Control placeholder="Phone" type="text" name="phone" onChange={this.handleChange}/>
          </Col>
          <Col>
            <Form.Control placeholder="Marital Status" type="text" name="maritalStatus" onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    );
  }
}

export default EditForm;