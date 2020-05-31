import React, { Component, Fragment } from "react";
import NavBar from "./components/Navigation/navBar";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/home";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
