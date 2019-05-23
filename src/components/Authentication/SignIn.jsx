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
      <div className='signin-container'>
        <div className='skew-div'></div>
        <NavConstant />
        <form onSubmit={this.handleSubmit} className='signin-container'>
          <h1>Sign In</h1>
          <div className='input-field'>
            <input placeholder='Email' type='email' id='email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <input placeholder='Password' type='password' id='password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button>Login</button>
            <div>
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>

        <style jsx>{`
          .signin-container{
            width: 100%;
            height: 98vh;
          }
          form{
            width: 50%;
            height: 40vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-right: 5%;
          }
          .skew-div{
            width: 90%;
            height: 100vh;
            background-color: #f99b45;
            transform: skew(-25deg, 0);
            position: absolute;
            z-index: -1;
          }
          h1{
            color: #af5e11;
            font-size: 6em;
            font-family: house-script, sans-serif;
            font-weight: 600;
            height: auto;
          }
        `}</style>
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
