import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const NavConstant = (props) => {
  const { auth } = props;
  // console.log('auth nav', auth)
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return(
    <div className='navbarHolder'>
      <div className='navbarContainer'>
        <Link to='/' className='brand-logo'>Velle</Link>
        <Link to='/create'>Add Items</Link>
        <div className='nav-links'>{ links }</div>
      </div>

      <style jsx>{`
        .navbarHolder{
          background-color: white;
          border-bottom: 3px solid #284e60;
          height: 100px;
        }
        .navbarContainer{
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 100%;
          width: 100%;
        }
        .nav-links{
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(NavConstant);
