import React from "react";
import Navbar from "./components/NavFooter/Navbar";
import Slider from "./components/home/Slider";
import CategoryContainer from "./components/home/CategoryContainer";
import StaticCards from "./components/home/StaticCards";
import SocialMedia from "./components/home/SocialMedia";
import PhotoGallery from "./components/home/PhotoGallery";
import IndexAbout from "./components/home/IndexAbout";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import Footer from "./components/NavFooter/Footer";

// eslint-disable-next-line
import {
  BrowserRouter as Router,
  // eslint-disable-next-line
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router history={HashRouter}>
      <div className="App">
        <Navbar />

        <Route path="/" exact component={Slider} />

        <Route path="/" exact component={CategoryContainer} />
        <Route path="/" exact component={StaticCards} />
        <Route path="/" exact component={SocialMedia} />
        <Route path="/" exact component={PhotoGallery} />
        <Route path="/" exact component={IndexAbout} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
