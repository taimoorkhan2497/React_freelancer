import React, { Component } from "react";
import GetImage from "./GetImage";
import Dropdown from "../../../components/Dropdown";
import "./ProfessionalProfile2.css";
import "../../../../src/common.css";
import img from "../../../assets/Group 3539.png";

import { Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import { connect } from "react-redux";
import list from "../helper/api";

class ProfessionalProfile2 extends Component {
  constructor(props) {
    super(props);
    this.alert = {
      open: false,
      severity: "",
      message: "",
      title: "",
    };

    this.validation = {
      skills: false,
      provideService: false,
      chooseCategory: false,
    };
    this.state = {
      alert: this.alert,
      validation: this.validation,
      provideService: "",
      skills: [],
      chooseCategory: [],
      chooseCategoryHandler: false,
      getchooseCategoryFromStorage: [],
      getSkillsList: [],
      getChooseCategoryList: [],
      isSubmit: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBinaryImg = this.handleBinaryImg.bind(this);
    this.dropDownHandler = this.dropDownHandler.bind(this);
  }

  handleClose() {
    this.setState({ alert: { open: false, severity: "", message: "" } });
  }

  checkvalidtion = () => {
    let {
      validation,
      skills,
      chooseCategory,
      provideService,
      isSubmit,
    } = this.state;

    Object.keys(validation).map((key) => {
      if (key === "chooseCategory") {
    
      } else if (key === "skills") {
        if (this.state.skills !== "") {
        }

      } else if (key === "provideService") {
        if (this.state.provideService !== "") {
        }

      }
    });
    this.setState({ validation });
  };

  checkvalidtion2 = () => {
    let { validation } = this.state;
    let doom = 0;

    Object.values(validation).map((value) => {
      if (value === false) {
        doom = doom + 1;
      }
    });
  };

  handleInputChange(event) {
    const target = event.target;
    var id = target.id;

    if (target.checked) {
      if (this.state.chooseCategory != null) {
        this.setState((prevState) => ({
          chooseCategory: [...prevState.chooseCategory, id],
        }));
      } else {
        this.setState((prevState) => ({
          chooseCategory: [id],
        }));
      }

      // this.setState((prevState) => ({
      //  professionalProfileData: {  chooseCategory: [...prevState.chooseCategory, id], }
      //
      // }));
    } else {
      const chooseCategory = this.state.chooseCategory.filter(
        (chooseCategory) => chooseCategory != id
      );
      const getchooseCategoryFromStorage = this.state.getchooseCategoryFromStorage.filter(
        (getchooseCategoryFromStorage) => getchooseCategoryFromStorage != id
      );
      this.setState({
        chooseCategory,
        getchooseCategoryFromStorage,
      });
    }

    this.setState({ chooseCategoryHandler: true });
    this.checkvalidtion();
  }

  handleBinaryImg(binaryfile) {
    this.props.onStateChange(binaryfile, "Certficate");
  }

  dropDownHandler(provideService2) {
    this.setState({ provideService: provideService2 });
    this.checkvalidtion();
  }

  checkExistedSkill(name) {
    let { skills } = this.state;
    if (skills != null) {
      for (let i = 0; i < this.state.skills.length; i++) {
        if (this.state.skills[i].name === name) {
          return true;
        }
      }
    }
    return false;
  }
  removeSkills = (item) => {
    const skills = this.state.skills.filter((skill) => skill != item);
    this.setState({
      skills,
    });
  };

  checkStoreChooseCategory = (item) => {
    const str = item.toString();
    if (this.state.getchooseCategoryFromStorage != null) {
      for (let i = 0; i < this.state.getchooseCategoryFromStorage.length; i++) {
        if (this.state.getchooseCategoryFromStorage[i] === str) {
          return true;
        }
      }
    } else {
      return false;
    }
  };

  getSkillsList = () => {
    list("api/v1/skill/")
      .then((response) => {
        let list_data = [];
        Object.values(response.data).map((data) => {
          list_data.push({ id: data.id, name: data.name });
        });
        this.setState({ getSkillsList: list_data });
      })
      .catch((error) => {});
  };

  getCategory = () => {
    list("api/v1/category/")
      .then((response) => {
        let list_data = [];
        Object.values(response.data).map((data) => {
          list_data.push({ id: data.id, name: data.name });
        });
        this.setState({ getChooseCategoryList: list_data });
      })
      .catch((error) => {});
  };

  getCategoryFromStorage = () => {
    var storedData = JSON.parse(localStorage.getItem("choosecategory"));

    this.setState({
      getchooseCategoryFromStorage: storedData,
      chooseCategory: storedData,
    });

  };
  getSkillsFromStorage = () => {
    var storedData = JSON.parse(localStorage.getItem("skills"));

    this.setState({
      skills: storedData,
    });
  };

  componentDidMount() {
    this.getSkillsList();
    this.getCategory();
    this.getCategoryFromStorage();
    this.getSkillsFromStorage();
  }

  render() {
    let {
      getSkillsList,
      getChooseCategoryList,
      alert: { open, severity, message, title },
      chooseCategory,
      skills,
      chooseCategoryHandler,
    } = this.state;
    return (
      <div className="ProfessionalProfile">
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
        {chooseCategoryHandler === true &&
          localStorage.setItem(
            "choosecategory",
            JSON.stringify(chooseCategory)
          )}

        {skills != "" && localStorage.setItem("skills", JSON.stringify(skills))}
        <div className="Pf-container proff-prof">
          <div className="container Pf-rightbox   bg2 b_line2 p-5">
            <div class="container-fluid">
              {this.props.onStateChange(this.state, "StateData")}
              <div>
                <div class="row pl-3">
                  <div className="Per_img-wrap">
                    <div
                      className="pp_icon"
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                  </div>
                  <div className="personalProfile_info">
                    <h4 className="pp_Head">Professional Profile</h4>
                    <p className="pp_Para">
                      {" "}
                      Creating your account in just a few steps away, Fill your
                      professional details
                    </p>
                  </div>
                </div>
                <div className="inner-parts">
                  <div className="dropdown">
                    <Dropdown
                      onDropdownn={this.dropDownHandler}
                      title="What service you provide"
                    />
                  </div>
                  <div className="multiselect">
                    <div>
                      <h3>Add your skills</h3>

                      <select
                        onChange={(e) => {
                          let value = JSON.parse(e.target.value);
                          const isExisted = this.checkExistedSkill(value.name);

                          if (isExisted) {
                          } else {
                            let data = {
                              id: value.id,
                              name: value.name,
                            };

                            if (this.state.skills != null) {
                              this.setState((prevState) => ({
                                skills: [...prevState.skills, data],
                              }));
                            } else {
                              this.setState((prevState) => ({
                                skills: [data],
                              }));
                            }
                          }

                          this.checkvalidtion();
                          // this.props.onStateChange(this.state,"StateData");
                        }}
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        {getSkillsList.map((option) => (
                          <option
                            value={JSON.stringify({
                              id: option.id,
                              name: option.name,
                            })}
                          >
                            {" "}
                            {option.name}{" "}
                          </option>
                        ))}
                      </select>

                      <div className="test">
                        {this.state.skills != null &&
                          this.state.skills.map((item, index) => (
                            <div
                              className="option"
                              style={{
                                background: "#61C1B8",
                                color: "white",
                                padding: "0px 8px",
                                margin: "7px ",
                                borderRadius: "4px",
                                width: "113px",
                              }}
                            >
                              <h5 className="Addskillh5item">{item.name} </h5>
                              <span
                                className="float AddSkill_pl"
                                onClick={() => {
                                  this.removeSkills(item);
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                x
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Choose Category Multi_select_checkboxes */}
                <div className="checkboxesMain">
                  <h3>Choose Category</h3>
                  <div className="container_Checkboxes">
                    <div className="row">
                      {getChooseCategoryList.map((list, index) => {
                        return (
                          <div className="example col-4">
                            {}
                            <label className="checkbox-button">
                              <input
                                type="checkbox"
                                className="checkbox-button__input"
                                name="hobbies"
                                id={list.id}
                                value={list.name}
                                onChange={this.handleInputChange}
                                checked={
                                  this.checkStoreChooseCategory(list.id)
                                    ? true
                                    : null
                                }
                              />
                              <span className="checkbox-button__control"></span>
                              <span className="checkbox-button__label">
                                {list.name}
                              </span>
                            </label>
                          </div>
                        );
                      })}
                    </div>{" "}
                    {/* End of first_3col*/}
                  </div>
                </div>{" "}
                {/* Choose Category Multi_select_checkboxes */}
                {/*   <div class="form-row">
             <div class="col-md-12 text-center">
                <button type="submit" class="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
             </div>
             </div> */}
                {/* End of Submit button*/}
                {/* End of multiple checkbox*/}
                <div className="prof-cer">
                  <div className="certificates">
                    <div className="mh1">
                      <p className="certificate">Certficate</p>
                    </div>

                    <div>
                      <div className="getimage">
                        <GetImage
                          onUpload={this.handleBinaryImg}
                          value="onUpload"
                        />
                      </div>
                      {<p>{this.state.img}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tabindex: state.RegistrationTabBarReducer,
  };
};

export default connect(mapStateToProps)(ProfessionalProfile2);
