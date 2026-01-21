import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav_bar'>
      <Link  to={'/'} className='left items'>WDM</Link>
      <div className='right'>
        <Link className= "items" to={'/meal'}>Meal</Link>
        <Link className= "items" to={'/courses'}>Courses</Link>
        <Link className= "items" to={'/about'}>About</Link>
        <Link className= "items" to={'/team'}>Team</Link>
        <Link className= "items" to={'/contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
