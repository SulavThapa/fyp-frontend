import React, {Component} from "react";
import TestNav from "../NavBar/testNav";
import MyVerticallyCenteredModal from "../Modal/Modal";
import {Button, Card, Table} from "react-bootstrap";
import axios from 'axios';
import MyVerticallyCenteredModalEdit from "../Modal/EditModal";


class BusInfo extends React.Component{

  state = {
    drivers: []
  };

  componentDidMount()
  {
    axios.get(`http://localhost:5000/drivers`)
      .then(res => {
        this.setState({drivers: res.data});
        console.log(res);
      }).catch(err => console.log('cannot access',err));
  }

  handleDelete = id => {
    //const id = this.state.drivers._id;
    axios.delete(`http://localhost:5000/drivers/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  render() {
    return(
        <React.Fragment>
          <TestNav />

          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2 style={{left: '3%', marginTop: '1%'}}>Bus Details</h2>
              <MyVerticallyCenteredModal/>
            </div>

            <Card className="h-75 d-inline-block" style={{height: '100%', width: '100%', marginTop: '1%', padding: '2%'}}>
              <Table striped bordered hover size="sm">
                <thead className="thead-dark">
                <tr style={{height: '40px'}}>
                  <th>S.N</th>
                  <th>Full Name</th>
                  <th>Temporary Address</th>
                  <th>Permanent Address</th>
                  <th>Phone</th>
                  <th>Marital Status</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.drivers.map( driver =>
                  <tr style={{height: '35px'}}>
                    <td>{driver.id}</td>
                    <td>{driver.fullName}</td>
                    <td>{driver.temporaryAddress}</td>
                    <td>{driver.permanentAddress}</td>
                    <td>{driver.phone}</td>
                    <td>{driver.maritalStatus}</td>
                    <td><MyVerticallyCenteredModalEdit/></td>
                    <td><Button variant="danger" type="submit" onClick={this.handleDelete}>Delete</Button></td>
                  </tr>)}
                </tbody>
              </Table>
            </Card>
          </main>
        </React.Fragment>
    );
  };
}

export default BusInfo;