import React from 'react';
import NavConstant from '../Layout/NavConstant';

// const id = props.match.params.id;

const WishListDetails = (props) => {
  console.log('WishListDetails', props)
  console.log('match', props.match)
  return(
    <div className='wish-details-container'>
      <NavConstant />
      <div className='card'>
        <div className='card-content'>
          <span className='card-title'>Wish</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='card-action'>
          <div>Posted by also me</div>
          <div>December</div>
        </div>
      </div>
    </div>
  )
}

export default WishListDetails;
