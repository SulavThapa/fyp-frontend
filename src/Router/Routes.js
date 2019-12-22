import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import New from '../Components/Pages/Home';
import NewAdmin from '../Components/Pages/Admin';
import Error from '../Components/Pages/ErrorPage';


class RoutePage extends React.Component {
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

export default RoutePage;