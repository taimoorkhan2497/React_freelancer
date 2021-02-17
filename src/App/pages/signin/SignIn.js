import React from 'react'

import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import Linkedin from '../../../components/linkedin';
import Navbar from '../../../components/Navbar';
import SiSoHero from '../../../components/SiSoHero';
import './SignIn.css'

import loginimage from '../../../../src/loginimage.png';
import AvatarImage from '../../../../src/AvatarImage.png';


function SignIn() {
  return (
    <div className="SignUp-flex-container">
      <div className="si-container">
        <Navbar text="Already A Member?" value="Log In" />
        <SiSoHero />
        <div className="car">
          <div className="hello-container">
            <div
              className="top-bar"
              style={{ backgroundImage: `url(${loginimage})` }}
            >
              <x>Welcome!</x>
              <t>Sign up to continue</t>
              <div
                className="avatar-user"
                style={{ backgroundImage: `url(${AvatarImage})` }}
              ></div>
              <div className="name">
                <InputField
                  heading="Full name"
                  Placeholder=" Enter Full name"
                />
              </div>
              <div className="email">
                <InputField heading="Email" Placeholder=" Enter Email" />
              </div>
              <div className="password">
                <InputField
                  type="password"
                  heading="Password"
                  value="hidden"
                  Placeholder=" Enter Password"
                />
              </div>
              <div className="tos-check">
                <input type="checkbox" id="tos" name="tos"></input>
                <label for="tos">
                  {" "}
                  I agree to the Freelancer User <span>Agreement</span> and{" "}
                  <span>Privacy Policy.</span>
                </label>
              </div>
              <div className="su-button-1">
                <Button buttonStyle="btn--yellow1" value="Sign Up" />
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
