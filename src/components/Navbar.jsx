import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Navbar extends Component {
  state = {};
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems);
    });

    return (
      <React.Fragment>
        <nav className="teal">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo left-align">
              eShop.lk
            </a>
            <a href="/" data-target="mobile-demo" class="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Home</a>
              </li>
              <li>
                <a href="badges.html">Search</a>
              </li>
              <li>
                <a href="collapsible.html">Products</a>
              </li>
              <li>
                <a href="mobile.html">Signup</a>
              </li>
              <li>
                <a href="mobile.html">Login</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Home</a>
          </li>
          <li>
            <a href="badges.html">Search</a>
          </li>
          <li>
            <a href="collapsible.html">Products</a>
          </li>
          <li>
            <a href="mobile.html">Signup</a>
          </li>
          <li>
            <a href="mobile.html">Login</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
