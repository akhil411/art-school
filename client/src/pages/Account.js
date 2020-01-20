import React, { Component } from "react";
import UserAccount from "./../components/Dashboard/UserAccount/UserAccount";
import Footer from './../components/Footer/Footer'

class Account extends Component {
  render() {
    return (
      <div>
        <UserAccount history={this.props.history} />
        <Footer />
      </div>
    );
  };
};

export default Account;