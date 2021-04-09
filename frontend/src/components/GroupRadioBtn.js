import React, { Component } from "react";

class GroupRadioBtn extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
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
        <div className="radio"> 
          <label>
            <input
              type="radio"
              value="Private"
              checked={this.state.selectedOption === "Private"}
              onChange={this.onValueChange}
            />
            Private
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Public"
              checked={this.state.selectedOption === "Public"}
              onChange={this.onValueChange}
            />
            Public
          </label>
        </div>
       
    <div>
          Selected option is : {this.state.selectedOption}
        </div>
      </div>
    );
  }
}

export default GroupRadioBtn;