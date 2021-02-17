import React from 'react'

import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import Linkedin from '../../../components/linkedin';
import Navbar from '../../../components/Navbar';

import './SignIn.css'
import SiSoHero from '../../../components/SiSoHero';

import loginimage from '../../../../src/loginimage.png';
import AvatarImage from '../../../../src/AvatarImage.png';


function SignIn() {
  return (
    <div className="SignUp-flex-container">
      <div className="si-container">
        <Navbar text="New Member?" value="Signup" />
        <SiSoHero />
        <div className="car">
          <div className="hello-container">
            <div
              className="top-bar"
              style={{ backgroundImage: `url(${loginimage})` }}
            >
              <x>Welcome Back!</x>
              <t>Sign in to continue</t>
              <div
                className="avatar-user"
                style={{ backgroundImage: `url(${AvatarImage})` }}
              ></div>
              <div className="name">
                <InputField heading="Username" Placeholder=" Enter Username" />
              </div>
              <div className="email">
                <InputField
                  type="password"
                  heading="Password"
                  Placeholder=" Enter Password"
                />
              </div>

              <div className="tos-check">
                <input type="checkbox" id="tos" name="tos"></input>
                <label for="tos"> Remember me</label>
              </div>
              <div className="su-button-1">
                <Button buttonStyle="btn--yellow1" value="Log In" />
              </div>
              <div className="su-button-2">
                <p>Or</p>
              </div>
              <div className="su-button-3">
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
