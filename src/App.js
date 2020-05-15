import React from "react";
import Navbar from "./components/NavFooter/Navbar";
import Slider from "./components/home/Slider";
import CategoryContainer from "./components/home/CategoryContainer";
import StaticCards from "./components/home/StaticCards";
import SocialMedia from "./components/home/SocialMedia";
import Contributes from "./components/Contributes/Contributes";
import About from "./components/About/About";
import Footer from "./components/NavFooter/Footer";
import Carousel from "./components/home/Carousel";
import IButton from "./components/NavFooter/IButton";
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
        <Route path="/" component={IButton} />
        <Route path="/" component={Slider} />
        <Route path="/" exact component={CategoryContainer} />
        <Route path="/" exact component={StaticCards} />
        <Route path="/" exact component={SocialMedia} />

        <Route path="/contribute" exact component={Contributes} />
        <Route path="/about" exact component={About} />
        <Route path="/courses" exact component={CategoryContainer} />
        <Route path="/" component={Carousel} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
