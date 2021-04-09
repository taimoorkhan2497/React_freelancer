import React from "react";

import "./signinfooter.css";
import footerlogo from "../../../assets/Logo.png";
const Signinfooter = () => {
  return (
    <div className="si-footer-page">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-5 col-5 mr-0 ml-0 mt-5">
            <img src={footerlogo} alt="" />
            <p className="pt-4 w-50">
              Finity has a collection of latest 2,500 jobs to join next
              companies.
            </p>
          @
           
           <a href="/"> <span className="twaiq-text"> Tawaiqfreelancer 2020.</span></a>  All Rights Reserved
           
          </div>
          <div className="col-md-2 col-sm-2 col-2 pt-5 ">
            <h5> Community</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark">
                  {" "}
                  For Talents
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  For Companies
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Facebook Group
                </a>
              </li>
              <li>
                <a href="/faq" className="text-dark">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-2 col-2 pt-5">
            <h5> About us</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">
                  {" "}
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-3 col-3  pt-5">
            <h5> Useful</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">
                  {" "}
                  Free Resume Builder
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Free Graphics
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Career Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signinfooter;
