import React from 'react';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './Main';

function Routering() {
  return (
<div className="demo-big-content">
    <Layout>
         {window.screen.width <= 1022 ? 
         <Drawer id="fixedheader" title="Creative CV">
            <Navigation >
                <a href="#home"  className="linkto">Resume</a>
                <a href="#about" className="linkto">About</a>
                <a href="#skills"  className="linkto">Skills</a>
                <a href="#project"  className="linkto">Projects</a>
                <a href="#contact"  className="linkto">Contact</a>
            </Navigation>
        </Drawer>  :       
         <Header id="fixedheader" className="header-color" title="Creative CV" scroll>
            <Navigation>
                <a href="#home"  className="linkto">Home</a>
                <a href="#about"  className="linkto">About</a>
                <a href="#skills"  className="linkto">Skills</a>
                <a href="#project"  className="linkto">Projects</a>
                <a href="#contact"  className="linkto">Contact</a>
            </Navigation>
        </Header> }
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>

</div>
  );
}

export default Routering;
