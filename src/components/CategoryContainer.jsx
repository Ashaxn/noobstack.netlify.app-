import React, { Component } from "react";
import Category from "./Category";
import "../App.css";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class CategoryContainer extends Component {
  state = {};
  render() {
    return (
      <section id="popular" class="section section-popular scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="teal-text">Popular</span> Categories
          </h4>
          <div className="row">
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
          </div>
        </div>
      </section>
    );
  }
}

export default CategoryContainer;
