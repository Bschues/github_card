import React, { Component } from 'react';
import './App.css';

const githubLink = "https://api.github.com/users/Bschues"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {},
      active: false
    }
  }
  //fetch data from github api link, and set the state to active or 
  handleClick = () => {
    fetch(githubLink)
    .then((response) => response.json())
    .then((data) => {this.setState(prevState => ({user: data, active: !prevState.active}))
    })
  }
  render() {
    return (
      <div id="mainDiv">
      <button onClick={this.handleClick}>Toggle User</button>
      {this.state.active === true &&
        <div id="subDiv">
          <div><img src = {this.state.user.avatar_url} alt='Brian'></img></div>
          <div id="infoDiv">
          <div className='Info'>{this.state.user.name}</div>
          <div id="bio" className='Info'>{this.state.user.bio}</div>
          <div id="location" className='Info'>{this.state.user.location}</div>
          </div>
        </div>
      }
      </div>
    );
  }
}

export default App;
