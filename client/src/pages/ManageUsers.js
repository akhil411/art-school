import React, { Component } from "react";
import ManageUser from "./../components/Dashboard/ManageUser/ManageUser";
import Footer from './../components/Footer/Footer'


class ManageUsers extends Component {
  render() {
    return (
      <div>
        <ManageUser history= {this.props.history} />
        <Footer />
      </div>
    );
  };
};


export default ManageUsers;