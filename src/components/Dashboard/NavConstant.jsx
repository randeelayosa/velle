import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <div className='navbarHolder'>
      <div className='navbarContainer'>
        <Link to='/' className='brand-logo'>Navbar</Link>
      </div>
      <style jsx>{`
        .navbarHolder{
          background-color: darkgray;
        }
      `}</style>
    </div>
  )
}

export default Navbar;
