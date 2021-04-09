import React from "react";
import "./PersonalProfile.css";
import img from "../../../img/personalProfile.png";
import img2 from "../../../img/personalProfile_F.png";

import { Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

class PersonalProfile extends React.Component {
  constructor(props) {
    super(props);

    this.alert = {
      open: false,
      severity: "",
      message: "",
      title: "",
    };

    this.Per_Profile = {
      first_name: "",
      mobile_number: "",
      city: "",
      last_name: "",
      address: "",
      country: "",
    };
    this.errorProfile = {
      first_name: "",
      mobile_number: "",
      city: "",
      last_name: "",
      address: "",
      country: "",
    };

    this.per_profileValidate = {
      first_name: false,
      mobile_number: false,
      last_name: false,
      address: false,
      country: false,
      city: false,
    };

    this.state = {
      alert: this.alert,
      per_profile: this.Per_Profile,
      per_profileValidate: this.per_profileValidate,
      errorProfile: this.errorProfile,
      personal_profile_isSubmit_value: false,
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

  getDatafromLocaStorage() {
    let isSubmit = null;
    let vvalue = 2;
    let { per_profile, per_profileValidate, errorProfile } = this.state;

    if (localStorage.getItem("personal_profile")) {
      var storedData = JSON.parse(localStorage.getItem("personal_profile"));

      Object.keys(storedData).map((key) => {
        per_profile[key] = storedData[key];
      });

      this.setState(per_profile);

      Object.keys(storedData).map((key) => {
        if (key === "email") {
          per_profileValidate[key] =
            per_profile[key] && this.validateEmail(per_profile[key])
              ? true
              : false;
        } else {
          per_profile[key] !== "" ? (
            per_profile[key].length > 3 ? (
              (per_profileValidate[key] = true)
            ) : (
              <div>
                {" "}
                {(per_profileValidate[key] = false)},
                {(errorProfile[key] = "minimum length 3 characters")}
              </div>
            )
          ) : (
            (errorProfile[key] = "this is required")
          );
        }
      });
    }
    this.setState({ per_profile, per_profileValidate });
    isSubmit = Boolean(this.submitHandler(isSubmit));
    this.props.onStateChange(this.state.per_profile, isSubmit);
  }

  componentDidMount() {
    this.getDatafromLocaStorage();
  }

  submitHandler(ans) {
    let [{ per_profile, per_profileValidate }] = [this.state];
    let impValue = 0;

    Object.values(per_profileValidate).map((values) => {
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

  changeHandler(e) {
    let isSubmit = null;
    let [
      key,
      value,
      {
        per_profile,
        per_profileValidate,
        personal_profile_isSubmit_value,
        errorProfile,
      },
    ] = [e.target.id, e.target.value, this.state];

    per_profile[key] = value;
    this.setState(per_profile);

    Object.keys(per_profile).map((key) => {
      if (key === "email") {
        per_profileValidate[key] =
          per_profile[key] && this.validateEmail(per_profile[key])
            ? true
            : false;
      } else {
        per_profile[key] !== "" ? (
          per_profile[key].length > 3 ? (
            <div>
              {" "}
              {(per_profileValidate[key] = true)},{(errorProfile[key] = "")}
            </div>
          ) : (
            <div>
              {" "}
              {(per_profileValidate[key] = false)},
              {(errorProfile[key] = "minimum length 3 characters")}
            </div>
          )
        ) : (
          (errorProfile[key] = "this is required")
        );
      }
    });

    localStorage.setItem("personal_profile", JSON.stringify(per_profile));
    this.setState({ per_profile, per_profileValidate, errorProfile });

    isSubmit = Boolean(this.submitHandler(isSubmit));

    this.setState({
      per_profile,
      per_profileValidate,
      personal_profile_isSubmit_value,
      errorProfile,
    });

    this.props.onStateChange(this.state.per_profile, isSubmit);
  }

  render() {
    let {
      per_profile,
      errorProfile,
      alert: { open, severity, message, title },
    } = this.state;
    return (
      <div className="PersonalProfile">
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
        <div className="personalProfile_bg Pf-rightbox  p-5">
          <div className="container">
            <div className="pl-2">
              <div className="row">
                <div
                  className="personalprofileicon"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div className="Profile_info">
                  <h4 className="personalprofileHead">Personal Profile</h4>
                  <p className="personalprofilePara">
                    {" "}
                    Creating your account in just a few steps away, Fill your
                    Personal detail type.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="new-box">
                <div
                  className={
                    errorProfile.first_name !== "" &&
                    this.props.tabindex === true
                      ? "form-group error"
                      : "form-group "
                  }
                >
                  <label className="pp_inputHeading">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter first name"
                    id="first_name"
                    value={per_profile.first_name}
                    onChange={(e) => {
                      this.changeHandler(e);
                    }}
                  />

                  {this.props.tabindex === true ? (
                    errorProfile.first_name !== "" ? (
                      <div className="error-message">
                        {errorProfile.first_name}
                      </div>
                    ) : (
                      <div> </div>
                    )
                  ) : (
                    <div> </div>
                  )}
                </div>
                <div
                  className={
                    errorProfile.last_name !== "" &&
                    this.props.tabindex === true
                      ? "form-group error"
                      : "form-group "
                  }
                >
                  <label className="pp_inputHeading">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Enter last name"
                    id="last_name"
                    value={per_profile.last_name}
                    onChange={(e) => {
                      this.changeHandler(e);
                    }}
                  />
                  {errorProfile.last_name !== "" &&
                  this.props.tabindex === true ? (
                    <div className="error-message">
                      {errorProfile.last_name}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="new-box">
                <div
                  className={
                    errorProfile.mobile_number !== "" &&
                    this.props.tabindex === true
                      ? "form-group error"
                      : "form-group "
                  }
                >
                  <label className="pp_inputHeading">Mobile number</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Enter number"
                    id="mobile_number"
                    value={per_profile.mobile_number}
                    onChange={(e) => {
                      this.changeHandler(e);
                    }}
                  />
                  {errorProfile.mobile_number !== ""
                    ? this.props.tabindex === true && (
                        <div className="error-message">
                          {errorProfile.mobile_number}
                        </div>
                      )
                    : null}
                </div>
                <div
                  className={
                    errorProfile.address !== "" && this.props.tabindex === true
                      ? "form-group error"
                      : "form-group "
                  }
                >
                  <label className="pp_inputHeading">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Enter address"
                    id="address"
                    value={per_profile.address}
                    onChange={(e) => {
                      this.changeHandler(e);
                    }}
                  />
                  {errorProfile.address !== "" &&
                  this.props.tabindex === true ? (
                    <div className="error-message">{errorProfile.address}</div>
                  ) : null}
                </div>
              </div>
              <div className="new-box">
                <div
                  className={
                    errorProfile.city !== "" && this.props.tabindex === true
                      ? "form-group error"
                      : "form-group "
                  }
                >
                  <label className="pp_inputHeading">City</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Enter city"
                    id="city"
                    value={per_profile.city}
                    onChange={(e) => {
                      this.changeHandler(e);
                    }}
                  />
                  {errorProfile.city !== "" && this.props.tabindex === true ? (
                    <div className="error-message">{errorProfile.city}</div>
                  ) : null}
                </div>

                <div
                  className={
                    errorProfile.country !== "" && this.props.tabindex === true
                      ? "form-group error"
                      : "form-group "
                  }
                >
                  <label className="pp_inputHeading">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Enter country"
                    id="country"
                    value={per_profile.country}
                    onChange={(e) => {
                      this.changeHandler(e);
                    }}
                  />
                  {errorProfile.country !== "" &&
                  this.props.tabindex === true ? (
                    <div className="error-message">{errorProfile.country}</div>
                  ) : null}
                </div>
              </div>
            </div>{" "}
            {/* end of inner container*/}
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
// return {
// tabindex: state.RegistrationTabBarReducer,
// };
// };

export default PersonalProfile;

export function PersonalProfileTabFooter() {
  return (
    <div>
      <div className="bg1  footer_img_padding">
        <div
          className="personalprofile_foot"
          style={{ backgroundImage: `url(${img2})` }}
        ></div>
      </div>
    </div>
  );
}
