import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';



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
updateFriend = ()=>{

}
deleteFriend = ()=>{
  
}
  render() {
    return (
      <div >
        <FriendsForm />
       <FriendsList friendsArray={this.state.friendList} />
      </div>
    );
  }
}

export default App;
