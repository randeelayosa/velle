import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

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

export default NavConstant;
