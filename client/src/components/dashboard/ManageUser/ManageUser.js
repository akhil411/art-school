import React, { Component } from "react";
import "./style.css";
import API from './../../../utils/API'

class ManageUser extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res => {
        console.log(res.data)
        this.setState({ users: res.data})}
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      
      
            <h1>Hello</h1>
            
    );
  }
}

export default ManageUser;