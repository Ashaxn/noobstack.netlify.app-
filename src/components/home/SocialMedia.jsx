import React, { Component } from "react";
import "../../App.css";

class SocialMedia extends Component {
  state = {};
  render() {
    return (
      <section className="section section-follow grey darken-3 white-text center scrollspy test">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h4>Follow NoobStack</h4>
              <p>Follow us on social media for </p>
              <a
                href="https://www.facebook.com/profile.php?id=100009084205665&ref=bookmarks"
                className="white-text"
              >
                <i className="fab fa-facebook fa-4x"></i>
              </a>
              <a href="/" className="white-text">
                <i className="fab fa-twitter fa-4x"></i>
              </a>
              <a href="/" className="white-text">
                <i className="fab fa-google-plus fa-4x"></i>
              </a>
              <a href="/" className="white-text">
                <i className="fab fa-pinterest fa-4x"></i>
              </a>
              <a href="/" className="white-text">
                <i className="fab fa-linkedin fa-4x"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SocialMedia;
