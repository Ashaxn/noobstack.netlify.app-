import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

class Category extends Component {
  state = {};
  render() {
    return (
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img
              src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/photo-of-imac-near-macbook-10297571.jpg"
              alt=""
            />
            <span className="card-title">Test Category</span>
          </div>
          <div className="card-content">
            <p>Test Description</p>
          </div>
          <div className="card-action">
            <a href="/" className="btn">
              Explore
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
