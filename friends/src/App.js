import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

//CRUD
// Create Read Update delete
// Post Get Put Del

class App extends Component {
  constructor(){
    super();
    this.state ={
      friendList: []
    }
  }
  
componentDidMount(){
  axios.get('http://localhost:5000/friends')
  //when the request has success
  .then(res=>this.setState({friendList: res.data}))
  //when the request has failed
  .catch(err=>err);
}

updateFriendList = (id) =>{
  axios
  .put(`http://localhost:5000/friends/${id}`)
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)})
}


updateFriend = ()=>{}

deleteFriend = ()=>{}

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
