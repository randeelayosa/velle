import React, { Component } from 'react'
import NavConstant from '../Layout/NavConstant';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('sign Up state', this.state)
  }

  render(){
    const { auth } = this. props;
    if(auth.uid) return <Redirect to='/dashboard' />

    return (
      <div>
        <NavConstant />
        <form onSubmit={this.handleSubmit} className='signin-container'>
          <h2>Sign Up</h2>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignUp);
