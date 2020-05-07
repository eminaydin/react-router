import React from 'react';
import { Card, Header } from 'semantic-ui-react'
const Projects = () => {
    const src = 'https://react.semantic-ui.com/images/wireframe/image.png'
    const style = {
        margin: "20px",
    }
    return (
        <div className="projects">
            <Header style={style}> Projects</Header>
            <Card.Group itemsPerRow={4}>
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
                <Card raised image={src} />
            </Card.Group>
        </div >
    );
}

export default Projects;
