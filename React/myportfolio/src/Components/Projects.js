import React, { Component } from 'react'
import boardgame from '../boardgame.jpg'
import techlab from '../techlab.JPG'
import jouwteam from '../jouwteam.JPG'
import diapal from '../diapal.JPG'

export class Projects extends Component {

  render() {
    return (
      <div id="project">
       <h1>Projects</h1>
      <div className="container">
        <a href="https://www.youtube.com/watch?v=9Ia5qTA1nfw&t=2s">
        <img src={boardgame} alt="boardgame" className="image" />
        <div className="overlay">
          <h1 className="text">Tankduel project</h1><br/>
          <p className="text2">A board game and a digital component for the board game (using processing languages)</p>
        </div>
        </a>
      </div>
      <div className="container">
        <a href="https://www.youtube.com/watch?v=Z50DbJP5NtE&t=1s">
        <img src={techlab} alt="techlab" className="image" />
        <div className="overlay">
          <h1 className="text">Techlab project</h1>
          <p className="text2">An Android application that can be used to borrow items using (Android studio and Django)</p>
        </div>
        </a>
      </div>
      <div className="container">
        <a href="https://www.youtube.com/watch?v=01IMuSfzDnQ&t=2s">
        <img src={jouwteam} alt="jouwteam" className="image" />
        <div className="overlay">
          <h1 className="text">Jouw team project </h1>
          <p className="text2">A web application that can be used for football trainers and players using(React and Nodejs)</p>
        </div>
        </a>
      </div>
      <div className="container">
        <a href="https://www.youtube.com/watch?v=EOPREfkvnAM&t=1s">
        <img src={diapal} alt="diapal" className="image" />
        <div className="overlay">
        <h1 className="text">Diapal project </h1>
        <p className="text3">An Android application with an upper arm bands for diabetes using(Android studio, Arduino and Firebase)</p>
        </div>
        </a>
      </div>
      </div>

    )
  }
}

export default Projects
