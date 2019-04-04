import React from 'react';

class FriendsForm extends React.Component{
    constructor(){
        super();
        this.state={
            friend: {
                name: '',
                age: '',
                email: '',
            }
        }
    }

    changeHandler = event =>{
        event.persist();
        let value = event.target.value;

        if(event.target.value === 'age'){
            value = parseInt(value, 10);
        }
        this.setState(prevState => ({
            friend: {
              ...prevState.friend,
              [event.target.name]: value
            }
          }));
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.props.addFriend(event,this.state.friend);
        this.setState({
            friend: {
              name: "",
              age: "",
              email: ""
            }
          });
    }
    render(){
        return(
            <div className='form'>
              <form onSubmit={this.handleSubmit}>
                <input
                    className='input-box'
                    type="text"
                    name="name"
                    onChange={this.changeHandler}
                    placeholder="name"
                    value={this.state.friend.name}
                />
                <input
                    className='input-box'
                    type="number"
                    name="age"
                    onChange={this.changeHandler}
                    placeholder="age"
                    value={this.state.friend.age}
                />
                <input
                    className='input-box'
                    type="string"
                    name="email"
                    onChange={this.changeHandler}
                    placeholder="email"
                    value={this.state.friend.email}
                />
                <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendsForm;


