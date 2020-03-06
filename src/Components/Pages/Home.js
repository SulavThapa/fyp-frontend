// import React, { Component } from 'react'
// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
// import { Route } from 'react-router-dom';
// import NewAdmin from './Admin';
//
//
// class Home extends React.Component {
//     try = () => {
//         this.props.history.push('/admin');
//     }
//     render() {
//         return (
//             <div style={{ marginTop: "10%" }}>
//                 <Card className='mx-auto shadowtest' bg="light" text="white" style={{ width: '22rem', height: '20rem', padding: 25 }}>
//                     <h1 className='new'>Login Here</h1>
//                     <Form>
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label><span style={{color: 'grey'}}>UserName</span></Form.Label>
//                             <Form.Control type="text" placeholder="Enter User Name" />
//                             <Form.Text className="text-muted">
//                             </Form.Text>
//                         </Form.Group>
//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Label><span style={{color: 'grey'}}>Password</span></Form.Label>
//                             <Form.Control type="password" placeholder="Password" />
//                         </Form.Group>
//                         <Button variant="primary" type="submit" onClick={this.try}>
//                             Submit
//                         </Button>
//                         <Route path="/admin" component={NewAdmin}/>
//                     </Form>
//                 </Card>
//             </div>
//         );
//
//     };
// }
//
// export default Home;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import NewAdmin from "./Admin";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h1 style={{ fontSize: 35, fontWeight: "bold", color: "orange" }}>
                Welcome to Bus Tracking System
              </h1>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Admin Registration (<Link to="/register">Register</Link>)
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
