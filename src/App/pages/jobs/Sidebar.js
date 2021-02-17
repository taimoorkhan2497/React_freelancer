import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './sidebar.css';

const Side = props => {
   

    return (
        <>
            <div className="side-menu">
             <Nav className="bg-white sidebar">
                <div className="sidebar-sticky"></div>
                <ul>
                    <h3>Skills</h3>
                    <li>
                    <label>
                        <spna className="heading">Skill 01</spna> 
                        <input type="checkbox" name="name" />
                    </label>
                    </li>
                    <li>
                    <label>
                    <spna className="heading">Skill 02</spna> 
                        <input type="checkbox" name="name" />
                    </label>
                    </li>
                    <li>
                    <label>
                    <spna className="heading">Skill 03</spna> 
                        <input type="checkbox" name="name" />
                    </label>
                    </li>
                    <li>
                    <label>
                    <spna className="heading">Skill 04</spna> 
                        <input type="checkbox" name="name" />
                    </label>
                    </li>
                    <li>
                    <label>
                    <spna className="heading">Skill 05</spna> 
                        <input type="checkbox" name="name" />
                    </label>
                    </li>
                    <li>
                    <label>
                    <spna className="heading">Skill 06</spna> 
                        <input type="checkbox" name="name" />
                    </label>
                    </li>
                    <li>
                    <label>
                    <spna className="heading">Skill 07</spna> 
                        <input type="checkbox" name="name" />
                    </label>
                    </li>
                    <li>
                    <label>
                    <spna className="heading">Skill 08</spna> 
                        <input type="checkbox" name="name" />
                    </label>
                    </li>
                </ul>
                </Nav>
            </div>
           
          
        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar