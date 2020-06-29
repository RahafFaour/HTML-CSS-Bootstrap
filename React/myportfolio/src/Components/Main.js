import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from './Navigation'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Skills from './Skills.js'


const Main = () => (
          <Switch> 
              <Route exact path= '/' component={Navigation}/>
              <Route exact path= '/about' component={About}/>
              <Route exact path= '/projects' component={Projects}/>
              <Route exact path= '/resume' component={Resume}/>
              <Route exact path= '/contact' component={Contact}/>
              <Route exact path= '/skills' component={Skills}/>

          </Switch>  

)
export default Main;
