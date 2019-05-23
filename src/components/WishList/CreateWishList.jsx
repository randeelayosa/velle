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
          <h2>Create Wish List</h2>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Wish Content</label>
            <textarea id='content'  onChange={this.handleChange}></textarea>
          </div>
          <div className='input-field'>
            <button>Create</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createList: (wishlist) => dispatch(createList(wishlist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateWishList);
