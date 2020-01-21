import React, { Component } from "react";
import "./style.css";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UpdateUser from './../ManageUser/UpdateUser/UpdateUser';
import Register from './../ManageUser/Register/Register';
import Announcements from './../ManageWebsite/Announcements/Announcements';
import Enquiry from './../ManageWebsite/Enquiry/Enquiry';
import SubmitReport from './../StudentReports/SubmitReports/SubmitReports';
import ViewReport from './../StudentReports/ViewReports/ViewReports';
import UpdatePassword from './../UpdatePassword/UpdatePassword';
import IndividualReport from './../IndividualReport/Report/Report';


class UserAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const { user } = this.props.auth;
        const role = user.role;

        return (
            <div className="website-content">
                <div className="manage-users-header-background"></div>
                <div className="manage-website-wrapper">
                    <div>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link to="/dashboard">
                                Dashboard
                            </Link>
                            <Typography color="textPrimary">Account</Typography>
                        </Breadcrumbs>
                    </div>
                    {(() => {
                        switch (role) {
                            case "admin":
                                return (
                                    <div>
                                        <Tabs>
                                            <TabList>
                                                <Tab>Register User</Tab>
                                                <Tab>Update User</Tab>
                                                <Tab>Announcements</Tab>
                                                <Tab>Online Enquiry</Tab>
                                                <Tab>Submit Report</Tab>
                                                <Tab>View Report</Tab>
                                                <Tab>Update Password</Tab>
                                            </TabList>
                                            <TabPanel>
                                                <Register />
                                            </TabPanel>
                                            <TabPanel>
                                                <UpdateUser />
                                            </TabPanel>
                                            <TabPanel>
                                                <Announcements user={this.props.auth.user.name} />
                                            </TabPanel>
                                            <TabPanel>
                                                <Enquiry />
                                            </TabPanel>
                                            <TabPanel>
                                                <SubmitReport userId={this.props.auth.user.id} />
                                            </TabPanel>
                                            <TabPanel>
                                                <ViewReport />
                                            </TabPanel>
                                            <TabPanel>
                                                <UpdatePassword userId={this.props.auth.user.id} />
                                            </TabPanel>
                                        </Tabs>
                                    </div>
                                );
                            case "student":
                                return (
                                    <div>
                                        <Tabs>
                                            <TabList>
                                                <Tab>Report</Tab>
                                                <Tab>Update Password</Tab>
                                            </TabList>
                                            <TabPanel>
                                                <IndividualReport userId={this.props.auth.user.id} />
                                            </TabPanel>
                                            <TabPanel>
                                                <UpdatePassword userId={this.props.auth.user.id} />
                                            </TabPanel>
                                        </Tabs>
                                    </div>
                                );
                            default:
                                return (
                                    <div>
                                        <Tabs>
                                            <TabList>
                                                <Tab>Submit Report</Tab>
                                                <Tab>View Report</Tab>
                                                <Tab>Update Password</Tab>
                                            </TabList>
                                            <TabPanel>
                                                <SubmitReport userId={this.props.auth.user.id} />
                                            </TabPanel>
                                            <TabPanel>
                                                <ViewReport />
                                            </TabPanel>
                                            <TabPanel>
                                                <UpdatePassword userId={this.props.auth.user.id} />
                                            </TabPanel>
                                        </Tabs>
                                    </div>
                                );
                        }
                    })()}

                </div>
            </div>
        );
    }
}

UserAccount.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps
)(UserAccount);
