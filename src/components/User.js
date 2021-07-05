import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div style={{border:'1px solid red'}}>
                <h2>
               Name-:  {this.props.user.username}
                </h2>
               <h4>This is User -:   {this.props.user.name}</h4> 

<button onClick={ ()=> this.props.handleAddToCart (this.props.user)}> Add me</button>
            </div>
        );
    }
}

export default User;