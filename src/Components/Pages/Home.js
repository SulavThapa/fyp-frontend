import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Card, Row,Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import NewAdmin from './Admin';

class Home extends React.Component {
    try = () => {
        this.props.history.push('/admin');
    }
    render() {
        return (
              <div>
                  <Card className='mx-auto shadowtest' bg="dark" text="white" style={{ marginTop: "13%",width: '22rem', height: '20rem', padding: 25 }}>
                      <h1 className='new' style={{color: '#b6c8c6', fontFamily: 'monospace'}}>Login Here</h1>
                      <Form>
                          <Form.Group controlId="formBasicEmail">
                              <Form.Label><span style={{color: '#b6c8c6', fontFamily: 'monospace'}}>UserName</span></Form.Label>
                              <Form.Control type="text" placeholder="UserName" />
                              <Form.Text className="text-muted">
                              </Form.Text>
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                              <Form.Label><span style={{color: '#b6c8c6', fontFamily: 'monospace'}}>Password</span></Form.Label>
                              <Form.Control type="password" placeholder="Password" />
                          </Form.Group>
                          <Button variant="primary" type="submit" onClick={this.try}>
                              Submit
                          </Button>
                          <Route path="/admin" component={NewAdmin}/>
                      </Form>
                  </Card>
              </div>
        );

    };
}

export default Home;