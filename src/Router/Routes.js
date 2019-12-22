import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import New from '../Components/Home';
import NewAdmin from '../Components/Admin';
import Error from '../Components/ErrorPage';


class RoutePage extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={New} exact />
            <Route path="/admin" component={NewAdmin} />
            <Route path="/staff" component={New} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default RoutePage;