import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

class JsCards extends Component {
  state = {};
  render() {
    return (
      <div className="col s12 m4 test">
        <div className="card medium">
          <div className="card-image">
            <video
              width="100%"
              height="240"
              controls
              preload="none"
              poster={this.props.cardInfo.poster}
            >
              <source
                src="https://www.videvo.net/videvo_files/converted/2013_07/preview/hd0079.mov26726.webm"
                type="video/webm"
              />
            </video>
          </div>

          <div className="card-content">
            <span className="card-title">{this.props.cardInfo.title}</span>
            <p>{this.props.cardInfo.Descripion}</p>
          </div>
          <div className="card-action white-text">
            <li className="btn white-text grey darken-3" id="catExplore">
              <Link to={this.props.cardInfo.link} className="white-text ">
                View Course
              </Link>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default JsCards;
