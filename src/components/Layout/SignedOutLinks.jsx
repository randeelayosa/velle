import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return(
    <div>
      <ul className='left'>
        <li><NavLink to ='/signup'>Sign Up</NavLink></li>
        <li><NavLink to ='/signin'>Login</NavLink></li>
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

export default SignedOutLinks;
