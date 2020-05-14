import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="section teal darken-2 white-text center" id="myFooter">
        <p class="flow-text">eShop.lk &copy 2020</p>
        <a href="adminlogin.jsp">
          <h6 class="">
            <small>admin login</small>
          </h6>
        </a>
      </footer>
    );
  }
}

export default Footer;
