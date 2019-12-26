import React, { Component } from "react";
import Dashboard from "./../components/Dashboard/Dashboard";

class UserDashboard extends Component {
  render() {
    return (
      <Dashboard history= {this.props.history} />
    );
  };
};


export default UserDashboard;
