import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import RangeSlider from './RangeSlider'



const Side = props => {
   

    return (
        <>
            <div className="side-menu">
             <Nav className="bg-white sidebar">
                <div className="sidebar-sticky"></div>
                <ul className="skills custom-checkbox p-4">
                    <h3 className="pb-2">Skills</h3>
                    <li className="checkbox-wrapper pb-2">
                        <label className="checkmark">
                            <spna className="heading">Skill 01</spna> 
                        </label>
                        <t className="custom-checkbox">
                            <label className="float-right">
                                <input type="checkbox" name="checkbox"/>
                                <span></span>
                            </label>
                        </t> 
                    </li>
                    <li className="checkbox-wrapper pb-2">
                        <label>
                            <spna className="heading">Skill 02</spna> 
                        </label>
                        <t className="custom-checkbox">
                            <label className="float-right">
                                <input type="checkbox" name="checkbox"/>
                                <span></span>
                            </label>
                        </t>
                     </li>
                     <li className="checkbox-wrapper pb-2">
                        <label>
                            <spna className="heading">Skill 03</spna> 
                        </label>
                        <t className="custom-checkbox">
                            <label className="float-right">
                                <input type="checkbox" name="checkbox"/>
                                <span></span>
                            </label>
                        </t>
                    </li>
                    <li className="checkbox-wrapper pb-2">
                        <label>
                            <spna className="heading">Skill 04</spna> 
                        </label>
                        <t className="custom-checkbox">
                            <label className="float-right">
                                <input type="checkbox" name="checkbox"/>
                                <span></span>
                            </label>
                        </t>
                    </li>
                    <li className="checkbox-wrapper pb-2">
                        <label>
                            <spna className="heading">Skill 05</spna> 
                        </label>
                        <t className="custom-checkbox">
                            <label className="float-right">
                                <input type="checkbox" name="checkbox"/>
                                <span></span>
                            </label>
                        </t>
                    </li>
                    <li className="checkbox-wrapper pb-2">
                        <label>
                            <spna className="heading">Skill 06</spna> 
                        </label>
                        <t className="custom-checkbox">
                            <label className="float-right">
                                <input type="checkbox" name="checkbox"/>
                                <span></span>
                            </label>
                        </t>
                    </li>
                    <li className="checkbox-wrapper pb-2">
                        <label>
                            <spna className="heading">Skill 07</spna> 
                        </label>
                        <t className="custom-checkbox">
                            <label className="float-right">
                                <input type="checkbox" name="checkbox"/>
                                <span></span>
                            </label>
                        </t>
                    </li>
                    <li className="checkbox-wrapper pb-2">
                        <label>
                            <spna className="heading">Skill 08</spna> 
                        </label>
                        <t className="custom-checkbox">
                            <label className="float-right">
                                <input type="checkbox" name="checkbox"/>
                                <span></span>
                            </label>
                        </t>
                    </li>
                </ul>
                <ul className="p-4">
                <h3>Price</h3>
                <RangeSlider/>
                </ul>
                <ul className="p-4 border-top">
                <h3>Project Type</h3>
                <li>
                    <label>
                        <spna className="heading">Hourly</spna> 
                    </label>
                    <t className="custom-checkbox">
                        <label className="float-right">
                            <input type="checkbox" name="checkbox"/>
                            <span></span>
                        </label>
                    </t>
                </li>
                <li>
                    <label>
                        <spna className="heading">Monthly</spna> 
                    </label>
                    <t className="custom-checkbox">
                        <label className="float-right">
                            <input type="checkbox" name="checkbox"/>
                            <span></span>
                        </label>
                    </t>
                </li>
                   
                </ul>
                </Nav>
            </div>
           
          
        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar