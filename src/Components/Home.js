import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import NewAdmin from './Admin';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';



const Home = () => (
        <div style={{marginTop: "10%"}}>
            <Card className='mx-auto' bg="light" text="white" style={{ width: '22rem',height:'20rem', padding: 25}}>
                <h1 className='new'>Login Here</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </Form>
            </Card>
        </div>
);


export default Home;