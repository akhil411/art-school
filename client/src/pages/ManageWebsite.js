import React, { Component } from "react";
import ManageWebsite from "./../Components/Dashboard/ManageWebsite/ManageWebsite";

class ManageContent extends Component {
  render() {
    return (
      <ManageWebsite history= {this.props.history} />
    );
  };
};


export default ManageContent;