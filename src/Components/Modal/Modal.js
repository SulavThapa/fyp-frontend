import React from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import FormFunc from '../Form/Form';
import TableDesign from '../Tables/Table';


class MyVerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      items: []
    };
  }
  handleFormSubmit = e => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName
    });

    this.setState({
      items,
      firstName: '',
      lastName: '',
      userName: ''
    });
  };

  handleInputChange = e => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <br></br>
        <TableDesign items={this.state.items} />
        <ModalMaker
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newFirstName={this.state.firstName}
          newLastName={this.state.lastName}
          newUserName={this.state.userName} />
      </div>
    );
  };
}

function MyVerticallyCenteredModalFunction(props) {
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'black' }}>
          Enter the Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormFunc />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalMaker() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button onClick={() => setModalShow(true)} variant="success">Add</Button>

      <MyVerticallyCenteredModalFunction
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export default MyVerticallyCenteredModal;