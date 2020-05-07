import React from 'react';
import { Feed } from 'semantic-ui-react';
import { Helmet } from "react-helmet";

const events = [
    {
        date: '1 Hour Ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
        meta: '4 Likes',
        summary: 'Elliot Fu added you as a friend',
    },
    {
        date: '4 days ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg',
        meta: '1 Like',
        summary: 'Helen Troy added 2 new illustrations',
        extraImages: [
            'https://react.semantic-ui.com/images/wireframe/image.png',
            'https://react.semantic-ui.com/images/wireframe/image.png',
        ],
    },
    {
        date: '3 days ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
        meta: '8 Likes',
        summary: 'Joe Henderson posted on his page',
        extraText:
            "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
    },
    {
        date: '4 days ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
        meta: '41 Likes',
        summary: 'Justen Kitsune added 2 new photos of you',
        extraText:
            'Look at these fun pics I found from a few years ago. Good times.',
        extraImages: [
            'https://react.semantic-ui.com/images/wireframe/image.png',
            'https://react.semantic-ui.com/images/wireframe/image.png',
        ],
    },
    {
        date: '1 Hour Ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
        meta: '4 Likes',
        summary: 'Elliot Fu added you as a friend',
    },
    {
        date: '4 days ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg',
        meta: '1 Like',
        summary: 'Helen Troy added 2 new illustrations',
        extraImages: [
            'https://react.semantic-ui.com/images/wireframe/image.png',
            'https://react.semantic-ui.com/images/wireframe/image.png',
        ],
    },
    {
        date: '3 days ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
        meta: '8 Likes',
        summary: 'Joe Henderson posted on his page',
        extraText:
            "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
    },
    {
        date: '4 days ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
        meta: '41 Likes',
        summary: 'Justen Kitsune added 2 new photos of you',
        extraText:
            'Look at these fun pics I found from a few years ago. Good times.',
        extraImages: [
            'https://react.semantic-ui.com/images/wireframe/image.png',
            'https://react.semantic-ui.com/images/wireframe/image.png',
        ],
    },
]

const About = () => {

    return (<div>
        <Helmet>
            <title>About</title>
        </Helmet>
        <Feed events={events} />
    </div>
    )
}
export default About 