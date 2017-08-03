import React, { Component } from "react";
import Auth from './Auth'

class Login extends Component {
  render() {
    const auth = new Auth();
    const { isAuthenticated } = auth;
    return (
      <div className="container">
        {isAuthenticated() && <h4>You are logged in!</h4>}
        {!isAuthenticated() &&
          <h4>
            You are not logged in! Please{" "}
            <a style={{ cursor: "pointer" }} onClick={() => auth.login()}>
              Log In
            </a>{" "}
            to continue.
          </h4>}
      </div>
    );
  }
}

export default Login;
