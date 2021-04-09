import React, { Component } from "react";
import Navbar from "../../../components/header/Navbar";
import SiSoHero from "../../../components/SiSoHero";
import "./signuppage.css";
import AvatarImage from "../../../../src/AvatarImage.png";
import loginimage from "../../../assets/LoginImage.png";
import Signinfooter from "./Signinfooter";
import { sign_up } from "../../../redux/auth/authCrud";
import { Link , withRouter } from "react-router-dom";
import LinkedInPage from "./LinkedInPage";
import AlertCompo from "./Alert";
import { Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton"; 
import Visibility from "@material-ui/icons/Visibility"; 
import VisibilityOff from "@material-ui/icons/VisibilityOff"; 


class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.alert = {
      open: false,
      severity: "",
      message: "",
      title: "",
    };

    this.userValidate = {
      username: false,
      email: false,
      password: false,
      passwordConfirm: false,
    };

    this.user = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      
    };

    this.userError = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };

    this.state = {
      alert: this.alert,
      user: this.user,
      userValidate: this.userValidate,
      userError: this.userError,
      showPassword: false,
      showPasswordd: false
    };
  }

  handleClose() {
    this.setState({ alert: { open: false, severity: "", message: "" } });
  }

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

 passwordShowAndHide= (e) => {
   e.preventDefault(); 
     this.setState({ showPassword: !this.state.showPassword });
  }

  passworddShowAndHide= (e) => {
    e.preventDefault(); 
      this.setState({ showPasswordd: !this.state.showPasswordd });
   }

  signupChangeHandler = (e) => {
    let [key, value, { user, userValidate, userError }] = [
      e.target.name,
      e.target.value,
      this.state,
    ];
    user[key] = value;
    this.setState({
      user,
      userValidate,
      userError: {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
    });
  };

  checksubmitdata(isSubmit) {
    let [{ userValidate }] = [this.state];

    let impValue = 0;

    Object.values(userValidate).map((values) => {
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

  formSubmitHandler = () => {
    let {
      userValidate,
      user,
      user: { username, email, password, account_type, passwordConfirm },
      userError,
    } = this.state;

    let isSubmit = null;

    Object.keys(userValidate).map((key) => {
      if (
        key === "password" ||
        key === "passwordConfirm"
      ) {
        {
          user[key] !== "" ? (
            user[key].length > 7  ? (
              <div>
                  { this.validatePassword(password) ? (
            (userValidate[key] = true)
          ) : (
            <div>
              {" "}
              {(userValidate[key] = false)},
              {(userError[key] = "The password string must be eight characters or longer and should at least 1 lowercase,1 uppercase,1 numeric character,one special character")}
            </div>
          )}

                {key === "passwordConfirm" ? (
                  <div>
                    {user[key] === user["password"]
                      ? (userValidate[key] = true)
                      : (userError[key] =
                          "Password and confirm password are not matching")}
                  </div>
                ) : (
                  (userValidate[key] = true)
                )}
              </div>
            ) : (
              <div>
                {" "}
                {(userValidate[key] = false)},
                {(userError[key] = "minimum Password length 8 characters")}
              </div>
            )
          ) : (
            (userError[key] = "Password is required")
          );
        }
      } else if (key === "email") {
        user[key] !== "" ? (
          this.validateEmail(email) ? (
            (userValidate[key] = true)
          ) : (
            <div>
              {" "}
              {(userValidate[key] = false)},
              {(userError[key] = "Email pattern is not valid")}
            </div>
          )
        ) : (
          (userError[key] = "Email is required")
        );
      }
      else{
          user[key] !== "" ? (
            user[key].length > 7  ? (
              <div>
                { ( userValidate[key] = true ) }
               
              </div>
            ) : (
              <div>
                {" "}
                {(userValidate[key] = false)},
                {(userError[key] = "Minimum length 8 characters")}
              </div>
            )
          ) : (
            (userError[key] = "Username is required")
          );

          }
    });

    this.setState({ userError });

    isSubmit = Boolean(this.checksubmitdata(isSubmit) ? true : false);

    if (isSubmit === true) {

        let  CustomRegisterUser={
          username : username ,
          first_name: "first name",
          last_name: "last name",
          account_type: "hire",
          email:email,
          password:password,
          password_confirm:passwordConfirm



          }
        sign_up(CustomRegisterUser)
          .then((res) => {
            this.setState({
              alert: {
                open: true,
                severity: "success",
                title: "success",
                message: "User Created Sucessfully",
              },
            });
            // setTimeout(() => {
              // this.props.history.push("/verify-user/?user_id&timestamp&signature");
            // }, 2000);
          })
          .catch((error) => {
            this.setState({
              alert: {
                open: true,
                severity: "error",
                title: "Error",
                //  message:`${key+": "+error.response.data[key][0]}`
                message: "User not Created ",
              },
            });
          });
      
    } else {
      this.setState({
        alert: {
          open: true,
          severity: "error",
          title: "Error",
          message: "please! fill your form completely",
        },
      });
    }
  };

  render() {
    let {
      user: { username, email, password, passwordConfirm },
      alert: { open, severity, message, title },
      userError,
      showPassword,showPasswordd
    } = this.state;

    return (
      <div className="signUpPage SignIn-flex-container">
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
        <Link to="/#"><Navbar text="Already A Member?" value="LogIn" className="pl-5" /></Link>
          
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
                    <h5 className="text-light">Welcome!</h5>
                    <h6 className="text-light">Sign up to continue</h6>
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
                        userError.username === ""
                          ? "form-group pt-4"
                          : "form-group pt-4 error "
                      }
                    >
                      <label form="usr">User name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Name"
                        value={username}
                        name="username"
                        onChange={this.signupChangeHandler}
                      />

                      {userError.username !== "" ? (
                        <div className="error-message">
                          {userError.username}
                        </div>
                      ) : null}
                    </div>

                    <div
                      className={
                        userError.email === ""
                          ? "form-group"
                          : "form-group error"
                      }
                    >
                      <label form="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        value={email}
                        name="email"
                        onChange={this.signupChangeHandler}
                      />
                      {userError.email !== "" ? (
                        <div className="error-message">{userError.email}</div>
                      ) : null}
                    </div>

                    <div
                      className={
                        userError.password === ""
                          ? "form-group"
                          : "form-group error"
                      }
                    >
                      
                      <label form="pwd">Password</label>
                      <div className="hide-icon-position">
                      <input
                         type={showPassword ? "text" : "password"} 
                        className="form-control"
                        placeholder="Enter Password"
                        value={password}
                        name="password"
                        onChange={this.signupChangeHandler}
                      /><span>{<i class="hide-icon" onClick={this.passwordShowAndHide}><span><IconButton 
                      onClick={this.signupChangeHandler} 
                      onMouseDown={this.signupChangeHandler} 
                    > 
                      { showPassword ? <Visibility /> : <VisibilityOff />} 
                    </IconButton> </span></i>}</span></div>
                      {userError.password !== "" ? (
                        <div className="error-message">
                          {userError.password}
                        </div>
                      ) : null}
                    </div>
                    <div
                      className={
                        userError.passwordConfirm === ""
                          ? "form-group"
                          : "form-group error"
                      }
                    >
                      <label form="passwordConfirm">Confirm Password</label>
                      <div className="hide-icon-position">
                      <input
                        type={showPasswordd ? "text" : "password"} 
                        className="form-control"
                        placeholder="Enter confirm Password"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        pattern=".{8,}"
                        onChange={this.signupChangeHandler}
                      /><span>{<i class="hide-icon" onClick={this.passworddShowAndHide} ><span><IconButton 
                      onClick={this.signupChangeHandler} 
                      onMouseDown={this.signupChangeHandler} 
                    > 
                      { showPasswordd ? <Visibility /> : <VisibilityOff />} 
                    </IconButton> </span></i>}</span></div>
                      {userError.passwordConfirm !== "" ? (
                        <div className="error-message">
                          {userError.passwordConfirm}
                        </div>
                      ) : null}
                    </div>
                  </form>
                </div>

                <div className="sign-up-btn  pl-3 pr-3 pb-3">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="" /> I agree to the
                      Freelancer User
                      <span className="checkbox-text"> Agreement</span> and
                      <span className="checkbox-text"> Privacy Policy. </span>
                    </label>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      className="btn btn-default btn-block"
                      onClick={this.formSubmitHandler}
                    >
                      Sign up
                    </button>
                  </div>
                  <div>
                    <h6 className="text-center pt-2">Or</h6>
                  </div>
                  <div className="pt-1 pb-4">
                    <LinkedInPage />
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

export default withRouter(SignupPage);
