import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../App.css'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default function SimpleCard() {
    const classes = useStyles();
    return (
        <Card className="ui centered card" id="about">
            <CardContent className={ classes.root} >
                <Typography id="abouttitle" variant="h5" component="h2">
                    About Me
        </Typography>

                <Typography id="aboutmetext" variant="body2" component="p">
                   My name is Rahaf Faour.

                    I am 23 years old and I come from Syria .

                    I have been in the Netherlands for 5 years.

 I'm interested in all kinds of visual communication, but my major focus is on designing web and mobile applications.      <br />    <br />
 I like electronics and programming so I started studying ICT in Aleppo University but because of the war I wasn't able to finish my course. But after 5 years in  the Netherlands and after I learned Dutch, I had the opportunity again to make my dreams come true so I am studying now Information Technology at the Hogeschool Rotterdam. <br/><br/>During my first year I made a board game with four other people. We made a digital component for the board game, using Processing. I also made an Android application for Techlab, with three other students. Techlab is a place in the Rotterdam University of Applied Sciences, in Wijnhaven 107, where people can borrow electronics and books. We used Django (Python), Java and XML to develop our project. 
This year I made a web application, with three other students, for football trainers and players. We made the web application using react, NodeJS and PostgreSQL. With two other students, I also developed an android application with an upper arm strap for diabetes patients. To realise this project, we used Java, XML, Firebase and Arduino.
This year, I also developed my programming skills by following a bootcamp, called the “Samen Programmeren” programme”, that aimed at HTML, CSS, Bootstrap, Materialize, JavaScript, Ajax, jQuery, Algorithm, Git, GitHub, Scrum Framework, Trello and developing skills concerning the MERN Stack (MongoDB, Express.js, React and Nodejs). <br/><br/>After my graduation I want to take a Master degree in Computer Science and I hope in the future to become an important programmer and to be able to work for a big company.<br></br>
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <div className="learnmore">
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/rahaf-faour-201033186/"  size="small">Learn More</a>
                </div>
        </Card>
    );
}