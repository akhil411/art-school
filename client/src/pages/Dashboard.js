import React, { Component } from "react";
import Dashboard from "./../components/Dashboard/Dashboard";
import Footer from './../components/Footer/Footer'

class UserDashboard extends Component {
  render() {
    return (
      <div>
        <Dashboard history={this.props.history} />
        <Footer />
      </div>
    );
  };
};

export default UserDashboard;
