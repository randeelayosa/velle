import React, { Component } from 'react'
import NavConstant from '../Layout/NavConstant';

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
    console.log('state create list', this.state)
  }

  render(){
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

export default CreateWishList;
