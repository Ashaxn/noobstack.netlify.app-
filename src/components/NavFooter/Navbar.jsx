import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import "../../App.css";
// eslint-disable-next-line
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};

  showSlider = () => {
    let problemEle = document.querySelectorAll(".problems");
    problemEle.forEach((problem) => {
      problem.classList.remove("hide");
      problem.classList.add("show");
    });
  };

  hideSlider = () => {
    let problemEle = document.querySelectorAll(".problems");
    problemEle.forEach((problem) => {
      problem.classList.remove("show");
      problem.classList.add("hide");
    });
  };

  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems);
    });

    return (
      <React.Fragment>
        <nav className="grey darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              NoobStack
            </a>
            <a href="/" data-target="mobile-demo" class="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link onClick={this.showSlider} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={this.hideSlider} to="/">
                  Search
                </Link>
              </li>
              <li>
                <Link onClick={this.hideSlider} to="/courses">
                  Courses
                </Link>
              </li>
              <li>
                <Link onClick={this.hideSlider} to="/signup">
                  Improve
                </Link>
              </li>
              <li className="sidenav-close">
                <Link onClick={this.hideSlider} to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li className="sidenav-close">
            <Link onClick={this.showSlider} to="/">
              Home
            </Link>
          </li>
          <li className="sidenav-close">
            <Link to="/" onClick={this.hideSlider}>
              Search
            </Link>
          </li>
          <li className="sidenav-close">
            <Link to="/courses" onClick={this.hideSlider}>
              Courses
            </Link>
          </li>

          <li className="sidenav-close">
            <Link onClick={this.hideSlider} to="/signup">
              Improve
            </Link>
          </li>

          <li className="sidenav-close">
            <Link onClick={this.hideSlider} to="/about">
              About
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
