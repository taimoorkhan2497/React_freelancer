import React, { Component } from "react";
import './GroupRadioBtn.css'

class GroupRadioBtn extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      selectedOption:"Private"
    };
    this.onValueChange = this.onValueChange.bind(this);

  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {
    return (
          <div>
          <p className="GRdropheader">Visibility</p>
        <div className="radio_flex"> 
        <div className="radio rd_btn1"> 
        
            <input
              type="radio"
              value="Private"
              checked={this.state.selectedOption === "Private"}
              onChange={this.onValueChange}
              className="radioInput"
            />
            <label className="radio_Padg">
            Private
          </label>
        </div>
        <div className="radio rd_btn1">
       
    
            <input
              type="radio"
              value="Public"
              checked={this.state.selectedOption === "Public"}
              onChange={this.onValueChange}
              className="radioInput"
            />
     
            <label  className="radio_Padg">
            Public
          </label>
        </div>
      
      </div>
      </div>
    );
  }
}

export default GroupRadioBtn;