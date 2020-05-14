import React, { Component } from "react";
import Category from "../categoryCard/Category";
import "materialize-css/dist/css/materialize.min.css";

class CategoryContainer extends Component {
  state = {};
  render() {
    return (
      <section id="popular" class="section section-popular scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="teal-text">Popular</span> Courses
          </h4>
          <div className="row">
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/Top-10-Tips-To-Learn-JavaScript.jpg",
                title: "Vanilla JS",
                Descripion: "Learn Java Script",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/1633292_981a.jpg",
                title: "ES6",
                Descripion: "Learn updated syntax for Modern Java Script",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/jquery-undefined.png",
                title: "jQuary",
                Descripion: "Learn jQuary to reduce Boilerplate codes",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/1_B9uqLg7-TM2-bAIwa7Zxuw.png",
                title: "",
                Descripion: "Samsung , Apple , Huwaei",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/the-seo-guide-to-angular.png",
                title: "",
                Descripion: "10000+ books of most famous Authors Available",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/1_xdo0UBpyszvD7-7EH4TkIA.png",
                title: "Node JS",
                Descripion: "Run Java script o nthe server",
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default CategoryContainer;
