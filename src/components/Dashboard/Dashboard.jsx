import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import NavConstant from '../Layout/NavConstant';
import Notifications from './Notifications';
import WishList from '../WishList/WishList';
import { Redirect } from 'react-router-dom';


class Dashboard extends Component {
  render(){
    // console.log('dashboard', this.props)
    const { wishlist, auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />
    return(
      <div className='dashboard-container'>
        <NavConstant />
        <div className='dashboard-content'>
          <div className='col-list'>
            <WishList wishlist={wishlist} />
          </div>
          <div className='notif-list'>
            <Notifications />
          </div>
        </div>
        <style jsx>{`
          .navbarHolder{
            background-color: darkgray;
          }
          .dashboard-content{
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
            width: 70%;
            height: 50vh;
            border: 1px solid red;
          }
          .col-list{
            border: 1px solid blue;
            grid-row: 1;
            grid-column: 1/2;
          }
          .notif-list{
            border: 1px solid green;
            grid-row: 1;
            grid-column: 2/3;
          }
          li{
            list-style-type: none;
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
