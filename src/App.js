import React, {Component} from 'react'
import Table from './Table'


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

        <button
       type="button"
       onClick={this.changeName}
      >
        Change Name
      </button>
      </div>
    )
  }
}

class New extends React.Component{
  render(){
    return(
      <div className="hello">
      <h1>Hello World</h1>
      <App/>
      </div>
    )
  }
}

export default New;