import React from 'react'
import WishListDetails from './WishListDetails'

const WishListSummary = ({wishlist}) => {
  return(
    <div className='card'>
      <div className='card-content'>
        <h1 style={{textDecoration: 'none'}}>anonymous</h1>
        <h3>{wishlist.gender}</h3>
        <h3>{wishlist.age}</h3>
        <h3>{wishlist.size}</h3>
        <p>{wishlist.need}</p>
      </div>
      <style jsx>{`
        .card{
          width: 100%;
          height: 250px;
          padding: 5% 0;
          border: 3px solid #af5e11;
          border-radius: 50px;
          margin: 5%;
        }
        .card-content{
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 998;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        h1,h3,p{
          color: black;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

export default WishListSummary;
