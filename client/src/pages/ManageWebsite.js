import React, { Component } from "react";
import ManageWebsite from "./../components/Dashboard/ManageWebsite/ManageWebsite";

class ManageContent extends Component {
  render() {
    return (
      <ManageWebsite history= {this.props.history} />
    );
  };
};


export default ManageContent;