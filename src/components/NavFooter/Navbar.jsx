import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import "../../App.css";
// eslint-disable-next-line
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Search</Link>
              </li>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/signup">Singup</Link>
              </li>
              <li className="sidenav-close">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li className="sidenav-close">
            <Link to="/">Home</Link>
          </li>
          <li className="sidenav-close">
            <Link to="/">Search</Link>
          </li>
          <li className="sidenav-close">
            <Link to="/">Products</Link>
          </li>

          <li className="sidenav-close">
            <Link to="/signup">Singup</Link>
          </li>

          <li className="sidenav-close">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
