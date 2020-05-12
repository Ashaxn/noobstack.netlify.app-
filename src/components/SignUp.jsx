import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div>
        <form name="signUpForm" method="post" action="signup">
          <div className="container">
            <div className="card-panel z-depth-3 grey lighten-5">
              <div className="row">
                <div className="col s12">
                  <div className="card-title center teal-text">
                    <h4>Sign up Form</h4>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <div className="input-field col s12 m6">
                    <input
                      id="first_name"
                      type="text"
                      class="validate"
                      name="first_name"
                    />
                    <label for="first_name" id="fnameLabel">
                      First Name
                    </label>
                  </div>
                  <div class="input-field col s12 m6">
                    <input
                      id="last_name"
                      type="text"
                      className="validate"
                      name="last_name"
                    />
                    <label for="last_name" id="lnameLabel">
                      Last Name
                    </label>
                  </div>

                  <div className="input-field col s12">
                    <input id="email" type="email" name="email" />
                    <label for="email" id="emailLable">
                      Email
                    </label>
                  </div>

                  <div class="input-field col s12 m6">
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      name="password"
                    />
                    <label for="password" id="passwordLable">
                      Password
                    </label>
                  </div>
                  <div class="input-field col s12 m6">
                    <input
                      id="cpassword"
                      type="password"
                      className=""
                      name="cpassword"
                    />
                    <label for="cpassword" id="cpasswordLable">
                      Confirm Password
                    </label>
                  </div>

                  <div className="input-field col s12">
                    <select name="country">
                      <option value="1" disabled selected>
                        Choose your Country
                      </option>
                      <option value="Sri Lanka">Sri Lanka </option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                    </select>
                    <label id="countryLabel">Country Select</label>
                  </div>

                  <div className="input-field col s12">
                    <textarea
                      id="textarea"
                      className="materialize-textarea"
                      name="address"
                    ></textarea>
                    <label for="address" id="addressLabel">
                      Enter your address
                    </label>
                  </div>
                  <div className="input-field col s12 m8">
                    <input
                      id="credit_card"
                      type="text"
                      className="validate"
                      name="credit_card"
                    />
                    <label for="credit_card" id="creditCardLabel">
                      Credit Card
                    </label>
                  </div>
                  <div className="input-field col s12 m4">
                    <input
                      id="credit_cardPin"
                      type="password"
                      className="validate"
                      name="credit_cardPin"
                    />
                    <label for="credit_cardPin" id="creditPinLabel">
                      Pin Number
                    </label>
                  </div>

                  <div className="row">
                    <div className="col s12">
                      <input
                        type="submit"
                        id="submitForm"
                        value="submit"
                        className="btn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
