import React from 'react'
import './MenueBar.css'
import { MenuItems } from '../../App/pages/jobs/MenuItems'
import Face  from '../../assets/Face (1).png'
// import AvatarImage from '../../../../src/AvatarImage.png';

function Menuebar() {
  return (

    <nav className="navbar navbar-expand-md">
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
          </button>
          <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul className='default-menu nav navbar-nav'>
                {MenuItems.map((item, index)=>{
                  return(
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                    
                  )
                })}
                
            </ul>
            <ul class="nav navbar-nav ml-auto">
              <li>
              <div>
                <a href="#" class="notificationss">
                  <span><i class="fas fa-bell"></i>15</span>
                  {/* <span class="badge">15</span> */}
                </a>
              </div>
              </li>
              <li>
              <div>
                  <img src={Face} alt="FAc" className="avatar-useR" />  
              </div>
              </li>
              <li class="nav-item dropdown"> 
              <a href="#" class="nav-link dropdown-toggle-new" data-toggle="dropdown">Pixelz Warrios</a>
                  <div class="dropdown-menu dropdown-menu-right dropdown">
                      <a href="#" class="dropdown-item"data-toggle="dropdown2">Status</a>
                        <div class="dropdown-menu sub-menu dropdown2">
                          <a href="#" class="dropdown-item">View Profile</a>
                          <a href="#" class="dropdown-item">Account Settings</a>

                        </div>
                      <a href="#" class="dropdown-item">View Profile</a>
                      <a href="#" class="dropdown-item">Account Settings</a>
                      {/* <div class="dropdown-divider"></div> */}
                      <a href="#"class="dropdown-item">Logout</a>
                  </div>
              </li>
              <li>
              </li>
          </ul>
          </div>
          
    </nav>
   
  )
}

export default Menuebar