import React from "react";
import "./alert.css";
import rectangle from "../../../assets/11.png";
import alertpic from "../../../assets/1-01.png";
import BG from "../../../assets/BG (1).png";
import Dropdrop from "../../../assets/Dropdrop.png";
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const AlertCompo = () => {
  return (
    <div className="alert-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 pt-5 ml-0 mr-0">
            <img src={BG} alt="/" />
            <div className="alert-img-wrap pl-5">
              <img src={alertpic} alt="/" />
            </div>
            <div className="alert-front-img">
              <img src={rectangle} alt="/" />
              <div className="alert-page-picutre">
                <div className="container">
                  <div className="row pl-3 pr-2">
                    <div className="col-md-8 col-sm-8 pl-5">
                      <a href="">
                        <h5>New Job Alert!</h5>
                      </a>
                      <a href="">
                        <h6 className="alert-time pb-3">20 mins ago</h6>
                      </a>
                    </div>
                    <div className="col-md-6"></div>
                  </div>
                  <div className="row pl-5">
                    <div className="drop-img col-md-2 col-sm-2">
                      <img src={Dropdrop} alt="/" className="pt-3" />
                    </div>
                    <div className="col-md-9 col-sm-9 pt-3 pr-3">
                      <a href=""> DropDrop is hiring Marketing Manager!</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="al-picture-email">
                <a className="email-icon" href="">
              <MailOutlineIcon  style={{fill: "white", height: 30, width: "1.3em", fontSize: 40
 }}/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 pt-5 pb-5">
            <h5 className="alert-text pb-3">Join over 15,000+ tech people</h5>
            <h1 className="pb-3 w-75">
              Get instant alert on your inbox
            </h1>
            <p className="alert-para pb-3 font-size-16 w-75">
              We receive over 50 new job submission at our website. Subscribe to
              our newsletter and get instant job alert on your inbox to apply.{" "}
            </p>
            <form>
              <div className="input-group">
                <div className="input-group mb-5">
                  <div className="input-group-prepend"></div>
                  <div className="sub-form-sec">
                    <div className="sub-icon"><MailOutlineIcon /></div>
                  <input
                    className="form-control email-input"
                    type="text"
                    placeholder="Enter your email"
                  />
                  </div>
                  
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary d-flex align-items-center text-uppercase font-weight-bold"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCompo;
