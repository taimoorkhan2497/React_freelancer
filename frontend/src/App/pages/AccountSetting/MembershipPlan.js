import React, { Component } from 'react'
import  "./MembershipPlan.css"
import  "./ProfileSetting.css"
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="membership-plan">
        <div className="mp-heading">
            Membership Plans
                <span>
                    <button>Edit Membership Plan</button>
                </span>
        </div>
        <div className="mp-tabs">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor='#FFFFF' >
                <Tab label="Current Plan" {...a11yProps(0)} disableRipple='true' />
                <Tab label="Basic" {...a11yProps(1)} disableRipple='true' />
              </Tabs>
        <TabPanel className="current-plan" value={value} index={0}>
        <div className="basic-bids">
             <div className="row">
         <div className="content-basic col-md-6 col-sm-6">
          <p>Available Bids</p>
          <t>18</t>
         </div>
         <div className="buttons-basic col-md-6 col-sm-6">
          <p>view order history</p>
          <button>purchase bids</button>
         </div>
         </div>
         <div className="membership-info row">
            <div className="membership-left col-md-3 col-sm-5">
             <p>Membership Bids</p>
             <p>Membership Fee</p>
             <p>Current Billing Cycle</p>
            </div>
            <div className="membership-right col-md-9 col-sm-7">
             <p>0 per months</p>
             <p>Free</p>
             <p>Current Billing Cycle</p>
            </div>
         </div>
         </div>
        </TabPanel>
        <TabPanel className="basic-plan" value={value} index={1}>
         Put any content here
        </TabPanel>
        </div>
        <div className="my-profile-links col-md-12">
            <a href="">discard changes</a>
             <button>save changes</button>
        </div>
        </div>
       
  );
}
