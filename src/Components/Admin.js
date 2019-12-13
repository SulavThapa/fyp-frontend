import React, { Component } from 'react'
import NavBar from '../Navbar'
import Table from 'react-bootstrap/Table'
import { Card, Button } from 'react-bootstrap'

const NewAdmin = () => (
    <div>
        <NavBar />
        <br></br>
        <Card className='mx-auto' bg="light" text="white" style={{ width: '80rem', height: '100%', padding: 25 }}>
            <Button variant="success" style={{ width: '1in',position: 'absolute', right: '2rem', top:'3%' }}>Add</Button>
            <br></br>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th >S.N.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Sulav</td>
                            <td>Thapa</td>
                            <td>@thapasulav21</td>
                            <td><Button variant="success">Edit</Button></td>
                            <td><Button variant="danger">Delete</Button></td>
                        </tr>
                    </tbody>
                </Table>
        </Card>
    </div>
        );
        
        export default NewAdmin;
