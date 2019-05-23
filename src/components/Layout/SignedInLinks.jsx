import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions';

const SignedInLinks = (props) => {
  return(
    <div>
      <div className='right'>
        <div><NavLink to ='/create' style={{textDecoration: 'none', color: 'black'}}>New List</NavLink></div>
        <div><a onClick={props.signOut}>Log Out</a></div>
        <div><NavLink to ='/dashboard' className='btn' style={{textDecoration: 'none', color: 'black'}}>Dashboard</NavLink></div>
      </div>
      <style jsx>{`
        .right{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
