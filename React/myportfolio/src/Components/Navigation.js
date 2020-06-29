import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import myimage from'../myimage.JPG'
import pdf from '../Rahaf-Faour-CV.pdf'
import About from './About'
import Skills from './Skills.js'
import DimmerExampleEvents from './Projects.js'
import ListExampleIcon from './Contact.js'

export class Navigation extends Component {
    render() {
        return (
            <div id= "home" className="ui grid scrolling content" style={{width: '100%', margin: 'auto'}}>
            <Grid className="nav-grid">
                <Cell col={12}>
                <img
                src={myimage} alt="my{image}"
                className="myimage ui circular"
                />
                <div className="textt">
                    <h1>
                     Rahaf Faour
                    </h1>
                    <p>Student at Hogeschool Rotterdam</p>
                     <a href="#contact" className="ui positive button">Contact Me</a>
                    <a href={pdf} className="ui positive button" rel="noopener noreferrer" target="_blank">See my CV</a>

                </div>
                <br/><br/>
                <div className="social-links">
                     <a href="https://github.com/RahafFaour" rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-github-square"></i></a>
                     <a href="https://www.linkedin.com/in/rahaf-faour-201033186/" rel="noopener noreferrer" target="_blank"> <i aria-hidden="true" className="fa fa-linkedin-square"></i></a>
                 </div>
                <About/><br/><br/>
                <Skills/>
                <br/><br/>
                <DimmerExampleEvents/>
                <br/><br/><br/><hr></hr>
                <ListExampleIcon/>
            </Cell>
            </Grid>                
            </div>

        )
    }
}

export default Navigation
