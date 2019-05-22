import React from 'react'
import { Link } from 'react-router-dom'

function Nav(){
  return (
    <div className='nav-container'>
      <div className='velle'>
        <Link style={{textDecoration: 'none'}} to="/"><h1>Velle</h1></Link>
      </div>
      <div className='links'>
        <div>
          <Link style={{textDecoration: 'none', color: '#284e60'}} to="/about">About</Link><br/>
          <Link style={{textDecoration: 'none', color: '#284e60'}} to="/contact">Contact</Link><br/>
          <Link style={{textDecoration: 'none', color: '#284e60'}} to="/login">Login</Link>
        </div>
      </div>
      <style jsx>{`
        .nav-container{
          width: 100vw;
          height: 20%;
          position: fixed;
          bottom: 0;
          z-index: 998;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid red;
        }
        .velle{
          margin-left: 4%;
          border: 1px solid red;
          width: auto;
          height: 100%;
        }
        h1{
          color: #284e60;
          font-size: 13em;
          font-family: house-script, sans-serif;
          font-weight: 600;
          height: auto;
        }
        .links{
          border-right: 9px solid #284e60;
          margin-right: 4%;
          padding-right: 1%;
          width: 10%;
          height: 80%;
          display: flex;
          align-items: center;
          font-size: 2rem;
          line-height: 3rem;
          text-align: right;
        }
      `}</style>
    </div>
  )
}

export default Nav;
