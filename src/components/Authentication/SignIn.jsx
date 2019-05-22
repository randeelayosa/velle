import React, { Component } from 'react'

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('sign in state', this.state)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='signin-container'>
          <h2>Sign In</h2>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    )
  }

}

export default SignIn;
