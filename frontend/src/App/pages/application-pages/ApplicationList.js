import React from 'react'
import Navbar from '../jobs/Navbar';
import Header from '../../../../src/components/header/Header';
import Sidebar from '../jobs/Sidebar';
import SearchBar from "../jobs/SearchBar";
import AvatarImage from '../../../../src/AvatarImage.png';
import Button from '@material-ui/core/Button';
import '../../../assets/css/custom.css'



function ApplicationList() {
    return (
        
        <div className='Jobs application-list'>
          {/* top header */}
          <div className="top-area">
            <Header />
          </div>
          {/* top header */}
          <div className="main-wrapper pt-5">
            <div className="container">
              <div className="row main">
                <div className="col-md-3">
                  <div className="left-side">
                    <div className="side-menu">
                      <Sidebar/>
                    </div>
                    <div className="range-slider"> </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="right-side">
                      {/* Search Area */}
                      <div className="row job-top-area search-area p-0">
                        <div className="col-md-5 p-0">
                          <div className="search-bar">
                            <SearchBar/>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="search-button">
                            <button class="btn btn--yellow btn--medium"><i class="fas fa-search"></i> Search</button>
                          </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                          <div className="filter">
                            <input type="text" class="form-control filter" placeholder="Sort by: Highest Price"></input>
                          </div>
                        </div>
                      </div>
                      {/* Search Area */}

                      {/* Heading */}
                      <div className="inner-content">
                        <h1 className="inner-heading p-3">Submitted Application</h1>
                      </div>
                      {/* Heading */}

                      {/* apply heading */}
                      <div className="applied">
                        <p className="m-0 p-2 pl-4">Your Applied for this job 5 min ago</p>
                      </div>
                      {/* apply heading */}

                      {/*--------- row1 ---------------*/}
                      {/* <div className="row job"> */}
                      <div className="row-inner pl-3 pr-3 pt-3 pb-4">
                        {/* title area */}
                        
                        <div className="row">
                          
                          <div className="col-md-1">
                            <div className="img-icon">
                              <div className='avatar-user-job' style={{backgroundImage: `url(${AvatarImage})`}}></div> 
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="content-heading pt-1">
                              <h3>Job title lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h3>
                            </div>
                          </div>
                          <div className="offset-md-1 col-md-3">
                            <ul className="content-icons float-right">
                              <li>
                                <div className="dislike fa-icon">
                                  <i className="far fa-thumbs-down mr-4"></i>
                                </div>
                              </li>
                              <li>
                                <div className="book-mark fa-icon">
                                  <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>   
                        {/* title area */}
                        {/* Tags + Price */}
                        <div className="row">
                          <div className="col-md-1"></div>
                          <div className="col-md-7">
                            <ul className="duration">
                                <li className="pr-3">
                                  <p><i class="fas fa-lock pr-2"></i>Monthly</p>
                                </li>
                                <li className="pr-3">
                                  <p><i class="fa fa-calendar-alt pr-2"></i>2 months</p>
                                </li>
                                <li className="pr-3">
                                  <p><i class="fas fa-clock pr-2"></i>20 min ago</p>
                                </li>
                                
                              </ul>
                          </div>
                          <div className="offset-md-1 col-md-3">
                            <div className="price-colored float-right">
                              <p>Per Hour/<span> 300 SAR</span></p>
                            </div>
                          </div>

                        </div>
                        {/* Tags + Price */}
                        {/* paragraph */}
                        <div className="row paragraph">
                          <div className="col-md-12">
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries
                            <a href="#">more...</a>
                            </p>
                          </div> 
                        </div>
                        {/* paragraph */}  
                        {/* Search Tags */}  
                        <div className=" search-tags row pt-3">
                          <div className="col-md-8">
                            <ul className="tags">
                              <li className="pr-3">
                                <a className="pl-2 pr-2 pt-1 pb-1" href="#">Design</a>
                              </li>
                              <li className="pr-3">
                                <a className="pl-2 pr-2 pt-1 pb-1" href="#">Frontend developer</a>
                              </li>
                              <li className="pr-3">
                                <a className="pl-2 pr-2 pt-1 pb-1" href="#">Java</a>
                              </li>
                              <li>
                                <a className="pl-2 pr-2 pt-1 pb-1" href="#">Html</a>
                              </li>   
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <div className="job-payment-btn float-right mb-3">
                            <button class="btn btn--yellow btn--medium job-button"><i className="fas fa-check mr-2" aria-hidden="true"></i>Payment verification</button>
                              
                            </div>
                          </div>  
                        </div>
                        {/* Search Tags */}   
                      </div>
                      {/*--------- row1 ---------------*/}

                      {/* apply heading */}
                      <div className="applied">
                        <p className="m-0 p-2">Your Applied for this job 5 min ago</p>
                      </div>
                      {/* apply heading */}

                      {/*--------- row2 ---------------*/}
                      {/* <div className="row job"> */}
                      <div className="job-inner pl-3 pr-3 pt-3 pb-4 row-inner">
                        {/* title area */}
                        <div className="row">
                          <div className="col-md-1">
                            <div className="img-icon">
                              <div className='avatar-user-job' style={{backgroundImage: `url(${AvatarImage})`}}></div> 
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="content-heading">
                              <h3>Job title lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h3>
                            </div>
                          </div>
                          <div className="offset-md-1 col-md-3">
                            <ul className="content-icons float-right">
                              <li>
                                <div className="dislike fa-icon">
                                  <i className="far fa-thumbs-down mr-4"></i>
                                </div>
                              </li>
                              <li className="">
                                <div className="book-mark fa-icon">
                                  <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>   
                        {/* title area */}
                        {/* Tags + Price */}
                        <div className="row">
                          <div className="col-md-1"></div>
                          <div className="col-md-7">
                            <ul className="duration">
                                <li className="pr-3">
                                  <p><i class="fas fa-lock pr-2"></i>Monthly</p>
                                </li>
                                <li className="pr-3">
                                  <p><i class="fa fa-calendar-alt pr-2"></i>2 months</p>
                                </li>
                                <li className="pr-3">
                                  <p><i class="fas fa-clock pr-2"></i>20 min ago</p>
                                </li>
                                
                              </ul>
                          </div>
                          <div className="offset-md-1 col-md-3">
                            <div className="price-colored float-right">
                              <p>Per Hour/<span> 300 SAR</span></p>
                            </div>
                          </div>

                        </div>
                        {/* Tags + Price */}
                        {/* paragraph */}
                        <div className="row paragraph">
                          <div className="col-md-12">
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries
                            <a href="#">more...</a>
                            </p>
                          </div> 
                        </div>
                        {/* paragraph */}  
                        {/* Search Tags */}  
                        <div className=" search-tags row pt-3">
                          <div className="col-md-8">
                            <ul className="tags">
                              <li className="pr-3">
                                <a className="pl-2 pr-2 pt-1 pb-1" href="#">Design</a>
                              </li>
                              <li className="pr-3">
                                <a className="pl-2 pr-2 pt-1 pb-1" href="#">Frontend developer</a>
                              </li>
                              <li className="pr-3">
                                <a className="pl-2 pr-2 pt-1 pb-1" href="#">Java</a>
                              </li>
                              <li>
                                <a className="pl-2 pr-2 pt-1 pb-1" href="#">Html</a>
                              </li>   
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <div className="job-payment-btn float-right mb-3">
                            <button class="btn btn--yellow btn--medium job-button"><i className="fas fa-check mr-2" aria-hidden="true"></i>Payment verification</button>
                              
                            </div>
                          </div>  
                        </div>
                        {/* Search Tags */}   
                      </div>
                      {/*--------- row2 ---------------*/}
                      
                      {/* apply heading */}
                      <div className="applied">
                        <p className="m-0 p-2">Your Applied for this job 5 min ago</p>
                      </div>
                      {/* apply heading */}
                      
                      {/*--------- row3 ---------------*/}
                      {/* <div className="row job"> */}
                      <div className="job-inner pl-3 pr-3 pt-3 pb-4 row-inner">
                        {/* title area */}
                        <div className="row">
                          <div className="col-md-1">
                            <div className="img-icon">
                              <div className='avatar-user-job' style={{backgroundImage: `url(${AvatarImage})`}}></div> 
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="content-heading">
                              <h3>Job title lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h3>
                            </div>
                          </div>
                          <div className="offset-md-1 col-md-3">
                            <ul className="content-icons float-right">
                              <li>
                                <div className="dislike fa-icon">
                                  <i className="far fa-thumbs-down mr-4"></i>
                                </div>
                              </li>
                              <li>
                                <div className="book-mark fa-icon">
                                  <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>   
                        {/* title area */}
                        {/* Tags + Price */}
                        <div className="row">
                          <div className="col-md-1"></div>
                          <div className="col-md-7">
                            <ul className="duration">
                                <li className="pr-3">
                                  <p><i class="fas fa-lock pr-2"></i>Monthly</p>
                                </li>
                                <li className="pr-3">
                                  <p><i class="fa fa-calendar-alt pr-2"></i>2 months</p>
                                </li>
                                <li className="pr-3">
                                  <p><i class="fas fa-clock pr-2"></i>20 min ago</p>
                                </li>
                                
                              </ul>
                          </div>
                          <div className="offset-md-1 col-md-3">
                            <div className="price-colored float-right">
                              <p>Per Hour/<span> 300 SAR</span></p>
                            </div>
                          </div>

                        </div>
                        {/* Tags + Price */}
                        {/* paragraph */}
                        <div className="row paragraph">
                          <div className="col-md-12">
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries
                            <a href="#">more...</a>
                            </p>
                          </div> 
                        </div>
                        {/* paragraph */}  
                        {/* Search Tags */}  
                        <div className=" search-tags row pt-3">
                          <div className="col-md-8">
                            <ul className="tags">
                              <li className="pr-3">
                                <a className="pl-2 pr-2 pt-1 pb-1" href="#">Design</a>
                              </li>
                              <li className="pr-3">
                                <a className="pl-2 pr-2 pt-1 pb-1" href="#">Frontend developer</a>
                              </li>
                              <li className="pr-3">
                                <a className="pl-2 pr-2 pt-1 pb-1" href="#">Java</a>
                              </li>
                              <li>
                                <a className="pl-2 pr-2 pt-1 pb-1" href="#">Html</a>
                              </li>   
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <div className="job-payment-btn float-right mb-3">
                            <button class="btn btn--yellow btn--medium job-button"><i className="fas fa-check mr-2" aria-hidden="true"></i>Payment verification</button>
                              
                            </div>
                          </div>  
                        </div>
                        {/* Search Tags */}   
                      </div>
                      {/*--------- row3 ---------------*/}

                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    
    );
};

export default ApplicationList
