import React from "react";
import "./ProfileView.css";
import Card from './Card'
import Certificate from './Certifcate'
import BioGraphy from "./BIoGraphy";
import PortFolio from "./PortFolio";
import Reviews from "./Reviews";
import Experience from "./Experience";
import Education from "./Education";
import Header from '../header/Header'
function Profileview() {
  

  return (
    <>
      <div className="main-profile-page">
        <div className="design">
         <Header/>
        </div>
        <div className="p1">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
             <Card/>
              </div>
              <div className="col-md-9">
                <div className="personal-prfile-main">  
                  <BioGraphy />
                  <PortFolio />
                  <Reviews />
                  <Certificate/>
                  <Experience />
                  <Education />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profileview;
