import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import New from '../Components/Pages/Home';
import NewAdmin from '../Components/Pages/Admin';
import Error from '../Components/Pages/ErrorPage';
import TableDesign from "../Components/Tables/Table";
import BusInfo from "../Components/Pages/BusInfo";

class RoutePage extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={New} exact />
            <Route path="/admin" component={NewAdmin} />
            <Route path="/details" component={TableDesign} />
            <Route path="/busDetails" component={BusInfo} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default RoutePage;