import React from 'react'
import WishListSummary from './WishListSummary';
import { Link } from 'react-router-dom';

const WishList = ({wishlist}) => {
  return (
    <div className='wish-list'>
      { wishlist && wishlist.map(wishlist => {
        return (
          <Link to={'/wishlist/' + wishlist.id} key={wishlist.id}>
            <WishListSummary wishlist={wishlist} />
          </Link>
        )
      })}

      <style jsx>{`
        .wish-list{
          width: 500px;
        }
      `}</style>
    </div>
  )
}

export default WishList;
