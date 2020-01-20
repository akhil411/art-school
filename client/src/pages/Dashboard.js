import React, { Component } from "react";
import Dashboard from "./../components/Dashboard/Dashboard";
import Footer from './../components/Footer/Footer';
import Chat from './../components/Chat/Chat';

class UserDashboard extends Component {
  render() {
    return (
      <div className="dashboard-wrapper">
        <Dashboard history={this.props.history} />
        <Chat />
        <Footer />
      </div>
    );
  };
};

export default UserDashboard;
