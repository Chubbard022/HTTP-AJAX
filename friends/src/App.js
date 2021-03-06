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

addFriend = (event,friend) =>{
  event.preventDefault();
  axios
  .post(`http://localhost:5000/friends/`,friend)
  .then((res)=>{ this.setState({friendList: res.data}) })
  .catch((err)=>{console.log(err)})
}


  render() {
    return (
      <div >
        <FriendsForm addFriend={this.addFriend}/>
       <FriendsList friendsArray={this.state.friendList} />
      </div>
    );
  }
}
export default App;
