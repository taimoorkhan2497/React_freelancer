import React from 'react'
import './Login.css'
import Notif from '../assets/Notif Badge.png'
import Face from '../assets/Face (1).png'
// import Dropdown from './Dropdown'
export function Login() {
    return (
     
        <div className="Subnav">  
        <a target="_blank" href="/" className=" items">Browse  </a>
        <a target="_blank" href="/" className=" items">My Project </a>
        <a target="_blank" href="/" className=" items"> Report</a> 
        <a target="_blank" href="/" className=" items"> Message</a> 
        <a target="_blank" href="/" className=" items">Help </a> 
        <img src={Notif} alt="img"  className="items"/>
        <img src={Face} alt="/"  className="itemss"/>
        {/* <Dropdown /> */}
     </div>
    
    )
}
export default Login;
