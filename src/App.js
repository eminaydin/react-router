import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from "./Projects"
import About from "./About"
import Nav from "./Nav"
import "./App.css"

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/" exact>
          </Route>
        </Switch>
      </div>
    </Router>
  );

}






