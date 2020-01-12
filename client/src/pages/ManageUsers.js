import React, { Component } from "react";
import ManageUser from "./../Components/Dashboard/ManageUser/ManageUser";

class ManageUsers extends Component {
  render() {
    return (
      <ManageUser history= {this.props.history} />
    );
  };
};


export default ManageUsers;