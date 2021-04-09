import React, { Component, isValidElement } from 'react'
import  "./NotificationSetting.css"
import  "./ProfileSetting.css"
import Dropdown from "../../../components/Dropdown";
import ToggleSwitch  from "../../../components/ToggleSwitch";

export default class NotificationSetting extends Component {
    render() {
        return (
            <div className="notification-setting">
                <div className="ps-heading">
                  Notification Setting
                  <p>Desktop</p>
                  <div className="row">
                  <div className="col-md-6">
                   <Dropdown title="Show notifications for" />
                  </div>
                  <div className="col-md-6">
                   <Dropdown title="Increment message counter for" />
                  </div>
                  </div>
               </div>
               <div className="ps-heading">
                  <p>Mobile</p>
                  <div className="row">
                  <div className="col-md-6">
                   <Dropdown title="Show notifications for" />
                  </div>
                  <div className="col-md-6">
                   <Dropdown title="Increment message counter for" />
                  </div>
                  </div>
               </div>
               <div className="ps-heading">
                  <p>Email <span>(sending to ja******14@gmail.com)</span></p>
                  <div className="row">
                  <div className="col-md-6">
                   <Dropdown title="Send an email with unread activity for" />
                  </div>
                  <div className="col-md-6">
                   <Dropdown />
                  </div>
                  </div>
               </div>
               <div className="ps-heading">
                  <p>Email <span>(sending to ja******14@gmail.com)</span></p>
                  <div className="row">
                  <div className="col-md-6">
                   <Dropdown title="Receive recruiting emails for" />
                  </div>
                  </div>
                  <div className="email-toggle row">
                   <div className="col-md-10">
                      <p>A job is posted or modified</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A job is posted or modified" />
                  </div>
                  <div className="col-md-10">
                      <p>A Proposal is recieved</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived" />
                     
                  </div>
                  <div className="col-md-10">
                      <p>An Interview Is accepted or offer terms are modified</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived"/>
                  </div>
                  <div className="col-md-10">
                      <p>An offer is accepted</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived" />
                  </div>
                  <div className="col-md-10">
                      <p>A job posting will expire soon</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived"/>
                  </div>
                  <div className="col-md-10">
                      <p>A job posting expired</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived"/>
                  </div>
                  <div className="col-md-10">
                      <p>No interview have been initiated</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived" />
                  </div>
                  </div>
                                   
                  </div>
                
                  
                  <div className="ps-heading">
                  <p>Freelancer and agency proposal</p>
                  
                  <div className="email-toggle row">
                   <div className="col-md-10">
                      <p>A job is posted or modified</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived"/>
                  </div>
                  <div className="col-md-10">
                      <p>A Proposal is recieved</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived" />
                  </div>
                  <div className="col-md-10">
                      <p>An Interview Is accepted or offer terms are modified</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived"/>
                  </div>
                  <div className="col-md-10">
                      <p>An offer is accepted</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived"/>
                  </div>
                  <div className="col-md-10">
                      <p>A job posting will expire soon</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived"/>
                  </div>
                 </div> 
                 </div>

                 <div className="ps-heading">
                  <p>Contracts</p>
                  <div className="row">
                  <div className="col-md-6">
                   <Dropdown title="Receive contract emails for" />
                  </div>
                  </div>
                  <div className="email-toggle row">
                   <div className="col-md-10">
                      <p>A job is posted or modified</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch  id="job posted"/>
                  </div>
                  <div className="col-md-10">
                      <p>A Proposal is recieved</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="Proposal Received" />
                  </div>
                  <div className="col-md-10">
                      <p>An Interview Is accepted or offer terms are modified</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived" />
                  </div>
                  <div className="col-md-10">
                      <p>An offer is accepted</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived"/>
                  </div>
                  <div className="col-md-10">
                      <p>A job posting will expire soon</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived"/>
                  </div>
                  <div className="col-md-10">
                      <p>A job posting expired</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived"/>
                  </div>
                  <div className="col-md-10">
                      <p>No interview have been initiated</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived"/>
                  </div>
                  <div className="col-md-10">
                      <p>A job is posted or modified</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived" />
                  </div>
                  <div className="col-md-10">
                      <p>A job is posted or modified</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived" />
                  </div>
                  <div className="col-md-10">
                      <p>A job is posted or modified</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived"/>
                  </div>
                  <div className="col-md-10">
                      <p>A job is posted or modified</p>
                  </div>
                  <div className="col-md-2">
                     <ToggleSwitch id="A proposal is recived" />
                  </div>
                  </div>
                                   
                  </div>

               </div>
               
            
        )
    }
}
