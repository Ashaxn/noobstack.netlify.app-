import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

import "../../App.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="page-footer grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">NoobStack</h5>
              <p className="grey-text text-lighten-4">
                Java Script for full stack
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Follow me</h5>
              <div class="socialMedia">
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100009084205665&ref=bookmarks"
                    className="white-text"
                  >
                    <i className="fab fa-facebook fa-3x"></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100009084205665&ref=bookmarks"
                    className="white-text"
                  >
                    <i className="fab fa-github fa-3x"></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100009084205665&ref=bookmarks"
                    className="white-text"
                  >
                    <i className="fab fa-linkedin fa-3x"></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100009084205665&ref=bookmarks"
                    className="white-text"
                  >
                    <i className="fab fa-stack-overflow fa-3x"></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100009084205665&ref=bookmarks"
                    className="white-text"
                  >
                    <i className="fab fa-instagram fa-3x"></i>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=100009084205665&ref=bookmarks"
                    className="white-text"
                  >
                    <i className="fab fa-twitter fa-3x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2020 Copyright Text</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
