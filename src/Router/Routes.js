import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

import { setCurrentUser, logoutUser } from "../actions/authActions";
import { Provider } from "react-redux";
import store from "../store";

import New from '../Components/Pages/Home';
import NewAdmin from '../Components/Pages/Admin';
import Error from '../Components/Pages/ErrorPage';
import TableDesign from "../Components/Tables/Table";
import BusInfo from "../Components/Pages/BusInfo";
import PrivateRoute from "../Components/private-route/PrivateRoute";

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class RoutePage extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
            <Route path="/" component={New} exact />
              <Route exact path="/admin" component={NewAdmin} />
              <Route exact path="/details" component={TableDesign} />
              <Route exact path="/busDetails" component={BusInfo} />
              <Route component={Error} />
              <PrivateRoute exact path="/admin" component={NewAdmin} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default RoutePage;