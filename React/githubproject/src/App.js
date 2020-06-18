import React, { Component } from 'react'
import axios from 'axios'
import User from './Components/User.jsx'
import Repositories from './Components/Repositories'
import './App.css';
export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      showAllData : {
      },
      showrRepositories : [],
      name:''

    }
  }
  Change=(event)=>{
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  }


    GetUserInfo=(event)=>{
    event.preventDefault();
    const name = this.state.name;
    if(name!==""){
    const clientId = 'b3267cd97bff7311c293'
    const clientSecret ='b6fa6c54e8eacc784d506b3525f4a0098a813c6a'
    axios
    .get(`http://api.github.com/users/${name}?client_id=${clientId}&client_secret=${clientSecret}&sort=created`)
    .then((response)=>{
      const req = response.data
      this.setState({showAllData: {
        name: req.name,
        login: req.login,
        location:req.location,
        email:req.email,
        urlsrc:req.avatar_url,
      }})
      // console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    this.GetRepositories(event)
  }
  else{
    alert("Please put an input")
  }
  }

  GetRepositories=(event)=>{
    event.preventDefault();
    const name = this.state.name;
    console.log(name)
    axios
    .get(`https://api.github.com/users/${name}/repos`)
    .then((response)=>{
      const req = response.data
      this.setState({showrRepositories: req})
      // console.log(req)
    })
    .catch((error)=>{
      console.log(error)
    })
      }
  render() {
    return (
      <div className="App"> 
        <input type="text" placeholder="Enter user name" name="name" 
         onChange={this.Change} value={this.state.value}></input> <br/><br/>
        <button onClick={this.GetUserInfo}>Get User Information</button>
        <User user={this.state.showAllData}/>
        <hr class="repo_hr"/>
        <h3 className="user_repo">User Repositories</h3>
        <Repositories repo={this.state.showrRepositories}/>
      </div>
    )
  }
}

export default App
