import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Projects from "./Projects"
import About from "./About"
import Nav from "./Nav"

import "./App.css"

export default function App() {

  const NoMatch = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  )
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" >
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route component={NoMatch} >
          </Route>
        </Switch>
      </div>
    </Router>
  );

}






