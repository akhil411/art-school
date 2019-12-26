import React, { Component } from "react";
import Register from "./../components/Register/Register";

class UserRegister extends Component {
  render() {
    return (
      <Register history= {this.props.history} />
    );
  };
};


export default UserRegister;