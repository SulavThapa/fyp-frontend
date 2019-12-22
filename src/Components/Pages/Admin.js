import React from 'react';
import NavBar from '../NavBar/Navbar';
import Table from 'react-bootstrap/Table';
import { Card, Button} from 'react-bootstrap';
import MyVerticallyCenteredModal from '../Modal/Modal';
import SingleToDo from './SingleToDo';

class NewAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todolist: [],
            currentToDo: "",
            firstName:"",
            lastName: "",
            userName: "",
            items:[]
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
        toDoCopy.splice(i, 1);
        this.setState({ todolist: toDoCopy });
    }

    render() {
        let bulletToDo = this.state.todolist.map((e, i) => {
            return (
                <SingleToDo todo={e} delete={() => this.deleteToDo(i)} />
            );
        });

        return (
            <div>
                <NavBar />
                <br></br>
                <Card className='mx-auto' bg="light" text="white" style={{ width: '80%', height: '100%', padding: 25 }}>
                    <h3 style={{ color: 'black', top: '7%', position: 'absolute', left: '2rem', width: '30%' }}>Bus No.1 Students Details</h3>
                    <MyVerticallyCenteredModal  />
                    <Button variant="primary" style={{ width: '1in', position: 'absolute', right: '8.5rem', top: '3%' }}>Import</Button>
                    <Button variant="danger" style={{ width: '1in', position: 'absolute', right: '15rem', top: '3%' }}>Delete All</Button>
                    {/* To deploy the simple pop in the project */}
                    {/* <Popup trigger={<button> Trigger</button>} position="center">
                        <div>Popup content here !!</div>
                    </Popup> */}
                </Card>
                <br></br>
                <input placeholder="Enter the to-do"
                    value={this.state.currentToDo}
                    onChange={this.onInputChange}></input>
                <Button variant="primary" onClick={this.onClick}>Add</Button>
                <br></br>
                {this.state.todolist.length === 0 ? "No to-do on the list" : <ul>{bulletToDo}</ul>}
            </div >
        );
    }
}

export default NewAdmin;

