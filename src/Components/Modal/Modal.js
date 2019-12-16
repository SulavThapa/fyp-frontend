import React from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import FormFunc from '../Form/Form';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'black' }}>
          Enter the Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {}
        <FormFunc/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalMaker() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button onClick={() => setModalShow(true)} variant="success" style={{ width: '1in', position: 'absolute', right: '2rem', top: '3%' }}>Add</Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export default ModalMaker;
