import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li><button>Home</button></li>
        <li><button>About Us</button></li>
        <li><button className='btn'>Contact</button></li>
      </ul>
    </nav>
  )
}

export default navbar
