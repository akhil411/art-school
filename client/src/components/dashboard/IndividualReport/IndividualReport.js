import React, { Component } from "react";
import "./style.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Report from './Report/Report';
import UpdatePassword from './../UpdatePassword/UpdatePassword'


class IndividualReport extends Component {

    constructor(props) {
        super(props);
            this.state = {
                
            }
    }

  componentDidMount() {
    if(this.props.auth.user.role == "student") {
      console.log(this.props.auth.user.id)
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
                <Typography color="textPrimary">Account</Typography>
                </Breadcrumbs>
            </div>
            <Tabs>
                <TabList>
                    <Tab>View Reports</Tab>
                    <Tab>Update Password</Tab>
                </TabList>
                    
                <TabPanel>
                  <Report userId={this.props.auth.user.id}/>
                </TabPanel>
                <TabPanel>
                  <UpdatePassword userId={this.props.auth.user.id}/>
                </TabPanel>
            </Tabs>
        </div>
    </div>
    );
  }
}

IndividualReport.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(IndividualReport);