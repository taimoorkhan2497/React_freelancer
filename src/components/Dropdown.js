import React, { Component } from 'react';
import './Dropdown.css'

class Dropdown extends React.Component {
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
        <p className="dropheader">What service you provide</p>
          <select className="Select" value={this.state.value} onChange={this.handleChange} >
           
            <option value="Select service">Select service</option>
            <option value="Copywriting">Copywriting</option>
            <option value="Blog Editing">Blog Editing</option>
            <option value="Web Design">Web Design</option>
            <option value="Web Development">Web Development</option>
            <option value="WordPress Setup">WordPress Setup</option>
            <option value="Graphic Design">Graphic Design</option>
           
          </select>
      </div>
    );
  }
}
export default Dropdown;
