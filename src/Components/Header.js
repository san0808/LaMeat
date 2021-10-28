import React from 'react'
import './Header.css'
import profile from '../assets/logo512.png'
import {BrowserRouter as Router, NavLink,Switch} from 'react-router-dom'
function Header() {
    return (
        <div className="header">
        
            <div className="nav">
                
                <NavLink to='/Home' activeClassName="active" className="navOption">Home</NavLink>
                <NavLink to='/Events' activeClassName="active" className="navOption">Events</NavLink>
                
            </div>
       
            <div className="logo">
                <a className="logoName">LaMeet</a>
            </div>
            <div className="profile">
                 <img className='profileImage' src={profile}/>
            </div>
        </div>
       
    )
    
}

export default Header



