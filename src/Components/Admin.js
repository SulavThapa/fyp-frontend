import React from 'react';
import NavBar from '../Navbar';
import Table from 'react-bootstrap/Table';
import { Card, Button } from 'react-bootstrap';
// import Fetchdata from '../FetchData/Fetch';
import ModalMaker from './Modal/Modal';

class NewAdmin extends React.Component{

    render(){
        return(
            <div>
                <NavBar />
                <br></br>
                <Card className='mx-auto' bg="light" text="white" style={{ width: '80%', height: '100%', padding: 25 }}>
                    <h3 style={{color:'black', top:'7%',position: 'absolute', left: '2rem'}}>Class 10 Students data</h3>
                    <ModalMaker/>
                    <Button variant="primary" style={{ width: '1in', position: 'absolute', right: '8.5rem', top: '3%' }}>Import</Button>
                    <Button variant="danger" style={{ width: '1in', position: 'absolute', right: '15rem', top: '3%' }}>Delete All</Button>
                    <br></br>
                    <hr></hr>
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
                    {/* To deploy the simple pop in the project */}
                    {/* <Popup trigger={<button> Trigger</button>} position="center">
                        <div>Popup content here !!</div>
                    </Popup> */}
                </Card>
                
            </div>
        );
    }
}

export default NewAdmin;

