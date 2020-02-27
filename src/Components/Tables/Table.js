import React, { Component } from 'react';
import {Table, Button, Card, ButtonGroup} from 'react-bootstrap';
import TestNav from "../NavBar/testNav";
import MapHere from "../Map/map";
import MyVerticallyCenteredModal from "../Modal/Modal";

class TableDesign extends React.Component {
  render() {
    return (
        <React.Fragment>
          <TestNav/>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2 style={{left: '3%', marginTop: '1%'}}>Student Details</h2>
              <ButtonGroup size="mb-2">
                {/*<Button variant="primary" style={{height: '38px', marginTop: '19%'}}>Import</Button>*/}
                {/*<Button variant="success" style={{height: '38px', marginTop: '19%'}} onClick={MyVerticallyCenteredModal}>Save</Button>*/}
                <MyVerticallyCenteredModal/>
              </ButtonGroup>
            </div>

            <Card style={{height: '795px', width: '100%', marginTop: '1%', padding: '2%'}}>
              <Table striped bordered hover size="sm">
                <thead className="thead-dark">
                <tr style={{height: '35px'}}>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Class</th>
                  <th>Age</th>
                </tr>
                </thead>
                <tbody>
                <tr style={{height: '35px'}}>
                  <td>testFirstName</td>
                  <td>testLastName</td>
                  <td>@test</td>
                  <td>10</td>
                  <td>17</td>
                </tr>
                </tbody>
              </Table>
            </Card>
          </main>
        </React.Fragment>
    );
  };
};

export default TableDesign;