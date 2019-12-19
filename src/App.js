import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import New from './Components/Home';
import NewAdmin from './Components/Admin';
import Error from './Components/ErrorPage';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={New} exact />
            <Route path="/admin" component={NewAdmin} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;