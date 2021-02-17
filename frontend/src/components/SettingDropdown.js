import React, { Component } from 'react';
import './SettingDropdown.css'

class SettingDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'jobs'};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div>
        <p className="SDdropheader">Project Preference</p>
          <select className="SDSelect" value={this.state.value} onChange={this.handleChange} >
           
            <option value="Select">Select</option>
            <option value="Select 2">Select 2</option>
            <option value="Select 3">Select 3</option>
            <option value="Select 4">Select 4</option>
    
           
          </select>
      </div>
    );
  }
}
export default SettingDropdown;
