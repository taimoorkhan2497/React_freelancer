import React, { Component } from "react";
import "./TabBarReg.css";
import { RegNavbar } from "../../../components/Navbar";
import PersonalProfile, { PersonalProfileTabFooter } from "./PersonalProfile";
import IdVerification, { IdVerificationFooter } from "./IdVerification";
import PaymentInformation, {
  PaymentInformationFooter,
} from "./PaymentInformation";
import HourlyRate, { HourlyRateFooter } from "./HourlyRate";
import ProfessionalProfile2 from "./ProfessionalProfile2";
import ProfessionalProfile2Footer from "./ProfFooter";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import CheckIcon from "@material-ui/icons/Check";
import list, { patch, post, put } from "../helper/api";
import { connect } from "react-redux";
import { RegistrationTabBarAction } from "../../../redux/actions/RegistrationTabBarAction";

import { Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { withRouter } from "react-router-dom";
import { Key } from "react-bootstrap-icons";

class TabbarRegistration extends Component {
  constructor(props) {
    super(props);
    this.alert = {
      open: false,
      severity: "",
      message: "",
      title: "",
    };
    this.state = {
      alert: this.alert,
      tabindex: null,
      userid: null,
      registrationProcessid: null,
      sendData: false,
      showPersonalProfileError: false,
      personalProfileIsSubmited: false,
      personalProfileTickIcon: false,

      professionalProfileError: false,
      professionalProfileCertificateIsSubmited: false,
      professionalProfileOtherdataIsSubmited: false,
      professionalProfileTickIcon: false,

      iDVerificationError: false,
      iDVerificationDrivingLicenseIsSubmited: false,
      iDVerificationIDCardIsSubmited: false,
      iDVerificationTickIcon: false,
      hourlyRateError: false,
      hourlyRateErrorIsSubmited: false,
      proposal_amount: null,
      account_type: this.props.account_type,
      data: {},
      patchdata: {},
      professionalProfilestatedata: {},
    };
  }

  handleClose() {
    this.setState({ alert: { open: false, severity: "", message: "" } });
  }

  sendDataHandler = () => {
    let { sendData } = this.state;
    sendData = true;
    this.setState({ sendData });
  };

  tabUphandler = () => {
    let {
      tabindex,
      personalProfileIsSubmited,
      userid,
      data,
      iDVerificationDrivingLicenseIsSubmited,
      iDVerificationIDCardIsSubmited,
      iDVerificationTickIcon,
      proposal_amount,
      professionalProfileCertificateIsSubmited,
      professionalProfileOtherdataIsSubmited,
      professionalProfilestatedata,
      registrationProcessid,
      patchdata,
      personalProfileTickIcon,
      professionalProfileTickIcon,
    } = this.state;

    this.setState({ showPersonalProfileError: true });
    if (userid && tabindex === 1) {
      if (personalProfileIsSubmited === true) {
        if (registrationProcessid) {
          patch(
            `api/v1/freelancer_profile/${registrationProcessid}/`,
            patchdata
          )
            .then((response) => {
              localStorage.setItem(
                "registration_process_medel_id",
                response.data.id
              );
              this.setState({
                personalProfileTickIcon: true,
                registrationProcessid: response.data.id,
                tabindex: tabindex + 1,
                alert: {
                  open: true,
                  severity: "success",
                  title: "success",
                  message: "you have successfully update step one",
                },
              });
              localStorage.setItem("personalProfileTickIcon", true);
            })
            .catch((error) => {
              this.setState({
                alert: {
                  open: true,
                  severity: "error",
                  title: "Error",
                  message: `${
                    "step one not completed : " + error.response.data
                  }`,
                  // message: "step one not completed",
                },
              });
            });
        } else {
          post("api/v1/freelancer_profile/", data)
            .then((response) => {
              localStorage.setItem(
                "registration_process_medel_id",
                response.data.id
              );
              this.setState({
                personalProfileTickIcon: true,
                registrationProcessid: response.data.id,
                tabindex: tabindex + 1,
                alert: {
                  open: true,
                  severity: "success",
                  title: "success",
                  message: "you have successfully complete step one",
                },
              });
              localStorage.setItem("personalProfileTickIcon", true);
            })
            .catch((error) => {
              this.setState({
                alert: {
                  open: true,
                  severity: "error",
                  title: "Error",
                  //  message:`${key+": "+error.response.data[key][0]}`
                  message: "step one not completed",
                },
              });
            });
        }
      } else {
      }
    } else if (tabindex === 2) {
      if (personalProfileTickIcon) {
        if (
          professionalProfileOtherdataIsSubmited &&
          professionalProfileCertificateIsSubmited
        ) {
          // if(personalProfileTickIcon)
          patch(
            `api/v1/freelancer_profile/${registrationProcessid}/`,
            professionalProfilestatedata
          )
            .then((response) => {
              this.setState({
                professionalProfileTickIcon: true,
                tabindex: tabindex + 1,
                alert: {
                  open: true,
                  severity: "success",
                  title: "success",
                  message:
                    "you have successfully complete professional profile step",
                },
              });
              localStorage.setItem("professionalProfileTickIcon", true);
            })
            .catch((error) => {
              this.setState({
                alert: {
                  open: true,
                  severity: "error",
                  title: "Error",
                  //  message:`${key+": "+error.response.data[key][0]}`
                  message: "step professional profile not completed",
                },
              });
            });
        }
      } else {
        this.setState({
          alert: {
            open: true,
            severity: "error",
            title: "Error",
            message:
              "First you should complete your previous registration steps",
          },
        });
      }
    } else if (tabindex === 3) {
      if (personalProfileTickIcon && professionalProfileTickIcon) {
        this.setState({
          iDVerificationTickIcon: true,
          tabindex: tabindex + 1,
          alert: {
            open: true,
            severity: "success",
            title: "success",
            message: "you have successfully complete id verfication step ",
          },
        });
        localStorage.setItem("iDVerificationTickIcon", true);
      } else {
        this.setState({
          alert: {
            open: true,
            severity: "error",
            title: "Error",
            message:
              "First you should complete your previous registration steps",
          },
        });
      }
    } else if (iDVerificationTickIcon && tabindex === 4) {
      this.setState({
        tabindex: tabindex + 1,
      });
    }
  };

  tabDownhandler = () => {
    this.setState({
      tabindex: this.state.tabindex - 1,
    });
  };

  stepsfinish = () => {
    let {
      proposal_amount,
      userid,
      registrationProcessid,
      personalProfileTickIcon,
      professionalProfileTickIcon,
      iDVerificationTickIcon
    } = this.state;
    this.setState({ hourlyRateError: true });

    let data = { proposal_amount: proposal_amount };

    if (
      personalProfileTickIcon &&
      professionalProfileTickIcon &&
      iDVerificationTickIcon
    ) {
      if (data != "" && data.proposal_amount !== null) {
        patch(`api/v1/freelancer_profile/${registrationProcessid}/`, data).then(
          (response) => {
            this.setState({
              alert: {
                open: true,
                severity: "success",
                title: "success",
                message:
                  "you have successfully complete your registration process",
              },
            });
            setTimeout(() => {
              this.props.history.push("/jobs");
            }, 2000);

            let keysToRemove = [
              "choosecategory",
              "certificate",
              "professionalProfileCertificateIsSubmited",
              "skills",
              "id_card",
              "iDVerificationIDCardIsSubmited",
              "iDVerificationDrivingLicenseIsSubmited",
              "personal_profile",
              "tabindex",
              "professionalProfileTickIcon",
              "driving_License",
              "personalProfileTickIcon",
              "iDVerificationTickIcon",
            ];

            keysToRemove.map((key) => {
              localStorage.removeItem(key);
            });
          }
        );
      }
    } else {
      this.setState({
        alert: {
          open: true,
          severity: "error",
          title: "Error",
          message: "First you should complete your previous registration steps",
        },
      });
    }
  };

  getTabIndexFromLocalStorage = (tabindex2) => {
    this.setState({ tabindex: tabindex2 });
  };

  getTickIconsFromLocalStorage() {
    if (localStorage.getItem("personalProfileTickIcon")) {
      var getpersonalProfileTickIcon = JSON.parse(
        localStorage.getItem("personalProfileTickIcon")
      );
      this.setState({ personalProfileTickIcon: getpersonalProfileTickIcon });
    }

    if (localStorage.getItem("professionalProfileTickIcon")) {
      var getprofessionalProfileTickIcon = JSON.parse(
        localStorage.getItem("professionalProfileTickIcon")
      );
      this.setState({
        professionalProfileTickIcon: getprofessionalProfileTickIcon,
      });
    }

    if (localStorage.getItem("professionalProfileCertificateIsSubmited")) {
      var getprofessionalProfileCertificateIsSubmited = JSON.parse(
        localStorage.getItem("professionalProfileCertificateIsSubmited")
      );
      this.setState({
        professionalProfileCertificateIsSubmited: getprofessionalProfileCertificateIsSubmited,
      });
    }
    if (localStorage.getItem("iDVerificationTickIcon")) {
      var getiDVerificationTickIcon = JSON.parse(
        localStorage.getItem("iDVerificationTickIcon")
      );
      this.setState({ iDVerificationTickIcon: getiDVerificationTickIcon });
    }
    if (localStorage.getItem("iDVerificationIDCardIsSubmited")) {
      var getiDVerificationIDCardIsSubmited = JSON.parse(
        localStorage.getItem("iDVerificationIDCardIsSubmited")
      );
      this.setState({
        iDVerificationIDCardIsSubmited: getiDVerificationIDCardIsSubmited,
      });
    }
    if (localStorage.getItem("iDVerificationDrivingLicenseIsSubmited")) {
      var getiDVerificationDrivingLicenseIsSubmited = JSON.parse(
        localStorage.getItem("iDVerificationDrivingLicenseIsSubmited")
      );
      this.setState({
        iDVerificationDrivingLicenseIsSubmited: getiDVerificationDrivingLicenseIsSubmited,
      });
    }
  }

  removeLocalStorageData() {
    let keysToRemove = [
      "registration_process_medel_id",
      "choosecategory",
      "certificate",
      "professionalProfileCertificateIsSubmited",
      "skills",
      "id_card",
      "iDVerificationIDCardIsSubmited",
      "iDVerificationDrivingLicenseIsSubmited",
      "personal_profile",
      "tabindex",
      "professionalProfileTickIcon",
      "driving_License",
      "personalProfileTickIcon",
      "iDVerificationTickIcon",
      "serviceProvide",
    ];

    keysToRemove.map((key) => {
      localStorage.removeItem(key);
    });

    var getToken = localStorage.getItem("token")
      localStorage.setItem("registrationProcessToken", getToken)
    
  }

  getRegistrationToken() {
   

    if (localStorage.getItem("registrationProcessToken")) {
      if (
        localStorage.getItem("registrationProcessToken") !=
        localStorage.getItem("token")
      ) {
        this.removeLocalStorageData();
      }
    } else{
      var getToken = localStorage.getItem("token");
      localStorage.setItem("registrationProcessToken", getToken);
    }
  }

  componentDidMount() {
    let { userid, registrationProcessid } = this.state;
    list("api/v1/accounts/profile/")
      .then((res) => {
        var data = JSON.parse(res.data.id);
        userid = data;
        this.setState({ userid });
        localStorage.setItem("profile_id", data);
      })
      .catch((error) => {});

    list("api/v1/attachment/")
      .then((res) => {
        var data = JSON.parse(res.data.id);
      })
      .catch((error) => {});

    var tabindex2 = 1;

    this.getRegistrationToken();

    if (localStorage.getItem("tabindex")) {
      tabindex2 = parseInt(localStorage.getItem("tabindex"));
    }

    if (localStorage.getItem("registration_process_medel_id")) {
      registrationProcessid = parseInt(
        localStorage.getItem("registration_process_medel_id")
      );

      this.setState({ registrationProcessid });
    }

    this.getTabIndexFromLocalStorage(tabindex2);

    this.getTickIconsFromLocalStorage();


  }

  personalProfilestateHandler = (stateData, isSubmit) => {
    let { data, userid, patchdata } = this.state;
    if (isSubmit === true) {
      data = {
        mobile_no: stateData.mobile_number,
        street: stateData.address,
        user: {
          id: userid,
          first_name: stateData.first_name,
          last_name: stateData.last_name,
        },
        account_type: this.state.account_type,
        city: {
          name: stateData.city,
        },
        country: {
          name: stateData.country,
        },
      };
      patchdata = {
        mobile_no: stateData.mobile_number,
        street: stateData.address,
        user: {
          first_name: stateData.first_name,
          last_name: stateData.last_name,
        },
        account_type: this.state.account_type,
        city: {
          name: stateData.city,
        },
        country: {
          name: stateData.country,
        },
      };
      this.setState({ data, patchdata });
      this.setState({ personalProfileIsSubmited: true });
    } else {
      this.setState({ personalProfileIsSubmited: false });
    }
    this.setState({ showPersonalProfileError: false });
  };

  professionalProfileStateHandler = (stateData, dataType) => {
    let {
      professionalProfileOtherdataIsSubmited,
      professionalProfileCertificateIsSubmited,
      registrationProcessid,
    } = this.state;
    let data = {};
    let skills = [];
    let chooseCategory = [];

    if (dataType === "Certficate") {
      let data = new FormData();
      data.append("file", stateData);
      data.append("model", "profile");
      data.append("model_id", registrationProcessid);
      data.append("type", "certification");
      registrationProcessid &&
        post("api/v1/attachment/", data)
          .then((response) => {
            this.setState({ professionalProfileCertificateIsSubmited: true });
            localStorage.setItem(
              "professionalProfileCertificateIsSubmited",
              true
            );
          })
          .catch((error) => {});
    } else if (dataType === "StateData") {
      this.setState({ professionalProfilestatedata: stateData });

      if (
        stateData.skills != "" &&
        stateData.skills != null &&
        stateData.provideService !== "" &&
        stateData.chooseCategory != ""
      ) {
        stateData.skills.map((key, index) => {
          skills.push(key.id);
        });

        stateData.chooseCategory &&
          stateData.chooseCategory.map((key, index) => {
            let name = key;
            chooseCategory.push(name);
          });

        data = {
          service: stateData.provideService,
          skills: skills,
          category: chooseCategory,
        };
        this.setState({
          professionalProfileOtherdataIsSubmited: true,

          professionalProfilestatedata: data,
        });
      } else {
        this.setState({
          professionalProfileOtherdataIsSubmited: false,
        });
      }

      if (
        professionalProfileOtherdataIsSubmited &&
        professionalProfileCertificateIsSubmited
      ) {
        this.setState({ professionalProfileError: true });
      } else {
        this.setState({ professionalProfileError: false });
      }
    }
  };

  idVerificationStateHandler = (stateData, datatype) => {
    let {
      iDVerificationIDCardIsSubmited,
      iDVerificationDrivingLicenseIsSubmited,
      registrationProcessid,
    } = this.state;

    if (datatype === "license") {
      let data = new FormData();
      data.append("file", stateData);
      data.append("model", "profile");
      data.append("model_id", registrationProcessid);
      data.append("type", "certification");

      registrationProcessid &&
        post("api/v1/attachment/", data)
          .then((response) => {
            this.setState({ iDVerificationDrivingLicenseIsSubmited: true });
            localStorage.setItem(
              "iDVerificationDrivingLicenseIsSubmited",
              true
            );
          })
          .catch((error) => {});
    } else if (datatype === "id_card") {
      let data = new FormData();
      data.append("file", stateData);
      data.append("model", "profile");
      data.append("model_id", 58);
      data.append("type", datatype);

      registrationProcessid &&
        post("api/v1/attachment/", data)
          .then((response) => {
            this.setState({ iDVerificationIDCardIsSubmited: true });
            localStorage.setItem("iDVerificationIDCardIsSubmited", true);
          })
          .catch((error) => {});
    } else {
    }
  };
  paymentInformationStateHandler = (stateData) => {};

  hourlyRateStateHandler = (stateData) => {
    this.setState({ proposal_amount: stateData });
  };

  render() {
    let {
      tabindex,
      alert: { open, severity, message, title },
      personalProfileIsSubmited,
      professionalProfileTickIcon,
      professionalProfileCertificateIsSubmited,
      professionalProfileOtherdataIsSubmited,
      personalProfileTickIcon,
      iDVerificationDrivingLicenseIsSubmited,
      iDVerificationIDCardIsSubmited,
      hourlyRateErrorIsSubmited,
      iDVerificationTickIcon,
    } = this.state;

    if (tabindex > 1) {
      localStorage.setItem("tabindex", tabindex);
    } else if (tabindex === 1) {
      localStorage.setItem("tabindex", 1);
    }

    return (
      <div className="tabbar  tabbarMain_bg">
        <Snackbar
          open={open}
          autoHideDuration={6000}
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
        <div className="container tabbarContainer">
          <div className="row">
            <div className="tabbar_min_height col-xs-6 col-sm-4 col-md-4 col-lg-3 p-0 tabbar_sidebar_bg">
              <div>
                <RegNavbar />
              </div>
              <div className="tabbar_tabarlist pt-4 pb-5 Changepadding ml-3 ">
                <div className="ml-4 container">
                  <div className="Tab">
                    <span
                      className=" "
                      onClick={() => this.setState({ tabindex: 1 })}
                    >
                      {/*
              <button type="button" className={"btn btn-outline-secondary btn-circle btn-md " + (this.state.tabindex=== 1 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 1 })}> 1</button> */}

                      {personalProfileTickIcon ? (
                        <span
                          style={{
                            color: "white",
                            background: " #1DA799",
                            borderRadius: "25px",
                          }}
                        >
                          <CheckIcon />
                        </span>
                      ) : (
                        <button
                          className={
                            "Buttoncls " +
                            (tabindex === 1 ? "ButtonclsActive" : "hidden")
                          }
                          onClick={() => this.setState({ tabindex: 1 })}
                        >
                          1
                        </button>
                      )}

                      <span
                        className={
                          "text2" +
                          (this.state.tabindex === 1 ? "y-text" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 1 })}
                      >
                        Personal Profile
                      </span>
                    </span>{" "}
                  </div>{" "}
                  <div
                    className={
                      "line " + (tabindex === 1 ? "lineActive" : "hidden")
                    }
                  >
                    {" "}
                  </div>
                  <div className="Tab">
                    <span
                      className=" "
                      onClick={() => this.setState({ tabindex: 2 })}
                    >
                      {professionalProfileTickIcon ? (
                        <span
                          style={{
                            color: "white",
                            background: " #1DA799",
                            borderRadius: "25px",
                            height: "25px",
                            width: "25px",
                          }}
                        >
                          <CheckIcon />
                        </span>
                      ) : (
                        <button
                          className={
                            "Buttoncls " +
                            (tabindex === 2 ? "ButtonclsActive" : "hidden")
                          }
                          onClick={() => this.setState({ tabindex: 2 })}
                        >
                          2
                        </button>
                      )}
                      <span
                        className={
                          "text2" +
                          (this.state.tabindex === 2 ? "y-text" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 2 })}
                      >
                        Professional Profile
                      </span>
                    </span>{" "}
                  </div>{" "}
                  <div
                    className={
                      "line " + (tabindex === 2 ? "lineActive" : "hidden")
                    }
                  >
                    {" "}
                  </div>
                  <div className="Tab">
                    <span
                      className=" "
                      onClick={() => this.setState({ tabindex: 3 })}
                    >
                      {iDVerificationTickIcon ? (
                        <span
                          style={{
                            color: "white",
                            background: " #1DA799",
                            borderRadius: "25px",
                          }}
                        >
                          <CheckIcon />
                        </span>
                      ) : (
                        <button
                          className={
                            "Buttoncls " +
                            (tabindex === 3 ? "ButtonclsActive" : "hidden")
                          }
                          onClick={() => this.setState({ tabindex: 3 })}
                        >
                          3
                        </button>
                      )}
                      <span
                        className={
                          "text2" +
                          (this.state.tabindex === 3 ? "y-text" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 3 })}
                      >
                        ID Verification
                      </span>
                    </span>{" "}
                  </div>{" "}
                  <div
                    className={
                      "line " + (tabindex === 3 ? "lineActive" : "hidden")
                    }
                  >
                    {" "}
                  </div>
                  <div className="Tab">
                    <span
                      className=" "
                      onClick={() => this.setState({ tabindex: 4 })}
                    >
                      {iDVerificationTickIcon ? (
                        <span
                          style={{
                            color: "white",
                            background: " #1DA799",
                            borderRadius: "25px",
                          }}
                        >
                          <CheckIcon />
                        </span>
                      ) : (
                        <button
                          className={
                            "Buttoncls " +
                            (tabindex === 4 ? "ButtonclsActive" : "hidden")
                          }
                          onClick={() => this.setState({ tabindex: 4 })}
                        >
                          4
                        </button>
                      )}
                      <span
                        className={
                          "text2" +
                          (this.state.tabindex === 4 ? "y-text" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 4 })}
                      >
                        Payment Information
                      </span>
                    </span>{" "}
                  </div>{" "}
                  <div
                    className={
                      "line " + (tabindex === 4 ? "lineActive" : "hidden")
                    }
                  >
                    {" "}
                  </div>
                  <div className="Tab">
                    <span
                      className=" "
                      onClick={() => this.setState({ tabindex: 5 })}
                    >
                      <button
                        className={
                          "Buttoncls " +
                          (tabindex === 5 ? "ButtonclsActive" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 5 })}
                      >
                        5
                      </button>
                      <span
                        className={
                          "text2" +
                          (this.state.tabindex === 5 ? "y-text" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 5 })}
                      >
                        Hourly Rate
                      </span>
                    </span>{" "}
                  </div>
                </div>
              </div>

              {tabindex === 1 && <PersonalProfileTabFooter />}
              {tabindex === 2 && <ProfessionalProfile2Footer />}
              {tabindex === 3 && <IdVerificationFooter />}
              {tabindex === 4 && <PaymentInformationFooter />}
              {tabindex === 5 && <HourlyRateFooter />}
            </div>

            <div className="tabbar_min_height col-xs-6 col-sm-8 col-md-8 col-lg-9  p-5 tabbar_panel_background">
              {tabindex === 1 && (
                <PersonalProfile
                  onStateChange={this.personalProfilestateHandler}
                  tabindex={this.state.showPersonalProfileError}
                />
              )}
              {tabindex === 2 && (
                <ProfessionalProfile2
                  onStateChange={this.professionalProfileStateHandler}
                  showError={this.state.professionalProfileError}
                />
              )}
              {tabindex === 3 && (
                <IdVerification
                  onStateChange={this.idVerificationStateHandler}
                />
              )}
              {tabindex === 4 && (
                <PaymentInformation
                  onStateChange={this.paymentInformationstateHandler}
                />
              )}
              {tabindex === 5 && (
                <HourlyRate
                  onStateChange={this.hourlyRateStateHandler}
                  showError={this.state.hourlyRateError}
                />
              )}

              <div className="container tabbar_next_pre_btn_background pt-4 pb-5">
                {tabindex > 1 && (
                  <button
                    type="button"
                    className="btn rounded-pill "
                    onClick={() => this.setState({ tabindex: tabindex - 1 })}
                  >
                    {" "}
                    Previous Step
                  </button>
                )}

                {tabindex < 5 ? (
                  <button
                    type="button"
                    className="btn tb_nextButton"
                    onClick={() => {
                      this.tabUphandler();
                      this.sendDataHandler();
                    }}
                  >
                    {" "}
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn tb_nextButton"
                    onClick={() => {
                      this.stepsfinish();
                    }}
                  >
                    {" "}
                    FINISH <ArrowRightAltIcon />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TabbarRegistration);