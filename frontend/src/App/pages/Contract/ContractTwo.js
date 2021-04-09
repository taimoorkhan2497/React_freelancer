import React, { useState, useEffect } from "react";
import ContractNav from "./ContractNav";
import Header from "../../../../src/components/header/Header";
import "../../../assets/css/custom.css";
import ContractView from "./ContractView";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import FooterMenu from "./FooterMenu";
import WorkIcon from "@material-ui/icons/Work";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CalanderIcon from "../../../img/calendar.svg";
import AvtarIcon from "../../../img/contract-img.png";
import { useHistory } from "react-router-dom";
import list from "../helper/api";

export default function ContractTwo() {
  let history = useHistory();

  const [user, setUser] = useState();
  const contractData = () => {
    list("api/v1/contract/")
      .then((response) => {
        let { ...data } = response.data[2];
        console.log("response ", response.data[2]);
        setUser(data);
      })
      .catch((error) => console.error(`Error:${error}`));
  };

  const handleClick = () => {
    history.push("/jobs");
  };

  useEffect(() => {
    contractData();
  }, []);
  return (
    <div className="contract-pg2">
      {/* top header */}
      <div className="top-area">
        <Header />
      </div>
      {/* top header */}
      <div className="contractone-main">
        <div className="container">
          <div className="main-wrap pt-5 pl-4 pr-4">
            <div className="row mb-5">
              <div className="col-md-3 col-sm-4">
                <ContractNav />
              </div>
              <div className="col-md-9 col-sm-8">
                <ContractView />
                <div className="cont-row">
                  <div className="con-des-area">
                    <div className="content-heading">
                      <div className="contact1-avatar">
                        <img src={AvtarIcon} alt="no img" />
                      </div>
                      <h3 className="pl-3">{user?.job?.title}</h3>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleClick}
                      >
                        View Job
                      </Button>
                    </div>
                    <div className="row">
                      <div className="col-md-1"></div>
                      <div className="col-md-11">
                        <ul className="duration pl-1">
                          <li className="pr-3">
                            <p className="m-icon">
                              <span className="pr-1">
                                <WorkIcon />
                              </span>
                              {user?.job?.pay_type}
                            </p>
                          </li>
                          <li className="pr-3">
                            <p className="m-icon">
                              <span className="pr-1">
                                <img src={CalanderIcon} alt="no img" />
                              </span>
                              2 months
                            </p>
                          </li>
                          <li className="pr-3">
                            <p className="m-icon">
                              <span className="pr-1">
                                <WatchLaterIcon />
                              </span>
                              {user?.job?.created_at}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mile-stones">
                    <div className="milestone-row border-bottom">
                      <div className="container">
                        <div className="row mb-3">
                          <div className="col-md-9">
                            <div className="pl-2">
                              <h3>Milestone 1</h3>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="state-active1 pr-3">
                              <li>
                                <span className="active-state mr-1"></span>
                                Active
                              </li>
                            </div>
                          </div>
                        </div>
                        <div className="row m-info pl-2">
                          <div className="col-md-1">
                            <div>
                              <Avatar className="my-name">1</Avatar>
                            </div>
                          </div>
                          <div className="col-md-9 align-self-center pt-2 pl-0">
                            <div>
                              <h4 className="align-self-center">
                                <b>Wireframes</b>
                              </h4>
                            </div>
                          </div>
                          <div className="col-md-2 pr-0 pt-1">
                            <div>
                              <div className="price-tag">
                                {user?.job?.budget}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row m-info r-3 pl-3 pt-3">
                          <div className="col-md-3">
                            <div>
                              <h4>Project type</h4>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div>
                              <h5>{user?.job?.pay_type}</h5>
                            </div>
                          </div>
                          <div className="col-md-2 pr-0"></div>
                        </div>
                        <div className="row m-info r-3 pl-3 pb-2">
                          <div className="col-md-3">
                            <div>
                              <h4>Time</h4>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <h5>Mar 22 - Present</h5>
                            </div>
                          </div>
                          <div className="col-md-5 pr-0">
                            <div className="mile-inner-text">
                              <p className="mile-heading">
                                Payment Request Submitted<br></br>
                                <span className="mile-time">3 Min ago</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* row2 */}
                    <div className="milestone-row border-bottom pt-4">
                      <div className="container">
                        <div className="row mb-3">
                          <div className="col-md-9">
                            <div className="pl-2">
                              <h3>Milestone 2</h3>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="state-disable pr-3">
                              <li>
                                <span className="disable-state mr-1"></span>
                                Inactive
                              </li>
                            </div>
                          </div>
                        </div>
                        <div className="row m-info pl-2">
                          <div className="col-md-1">
                            <div>
                              <Avatar className="my-name">1</Avatar>
                            </div>
                          </div>
                          <div className="col-md-9 align-self-center pt-2 pl-0">
                            <div>
                              <h4 className="align-self-center">
                                <b>Interface Design</b>
                              </h4>
                            </div>
                          </div>
                          <div className="col-md-2 pr-0 pt-1">
                            <div>
                              <div className="price-tag">
                                {user?.job?.budget}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row m-info r-3 pl-3 pt-3">
                          <div className="col-md-3">
                            <div>
                              <h4>Project type</h4>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div>
                              <h5>{user?.job?.pay_type}</h5>
                            </div>
                          </div>
                          <div className="col-md-2 pr-0"></div>
                        </div>
                        <div className="row m-info r-3 pl-3 mt-2 pb-2">
                          <div className="col-md-3">
                            <div>
                              <h4>Time</h4>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <h5>Mar 22 - Present</h5>
                            </div>
                          </div>
                          <div className="col-md-5 pr-0"></div>
                        </div>
                      </div>
                    </div>

                    <div className="milestone-row border-bottom pt-4 mb-2">
                      <div className="container">
                        <div className="row mb-3">
                          <div className="col-md-9">
                            <div className="pl-2">
                              <h3>Milestone 3</h3>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="state-disable pr-3">
                              <li>
                                <span className="disable-state mr-1"></span>
                                Inactive
                              </li>
                            </div>
                          </div>
                        </div>
                        <div className="row m-info pl-2">
                          <div className="col-md-1">
                            <div>
                              <Avatar className="my-name">1</Avatar>
                            </div>
                          </div>
                          <div className="col-md-9 align-self-center pt-2 pl-0">
                            <div>
                              <h4 className="align-self-center">
                                <b>Prototype</b>
                              </h4>
                            </div>
                          </div>
                          <div className="col-md-2 pr-0 pt-1">
                            <div>
                              <div className="price-tag">
                                {" "}
                                {user?.job?.budget}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row m-info r-3 pl-3 pt-3">
                          <div className="col-md-3">
                            <div>
                              <h4>Project type</h4>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div>
                              <h5>{user?.job?.pay_type}</h5>
                            </div>
                          </div>
                          <div className="col-md-2 pr-0"></div>
                        </div>
                        <div className="row m-info r-3 pl-3 mt-2 pb-2">
                          <div className="col-md-3">
                            <div>
                              <h4>Time</h4>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <h5>Mar 22 - Present</h5>
                            </div>
                          </div>
                          <div className="col-md-5 pr-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="invoice-details">
                    <h3>Invoice Receipt</h3>
                    <FooterMenu />
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
