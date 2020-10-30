import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Nav from "./components/Nav";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import "./App.css";
import { Helmet } from "react-helmet";

export default function App() {
  const NoMatch = ({ location }) => (
    <div
      style={{
        height: "92vh",
        fontSize: "40px",
        textAlign: "-webkit-center",
      }}
    >
      <h3 style={{ fontSize: "40px", margin: "20px" }}>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );

  const photos = [];
  for (let index = 0; index < 15; index++) {
    photos.push(
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    );
  }
  return (
    <Router>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Segment>
            <Dimmer active>
              <Loader size="massive">
                This will probably take very long time
              </Loader>
            </Dimmer>
            {photos}
          </Segment>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route component={NoMatch}></Route>
      </Switch>
    </Router>
  );
}
