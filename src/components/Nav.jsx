import React from 'react'
import { Link } from 'react-router-dom'

function Nav(){
  return (

    <div className='nav-container'>
      <h1>Velle</h1>
      <div className='links'>
        <Link to="/">Home</Link> | <Link to="/newticket">About</Link> | <Link to="/login">Login</Link>
      </div>
      <style jsx>{`
        .nav-container{
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default Nav
