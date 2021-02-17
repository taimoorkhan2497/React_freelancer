import React from "react";
import "./Certificate.css";
import Rectangle from "../assets//Rectangle (1).png";
import Image from "../assets//Group 3530.png";
function Certificate(props) {
  return (
    <>
      <p className="certificate">Certficate</p>
      <div className="certificate-body">
        <div className="certificate-body-rect">
        <img src={Rectangle} alt="dot" />

        </div>
           
          <img src={Image} alt="imag" className="react-pic"/>
           <p className="picture"> Drop your image here, 
           <a href="/">
           <span>or browse </span>
           </a> </p>
           <p className="support"> Supports: JPG, JPEG2000, PNG </p>
       
    

      {/* <div className="Certicate-text">
        <img src={Rectangle} alt="dot" />
    
     
      <img src={Image} alt="Img" />
      <p>
        Drop your image here,
       <a href="/">
       <span >or browse</span></a> 
      </p>
      <p> Supports: JPG, JPEG2000, PNG </p>
      </div> */}
      </div>
    </>
  );
}
export default Certificate;
