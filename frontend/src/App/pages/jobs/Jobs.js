import React from 'react'
import {Link} from 'react-router-dom';
import "../../../assets/css/custom.css";
import Header from '../../../../src/components/header/Header'
import Sidebar from './Sidebar';
import SearchBar from "./SearchBar";
import AvatarImage from '../../../../src/AvatarImage.png';
import  { useEffect } from 'react';
import list from '../helper/api';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CalanderIcon from '../../../img/calendar.svg';
import WorkIcon from '@material-ui/icons/Work'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import SearchIconwhite from '../../../img/search-white.svg';
import Dislike from '../../../img/dislike.svg';

function createData(id, budget, title, description, skills,category) {
  return { id, budget, title, description, skills,category };

}



function Jobs() {
  
  const [rows, setRows] = React.useState([]);
  
  function getJobs (){

    list('api/v1/job/')
      .then((response)=>{
      let job_list = [];
     
  
      response.data.map((row)=>{
      
        job_list.push(createData(row.id, row.budget, row.title, row.description, row.skills,row.category))

      })
  
       setRows(job_list);
    })


  }


  useEffect(() => {
    getJobs();
  },[]);


    return (
        
        <div className='Jobs'>
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
                        <div className="col-md-5 pr-0">
                          <div className="search-bar">
                            <SearchBar/>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="search-button">
                            <button class="btn btn--yellow btn--medium"> <img src={SearchIconwhite} alt="no img"/> Search</button>
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
                        <h1 className="inner-heading p-3">My Feed</h1>
                      </div>
                      {/* Heading */}
   
            {/*--------- row1 ---------------*/}

            {rows.map((row, index) => (
                      <div className="myfeed pl-3 pr-3 pt-3 pb-4 border-top">
                        {/* title area */}
                        <div className="row">
                          <div className="col-md-1">
                            <div className="img-icon">
                              <div className='avatar-user-job' style={{backgroundImage: `url(${AvatarImage})`}}></div>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="content-heading pt-1">
                              <h3><Link to={`/job/${row.id}`}>{row.title}</Link></h3>
                            </div>
                          </div>
                          <div className="offset-md-1 col-md-3">
                            <ul className="content-icons float-right">
                              <li className="mr-3">
                                <div className="dislike dislike-icon">
                                  <img src={Dislike} alt="no img"/>
                                </div>
                              </li>
                              <li>
                                <div className="book-mark book-mark-icon">
                                  <BookmarkBorderOutlinedIcon/>
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
                          </div>
                          <div className="offset-md-1 col-md-3">
                            <div className="price-colored float-right">
                              <p>Per Hour/<span> {row.budget} SAR</span></p>
                            </div>
                          </div>

                        </div>
                        {/* Tags + Price */}
                        {/* paragraph */}
                        <div className="row paragraph">
                          <div className="col-md-12">
                            <p>
                             {row.description}
                             <Link to={`/job/${row.id}`}>{}more...</Link>
                            </p>
                          </div>
                        </div>
                        {/* paragraph */}
                        {/* Search Tags */}
                        <div className=" search-tags row pt-3">
                          <div className="col-md-8">
                          {row.skills && 
                            <ul className="tags">
                            
                            {
                                Object.values(row.category).map((keyName, i) =>{
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

                      ) )}   
                      {/*--------- row1 ---------------*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    
    );
};

export default Jobs
