import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import "../../App.css";

class Contributes extends Component {
  state = {};
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".parallax");
      M.Parallax.init(elems);
    });
    return (
      <div className="test container ">
        <div>
          <p>
            This page hosted in GitHub pages.
            <span className="teal-text">
              {" "}
              <a href="https://pages.github.com/">
                Learn more about GitHub pages.
              </a>
            </span>{" "}
            If you interested in contributing to this project,
            <ul>
              <li>
                1 - Go to{" "}
                <a href="https://github.com/Shihara-Dilshan/noobstack.netlify.app-">
                  This
                </a>{" "}
                Page reposotory
              </li>
              <li>2 - Folk the reposotory</li>
              <li>3 - Contribute to the project</li>
              <li>4 - Send a Pull request</li>
              <li>5 - Page admins will marge your request to the reposotory</li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

export default Contributes;
