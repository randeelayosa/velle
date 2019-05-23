import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const NavConstant = () => {
  return(
    <div className='navbarHolder'>
      <div className='navbarContainer'>
        <Link to='/' className='brand-logo'>Velle</Link>
        <SignedInLinks/>
        <SignedOutLinks/>
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
  console.log('mapStateToProps nav', state);
  return {

  }
}

export default connect(mapStateToProps)(NavConstant);
