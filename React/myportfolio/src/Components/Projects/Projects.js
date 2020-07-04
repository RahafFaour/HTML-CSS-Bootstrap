import React, { Component } from 'react'
import boardgame from './boardgame.jpg'
import techlab from './techlab.JPG'
import jouwteam from './jouwteam.JPG'
import diapal from './diapal.JPG'
import { Segment } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'

export class Projects extends Component {

  render() {
    return (
      <Segment.Group id="project">
        <br></br>
       <h1>Projects</h1>
      <div className="container">
        <a href="https://www.youtube.com/watch?v=9Ia5qTA1nfw&t=2s">
        <img src={boardgame} alt="boardgame" className="image" />
        <Container className="overlay">
          <h1 className="ui segment text">Tankduel project</h1><br/>
          <p className="ui segment text2">A board game and a digital component for the board game (using processing languages)</p>
        </Container>
        </a>
      </div>
      <div className="container">
        <a href="https://www.youtube.com/watch?v=Z50DbJP5NtE&t=1s">
        <img src={techlab} alt="techlab" className="image" />
        <Container className="overlay">
          <h1 className="ui segment text">Techlab project</h1>
          <p className="ui segment text2">An Android application that can be used to borrow items using (Android studio and Django)</p>
        </Container>
        </a>
      </div>
      <div className="container" id="jouwteam">
        <a href="https://www.youtube.com/watch?v=01IMuSfzDnQ&t=2s">
        <img src={jouwteam} alt="jouwteam" className="image" />
        <Container className="overlay">
          <h1 className="ui segment text">Jouw team project </h1><br/>
          <p className="ui segment text2">A web application that can be used for football trainers and players using(React and Nodejs)</p>
        </Container>
        </a>
      </div>
      <div className="container" id="diapal">
        <a href="https://www.youtube.com/watch?v=EOPREfkvnAM&t=1s">
        <img src={diapal} alt="diapal" className="image" />
        <Container className="overlay">
        <h1 className="ui segment text">Diapal project </h1><br/>
        <p className="ui segment text2">An Android application with an upper arm bands for diabetes using(Android studio, Arduino and Firebase)</p>
        </Container>
        </a>
      </div>
      </Segment.Group>

    )
  }
}

export default Projects
