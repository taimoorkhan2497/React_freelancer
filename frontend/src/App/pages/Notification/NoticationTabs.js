import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AvatarImage1 from "../../../../src/img/AvatarImage1.png";
import React, { useState, useEffect } from "react";
import list from "../helper/api";

function createData(id, budget, title, description, skills, category) {
  return { id, budget, title, description, skills, category };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [offerRows, setofferRows] = React.useState([]);
  const [contractRows, setcontractRows] = React.useState([]);
  const [clientID, setclientID] = React.useState([]);
  const [approve, setApproved] = useState(''); // button
  const [clientid, setclientid] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function clickHandler(type) {
   if(type = 'reject'){
     setApproved("reject")
   }else{
   setApproved("Accept")
   }
  }

  // Invite
  function getInvite() {
    let all_data = [];
    list("api/v1/invite/").then((response) => {
      response.data.map((row) => {
        all_data.push(row);
      });
      setRows(all_data);
      console.log("res data ", all_data);
    });
  }
  // Invite

  // Offer

  function getoffer() {
    let offer_data = [];
    list("api/v1/offer/").then((response) => {
      response.data.map((row) => {
        offer_data.push(row);
        offerRows.push(row);


        // Clinet ID
        list("api/v1/client_profile/" + row.client + "/")
        .then((response) => {
            console.log("response :", row);
            const data = response.data;
            console.log("get response :", data);
            setclientid(data);

        });
      // Clinet ID
      });
      setofferRows(offer_data);
      console.log("res2 data ", offer_data);
      console.log("res2 data offerRows ", offerRows);
    });
  }
   
  // Offer

  // Contract
  function getcontract() {
    let contract_data = [];
    list("api/v1/contract/").then((response) => {
      console.log("response 3", contract_data);
      response.data.map((row) => {
        contract_data.push(row);
        // Clinet ID
        list("api/v1/client_profile/" + row.client + "/")
        .then((response) => {
            console.log("response :", row);
            const data = response.data;
            console.log("get response :", data);
            setclientid(data);

        });
      // Clinet ID
      });
      setcontractRows(contract_data);
      console.log("res3 data ", contract_data);
    });
  }
  // Contract

  useEffect(() => {
    getInvite();
    getoffer();
    getcontract();
    // getclient()
  }, []);

 

  return (
    <div className="notification-tabs pt-5">
      <div className={classes.root}>
        <AppBar position="static">
          <h1 className="pl-3 pt-4 m-0 notification-heading">Notification</h1>
          <div className="border-bottom">
            <div className="pl-2">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Invites" {...a11yProps(0)} />
                <Tab label="Offers" {...a11yProps(1)} />
                <Tab
                  classes={{ root: "customlink" }}
                  label="Contract"
                  {...a11yProps(2)}
                />
              </Tabs>
            </div>
          </div>
        </AppBar>

        {/* invites */}
        <TabPanel className="border-bottom mt-5" value={value} index={0}>
          {/* tab1 */}
          {rows.map((row, index) => (
            <div className="notification-inner">
              <div className="container">
                <div className="p-3">
                  <div className="row">
                    <div className="col-md-3 pl-0">
                      <div className="tabs-inner">
                        <img src={AvatarImage1} alt="no img" />
                        <h4 className="pl-2 pt-2">
                          {row.client}
                          <br></br>
                          <span>{row.created_at}</span>
                        </h4>
                      </div>
                      {console.log("map method", row)}
                    </div>
                    <div className="col-md-9 text-right pr-0">
                      <ul className="notification-tab-btns">
                        <li
                          class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"
                          onClick={(type)=>{clickHandler(type)}}
                        >
                          <Link>Approved</Link>
                        </li>
                        <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2 aprroved-state">
                          <Link>123</Link>
                        </li>
                        <li class="btn btn-warning text-white btn-lg button-color reject-btn">
                          <Link onClick={(type)=>{clickHandler(type)}}>Reject</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="notification-des">
                    <h3>{row.cover_letter},</h3>
                    <p>{row.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* tab1 */}
        </TabPanel>
        {/* invites */}

        {/* Offer*/}
        <TabPanel className="border-bottom mt-5" value={value} index={1}>
          {/* tab1 */}
          {offerRows.map((row, index) => (
            <div className="notification-inner">
              <div className="container">
                <div className="p-3">
                  <div className="row">
                    <div className="col-md-3 pl-0">
                      <div className="tabs-inner">
                        <img src={AvatarImage1} alt="no img" />
                        <h4 className="pl-2 pt-2">
                          {clientid?.user?.username}
                          <br></br>
                          <span>{row.created_at}</span>
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-9 text-right pr-0">
                      <ul className="notification-tab-btns">
                        <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2">
                          <Link>{row.status}</Link>
                        </li>
                        <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2 aprroved-state">
                          <Link>123</Link>
                        </li>

                        <li class="btn btn-warning text-white btn-lg button-color reject-btn">
                          <Link>Reject</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="notification-des">
                    <h3>{row.cover_letter},</h3>
                    <p>{row.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* tab1 */}
        </TabPanel>
        {/* Offer*/}

        {/* Contract*/}
        <TabPanel className="border-bottom mt-5" value={value} index={2}>
          {/* tab1 */}

          {contractRows.map((row, index) => (
            <div className="notification-inner">
              <div className="container">
                <div className="p-3">
                  <div className="row">
                    <div className="col-md-3 pl-0">
                      <div className="tabs-inner">
                        <img src={AvatarImage1} alt="no img" />
                        <h4 className="pl-2 pt-2">
                          {clientid?.user?.username} <br></br>
                          <span>{row.created_at}</span>
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-9 text-right pr-0">
                      <ul className="notification-tab-btns">
                        <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2">
                          <a class="" href="#">
                            Approve
                          </a>
                        </li>
                        <li class="btn btn-warning text-white btn-lg button-color reject-btn">
                          <a class="" href="#">
                            Reject
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="notification-des">
                    <h3>{row.title},</h3>
                    <p>{row.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* tab1 */}
        </TabPanel>
        {/* Contract*/}
      </div>
    </div>
  );
}
