import React, { Component } from "react";

class RadioGroup extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="It’s Just me"
              checked={this.state.selectedOption === "It’s Just me"}
              onChange={this.onValueChange}
            />
            &nbsp; It’s Just me
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="2-9"
              checked={this.state.selectedOption === "2-9"}
              onChange={this.onValueChange}
            />
            &nbsp; 2 - 9 employees
          </label>
        </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              value="10-99"
              checked={this.state.selectedOption === "10-99"}
              onChange={this.onValueChange}
            />
            &nbsp; 10 - 99 employees
          </label>
        </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              value="100-499"
              checked={this.state.selectedOption === "100-499"}
              onChange={this.onValueChange}
            />
            &nbsp; 100 - 499 employees
          </label>
        </div>

        
        <div className="radio">
          <label>
            <input
              type="radio"
              value="500-1000"
              checked={this.state.selectedOption === "500-1000"}
              onChange={this.onValueChange}
            />
            &nbsp; 500 - 1000 employees
          </label>
        </div>

        
        <div className="radio">
          <label>
            <input
              type="radio"
              value="More than 1000"
              checked={this.state.selectedOption === "More than 1000"}
              onChange={this.onValueChange}
            />
            &nbsp; More than 1000 employees
          </label>
        </div>

        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        
      </form>
    );
  }
}

export default RadioGroup;