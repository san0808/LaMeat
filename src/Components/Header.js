import React from 'react'
import './Header.css'
import profile from '../assets/logo512.png'
function Header() {
    return (
        <div className="header">
            <div className="nav">
                <a className="navOption">Home</a>
                <a className="navOption">Events</a>
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



