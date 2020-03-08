import React, { Component } from 'react';
import {Table, Button, Card, ButtonGroup} from 'react-bootstrap';
import TestNav from "../NavBar/testNav";
import axios from "axios";
import MyVerticallyCenteredModalEdit from "../Modal/EditModal";

class TableDesign extends React.Component {
  
  state = {
    busOneStudents: []
  };

  componentDidMount()
  {
    axios.get(`http://localhost:5000/busOneStudents`)
      .then(res => {
        this.setState({busOneStudents: res.data});
        console.log(res);
      }).catch(err => console.log('cannot access',err));
  }

  handleDelete = _id => {
    axios.delete(`http://localhost:5000/busOneStudents/${_id}`)
      .then(res => {
        window.location.reload(false);
        console.log(res);
        console.log(res.data);
      })
  };

  render() {
    return (
        <React.Fragment>
          <TestNav/>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2 style={{left: '3%', marginTop: '1%'}}>Bus One Student Details</h2>
            </div>

            <Card style={{height: '795px', width: '100%', marginTop: '1%', padding: '2%'}}>
              <Table striped bordered hover size="sm" id="dtVerticalScrollExample" cellspacing="0">
                <thead className="thead-dark">
                <tr style={{height: '35px'}}>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Section</th>
                  <th>Parent Name</th>
                  <th>Parents Number</th>
                  <th>Address</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {this.state.busOneStudents.map( busOneStudent =>
                <tr style={{height: '35px'}}>
                  <td>{busOneStudent.id}</td>
                  <td>{busOneStudent.studentName}</td>
                  <td>{busOneStudent.class}</td>
                  <td>{busOneStudent.section}</td>
                  <td>{busOneStudent.parentName}</td>
                  <td>{busOneStudent.parentNumber}</td>
                  <td>{busOneStudent.address}</td>
                  <td><MyVerticallyCenteredModalEdit/></td>
                  <td><Button
                    variant="danger"
                    type="submit"
                    onClick={this.handleDelete.bind(this, busOneStudent._id)}>
                    Delete
                  </Button></td>
                </tr>
                )}
                </tbody>
              </Table>
            </Card>
          </main>
        </React.Fragment>
    );
  };
};

export default TableDesign;