import React, { Component } from "react";
import NavBar from "./components/Navigation/navBar";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Projects from "./pages/Projects/myprojects";

class App extends Component {
  componentDidMount(){
    document.title = "Samantha Nicole"
  }

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
            <Route exact path="/myprojects">
              <Projects />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
