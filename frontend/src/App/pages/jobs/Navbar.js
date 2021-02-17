import React from 'react'

import './Navbar.css';
import {Link} from 'react-router-dom';
import tuwaiqlogo from '../../../../src/tuwaiqlogo.svg'
import Button from '../../../components/Button';


function Navbar(props) {
    return (
        <>
        
        <nav className="navbar">
            <div className="navbar-flex-container">
                <Link to='/' className="navbar-logo">
                <img src={tuwaiqlogo} alt="Logo"></img>
                </Link>
               <div className="user-logo">
                   <a href="">{props.text}</a>
               <Button buttonStyle='btn--yellow' value={props.value}/>
                </div>
            </div>
            
        </nav>
        
        </>
        
            
        
    )
}

export default Navbar
