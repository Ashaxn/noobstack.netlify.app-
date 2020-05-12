import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Search from "./components/Search";
import CategoryContainer from "./components/CategoryContainer";
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
    </div>
  );
}

export default App;
