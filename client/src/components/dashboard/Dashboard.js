import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import "./style.css";
import Posts from "./Posts/Posts";
import Avatar from '@material-ui/core/Avatar';
import Chat from './Chat/Chat';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            user: "",
            selectedFile: "",
            errors: {},
            submitSuccess: false,
        };
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        const role = user.role;

        return (
            <div className="dashboard-container">
                <div className="row row-main">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="left-section">
                                    <div className="icon">
                                        <Avatar className="avatar-icon">{user.name.charAt(0).toUpperCase()}{user.name.charAt(1).toUpperCase()}</Avatar>
                                    </div>
                                    <div className="user-name">
                                        <h4>Hi, {user.name.split(" ")[0]}</h4>
                                    </div>
                                    {(() => {
                                        switch (role) {
                                            case "admin":
                                                return (
                                                    <div>
                                                        <Link to="/dashboard/manage-users">
                                                            <h5>Manage Users</h5>
                                                        </Link>
                                                        <Link to="/dashboard/manage-website">
                                                            <h5>Manage Website</h5>
                                                        </Link>
                                                        <Link to="/dashboard/student-reports">
                                                            <h5>Student Reports</h5>
                                                        </Link>
                                                    </div>
                                                );
                                            case "student":
                                                return (
                                                    <div>
                                                        <Link to="/dashboard/student-account">
                                                            <h5>View Reports</h5>
                                                        </Link>
                                                    </div>
                                                );
                                            default:
                                                return (
                                                    <div>
                                                        <Link to="/dashboard/student-reports">
                                                            <h5>Student Reports</h5>
                                                        </Link>
                                                        <Link to="/dashboard/manage-website">
                                                            <h5>Manage Website</h5>
                                                        </Link>
                                                    </div>
                                                );
                                        }
                                    })()}
                                    <button className="modal-call-button" type="submit" value="Submit" onClick={this.onLogoutClick}><span>Logout </span></button>
                                </div>
                            </div>
                            <div className="col-md-6 right-section">
                                <div>
                                    <Posts userId={user.id} />
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
                <div className="chat-section">
                    <Chat name={user.name}/>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
