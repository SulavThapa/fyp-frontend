import React, {Component} from "react";
import {Modal, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

class ConfirmModal extends React.Component {
  render(){
    return(
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            LogOut
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Do You Sure Want to LogOut?
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button variant="primary">Ok</Button>
          </Link>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ConfirmModal;