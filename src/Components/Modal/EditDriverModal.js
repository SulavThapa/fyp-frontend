import React from 'react';
import {Modal, Button,  Form, Row, Col} from 'react-bootstrap';
import axios from "axios";

class EditDriverModal extends React.Component{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
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

  handleSubmit(e){
    // e.preventDefault();
    axios.put(`http://localhost:5000/drivers/${this.props._id}`,
      {
        id: `${this.state.id}` === "undefined" ? `${this.props.id}` : `${this.state.id}`,
        fullName: `${this.state.fullName}` === "undefined" ? `${this.props.fullName}` : `${this.state.fullName}`,
        temporaryAddress: `${this.state.temporaryAddress}` === "undefined" ? `${this.props.temporaryAddress}` : `${this.state.temporaryAddress}`,
        permanentAddress: `${this.state.permanentAddress}` === "undefined" ? `${this.props.permanentAddress}` : `${this.state.permanentAddress}`,
        phone: `${this.state.phone}` === "undefined" ? `${this.props.phone}` : `${this.state.phone}`,
        maritalStatus: `${this.state.maritalStatus}` === "undefined" ? `${this.props.maritalStatus}` : `${this.state.maritalStatus}`,
      } ,
      {
        headers: {
          //'Accept' : 'application/json',
          'Content-Type': 'application/json; charset=UTF-8'
        }
      })
      .then( res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(`This is the ${err} error.`)
      })
  };

  render(){
    return(
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update the Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    placeholder="Id"
                    type="text"
                    name="id"
                    disabled
                    defaultValue={this.props.id}
                    onChange={this.handleChange}/>
                </Col>
                <Col>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    placeholder="Full name"
                    type="text"
                    disabled
                    defaultValue={this.props.fullName}
                    name="fullName"
                    onChange={this.handleChange}/>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <Form.Label>Temporaray Address</Form.Label>
                  <Form.Control
                    placeholder="Temporary Address"
                    type="text"
                    defaultValue={this.props.temporaryAddress}
                    name="temporaryAddress"
                    onChange={this.handleChange}/>
                </Col>
                <Col>
                  <Form.Label>Permanent Address</Form.Label>
                  <Form.Control
                    placeholder="Permanent Address"
                    type="text"
                    name="permanentAddress"
                    defaultValue={this.props.permanentAddress}
                    onChange={this.handleChange}/>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control
                    placeholder="Phone"
                    type="text"
                    defaultValue={this.props.phone}
                    name="phone"
                    onChange={this.handleChange}/>
                </Col>
                <Col>
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Control
                    placeholder="Marital Status"
                    type="text"
                    defaultValue={this.props.maritalStatus}
                    name="maritalStatus"
                    onChange={this.handleChange}/>
                </Col>
              </Row>
              <br/>
              <Button
                variant="primary"
                type="submit">
                Update
              </Button>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditDriverModal;