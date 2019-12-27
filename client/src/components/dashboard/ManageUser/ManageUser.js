import React, { Component } from "react";
import "./style.css";
import API from './../../../utils/API';
import { Link } from "react-router-dom";

class ManageUser extends Component {

    constructor(props) {
        super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                users: [],
                roles:[]
            }
    }

  componentDidMount() {
    this.loadRoles();
    this.loadUsers("");
  }

  loadRoles = () => {
    API.getRoles()
      .then(res =>{
        this.setState({ roles: res.data});
    }
      )
      .catch(err => console.log(err));
  };

  loadUsers = (role_id) => {
    API.getUserType(role_id)
      .then(res => 
        this.setState({ users: res.data})
      )
      .catch(err => console.log(err));
  };


  handleChange(event) {
    this.loadUsers(event.target.value);
  }
 
  render() {
    return (
        <div>
                                          <div>
                                <Link to="/dashboard">
                                  <h5>Back to your Dashboard</h5>
                                </Link>
                              </div>
      <form >
        <label>
            <select onChange={this.handleChange} value={this.state.value}>
                <option value="">Select a Role</option>
                {this.state.roles.map(data => (
                <option value={data.value}>{data.name}</option>
                ))}
            </select>
        </label>
      </form>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            {this.state.users.map(data => (
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <button>Delete</button>
                </tr>
            ))}
         
        </table>
        </div>
      
            
    );
  }
}

export default ManageUser;