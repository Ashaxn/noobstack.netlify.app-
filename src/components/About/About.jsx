import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

import "../../App.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div class="row test container">
        <div class="col s12 m12">
          <div class="card ">
            <div class="card-image">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/5343340281200640.png"
                alt=""
              />
              <span class="card-title">NoobStack</span>
            </div>
            <div class="card-content">
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
