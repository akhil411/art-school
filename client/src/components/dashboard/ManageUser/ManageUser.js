import React, { Component } from "react";
import "./style.css";
import API from './../../../utils/API';
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import UserTable from './UserTable/UserTable';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

class ManageUser extends Component {

    constructor(props) {
        super(props);
            this.state = {
                users: [],
                roles:[]
            }
    }

  componentDidMount() {
    if(this.props.auth.user.role !== "admin") {
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
    })
      .catch(err => console.log(err));
  };

  loadUsers = (role_id) => {
    API.getUserType(role_id)
      .then(res => {
        this.setState({ users: res.data})
      })
      .catch(err => console.log(err));
  };


  handleChange = (event, value) => {
    this.loadUsers(value);
  }
 
  render() {
    return (
        <div className="manage-users">
          <div className="manage-users-header-background"></div>
          <div className="manage-user-wrapper">
              <div>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="inherit" href="/dashboard">
                    Dashboard
                  </Link>
                  <Typography color="textPrimary">Manage-Users</Typography>
                </Breadcrumbs>
              </div>
              <div style={{ width: 300 }}>
                  <Autocomplete
                    id="free-solo-demo"
                    options={this.state.roles.map(option => option.name)}
                    onChange={this.handleChange}  
                    renderInput={params => (
                      <TextField {...params} label="Select Role" margin="normal" variant="outlined" fullWidth />
                    )}
                  />
              </div>
              <UserTable users={this.state.users}/>
            </div>
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