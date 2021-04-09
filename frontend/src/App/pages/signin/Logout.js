import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Logout extends Component {
  Logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <p onClick={() => this.Logout()}> Logout </p>
      </div>
    );
  }
}

export default withRouter(Logout);