import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

import "../../App.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="container test" id="myForm">
        <form className="loginForm" action="login" method="post">
          <div className="card-panel z-depth-3 grey lighten-5">
            <div className="row">
              <div className="col s12">
                <div className="card-title center-align teal-text">
                  <h4>Login</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" name="email" />
                <label id="loginEmail" for="email">
                  Email
                </label>
              </div>
            </div>

            <div className="row">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    name="password"
                  />
                  <label id="loginPWDlable" for="password">
                    Password
                  </label>
                </div>
              </div>

              <p class="center">
                <label>
                  <input
                    type="checkbox"
                    className="filled-in"
                    checked="checked"
                  />
                  <span>Remember me</span>
                </label>
              </p>

              <div className="row">
                <div className="col s12">
                  <input
                    type="submit"
                    id="submitLForm"
                    value="login"
                    className="btn"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
