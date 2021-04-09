import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../../../../src/components/header/Header';
import Proposal from './Proposal';
// import ProposalModal from './ProposalModal';
import AvatarImage from '../../../../src/AvatarImage.png';
import CustomizedRatings from "./Rating"
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CalanderIcon from '../../../img/calendar.svg';
import WorkIcon from '@material-ui/icons/Work'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ClientAdd1 from '../../../img/c1.svg'
import ClientAdd2 from '../../../img/c2.svg'
import ClientAdd3 from '../../../img/c3.svg'
import ClientAdd4 from '../../../img/c4.svg'
import  { useEffect } from 'react';
import list from '../helper/api';


function jobdetail(id, budget, title, description, skills, category) {
    return { id, budget, title, description, skills, category};
}

export default function JobDetail(props) {

    const [jobdetail, setjobdetail] = React.useState([]);
    
    let jobID = 0;
    if(props.match.params.id){
        jobID = props.match.params.id;
    }
  
    function getJobdetail(){
  
      list('api/v1/job/'+jobID+'/')
        .then((response)=>{

        console.log("data1111 res :",response.data)



         setjobdetail(response.data);
        
      })
  
  
    }

    useEffect(() => {
        getJobdetail();
    },[]);
  
      
    return (
        <div className="job-detail">
            {/* top header */}
            {/* top header */}
            <div className="top-area">
              <Header />
            </div>
            {/* top header */}
            <div className="main-wrapper pt-5">
                <div className="container">
                    <div className="row details-grid">
                        <div className="col-md-3">

                        <div className="left-side"><Proposal/></div>
                        </div>
                        <div className="col-md-9">
                            <div className="right-side">
                                {/*--------- row2 ---------------*/}
                                {/* <div className="row job"> */}
                                {/* {jobdetail.map((row, index) => ( */}
                                <div className="job-inner pl-3 pr-3 pt-3 pb-4 row-inner">
                                    {/* title area */}
                                    <div className="row">
                                        <div className="col-md-1">
                                            <div className="img-icon pt-2">
                                            <div className='avatar-user-job' style={{backgroundImage: `url(${AvatarImage})`}}></div> 
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="content-heading pt-2">
                                                {jobdetail.title && <h3>{jobdetail.title}</h3>}
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
                                                <p  className="">{jobdetail.budget} SAR<br/> <t>Per Hour</t></p>
                                            </div>
                                        </div>
                                    </div>   
                                    {/* title area */}
                                    
                                    {/* paragraph */}
                                    <div className="row paragraph">
                                        <div className="col-md-12">
                                            <p> {jobdetail.description}
                                            </p>
                                        </div> 
                                    </div>
                                    {/* paragraph */}  
                                    {/* Search Tags */}  
                                    <div className=" search-tags row">
                                        <div className="col-md-8 pt-3">
                                        {jobdetail.skills && 
                                            <ul className="tags">
                                            
                                            {
                                                
                        
                                                Object.values(jobdetail.category).map((keyName, i) =>{
                                                    if(i===1){
                                            return <li className="pr-3">
                                                <Link className="pl-2 pr-2 pt-1 pb-1"> 
                                               {keyName} </Link>
                                                
                                                </li>
                                                    }
                                                })}
                                            </ul>
                                            }
                                        </div>
                                        <div className="col-md-4">
                                            <div className="job-payment-btn float-right mb-3">
                                            <button class="btn btn--yellow btn--medium job-button p-0"><span className="tick-status pr-2 border-0"><CheckCircleIcon/></span>Payment verification</button>
                                            
                                            </div>
                                        </div>  
                                    </div>
                                    {/* Search Tags */}   
                                </div>
                                {/* ) )}  */}
                                    {/*--------- row2 ---------------*/}

                                {/* required skills */}
                                {jobdetail.skills && 
                                <div className="required-skills p-3">
                                    <h3 className="pb-4">Skills Required</h3>
                                    {/* tags */}
                                    <ul className="tags">
                                    {
                                        Object.values(jobdetail.skills).map((keyName, i) =>{
                                            
                                    return <li className="pr-3">
                                        <Link className="pl-2 pr-2 pt-1 pb-1"> 
                                        {keyName.name}</Link>
                                        
                                        </li>
                                        
                                        })}
                                    </ul>
                                    
                                    {/* tags */}
                                </div>
                                }
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
                                                            <h4><span><img className="svg-icons mr-1" src={ClientAdd1} alt="no img"/></span>{jobdetail.city}</h4>
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
                                <h3 className="p-3">Client’s History</h3>

                                <div className="history-inner1 ">
                                    {/* row 1 */}
                                    
                                        <div className="row border-bottom history-main">
                                        
                            
                                        <div className="col-md-10">
                                            <div className="review pl-4">
                                                <h4 className="pb-2">{jobdetail.title} </h4>
                                                <p className="mb-3">{jobdetail.description}</p>
                                                    <ul className="rating-area">
                                                        
                                                        <li>
                                                        <h5>By<b className="pl-1 pr-3">Maria Bator</b> </h5>
                                                        </li>
                                                        <li>
                                                            <CustomizedRatings/>
                                                        </li>
                                                        <li>
                                                            <h5 className="pl-3"><b>(5 reviews)</b></h5> 
                                                        </li>
                                                    </ul>   
                                                    
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <p className="r-price"><b>{jobdetail.budget}</b><br></br><span>Fixed Price</span></p>
                                        </div>
                                    </div>  
                                    {/* row 1 */}

                                    <div className="row pt-4 border-bottom">
                                        <div className="col-md-10">
                                            <div className="review pl-4">
                                                <h4 className="pb-2">Job title lorem ipsum lorem ipsum lorem ipsum </h4>
                                                <p className="mb-3">Expert knowledge and very professional, highly recommended!"</p>
                                                    <ul className="rating-area">
                                                        <li>
                                                        <h5>By<b className="pl-1 pr-3">Maria Bator</b> </h5>
                                                        </li>
                                                        <li>
                                                            <CustomizedRatings/>
                                                        </li>
                                                        <li>
                                                            <h5 className="pl-3"><b>(5 reviews)</b></h5> 
                                                        </li>
                                                    </ul>   
                                                    
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <p className="r-price"><b>300 SAR</b><br></br><span>Fixed Price</span></p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="job-detail-btn">
                                    <div className="btn1 mb-1">
                                        <a href="#">View More</a>
                                    </div>
                                    <div className="btn2 pb-3">
                                        <a  href="#">(26 more reviews)</a>
                                    </div>
                                    
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
