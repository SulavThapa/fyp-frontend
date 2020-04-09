import React, { Component } from 'react';
import './test.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faTable, faUnlock, faBus, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import bus from "../Image/bus.png";

library.add(faHome, faTable, faUnlock, faBus,faMapMarkedAlt);

const testAlert = (
  <div className="alert alert-warning" role="alert">
    This is a warning alert—check it out!
  </div>
);

class TestNav extends React.Component {
  render() {
    return (
      <React.Fragment>

        <nav className="navbar navbar-dark fixed-top bg-secondary flex-md-nowrap p-0 shadow" style={{backgroundColor: "rgba(92,113,116,0.57)"}}>
          <Link to="/admin">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0">
              <span style={{fontFamily: 'sans-serif', color: 'white'}}>SECURE</span></a>
          </Link>
          <ul class="navbar-nav px-3">
            <Link to="/">
              <li class="nav-item text-nowrap">
                <a class="nav-link">Sign out</a>
              </li>
            </Link>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-dark sidebar shadow">
              <div className="sidebar-sticky" >
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link to="/admin">
                    <a className="nav-link" >
                      <FontAwesomeIcon className="side" icon="map-marked-alt" style={{color: '#ffc02d'}}/>
                      Map
                    </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/details">
                      <a className="nav-link">
                        <FontAwesomeIcon className="side" icon="table" style={{color: '#5b82ff'}}/>
                        Details
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/busDetails">
                      <a className="nav-link">
                        <FontAwesomeIcon className="side" icon="bus" style={{color: '#ff4646'}}/>
                        Bus Info
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default TestNav;