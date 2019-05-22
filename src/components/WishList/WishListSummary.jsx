import React from 'react'
import WishListDetails from './WishListDetails'

const WishListSummary = ({wishlist}) => {
  return(
    <div className='card'>
      <div className='card-content'>
        <h1>anonymous</h1>
        <h3>{wishlist.gender}</h3>
        <h3>{wishlist.age}</h3>
        <h3>{wishlist.size}</h3>
        <p>{wishlist.need}</p>
      </div>
    </div>
  )
}

export default WishListSummary;
