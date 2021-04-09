import React from 'react'

import './Navbar.css';
import {Link} from 'react-router-dom';
import tuwaiqlogo from '../../assets/Logo.png'

import Button from '../Button'

export default  function Navbar(props) {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-flex-container">
                <Link to='/' className="navbar-logo">
                <img src={tuwaiqlogo} alt="Logo"></img>
                </Link>
               <div className="user-LOGO">
                   <a href="">{props.text}</a>
               <Button buttonStyle='btn--project' value={props.value}/>
               
                </div>
            </div>
        </nav>
        </>
            
        
    )
}

export function RegNavbar(props) {
    return (
        <>
        <nav className="navbar2">
            <div className="navbar-flex-container">
                <Link to='/' className="navbar-logo">
                <img src={tuwaiqlogo} alt="Logo"></img>
                </Link>
               
            </div>
        </nav>
        </>
            
        
    )
}


