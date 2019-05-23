import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import NavConstant from '../Layout/NavConstant';
import { Redirect } from 'react-router-dom';


const WishListDetails = (props) => {
  const { wishlist, auth } = props;
  if(!auth.uid) return <Redirect to='/signin' />

  if(wishlist) {
    return(
      <div className='wish-details-container'>
        <NavConstant />
        <div className='card'>
          <div className='card-content'>
            <span className='card-title'>{ wishlist.title }</span>
            <p>{ wishlist.content }</p>
          </div>
          <div className='card-action'>
            <div>Posted by { wishlist.age}</div>
            <div>December</div>
          </div>
        </div>
      </div>
    )
  } else {
    return(
      <div>
        <p>Loading wishlist...</p>
      </div>
    )
  }

}

const mapStateToProps = (state, myProps) => {
  // console.log('myProps', state);
  const id = myProps.match.params.id;
  const wishlists = state.firestore.data.wishlists;
  const wishlist = wishlists ? wishlists[id] : null;
  return {
    wishlist: wishlist,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'wishlists' }
  ])
)(WishListDetails);
