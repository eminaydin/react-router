import React from "react";
import { Card, Header } from "semantic-ui-react";
import { Helmet } from "react-helmet";
const Projects = () => {
  const src = "https://react.semantic-ui.com/images/wireframe/image.png";
  const style = {
    margin: "20px",
  };
  const cards = [];
  for (let index = 0; index < 16; index++) {
    cards.push(<Card raised image={src} />);
  }
  return (
    <div className="projects">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Header style={style}> Projects</Header>
      <Card.Group itemsPerRow={4}>{cards}</Card.Group>
    </div>
  );
};

export default Projects;
