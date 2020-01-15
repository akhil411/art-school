import React, { Component } from "react";
import "./style.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import SubmitReports from './SubmitReports/SubmitReports';
import ViewReports from './ViewReports/ViewReports';


class StudentReports extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    if (this.props.auth.user.role == "teacher" || this.props.auth.user.role == "admin") {
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
              <Typography color="textPrimary">Student-Reports</Typography>
            </Breadcrumbs>
          </div>
          <Tabs>
            <TabList>
              <Tab>Submit Report</Tab>
              <Tab>View Reports</Tab>
            </TabList>

            <TabPanel>
              <SubmitReports userId={this.props.auth.user.id} />
            </TabPanel>
            <TabPanel>
              <ViewReports />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

StudentReports.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(StudentReports);
