import React from 'react'
import Header from '../../../../src/components/header/Header';
import ProposalModal from './ProposalModal';
import AvatarImage from '../../../../src/AvatarImage.png';
import AvatarImage1 from '../../../../src/img/AvatarImage1.png';
import AvatarImage2 from '../../../../src/img/AvatarImage2.png';
import AvatarImage3 from '../../../../src/img/AvatarImage3.png';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CalanderIcon from '../../../img/calendar.svg';
import WorkIcon from '@material-ui/icons/Work'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ClientAdd1 from '../../../img/c1.svg'
import ClientAdd2 from '../../../img/c2.svg'
import ClientAdd3 from '../../../img/c3.svg'
import ClientAdd4 from '../../../img/c4.svg'







export default function JobDetail() {
    return (
        <div className="job-detail job-detail-two">
            {/* top header */}
            <div className="top-area">
              <Header />
            </div>
            {/* top header */}
            <div className="main-wrapper pt-5">
                <div className="container">
                    <div className="row details-grid">
                        <div className="col-md-3">
                        <div className="left-side"><ProposalModal/></div>
                        </div>
                        <div className="col-md-9">
                            <div className="right-side">
                                {/*--------- row2 ---------------*/}
                                {/* <div className="row job"> */}
                                <div className="job-inner pl-3 pr-3 pt-3 pb-4 row-inner">
                                    {/* title area */}
                                    {/* title area */}
                                    <div className="row">
                                        <div className="col-md-1">
                                            <div className="img-icon pt-2">
                                            <div className='avatar-user-job' style={{backgroundImage: `url(${AvatarImage})`}}></div> 
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="content-heading pt-2">
                                            <h3>Job title lorem ipsum lorem ipsum lorem ipsum </h3>
                                            {/* Tags + Price */}
                                        
                                                <ul className="duration mb-0">
                                                    <li className="pr-3">
                                                        <p className="m-icon"><span className="pr-2"><WorkIcon/></span>Monthly</p>
                                                    </li>
                                                    <li className="pr-3">
                                                        <p className="m-icon"><span className="pr-2"><img src={CalanderIcon} alt="no img"/></span>2 months</p>
                                                    </li>
                                                    <li className="pr-3">
                                                        <p className="m-icon"><span className="pr-2"><WatchLaterIcon/></span>20 min ago</p>
                                                    </li>
                                                    
                                                </ul>
                                                {/* Tags + Price */}
                                            </div>
                                        </div>
                                        <div className="offset-md-1 col-md-3">
                                            <div className="price pt-2">
                                                <p  className="">300 SAR<br/> <t>Per Hour</t></p>
                                            </div>
                                        </div>
                                    </div>   
                                    {/* title area */}  
                                    {/* title area */}
                                    {/* Tags + Price */}
                                    <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-11">
                                            
                                        </div>
                                    </div>
                                    {/* Tags + Price */}
                                    {/* paragraph */}
                                    <div className="row paragraph">
                                        <div className="col-md-12">
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry. Lorem Ipsum has been the
                                              industry's standard dummy text ever since the 1500s,
                                               when an unknown printer took a galley of type and 
                                               scrambled it to make a type specimen book. It has 
                                               survived not only five centuries, but also the leap 
                                               into electronic typesetting, remaining essentially 
                                               unchanged. It was popularised in the 1960s with the 
                                               release of Letraset sheets containing Lorem Ipsum 
                                               passages, and more recently with desktop publishing 
                                               software like Aldus PageMaker including versions of 
                                               Lorem Ipsum.
                                            </p>
                                        </div> 
                                    </div>
                                    {/* paragraph */}  
                                    {/* Search Tags */}  
                                    <div className=" search-tags row">
                                        <div className="col-md-8 pt-3">
                                            <ul className="tags">
                                            <li className="pr-3">
                                                <a className="pl-2 pr-2 pt-1 pb-1 pt-2 pb-2" href="#">Design</a>
                                            </li>
                                            <li className="pr-3">
                                                <a className="pl-2 pr-2 pt-1 pb-1 pt-2 pb-2" href="#">Frontend developer</a>
                                            </li>
                                            <li className="pr-3">
                                                <a className="pl-2 pr-2 pt-1 pb-1 pt-2 pb-2" href="#">Java</a>
                                            </li>
                                            <li>
                                                <a className="pl-2 pr-2 pt-1 pb-1 pt-2 pb-2" href="#">Html</a>
                                            </li>   
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="job-payment-btn float-right mb-3">
                                            <button class="btn btn--yellow btn--medium job-button p-0"><span className="tick-status pr-2 border-0"><CheckCircleIcon/></span>Payment verification</button>
                                            
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
                                            <a className="pl-2 pr-2 pt-1 pb-1 pt-2 pb-2" href="#">PHP</a>
                                        </li>
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1 pt-2 pb-2" href="#">Website design</a>
                                        </li>
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1 pt-2 pb-2" href="#">Wordpress</a>
                                        </li>
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1 pt-2 pb-2" href="#">Java</a>
                                        </li>  
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1 pt-2 pb-2" href="#">UIUX</a>
                                        </li>
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1 pt-2 pb-2" href="#">Branding</a>
                                        </li>
                                        <li className="pr-3">
                                            <a className="pl-2 pr-2 pt-1 pb-1 pt-2 pb-2" href="#">Logo</a>
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
                                                            <h4><span><img className="svg-icons mr-1" src={ClientAdd1} alt="no img"/></span>Brazil </h4>
                                                            <p className="pl-4">Rio De Janerio 09:18 pm</p>
                                                        </li>
                                                        <li>
                                                            <h4>
                                                            <span><img className="svg-icons mr-1" src={ClientAdd2} alt="no img"/></span>
                                                            5 Job Posted
                                                            </h4>
                                                            <p className="pl-4">75% Hiring Rate</p>
                                                        </li>
                                                        <li>
                                                            <h4><span><img className="svg-icons mr-1" src={ClientAdd3} alt="no img"/></span>
                                                            1800 SAR spent </h4>
                                                            <p className="pl-4"> 20 Hires, 6 Active</p>
                                                        </li>
                                                        <li>
                                                            <h4>
                                                            <span><img className="svg-icons mr-1" src={ClientAdd4} alt="no img"/></span>
                                                            Member since Nov 19, 2020 </h4>
                                                            <p> </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            {/* required skills */}

                            {/* client history */}
                            <div className="client-history">
                                <h3 className="p-3 m-0">Proposals</h3>
                                <div className="proposal-inner1 pb-2">
                                    <div className="proposal-detail active border-bottom">
                                        <div className="row pt-3 container-fluid pr-0">
                                            <div className="col-md-1">
                                                <div className="img-icon">
                                                    <div className='avatar-user-job' style={{backgroundImage: `url(${AvatarImage1})`}}></div> 
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="pl-3">
                                                    <h4 className="pt-2">Emerson Torff</h4>
                                                    <div className="prop-tag">
                                                        <ul className="duration">
                                                            <li className="pr-3">
                                                            <p><span className="pr-2"><img src={CalanderIcon} alt="no img"/></span>Within 1 day </p>
                                                            </li>
                                                            <li className="pr-3">
                                                            <p className="m-icon"><span className="pr-2"><WatchLaterIcon/></span>With in a minutes</p>
                                                            </li> 
                                                        </ul>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div className="col-md-3">
                                                <p className="r-price pull-right pt-2"><b>250 SAR</b><br></br><span>Bid</span></p>
                                            </div>
                                        </div>
                                        <div className="row paragraph container-fluid pr-0">
                                            <div className="col-md-12">
                                                <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                when an unknown printer took a galley of type and scrambled it to make a type 
                                                specimen book. It has survived not only five centuries.
                                                </p>
                                            </div> 
                                        </div>
                                    </div>
                                        {/* row2 */}
                                    <div className="proposal-detail border-bottom">
                                        <div className="row pt-3 container-fluid pr-0">
                                            <div className="col-md-1">
                                                <div className="img-icon">
                                                    <div className='avatar-user-job' style={{backgroundImage: `url(${AvatarImage2})`}}></div> 
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="pl-3">
                                                    <h4 className="pt-2">Maria Bator</h4>
                                                    <div className="prop-tag">
                                                    <ul className="duration">
                                                            <li className="pr-3">
                                                            <p><span className="pr-2"><img src={CalanderIcon} alt="no img"/></span>Within 5 weeks </p>
                                                            </li>
                                                            <li className="pr-3">
                                                            <p className="m-icon"><span className="pr-2"><WatchLaterIcon/></span>1 hour ago</p>
                                                            </li> 
                                                        </ul>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div className="col-md-3">
                                            <div className="price">
                                            <p><b>300 SAR</b><br/> <t>Per Hour</t></p>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row paragraph container-fluid pr-0">
                                            <div className="col-md-12">
                                                <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                when an unknown printer took a galley of type and scrambled it to make a type 
                                                specimen book. It has survived not only five centuries.
                                                </p>
                                            </div> 
                                        </div>
                                    </div>
                                    {/* row2 */}

                                    {/* row2 */}
                                    <div className="proposal-detail pb-2">
                                        <div className="row pt-3  container-fluid pr-0">
                                            <div className="col-md-1">
                                                <div className="img-icon">
                                                    <div className='avatar-user-job' style={{backgroundImage: `url(${AvatarImage3})`}}></div> 
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="pl-3">
                                                    <h4 className="pt-2">Brandon Rhiel Madsen</h4>
                                                    <div className="prop-tag">
                                                        <ul className="duration">
                                                            <li className="pr-3">
                                                            <p><span className="pr-2"><img src={CalanderIcon} alt="no img"/></span>Within 2 weeks </p>
                                                            </li>
                                                            <li className="pr-3">
                                                            <p className="m-icon"><span className="pr-2"><WatchLaterIcon/></span>5 hours ago</p>
                                                            </li> 
                                                        </ul>
                                                    </div>
                                                </div> 
                                            </div>
                                            <div className="col-md-3">
                                                <p className="r-price pull-right pt-2"><b>250 SAR</b><br></br><span>Bid</span></p>
                                            </div>
                                        </div>
                                        <div className="row paragraph container-fluid pr-0 ">
                                            <div className="col-md-12">
                                                <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                                when an unknown printer took a galley of type and scrambled it to make a type 
                                                specimen book. It has survived not only five centuries.
                                                </p>
                                            </div> 
                                        </div>
                                    </div>
                                    {/* row2 */}

                                   
                                    
                                </div>
                            </div>
                            {/* client history */}
                        </div>
                  </div> 
                </div>
            </div>
        </div>
    </div>
        
       
    )
}
