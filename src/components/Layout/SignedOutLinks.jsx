import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return(
    <div>
      <div className='left'>
        <div><NavLink to ='/signup'>Sign Up</NavLink></div>
        <div><NavLink to ='/signin'>Login</NavLink></div>
      </div>
      <style jsx>{`
        .left{
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
      `}</style>
    </div>
  )
}

export default SignedOutLinks;
