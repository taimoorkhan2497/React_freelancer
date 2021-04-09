import React from "react";
import "./portfoliodetails.css";
import GetImage from "../../App/pages/registration/GetImage";
import Multiselect from "./multiselect/Multiselect";

const PortfolioDetails = (props) => {
  return (
    <div className="ap-detail">
      <div className="ap-detail-box">
        <div className="container">
          <div className="row bg-white">
            <div className="col-md-12 pt-4">
              <div className="col-md-4 pb-3">Add Details</div>
              <div className="col-md-6">
                <label for="inputtext">Your role in project</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputtext"
                  placeholder="Enter role"
                />
              </div>
              <div className="row pl-3">
                <div className="col-md-12 pt-4">
                  <div className="form-group">
                    <label for="description">Project Description</label>
                    <textarea
                      className="form-control-text"
                      id="description"
                      placeholder="Text"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row pl-3">
                <div className="col-md-6">
                  <Multiselect value="Work Platform"/>
                </div>
                <div className="col-md-6">
                <Multiselect value="Deliverables in"/>
                </div>
              </div>
              <div className="row pt-4 pl-3">
                <div className="col-md-6">
                  <Multiselect value="Skills"/>
                </div>
                <div className="col-md-6">
                <Multiselect value="Business Size"/>
                </div>
              </div>

              <div className="row pt-5 pb-5 pl-3">
                <div className="col-md-6">
                  <p className="">Upload Images</p>
                  <GetImage 
                 />
                </div>
                <div className="col-md-6">
                  <p className="">Upload Videos</p>
                  <GetImage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioDetails;
