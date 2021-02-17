import React from 'react'
import './ProfileView.css'
import Navbar from './components/Navbar';
import Login from './components/Login'
 function Profileview() {
    return (
        <>
           <div>
              <Navbar value="Post a Project"  />
              <Login/>
          </div> 
        </>
    )
}
export default Profileview;