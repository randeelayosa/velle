import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavConstant from '../Layout/NavConstant';
import { createList } from '../../actions/wishlistActions';
import { Redirect } from 'react-router-dom';

class CreateWishList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: ''
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
    this.props.createList(this.state);
  }

  render(){
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    return (
      <div>
        <NavConstant />
        <form onSubmit={this.handleSubmit} className='signin-container'>
          <div className='create-form'>
            <h1>Create Wish List</h1>
            <div className='input-field'>
              <input type='text' id='title' onChange={this.handleChange} />
            </div>
            <div className='input-field'>
              <textarea id='content' onChange={this.handleChange}></textarea>
            </div>
            <div className='input-field'>
              <button>Create</button>
            </div>
          </div>
        </form>

        <style jsx>{`
          form{
            width: 90%;
            height: 100vh;
            background-color: #63aac0;
            transform: skew(-25deg, 0);
            display: flex;
            justify-content: center;
            padding-top: 15%;
          }
          .create-form{
            transform: skew(25deg, 0);
          }
          h1{
            font-family: house-script, sans-serif;
            font-size: 6rem;
            color: #284e60;
          }
        `}</style>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createList: (wishlist) => dispatch(createList(wishlist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateWishList);
