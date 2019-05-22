import React from 'react'
import WishListSummary from './WishListSummary';

const WishList = ({wishlist}) => {
  return (
    <div className='wish-list'>
      { wishlist && wishlist.map(wishlist => {
        return (
          <WishListSummary wishlist={wishlist} key={wishlist.id} />
        )
      })}
    </div>
  )
}

export default WishList;
