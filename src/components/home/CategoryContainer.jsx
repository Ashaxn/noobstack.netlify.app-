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
            <span className="teal-text">Popular</span> Categories
          </h4>
          <div className="row">
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/samsung-samsung-galaxy-s6-edge-plus-edge-plus-s6-edge-47261.jpg",
                title: "Mobile Phones",
                Descripion: "Samsung , Apple , Huwaei and many other options",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/semi-opened-laptop-computer-turned-on-on-table-2047905.jpg",
                title: "Laptops",
                Descripion: "Most powerfull laptops for your needs",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/photo-of-nike-shoes-1598505.jpg",
                title: "Shoes",
                Descripion: "Adiddas , Nike And World's famous Brands",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/photo-of-nike-shoes-1598505.jpg",
                title: "Mobile Phones",
                Descripion: "Samsung , Apple , Huwaei",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/books-in-black-wooden-book-shelf-159711.jpg",
                title: "Books",
                Descripion: "10000+ books of most famous Authors Available",
              }}
            />
            <Category
              cardInfo={{
                image:
                  "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ball-court-design-game-209977.jpg",
                title: "Sports Items",
                Descripion: "For any type of sports.",
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default CategoryContainer;
