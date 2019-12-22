import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class TableDesign extends React.Component {
  render() {
    const item = this.props.items;
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {item.map(item => {
          return (
            <tbody>
              <tr>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.userName}</td>
                <td><Button variant="success">Edit</Button></td>
                <td><Button variant="danger">Delete</Button></td>
              </tr>
            </tbody>
          );
        })}

      </Table>
    );
  };
};

export default TableDesign;