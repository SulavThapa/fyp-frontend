import React from 'react';
import NavBar from '../NavBar/Navbar';
import { Card, Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../Modal/Modal';
import SingleToDo from './SingleToDo';
import TestNav from '../NavBar/testNav';


class NewAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todolist: [],
            currentToDo: "",
            firstName: "",
            lastName: "",
            userName: "",
            items: []
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
                <TestNav />

                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <MyVerticallyCenteredModal />
                </main>


            </div >
        );
    }
}

export default NewAdmin;

