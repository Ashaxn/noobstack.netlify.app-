import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

import "../../App.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container test" id="myForm">
        <div className="card-panel z-depth-3 grey lighten-5">
          <div className="row">
            <div className="col s12">
              <div className="card-title center-align grey-text">
                <h4>NoobStack</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <p>
                NoobStack is a online resource for Java Script full stack
                developer. We provide beginner level knowledge to experienced
                level knowladge for any type of developers. We are currently
                provide Java Script , A react , Angular , React-Native , ES6 ,
                etc....
                <br />
                <br />
                This web site is tottaly build on react framework. So any
                student can contribute to this web site. If you are interested
                click on Improve tab on the menu. Anyone welcome to create their
                own cource in here.But you must have an entry level java script
                knowledge and experience with building front end UI with react.
                <br />
                <br />
                For begginers we encourage you to start with Vanilla Java Script
                course. Then you can move into ES6 (A newer syntax for Java
                Script). Then you can choose a font end frame work for java
                script. After learnign an font end framwork with Java Script you
                can start learning Node.js(Java Script for back-end).
                <br />
                <br />
                If you follow these steps can can be a Java Script full stack
                Developer. We will update many contents as we can.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
