import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Search from "./components/Search";
import CategoryContainer from "./components/CategoryContainer";
import StaticCards from "./components/StaticCards";
import SocialMedia from "./components/SocialMedia";
import PhotoGallery from "./components/PhotoGallery";
import IndexAbout from "./components/IndexAbout";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Search />
      <CategoryContainer />
      <StaticCards />
      <SocialMedia />
      <PhotoGallery />
      <IndexAbout />
    </div>
  );
}

export default App;
