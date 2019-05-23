import React, { Component } from 'react'
import NavConstant from '../Layout/NavConstant';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../actions/authActions'

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
    this.props.signUp(this.state)
  }

  render(){
    const { auth, authError } = this.props;
    if(auth.uid) return <Redirect to='/dashboard' />

    return (
      <div>
        <NavConstant />
        <div className='skew-div'></div>
          <div className='signup-container'>
            <form onSubmit={this.handleSubmit} className='signin-container'>
              <h1>Sign Up</h1>
              <div className='input-field'>
                <input placeholder='Email' type='email' id='email' onChange={this.handleChange} />
              </div>
              <div className='input-field'>
                <input placeholder='Password' type='password' id='password' onChange={this.handleChange} />
              </div>
              <div className='input-field'>
                <input placeholder='First Name' type='text' id='firstName' onChange={this.handleChange} />
              </div>
              <div className='input-field'>
                <input placeholder='Last Name' type='text' id='lastName' onChange={this.handleChange} />
              </div>
              <div className='input-field'>
                <button>Sign Up</button>
                <div>
                  { authError ? <p>{ authError }</p> : null }
                </div>
              </div>
            </form>
          </div>

        <style jsx>{`
          .signup-container{
            width: 100%;
            height: 98vh;
            display: flex;
            justify-content: center;
          }
          form{
            width: 50%;
            height: 40vh;
            margin-topt: 5%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .skew-div{
            width: 90%;
            height: 100vh;
            background-color: #d95980;
            transform: skew(-25deg, 0);
            position: absolute;
            z-index: -1;
          }
          h1{
            color: #7c2741;
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
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
