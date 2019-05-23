import React from 'react'
import WishListSummary from './WishListSummary';
import { Link } from 'react-router-dom';

const WishList = ({wishlist}) => {
  return (
    <div className='wish-list'>
      { wishlist && wishlist.map(wishlist => {
        return (
          <Link to={'/wishlist/' + wishlist.id}>
            <WishListSummary wishlist={wishlist} key={wishlist.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default WishList;
