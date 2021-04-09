import React from 'react'
import Navbar from '../jobs/Navbar';
import Header from '../../../../src/components/header/Header';
import Sidebar from '../jobs/Sidebar';
import SearchBar from "../jobs/SearchBar";
import AvatarImage from '../../../../src/AvatarImage.png';
import Button from '@material-ui/core/Button';
import CustomizedRatings from "../jobs/Rating"
import '../../../assets/css/custom.css'
import SubmitProposalModal from '../application-pages/SubmitProposalModal'
import EditProposal from '../application-pages/EditProposal';



export default function ApplicationDetail() {
    return (
        <div className="job-detail application-detail">
            {/* top header */}
            <div className="top-area">
                <Header />
            </div>
            {/* top header */}
            <div className="main-wrapper pt-5">
                <div className="container">
                    <div className="row details-grid">
                        <div className="ml-5 mr-5">
                            <div className="right-side mr- ml-5">
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
                                        <div className="content-heading pt-1">
                                        <h3>Job title lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</h3>
                                        </div>
                                    </div>
                                    <div className="offset-md-1 col-md-3">
                                        <div className="price">
                                            <p><b>300 SAR</b><br/> <t>Per Hour</t></p>
                                        </div>
                                    </div>
                                    </div>   
                                    {/* title area */}
                                    {/* Tags + Price */}
                                    <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-11">
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

                                {/* required skills */}
                                <div className="required-skills p-3">
                                    <h3 className="pb-4">Skills Required</h3>
                                    {/* tags */}
                                    <ul className="tags">
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1" href="#">PHP</a>
                                        </li>
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1" href="#">Website design</a>
                                        </li>
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1" href="#">Wordpress</a>
                                        </li>
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1" href="#">Java</a>
                                        </li>  
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1" href="#">UIUX</a>
                                        </li>
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1" href="#">Branding</a>
                                        </li>
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1" href="#">Logo</a>
                                        </li>
                                    </ul>
                                    {/* tags */}
                                </div>
                                <div className="information p-3">
                                    <div className="row pt-2">
                                        <div className="col-md-6 pr-0">
                                            <div className="bid-info">
                                                <h3 className="pb-3">Bid Information</h3>
                                                <ul className="bid-inner">
                                                    <li>
                                                    <label className="bid-title">Bid Left</label>
                                                    <span className="bid-detail">8/8</span>
                                                    </li>
                                                    <li>
                                                    <label className="bid-title">Unit next bid</label>
                                                    <span className="bid-detail">-</span>
                                                    </li>
                                                    <li>
                                                    <label className="bid-title">Refresh speed</label>
                                                    <span className="bid-detail">1x</span>
                                                    </li>
                                                    <li>
                                                    <label className="bid-title">Average bid</label>
                                                    <span className="bid-detail">2500 SAR</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">   
                                            <div className="client-info pl-4">
                                                <h3 className="pb-3">Client Information</h3>
                                                <div className="client-details">
                                                    <ul>
                                                        <li>
                                                            <h4><i class="fa fa-map-marker" aria-hidden="true"></i>Brazil </h4>
                                                            <p>Rio De Janerio 09:18 pm</p>
                                                        </li>
                                                        <li>
                                                            <h4><i class="fa fa-briefcase"></i>5 Job Posted </h4>
                                                            <p>75% Hiring Rate</p>
                                                        </li>
                                                        <li>
                                                            <h4><i class="fas fa-wallet"></i>1800 SAR spent </h4>
                                                            <p> 20 Hires, 6 Active</p>
                                                        </li>
                                                        <li>
                                                            <h4><i class="fa fa-calendar"></i>Member since Nov 19, 2020 </h4>
                                                            <p> </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            {/* required skills */}

                            {/* proposed terms*/}
                            <div className="proposed-terms bg-white mt-4 p-2 pb-4">
                                <h3 className="pl-2 pb-3 pt-3">Your proposed terms</h3>
                                <div className="terms-inner1 ">
                                    <div className="row border-bottom pl-2 term-description">
                                        <div className="col-md-10">
                                           <h3 className="pb-1">Hourly Rate</h3> 
                                           <p>Total amount the client will see<br></br> on your proposal</p>
                                        </div>
                                        <div className="col-md-2">
                                            <h6 className="term-price pr-2 float-right">SAR 35.00/hr</h6>
                                        </div>
                                    </div>

                                    <div className="row border-bottom pl-2 pt-4 term-description">
                                        <div className="col-md-10">
                                           <h3 className="pb-1">You'll Receive</h3> 
                                           <p>The estimated amount you'll receive <br></br>after service fees</p>
                                        </div>
                                        <div className="col-md-2">
                                            <h6 className="term-price pr-2 float-right">SAR 28.00/hr</h6>
                                        </div>
                                    </div>
                                    
                                   
                                    
                                </div>
                                <div className="application-detail-btn mt-4 pr-2">
                                    <ul className="app-detail-btns">
                                        <li className="edit-detail">
                                            <EditProposal/>
                                        </li>
                                        <li className="proposal-detail">
                                            
                                            <SubmitProposalModal/>
                                        </li>
                                        
                                        
                                        
                                    </ul>
                                    
                                    
                                </div>
                            </div>
                            {/* proposed terms*/}
                        </div>
                  </div> 
                </div>
            </div>
        </div>
    </div>
        
       
    )
}
