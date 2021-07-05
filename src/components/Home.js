import React, { Component } from 'react';
import User from './User';

class Home extends Component {
constructor(props, context) {
    super(props, context);
    this.state = {
        users:[],
        cart:[]
    };
  this.handleAddToCart = this.handleAddToCart.bind(this);
}
handleAddToCart( user ){
const newCart = [...this.state.cart,user];
this.setState({cart:newCart});
    console.log(this.state)
}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
    .then(data => this.setState({users:data}))
    }
    

    render() {
        return (
            <div>
                <h2>Users Available: { this.state.users.length}</h2>
          <h3> User Add in Cart : {this.state.cart.length}</h3>
          {
              this.state.users.map(user => <User user={user} handleAddToCart={this.handleAddToCart}></User> )
          }
        
            </div>
        );
    }
}

export default Home;