import React, { Component } from 'react';
import './App.css';

const githubLink = "https://api.github.com/users/Bschues"

class App extends Component {

  constructor(props)
  {
    super(props)
    this.state = {
      user: {},
      active: false
    }
  }
  //fetch data from github api link, 
  //and set the state to active or inactive 
  handleClick = () => 
  {
    fetch(githubLink)
    .then((response) => response.json())
    .then((data) => {this.setState(prevState => ({user: data, active: !prevState.active}))})
  }

  render() {
    const {user, active} = this.state
    return (
      <div id="mainDiv">
      <button onClick={this.handleClick}>Toggle User</button>
      {active === true &&
        <div id="subDiv">
          <div id="imgDiv">
            <img src = {user.avatar_url} alt='Brian'></img>
          </div>
          <div id="infoDiv">
          <div className='Info'>{user.name}</div>
          <div id="bio" className='Info'>{user.bio}</div>
          <div id="location" className='Info'>{user.location}</div>
          </div>
        </div>
      }
      </div>
    );
  }
}

export default App;
