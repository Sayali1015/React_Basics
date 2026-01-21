import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false)


  return (
    <div className='nav_bar'>
      <Link  to={'/'} className='left items'>WDM</Link>
      <div className='right'>
        <Link className= "items" to={'/meal'}>Meal</Link>
        <Link className= "items" to={'/courses'}>Courses</Link>
        <Link className= "items" to={'/dashboard'}>Dashboard</Link>
        <Link className= "items" to={'/profile'}>Profile</Link>
        <Link className= "items" to={'/about'}>About</Link>
        <Link className= "items" to={'/team'}>Team</Link>
        <Link className= "items" to={'/contact'}>Contact</Link>
        <Link className= "items" style={{fontWeight: 'bold', backgroundColor: 'grey', margin: '10px'}}>Logout</Link>
        <Link className= "items" style={{fontWeight: 'bold', backgroundColor: 'grey',  margin:"10px"}}>Login</Link>


      </div>
    </div>
  )
}

export default Navbar
