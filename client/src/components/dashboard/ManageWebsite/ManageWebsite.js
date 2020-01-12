import React, { Component } from "react";
import "./style.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Enquiry from './Enquiry/Enquiry';
import Announcements from './Announcements/Announcements'


class ManageWebsite extends Component {

    constructor(props) {
        super(props);
            this.state = {
                
            }
    }

  componentDidMount() {
    if(this.props.auth.user.role == "admin" || this.props.auth.user.role == "staff") {
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
                <Typography color="textPrimary">Manage-Website</Typography>
                </Breadcrumbs>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Announcements</Tab>
                    <Tab>Online Enquiry</Tab>
                    <Tab>Student Services</Tab>
                    <Tab>Employment</Tab>
                </TabList>

                <TabPanel>
                  <Announcements user={this.props.auth.user.name}/>
                </TabPanel>
                <TabPanel>
                    <Enquiry />
                </TabPanel>
                <TabPanel>
                    <h1>Hello</h1>
                </TabPanel>
                
                <TabPanel>
                    
                </TabPanel>
            </Tabs>
        </div>
    </div>
    );
  }
}

ManageWebsite.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(ManageWebsite);