import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import "./SignIn.css";
import "./signuppage.css";
import SiSoHero from "../../../components/SiSoHero";
import loginimage from "../../../assets/LoginImage.png";
import AvatarImage from "../../../../src/AvatarImage.png";
import LOCKER from "../../../assets/LOCKER.png";
import AlertCompo from "./Alert";
import Signinfooter from "./Signinfooter";
import { login } from "../../../redux/auth/authCrud";
import {Link, withRouter } from "react-router-dom";
import LinkedInPage from "./LinkedInPage";
import { Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import VisibilityOff from "@material-ui/icons/VisibilityOff"; 
import Visibility from "@material-ui/icons/Visibility"; 
import IconButton from "@material-ui/core/IconButton"; 



class SignIn extends Component {
  constructor(props) {
    super(props);

    this.alert = {
      open: false,
      severity: "",
      message: "",
      title: "",
    };

    this.userValidation = {
      email: false,
      password: false,
    };

    this.user = {
      email: "",
      password: "",
    };

    this.userError = {
      email: "",
      password: "",
    };


    this.state = {
      alert: this.alert,
      userValidation: this.userValidation,
      email: "",
      password: "",
      code: "",
      passworderror: "",
      emailerror: "",
      showPassword: false,
      userError: this.userError,
      user: this.user,
    };
  }

  passwordShowAndHide= (e) => {
    e.preventDefault(); 
      this.setState({ showPassword: !this.state.showPassword });
   }

  handleClose() {
    this.setState({ alert: { open: false, severity: "", message: "" } });
  }

  onChangeHandler = (e) => {
    let [key, value, { user, userValidation, userError }] = [
      e.target.name,
      e.target.value,
      this.state,
    ];
    user[key] = value;
    
    this.setState({
      [e.target.name]: e.target.value,
      passworderror: "",
      emailerror: "",
      user,
      userValidation,
      userError: {
        email: "",
        password: "",},
      });
    };

  validateEmail(email) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      return false;
    }
    return true;
  }

  validatePassword(password) {
    var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (!pattern.test(password)) {
      return false;
    }
    return true;
  }

  checksubmitdata(isSubmit) {
    let [{ userValidation }] = [this.state];

    let impValue = 0;

    Object.values(userValidation).map((values) => {
      if (values === false) {
        impValue = impValue + 1;
      }
    });

    if (impValue > 0) {
      return false;
    } else if (impValue === 0) {
      return true;
    }
  }

  login = () => {
    let {
      userValidation,
      user,
      user: {  email, password },
      userError,
    } = this.state;

    let isSubmit = null;

    Object.keys(userValidation).map((key) => {
      if (
        key === "password"
      ) {
        {
          user[key] !== "" ? (
            user[key].length > 7  ? (
              <div>
                  { this.validatePassword(password) ? (
            (userValidation[key] = true)
          ) : (
            <div>
              {" "}
              {(userValidation[key] = false)},
              {(userError[key] = "The password string must be eight characters or longer and should at least 1 lowercase,1 uppercase,1 numeric character,one special character")}
            </div>
          )}

                {key === "passwordConfirm" ? (
                  <div>
                    {user[key] === user["password"]
                      ? (userValidation[key] = true)
                      : (userError[key] =
                          "Password and confirm password are not matching")}
                  </div>
                ) : (
                  (userValidation[key] = true)
                )}
              </div>
            ) : (
              <div>
                {" "}
                {(userValidation[key] = false)},
                {(userError[key] = "minimum Password length 8 characters")}
              </div>
            )
          ) : (
            (userError[key] = "Password is required")
          );
        }
      }
      else if (key === "email") {
        email !== "" ? (
          this.validateEmail(email) ? (
            (userValidation[key] = true)
          ) : (
            <div>
              {" "}
              {(userValidation[key] = false)},
              {this.setState({
                emailerror: "email pattren not valid",
              })}
            </div>
          )
        ) : (
          this.setState({
            emailerror: "email is required",
          })
        );
      }
    });

    this.setState({ userError });

    isSubmit = Boolean(this.checksubmitdata(isSubmit) ? true : false)

    if (userValidation.email === true && userValidation.password === true) {
      isSubmit = true;
    } else {
      isSubmit = false;
    }

    isSubmit &&
      login(this.state.email, this.state.password)
        .then(({ data: { token } }) => {
          localStorage.setItem("token", token);
          this.setState({
            alert: {
              open: true,
              severity: "success",
              title: "success",
              message: "you are successfully logged in",
            },
          });
          if (localStorage.getItem("token")) {
            setTimeout(() => {
              this.props.history.push("/");
            }, 3000);
          }
        })
        .catch((error) => {
          this.setState({
            alert: {
              open: true,
              severity: "error",
              title: "Error",
              //  message:`${key+": "+error.response.data[key][0]}`
              message: "The credentials you have provided are invalid.",
            },
          });
        });
  };

  render() {
    let {
      userError,
      user: { email, password },
      emailerror,
      showPassword,
      alert: { open, severity, message, title },
    } = this.state;

    return (
      <div className="signInPage  SignUp-flex-container">
        <Snackbar
          open={open}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={() => {
            this.handleClose();
          }}
        >
          <Alert
            onClose={() => {
              this.handleClose();
            }}
            severity={severity}
          >
            <AlertTitle>{title}</AlertTitle>
            <strong>{message}</strong>
          </Alert>
        </Snackbar>
        <div className="si-container">
        <Link to="/signup"><Navbar text="New Member?" value="Signup" /></Link>
        
        </div>
        <div>
          <SiSoHero />
        </div>
        <div className="main-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center bg-white offset-md-3">
                <div className="text-content">
                  <div className="welcome-text pt-3 pl-3 float-left ">
                    <h5 className="text-light">Welcome Back!</h5>
                    <h6 className="text-light">Sign in to continue</h6>
                  </div>

                  <div className="float-right">
                    <img src={loginimage} alt="/" />
                  </div>
                </div>
                <div className="floww pl-3 pr-3">
                  <img src={AvatarImage} alt="/" className="si-pic-tag" />

                  <form className="form-field pt-5">
                    <div
                      className={
                        emailerror === ""
                          ? "form-group pt-4"
                          : "form-group pt-4 error"
                      }
                    >
                      <label form="usr">Full name </label>
                      <input
                        type="text"
                        className="form-control"
                        id="usr"
                        placeholder="Enter Full Name"
                        name="email"
                        onChange={this.onChangeHandler}
                      />
                      {emailerror !== "" ? (
                        <div className="error-message">{emailerror}</div>
                      ) : null}
                    </div>

                    <div
                      className={
                        userError.password === ""
                          ? "s-in-form-group"
                          : "s-in-form-group error"
                      }
                    >
                      <label form="pwd">Password </label>
                      <div className="hide-icon-position">
                      <input
                        type={showPassword ? "text" : "password"} 
                        className="form-control"
                        id="pwd"
                        placeholder="Enter Password"
                        name="password"
                        onChange={this.onChangeHandler}
                      />
                      <span>{<i class="hide-icon" onClick={this.passwordShowAndHide}><span><IconButton 
                      onClick={this.signupChangeHandler} 
                      onMouseDown={this.signupChangeHandler} 
                    > 
                      { showPassword ? <Visibility /> : <VisibilityOff />} 
                    </IconButton> </span></i>}</span>
                        </div>
                        {userError.password !== "" ? (
                        <div className="error-message">
                          {userError.password}
                        </div>
                      ) : null}
                    </div>
                    
                  </form>
                </div>
                <div className="sign-up-btn  pl-3 pr-3 pb-3">
                  <div className="float-right">
                    <img src={LOCKER} alt="" className="pr-1" />

                    <a href="/" data-target="#pwdModal" data-toggle="modal">
                      Forgot your password?{" "}
                    </a>
                  </div>
                  <div className="checkbox pt-3">
                    <label>
                      <input type="checkbox" value="" /> Remember me
                    </label>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      className="btn btn-default btn-block text-white"
                      onClick={this.login}
                    >
                      Log In
                    </button>
                  </div>
                  <div>
                    <h6 className="text-center pt-2">or</h6>
                  </div>
                  <div className="pt-1 pb-4">
                    <div className="lin-btn">
                      <LinkedInPage />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AlertCompo />
        <Signinfooter />
      </div>
    );
  }
}
export default withRouter(SignIn);
