import React, { Component } from "react";
import ManageWebsite from "./../components/Dashboard/ManageWebsite/ManageWebsite";
import Footer from './../components/Footer/Footer'

class ManageContent extends Component {
  render() {
    return (
      <div>
        <ManageWebsite history={this.props.history} />
        <Footer />
      </div>
    );
  };
};

export default ManageContent;
