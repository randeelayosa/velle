import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions';

const SignedInLinks = (props) => {
  return(
    <div>
      <ul className='right'>
        <li><NavLink to ='/create'>New List</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to ='/dashboard' className='btn'>RL</NavLink></li>
      </ul>
      <style jsx>{`
        .navbarHolder{
          background-color: darkgray;
        }
        ul{
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        li{
          list-style-type: none;
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
