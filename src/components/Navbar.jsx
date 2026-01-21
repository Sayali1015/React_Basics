import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate()
    const login = ()=>{
        setIsLogin(true)
        navigate('/dashboard')
    }

    const logout = ()=>{
        setIsLogin(false);
    }


  return (
    <div className='nav_bar'>
      <Link  to={'/'} className='left items'>WDM</Link>
      <div className='right'>

    {isLogin && (
        <>
        <Link className= "items" to={'/meal'}>Meal</Link>
        <Link className= "items" to={'/courses'}>Courses</Link>
        <Link className= "items" to={'/dashboard'}>Dashboard</Link>
        <Link className= "items" to={'/profile'}>Profile</Link>
        <Link className= "items" style={{fontWeight: 'bold', backgroundColor: 'grey', margin: '10px'}} onClick={logout}>Logout</Link>
       </>)}

       {!isLogin && (<>
      

        <Link className= "items" to={'/about'}>About</Link>
        <Link className= "items" to={'/team'}>Team</Link>
        <Link className= "items" to={'/contact'}>Contact</Link>
        {/* <Link className= "items" style={{fontWeight: 'bold', backgroundColor: 'grey', margin: '10px'}}>Logout</Link> */}
        <button className= "items" style={{fontWeight: 'bold', backgroundColor: 'grey',  margin:"10px"}} onClick={login} >Login</button>
        </> )}

      </div>
    </div>
  )
}

export default Navbar
