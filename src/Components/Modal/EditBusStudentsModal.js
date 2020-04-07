import React from 'react';
import {Modal, Button,  Form, Row, Col} from 'react-bootstrap';
import axios from "axios";

class EditBusStudentsModal extends React.Component{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state: {
    id: '',
    studentName: '',
    class: '',
    section: '',
    parentName: '',
    parentNumber: '',
    address: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit(e){
    console.log(this.props._id);
    axios.put(`http://localhost:5000/busOneStudents/${this.props._id}`,
      {
        id: `${this.state.id}` === "undefined" ? `${this.props.id}` : `${this.state.id}`,
        studentName: `${this.state.studentName}` === "undefined" ? `${this.props.studentName}` : `${this.state.studentName}`,
        class: `${this.state.class}` === "undefined" ? `${this.props.grade}` : `${this.state.class}`,
        section: `${this.state.section}` === "undefined" ? `${this.props.section}` : `${this.state.section}`,
        parentName: `${this.state.parentName}` === "undefined" ? `${this.props.parentName}` : `${this.state.parentName}`,
        parentNumber: `${this.state.parentNumber}` === "undefined" ? `${this.props.parentNumber}` : `${this.state.parentNumber}`,
        address: `${this.state.address}` === "undefined" ? `${this.props.address}` : `${this.state.address}`
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
                    defaultValue={this.props.studentName}
                    name="studentName"
                    onChange={this.handleChange}/>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <Form.Label>Grade</Form.Label>
                  <Form.Control
                    placeholder="class"
                    type="text"
                    defaultValue={this.props.grade}
                    name="class"
                    onChange={this.handleChange}/>
                </Col>
                <Col>
                  <Form.Label>Section</Form.Label>
                  <Form.Control
                    placeholder="Section"
                    type="text"
                    name="section"
                    defaultValue={this.props.section}
                    onChange={this.handleChange}/>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <Form.Label>Parent Name</Form.Label>
                  <Form.Control
                    placeholder="Parent Name"
                    type="text"
                    defaultValue={this.props.parentName}
                    name="parentName"
                    onChange={this.handleChange}/>
                </Col>
                <Col>
                  <Form.Label>Parent Number</Form.Label>
                  <Form.Control
                    placeholder="Parent Number"
                    type="text"
                    defaultValue={this.props.parentNumber}
                    name="parentNumber"
                    onChange={this.handleChange}/>
                </Col>
                <Col>
                <Form.Label style={{left: '1%'}}>Address</Form.Label>
                <Form.Control
                    placeholder="Address"
                    type="text"
                    defaultValue={this.props.address}
                    name="address"
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

export default EditBusStudentsModal;