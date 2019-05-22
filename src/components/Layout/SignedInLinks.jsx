import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return(
    <div>
      <ul className='right'>
        <li><NavLink to ='/create'>New List</NavLink></li>
        <li><NavLink to ='/'>Log Out</NavLink></li>
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

export default SignedInLinks;
