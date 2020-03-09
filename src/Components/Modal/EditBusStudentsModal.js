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
    e.preventDefault();
    axios.put(`http://localhost:5000/drivers/${this.props._id}`,
      {

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
                  <Form.Control
                    placeholder="Id"
                    type="text"
                    name="id"
                    disabled
                    defaultValue={this.props.id}
                    onChange={this.handleChange}/>
                </Col>
                <Col>
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
                  <Form.Control
                    placeholder="Temporary Address"
                    type="text"
                    defaultValue={this.props.class}
                    name="class"
                    onChange={this.handleChange}/>
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Permanent Address"
                    type="text"
                    name="section"
                    defaultValue={this.props.section}
                    onChange={this.handleChange}/>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="Phone"
                    type="text"
                    defaultValue={this.props.parentName}
                    name="parentName"
                    onChange={this.handleChange}/>
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Marital Status"
                    type="text"
                    defaultValue={this.props.parentNumber}
                    name="parentNumber"
                    onChange={this.handleChange}/>
                </Col><Col>
                  <Form.Control
                    placeholder="Marital Status"
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