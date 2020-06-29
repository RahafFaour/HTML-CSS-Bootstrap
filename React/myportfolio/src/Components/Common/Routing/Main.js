import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from '../HomePage/HomePage'
import About from '../../About/About'
import Projects from '../../Projects/Projects'
import Contact from '../../Contact/Contact'
import Skills from '../../Skills/Skills.js'


const Main = () => (
          <Switch> 
              <Route exact path= '/' component={Navigation}/>
              <Route exact path= '/about' component={About}/>
              <Route exact path= '/projects' component={Projects}/>
              <Route exact path= '/contact' component={Contact}/>
              <Route exact path= '/skills' component={Skills}/>

          </Switch>  

)
export default Main;
