import React from "react";
import "./Profile.css";
import Logo from '../assets/Logo.png';
// import Logo from "../../assets/Logo.png";
import one from "../assets/Group 3500.png";
import two from "../assets/Group 3500 (1).png";
import three from "../assets/Group 3500 (2).png";
import four from "../assets/Group 3500 (3).png";
import five from "../assets/Group 3501.png";
import Rectangle from "../assets/Rectangle 850.png";
import Rectangles from "../assets/Rectangle 851.png";
import User from "../assets/Group 3539.png";
import vector from "../assets/Vector.png";
import Vector from "../assets/Vector 5.png";
import VECTOR from '../assets/Vector 6.png'

function Profile(props) {
  return (
    <>
      <div className="left-section">
        <img src={Logo} alt="tuwaiq" />

        <div className="pic">
          <img src={one} alt="circle" />
          <div className="onetext">
            <p>Personal Profile</p>
          </div>
        </div>
        <div className="img">
          <img src={vector} alt="vect" />
        </div>
        <div className="two">
          <img src={two} alt="circle" />
          <div className="twotext">
            <p>Professional Profile</p>
          </div>
        </div>

        <div className="img1">
          <img src={Vector} alt="vect" />
        </div>

        <div className="three">
          <img src={three} alt="circle" />
          <div className="threetext">
            {" "}
            <p>ID Verification</p>
          </div>
        </div>
        <div className="verific">
        <img src={VECTOR} alt="vect" />
        </div>
        <div className="four">
          <img src={four} alt="circle" />
          <div className="fourtext">
            <p>Payment Information</p>
          </div>
        </div>
        <div className="verific1">
        <img src={VECTOR} alt="vect" />
        </div>
        <div className="five">
          <img src={five} alt="circle" />
          <div className="fivetext">
            <p>Hourly Rate</p>
          </div>
        </div>
        <div className="bootom-pic">
          <img src={Rectangle} alt="bottom" />
        </div>
        <div className="bootom-pic2">
          <img src={Rectangles} alt="bottom" />
        </div>
        <div className="Usericon">
          <img src={User} alt="User" />
        </div>
      </div>
    </>
  );
}
export default Profile;
