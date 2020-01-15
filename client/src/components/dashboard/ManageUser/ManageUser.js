import React, { Component } from "react";
import "./style.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UpdateUser from './UpdateUser/UpdateUser';
import Register from './Register/Register';

class ManageUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      roles: []
    }
  }

  componentDidMount() {
    if (this.props.auth.user.role == "admin" || this.props.auth.user.role == "staff") {
      console.log("success")
    } else {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="website-content">
        <div className="manage-users-header-background"></div>
        <div className="manage-website-wrapper">
          <div>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/dashboard">
                Dashboard
              </Link>
              <Typography color="textPrimary">Manage-Users</Typography>
            </Breadcrumbs>
          </div>
          <Tabs>
            <TabList>
              <Tab>Register User</Tab>
              <Tab>Update User</Tab>
            </TabList>

            <TabPanel>
              <Register />
            </TabPanel>
            <TabPanel>
              <UpdateUser />
            </TabPanel>
          </Tabs>
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
