import React from 'react'
import { Link } from 'react-router-dom'

function Nav(){
  return (
    <div>
      <div className='nav-container'>
        <div className='links'>
          <Link to="/">Home</Link> | <Link to="/newticket">About</Link> | <Link to="/login">Login</Link>
        </div>
        <style jsx>{`
          .nav-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 8vh;
            position: fixed;
          }
        `}</style>
      </div>
      <div className='velle'>
        <h1>Velle</h1>
        <style jsx>{`
          .velle{
            position: absolute;
            bottom: 0;
            left: 3%;
            z-index: 999;
          }
          h1{
            color: #284e60;
            font-size: 12rem;
          }
        `}</style>
      </div>
    </div>
  )
}

export default Nav
