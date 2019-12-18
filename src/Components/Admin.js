import React from 'react';
import NavBar from '../Navbar';
import Table from 'react-bootstrap/Table';
import { Card, Button } from 'react-bootstrap';
import ModalMaker from './Modal/Modal';
import SingleToDo from './SingleToDo';

class NewAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todolist: [],
            currentToDo: ""
        };
    }

    onInputChange = e => {
        this.setState({ currentToDo: e.target.value });
    }

    onClick = () => {
        let toDoCopy = this.state.todolist.slice();
        toDoCopy.push(this.state.currentToDo);

        this.setState({ todolist: toDoCopy, currentToDo: "" })
    }

    deleteToDo = i => {
        let toDoCopy = this.state.todolist.slice();
        toDoCopy.splice(i ,1);
        this.setState({todolist : toDoCopy});
    }


    render() {
        let bulletToDo = this.state.todolist.map((e, i) => {
            return (
                <SingleToDo todo={e} delete={() => this.deleteToDo(i)}/>
            );
        });

        return (
            <div>
                <NavBar />
                <br></br>
                <Card className='mx-auto' bg="light" text="white" style={{ width: '80%', height: '100%', padding: 25 }}>
                    <h3 style={{ color: 'black', top: '7%', position: 'absolute', left: '2rem' }}>Class 10 Students data</h3>
                    <ModalMaker />
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
                <br></br>
                <input placeholder="Enter the to-do"
                    value={this.state.currentToDo}
                    onChange={this.onInputChange}></input>
                <button onClick={this.onClick}>Add</button>
                <br></br>
                {this.state.todolist.length === 0 ? "No to-do on the list" : <ul>{bulletToDo}</ul>}
            </div >
        );
    }
}

export default NewAdmin;

