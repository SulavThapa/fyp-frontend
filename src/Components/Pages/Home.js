import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import NewAdmin from './Admin';


class Home extends React.Component {
    try = () => {
        this.props.history.push('/admin');
    }
    render() {
        return (
            <div style={{ marginTop: "10%" }}>
                <Card className='mx-auto shadowtest' bg="light" text="white" style={{ width: '22rem', height: '20rem', padding: 25 }}>
                    <h1 className='new'>Login Here</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label><span style={{color: 'grey'}}>UserName</span></Form.Label>
                            <Form.Control type="text" placeholder="Enter User Name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label><span style={{color: 'grey'}}>Password</span></Form.Label>
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