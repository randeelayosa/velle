import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/authActions';
import NavConstant from '../Layout/NavConstant';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
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
    this.props.signIn(this.state)
  }

  render(){
    const { authError, auth } = this. props;
    if(auth.uid) return <Redirect to='/dashboard' />

    return (
      <div>
        <NavConstant />
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
            <button>Login</button>
            <div>
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
