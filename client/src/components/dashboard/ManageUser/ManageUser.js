import React, { Component } from "react";
import "./style.css";
import API from './../../../utils/API';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

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
    if(this.props.auth.user.role !== 1) {
      this.props.history.push("/dashboard");
    } else {
        this.loadRoles();
        this.loadUsers("");
    }

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
        <div className="manage-users">
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

// export default ManageUser;
ManageUser.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(ManageUser);