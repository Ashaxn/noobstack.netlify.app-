import React, { Component } from "react";

class StaticCards extends Component {
  state = {};
  render() {
    return (
      <section className="section section-icons grey lighten-4 center scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large teal-text">commute</i>
                <h4>Island wide delivery</h4>
                <p> Your item will be delivered within 5 days</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large teal-text">store</i>
                <h4>To your Door step</h4>
                <p> We delivery to your door step </p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large teal-text">
                  airplanemode_active
                </i>
                <h4>Over seas delivery</h4>
                <p>
                  We deliver some countries.{" "}
                  <span className="span teal-text">
                    {" "}
                    <a href="/">Check here</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StaticCards;
