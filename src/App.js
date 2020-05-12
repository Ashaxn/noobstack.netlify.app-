import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Search from "./components/Search";
import CategoryContainer from "./components/CategoryContainer";
import StaticCards from "./components/StaticCards";
import SocialMedia from "./components/SocialMedia";
import PhotoGallery from "./components/PhotoGallery";
import IndexAbout from "./components/IndexAbout";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route path="/" exact component={Slider} />
        <Route path="/" exact component={Search} />
        <Route path="/" exact component={CategoryContainer} />
        <Route path="/" exact component={StaticCards} />
        <Route path="/" exact component={SocialMedia} />
        <Route path="/" exact component={PhotoGallery} />
        <Route path="/" exact component={IndexAbout} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
      </div>
    </Router>
  );
}

export default App;
