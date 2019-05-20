import React from 'react'
import { Link } from 'react-router-dom'

function Nav(){
  return (
    <div className='nav-container'>
      <div className='velle'>
        <Link className='velleh1' to="/"><h1>Velle</h1></Link>
      </div>
      <div className='links'>
        <Link to="/newticket">About</Link> | <Link to="/login">Login</Link>
      </div>
      <style jsx>{`
        .nav-container{
          width: 100vw;
          position: fixed;
          bottom: 0;
          z-index: 999;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .velle{
          margin-left: 4%;
        }
        h1{
          color: #284e60;
          font-size: 13em;
          font-family: house-script, sans-serif;
          font-weight: 600;
        }
        .links{
          border-top: 4px solid #284e60;
          padding-top: 2%;
          margin-right: 4%;
        }
      `}</style>
    </div>
  )
}

export default Nav
