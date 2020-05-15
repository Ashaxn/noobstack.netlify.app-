import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

import "../../App.css";

class Category extends Component {
  state = {};

  render() {
    return (
      <div className="col s12 m4 test">
        <div className="card medium">
          <div className="card-image">
            <img src={this.props.cardInfo.image} alt="" />
            <span className="card-title">{this.props.cardInfo.title}</span>
          </div>
          <div className="card-content">
            <p>{this.props.cardInfo.Descripion}</p>
          </div>
          <div className="card-action">
            <a href="/" className="btn grey darken-3" id="catExplore">
              View Course
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;