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
        { links }
      </div>

      <style jsx>{`
        .navbarHolder{
          background-color: darkgray;
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
