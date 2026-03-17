import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>

      <div className='nav-logo'>
        <img src={logo} alt="" id='logo'/>
      </div>

      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}>
          <Link style={{textDecoration:'none'}} to='/'>Shop</Link>
          {menu==="shop" ? <hr/> : null}
        </li>

        <li onClick={()=>{setMenu("homedecor")}}>
          <Link style={{textDecoration:'none'}} to='/homedecor'>Home Decor</Link>
          {menu==="homedecor" ? <hr/> : null}
        </li>

        <li onClick={()=>{setMenu("art")}}>
          <Link style={{textDecoration:'none'}} to='/art'>Art</Link>
          {menu==="art" ? <hr/> : null}
        </li>

        <li onClick={()=>{setMenu("fashion")}}>
          <Link style={{textDecoration:'none'}} to='/fashion'>Fashion</Link>
          {menu==="fashion" ? <hr/> : null}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
        <img src={cart_icon} alt="" />
        </Link>
        <div className='nav-cart-count'>2</div>
      </div>

    </div>
  )
}