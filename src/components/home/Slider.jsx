import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "../../App.css";

class Slider extends Component {
  state = {};
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".slider");
      M.Slider.init(elems, {
        indicators: false,
        height: 400,
        transition: 500,
        interval: 6000,
      });
    });
    return (
      <div className="test">
        <div className="slider">
          <ul className="slides">
            <li>
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/erik-mclean-nfoRa6NHTbU-unsplash.jpg"
                alt=""
              />
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 claclassNamess="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/brooke-cagle-WHWYBmtn3_0-unsplash.jpg"
                alt=""
              />
              <div className="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/sahin-yesilyaprak-9eGMyzOSyYE-unsplash.jpg"
                alt=""
              />
              <div className="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/fashion-fashionable-footwear-leather-267301.jpg"
                alt=""
              />
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Slider;
