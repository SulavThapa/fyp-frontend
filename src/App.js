import React, {Component} from 'react';
import Table from './Table';
import './App.css'
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Card} from 'react-bootstrap';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: "Sulav"}
  }
  changeName = () => {
    this.setState({name: "Silva"});
  }
  render(){
    return(
      <div className="Container">
        <h1>Shopping list for {this.state.name}</h1>
        <ul>
          <li>Books</li>
          <li>Arduino Devices</li>
          <li>Love</li>
        </ul>
        <Button variant="primary">Primary</Button>
        <br/>
        <br/>
        <Button variant="info"
       type="button"
       onClick={this.changeName}
      >
        Change Name
      </Button>
      
      </div>
    )
  }
}

class New extends React.Component{
  click = (a,b) =>{
    alert(b.type);
  }
  render(){
    return(
      <div className="hello">
      <h1>Hello World</h1>
      <button type="button"
      onClick={name}>
        Alert
      </button>

      <button type="button"
      onClick={this.click.bind(this, "Click")}>
        Click
      </button>
      </div>
    )
  }
}

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: ''};
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render(){
    return(
      <div>
        <App/>
        <New/>

        <form>
          <h2>This is a Input Form.</h2>
          <h3>Hello {this.state.username}</h3>
          <p>Enter Your Name:</p>
          <input type='text'
          onChange={this.myChangeHandler}></input>
          <br></br>
          <input type="password"></input>
        </form>
      </div>
    );
  }
}

function name(){
  alert("Alert Box");
}

class NewForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {age: ''};
  }
  myChangeHandler_ = (event) => {
    this.setState({age: event.target.value});
  }
  render(){
    let header = '';
    if(this.state.age){
    header = <h1>Your age is {this.state.age}</h1>;
    }
    else{
      header='';
    }
    return(
      <div>
        <MyForm/>
        <form>
          {header}
          <p>Enter Your Age:</p>
          <input type="number"
          onChange={this.myChangeHandler_}></input>
        </form>
      </div>
    );
  }
}

class SubmitForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: ''};
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting" + this.state.username);
  }
  myChange_Handler = (event) => {
    this.setState({username: event.target.value});
  }
  render(){
    return(
      <div>
        <NewForm/>
        <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.username}</h1>
          <p>Enter Your Name:</p>
          <input type="text"
          onChange={this.myChange_Handler}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

class TestForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      age: null
    };
  }
  mySubmitHandler_ = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if(!Number(age)){
      alert("Age must be a number");
    }
  }
  myChangeHandler__ = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render(){
    return(
      <div>
        <SubmitForm/>
        <form onSubmit={this.mySubmitHandler_}>
          <h1>Hello {this.state.username} {this.state.age} </h1>
          <p>Enter your Name:</p>
          <input
          type='text'
          name = 'username'
          onChange={this.myChangeHandler__}>
          </input>
          <p>Enter your age:</p>
          <input
          type= 'text'
          name='age'
          onChange={this.myChangeHandler__}>
          </input>
          <br/>
          <br/>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
}

class ErrorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    const styless = {
      color : "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    }
    return (
      <div>
      <TestForm/>
      <form>
      <h1 style={{backgroundColor: "lightblue"}}>Hello {this.state.username} {this.state.age}</h1>
      <p style={styless}>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p style={{color: "red"}}>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <p style={{color: "red"}}>{this.state.errormessage}</p>
      <br/>
      <br/>
      <textarea></textarea>
      <br/>
      <br/>
      <select>
        <option value="instagram">Instagram</option>
        <option value="facebook">Facebook</option>
        <option value="snapchat">Snapchat</option>
      </select>
      </form>
      </div>
    );
  }
}

class TestDesign extends React.Component{
  render(){
    return(
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="Enter UserName" />
          <Form.Text className="text-muted">
         </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default TestDesign;