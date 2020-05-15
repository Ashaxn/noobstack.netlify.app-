import React, { Component } from "react";
import JsCard from "./JsCards";

import "materialize-css/dist/css/materialize.min.css";

class JsMaterialContainer extends Component {
  state = {};

  componentDidMount() {
    let problemEle = document.querySelectorAll(".problems");
    problemEle.forEach((problem) => {
      problem.classList.remove("show");
      problem.classList.add("hide");
    });
  }

  render() {
    return (
      <section id="popular" class="section section-popular scrollspy">
        <div className="container">
          <h4 className="center">
            <span className="teal-text">Java Script</span> full Course
          </h4>
          <div className="row">
            <JsCard
              cardInfo={{
                video:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/1633292_981a.jpg",
                title: "ES6",
                Descripion: "Learn updated syntax for Modern Java Script",
                link: "javascript",
              }}
            />
            <JsCard
              cardInfo={{
                video:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/jquery-undefined.png",
                title: "jQuary",
                Descripion: "Learn jQuary to reduce Boilerplate codes",
                link: "jasvascript",
              }}
            />
            <JsCard
              cardInfo={{
                video:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/1_B9uqLg7-TM2-bAIwa7Zxuw.png",
                title: "",
                Descripion:
                  "React the most powerfull font end frame work for developing font-end UI",
                link: "javascrispt",
              }}
            />
            <JsCard
              cardInfo={{
                video:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/the-seo-guide-to-angular.png",
                title: "",
                Descripion:
                  "Google's Angular. It is also a frame work for developing fron-end UIs.",
                link: "javascsript",
              }}
            />
            <JsCard
              cardInfo={{
                video:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/1_xdo0UBpyszvD7-7EH4TkIA.png",
                title: "Node JS",
                Descripion: "Node.js google's V8 engine for back-end",
                link: "javasscript",
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default JsMaterialContainer;
