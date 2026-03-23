import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/nav-logo.png'
import navProfile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo-box'>
            <img src={nav_logo} alt="" className="nav-logo" />
            Admin Panel
        </div>
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar