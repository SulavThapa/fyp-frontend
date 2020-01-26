import React, {Component} from "react";
import TestNav from "../NavBar/testNav";
import MyVerticallyCenteredModal from "../Modal/Modal";
import {Button, Card, Table} from "react-bootstrap";


class BusInfo extends React.Component{
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
                <thead>
                <tr>
                  <th>S.N</th>
                  <th>Bus Number</th>
                  <th>Driver Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Ba4pa5454</td>
                  <td>Ram Bahadur</td>
                  <td><Button variant="success">Edit</Button></td>
                  <td><Button variant="danger">Delete</Button></td>
                </tr>
                </tbody>
              </Table>
            </Card>
          </main>
        </React.Fragment>
    );
  };
}

export default BusInfo;