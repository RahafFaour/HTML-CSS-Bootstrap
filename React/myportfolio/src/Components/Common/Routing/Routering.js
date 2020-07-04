import React, { Component } from 'react'
import { Header, Navigation, Drawer } from 'react-mdl'
import Main from './Main';
import { Responsive, Segment } from 'semantic-ui-react'


export class Routering extends Component {
    // state ={className:"", };
  
    // componentDidMount(){
    //   window.addEventListener("scroll", this.handleScroll);
    // }
    
    // handleScroll=()=>{
    //   if (window.pageYOffset > 500) {
    //       if(!this.state.className){
    //         this.setState({ className: "blue" });   
    //       }
    //   }else{
    //       if(this.state.className){
    //         this.setState({ className: "" });
    //       }
    //   }
     
    // }
    state = {
        navBackground: "",
        color:""
      };
    
      componentDidMount() {
        document.addEventListener("scroll", () => {
          const backgroundcolor = window.scrollY < 500 ? "" : "green";

          this.setState({ navBackground: backgroundcolor });

        });
      }
    render() {

            return (
                <div className="demo-big-content">


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
                         <Header transparent      style={{
                            backgroundColor: `${this.state.navBackground}`,
                            position: "fixed",
                            top: "0px",
                            width: "100%"
                          }} id="fixedheader" title="Creative CV" scroll>
                            <Navigation>
                                <a href="#home"  className="linkto" style={{ color: 'black',fontSize:20}}>Home</a>
                                <a href="#about"  className="linkto"style={{color:'black',fontSize:20}}>About</a>
                                <a href="#skills"  className="linkto"style={{color:'black',fontSize:20}}>Skills</a>
                                <a href="#project"  className="linkto"style={{color:'black',fontSize:20}}>Projects</a>
                                <a href="#contact"  className="linkto"style={{color:'black',fontSize:20}}>Contact</a>
                            </Navigation>
                            
                        </Header> 
                        }
                  
               
                            <Main/>
                </div>
        )
    
}
}
export default Routering

