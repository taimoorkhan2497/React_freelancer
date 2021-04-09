import React from 'react'
import "./PortFolio.css";
import Commercial from "../../assets/Commercial.png";
import Ecomerce from "../../assets/Ecomerce.png";
import Medical from "../../assets/Medical.png";
import { Link } from "react-router-dom";
 function PortFolio () {

  return (
    <div className="Portfol">
      <div className="container bg-white">
        <div className="row pt-4 pb-3 pl-3">
          <div className="col-md-6">
              <h> Portfolio </h>
          </div>
          <div className="col-md-6 pr-4">
            <Link to="/PortfolioTab">
              <button type="button" className="btn btn-primary btn-sm float-right" >
                +ADD
              </button>
            </Link>
          </div>
        </div>
        <div className="row pt-4 pb-3 pl-3">
          <div className="col-md-4 col-sm-4 pb-3">
            <div>
              <div className="img-wraper pb-3">
                <img src={Commercial} alt="/" />
              </div>
              <div className="img-des">
                <p> Ecomerce Project </p>
                <h>8 Artworks</h>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 ">
            <div>
              <div className="img-wraper pb-3">
                <img src={Ecomerce} alt="/" />
              </div>
              <div className="img-des">
                <p> Ecomerce Project </p>
                <h>8 Artworks</h>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div>
              <div className="img-wraper pb-3">
                <img src={Medical} alt="/" />
              </div>
              <div className="img-wraper">
                <p> Ecomerce Project </p>
                <h>8 Artworks</h>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
