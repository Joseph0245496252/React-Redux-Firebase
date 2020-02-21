import React, { Component } from 'react';

class SignUp extends Component {
    staate = {
        email: '',
        password: '',
        firstName: '',
        listName: ''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    } 
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
            <label htmlform="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <label htmlform="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <label htmlform="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <label htmlform="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
        </form>
      </div>
    );
  }
}


export default SignUp;
