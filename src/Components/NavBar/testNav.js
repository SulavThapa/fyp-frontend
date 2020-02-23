import React, { Component } from 'react';
import './test.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faTable, faUnlock, faBus } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

library.add(faHome, faTable, faUnlock, faBus);

const testAlert = (
  <div className="alert alert-warning" role="alert">
    This is a warning alert—check it out!
  </div>
);

class TestNav extends React.Component {
  render() {
    return (
      <React.Fragment>

        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <Link to="/">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0">
              <span style={{fontFamily: 'sans-serif', color: 'white'}}>SECURE</span></a>
          </Link>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link to="/admin">
                    <a className="nav-link">
                      <FontAwesomeIcon className="side" icon="home" style={{color: '#49494b'}}/>
                      Map
                    </a>
                    </Link>
                  </li>
                  {/*<li className="nav-item">*/}
                  {/*  <Link to="/details">*/}
                  {/*    <a className="nav-link">*/}
                  {/*      <FontAwesomeIcon className="side" icon="table" style={{color: '#49494b'}}/>*/}
                  {/*      Details*/}
                  {/*    </a>*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                  {/*<li className="nav-item">*/}
                  {/*  <Link to="/busDetails">*/}
                  {/*    <a className="nav-link">*/}
                  {/*      <FontAwesomeIcon className="side" icon="bus" style={{color: '#49494b'}}/>*/}
                  {/*      Bus Info*/}
                  {/*    </a>*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                  <li className="nav-item" >
                    <Link to="/">
                      <a className="nav-link">
                        <FontAwesomeIcon className="side" icon="unlock" style={{color: '#49494b'}}/>
                        Log Out
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