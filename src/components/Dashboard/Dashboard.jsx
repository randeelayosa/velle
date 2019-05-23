import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import NavConstant from '../Layout/NavConstant';
import Notifications from './Notifications';
import WishList from '../WishList/WishList';
import { Redirect } from 'react-router-dom';


// <Notifications />

// .notif-list{
//   border: 1px solid green;
//   grid-row: 1;
//   grid-column: 2/3;
// }


class Dashboard extends Component {
  render(){
    // console.log('dashboard', this.props)
    const { wishlist, auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />
    return(
      <div className='dashboard-container'>
        <div className='skew-div'></div>
        <NavConstant />
        <div className='dashboard-content'>
          <div className='listed-wishes'>
            <WishList wishlist={wishlist} />
          </div>
          <div className='notif-list'>
          </div>
          <h1>Community Wish List</h1>
        </div>
        <style jsx>{`
          .dashboard-container{
            width: 100%;
            height: 98vh;
          }
          .dashboard-content{
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
            width: 100%;
            height: 98vh;
          }
          .listed-wishes{
            grid-row: 1;
            grid-column: 1/2;
            display: flex;
            justify-content: center;
          }
          h1{
            font-family: house-script, sans-serif;
            font-size: 6rem;
            color: #af5e11;
            position: absolute;
            bottom: 2%;
            left: 2%;
          }
          li{
            list-style-type: none;
          }
          .skew-div{
            width: 90%;
            height: 100vh;
            background-color: #f99b45;
            transform: skew(-25deg, 0);
            position: absolute;
            z-index: -1;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.firestore.ordered.wishlists,
    auth: state.firebase.auth
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'wishlists' }
  ])
)(Dashboard);
