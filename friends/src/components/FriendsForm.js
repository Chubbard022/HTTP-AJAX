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
                    //value={this.state.item.name}
                />
                <input
                    className='input-box'
                    type="number"
                    name="age"
                    onChange={this.changeHandler}
                    placeholder="age"
                    //value={this.state.item.price}
                />
                <input
                    className='input-box'
                    type="string"
                    name="email"
                    onChange={this.changeHandler}
                    placeholder="email"
                    //value={this.state.item.imageUrl}
                />
                <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendsForm;


