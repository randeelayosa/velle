import React from 'react'
import { Link } from 'react-router-dom'

function Nav(){
  return (
    <div className='nav-container'>
      <div className='velle'>
        <Link style={{textDecoration: 'none'}} to="/"><h1>Velle</h1></Link>
      </div>
      <div className='links'>
        <Link style={{textDecoration: 'none', color: '#284e60'}} to="/about">About</Link> | <Link style={{textDecoration: 'none', color: '#284e60'}} to="/contact">Contact</Link> | <Link style={{textDecoration: 'none', color: '#284e60'}} to="/login">Login</Link>
      </div>
      <style jsx>{`
        .nav-container{
          width: 100vw;
          height: auto;
          position: fixed;
          bottom: 0;
          z-index: 999;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid red;
        }
        .velle{
          margin-left: 4%;
          border: 1px solid red;
        }
        h1{
          color: #284e60;
          font-size: 13em;
          font-family: house-script, sans-serif;
          font-weight: 600;
        }
        .links{
          border: 4px solid #284e60;
          border: 1px solid red;
          margin-right: 4%;
          height: 100%;
          width: auto;
        }
      `}</style>
    </div>
  )
}

export default Nav
