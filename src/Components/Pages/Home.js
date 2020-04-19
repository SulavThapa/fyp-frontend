import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Card, Row,Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import NewAdmin from './Admin';

class Home extends React.Component {

    state = {
        email:'',
        password: '',
        errors: {}
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        //
        // const userData = {
        //     email: this.state.email,
        //     password: this.state.password
        // };
    };

    try = () => {
        this.props.history.push('/admin');
    };
    render() {
        const {errors} = this.state;
        return (
              <div>
                  <Card className='mx-auto shadow' bg="dark" text="white" style={{ marginTop: "13%",width: '22rem', height: '20rem', padding: 25 }}>
                      <h1 className='new' style={{color: '#b6c8c6', fontFamily: 'monospace'}}>Login Here</h1>
                      <form noValidate onSubmit={this.onSubmit}>
                          <div className="form-group">
                              <label><span style={{color: '#b6c8c6', fontFamily: 'monospace'}}>UserName</span></label>
                              <input
                                  onChange={this.onChange}
                                  value={this.state.email}
                                  className="form-control"
                                  id="email"
                                  type="text"
                                  placeholder="UserName" />
                          </div>
                          <div className="form-group">
                              <label><span style={{color: '#b6c8c6', fontFamily: 'monospace'}}>Password</span></label>
                              <input
                                  className="form-control"
                                  type="password"
                                  placeholder="Password" />
                          </div>
                          <Button variant="primary" type="submit" onClick={this.try}>
                              Submit
                          </Button>
                          <Route path="/admin" component={NewAdmin}/>
                      </form>
                  </Card>
              </div>
        );

    };
}

export default Home;