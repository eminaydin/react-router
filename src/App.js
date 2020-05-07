import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Projects from "./Projects"
import About from "./About"
import Nav from "./Nav"
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import "./App.css"

export default function App() {

  const NoMatch = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  )

  const photos = [];
  for (let index = 0; index < 15; index++) {
    photos.push(<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />)

  }
  return (
    <Router>
      <div>
        <Nav />
        <Segment>
          <Dimmer active>
            <Loader size='massive'>This will probably take a loooong time</Loader>
          </Dimmer>{photos}
        </Segment>
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






