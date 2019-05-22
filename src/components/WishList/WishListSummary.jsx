import React from 'react'
import WishListDetails from './WishListDetails'
import NavConstant from '../Layout/NavConstant';

const WishListSummary = () => {
  return(
    <div className='card'>
      <NavConstant />
      <div className='card-content'>
        <h1>Wish List Title</h1>
        <h3>Posted by me</h3>
        <p>Sept 3</p>
      </div>
    </div>
  )
}

export default WishListSummary;
