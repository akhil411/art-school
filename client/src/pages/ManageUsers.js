import React, { Component } from "react";
import ManageUser from "./../components/Dashboard/ManageUser/ManageUser";

class ManageUsers extends Component {
  render() {
    return (
      <ManageUser history= {this.props.history} />
    );
  };
};


export default ManageUsers;