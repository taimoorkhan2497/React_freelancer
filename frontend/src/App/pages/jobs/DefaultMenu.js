import React from 'react'
import { MenuItems,AccountSettingMenuItems } from "./MenuItems";
import './defaultmenu.css';
import AvatarImage1 from '../../../../src/AvatarImage1.png';





function DefaultMenu(props) {
    return (
      
      <nav className="navbar navbar-expand-md">
        <div className="row default-menu">
          <div className="container">
          <div className="col-md-8 pl-0">
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
            <div id="navbarCollapse" class="collapse navbar-collapse">
              <ul className='default-menu-left nav navbar-nav'>
                  
              
                  { props.value===2 ?  AccountSettingMenuItems.map((item, index)=>{
                    return(
                      <li key={index}>
                          <a className={item.cName} href={item.url}>
                              {item.title}
                          </a>
                      </li>
                      
                    )
                  }) : MenuItems.map((item, index)=>{
                    return(
                      <li key={index}>
                          <a className={item.cName} href={item.url}>
                              {item.title}
                          </a>
                      </li>
                      
                    )
                  })}

           
                  
              </ul>
        </div>
        </div>
        <div className="col-md-4 p-0">
        <ul class="nav navbar-nav ml-auto">
                <li>
                <div>
                  <a href="#" className="notification">
                    <span><i className="fas fa-bell"></i>15</span>
                    {/* <span class="badge">15</span> */}
                  </a>
                </div>
                </li>
                <li>
                <div className='avatar-user1' style={{backgroundImage: `url(${AvatarImage1})`}}>
                      
                </div>
                </li>
                <li class="nav-item dropdown"> 
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pixelz Warrios</a>
                    <div class="dropdown-menu dropdown-menu-right dropdown">
                        <a href="#" class="dropdown-item"data-toggle="dropdown">Status
                          <div class="dropdown-menu sub-menu dropdown">
                            <select>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                            </select>
                            <a href="#" class="dropdown-item">View Profile</a>
                            <a href="#" class="dropdown-item">Account Settings</a>
                          </div>
                        </a>
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
          </div>     
        </div>
            
      </nav>
      
     
    )
}






export default DefaultMenu