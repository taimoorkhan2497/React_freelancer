import React from 'react'
import Navbar from './Navbar';
import './Jobs.css';
import DefaultMenu from './DefaultMenu';
import Sidebar from './Sidebar';
import SearchBar from "./SearchBar";
import Button from '../../../components/Button';
import AvatarImage from '../../../../src/AvatarImage.png';


function Jobs() {
    return (
        
        <div className='Jobs'>
          <div className='si-container'>
            <Navbar text="" value="Post a Project" /> 
          </div>
          <div className='default-menu '>
             <DefaultMenu />
          </div>
          <div className="main-wrapper">
            <div className="container">
            <div className="row main">
              <div className="left-side">
                <div className="side-menu">
                  <Sidebar/>
                </div>
                <div className="range-slider col-md-3"> </div>
              </div>
              <div className="right-side">
                <div className="row search-area">
                    <div className="search-bar">
                      <SearchBar/>
                    </div>
                    <div className="search-button">
                    <button class="btn btn--yellow btn--medium"><i class="fas fa-search"></i> Search</button>
                    </div>
                </div>
                <div className="inner-content">
                  <h1 className="inner-heading">My Feed</h1>
                  <div className="row job">
                    <div className="img-icon">
                    <div className='avatar-user' style={{backgroundImage: `url(${AvatarImage})`}}></div>
                    </div>
                    <div className="content-heading">
                      <h3>
                      Job title lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                      </h3>
                    </div>
                    <div className="dislike fa-icon">
                    <i class="far fa-thumbs-down"></i>
                    </div>
                    <div className="book-mark fa-icon">
                    <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                    </div>
                    
                    
                    
                  </div>
                </div>
                <div className="row">
                  
                </div>
                <div className="row paragraph">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries
                        <a href="#">more...</a>
                        </p>
                        <ul className="tags">
                        <li>
                          <a href="#">Design</a>
                          </li>
                          <li>
                          <a href="#">Frontend developer</a>
                          </li>
                          <li>
                          <a href="#">Java</a>
                          </li>
                          <li>
                          <a href="#">Html</a>
                          </li>
                        </ul>
                        
                    </div>
              </div>
            </div>
            
            
            
            
            
            </div>
          </div>
          
        </div>
    
    );
};

export default Jobs
