import React, { Component } from "react";
import Dashboard from "./../components/Dashboard/Dashboard";
import { Col, Row, Container } from "../components/layout/Grid";
import Jumbotron from "../components/layout/Jumbotron";


class UserDashboard extends Component {
  render() {
    return (
      <Dashboard history= {this.props.history} />
    );
  };
};


export default UserDashboard;
