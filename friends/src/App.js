import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList'


const server = 'http://localhost:5000';

class App extends Component {
  constructor(){
    super();
    this.state ={
      friendList: []
    }
  }
  
componentDidMount(){
  
}
  render() {
    return (
      <div >
       <friendList friendsArray={this.state.friendList} />
      </div>
    );
  }
}

export default App;
