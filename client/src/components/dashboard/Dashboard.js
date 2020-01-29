import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import "./style.css";
import Posts from "./Posts/Posts";
import Avatar from '@material-ui/core/Avatar';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            user: "",
            selectedFile: "",
            errors: {},
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
                <div className="dashboard-innerContainer">
                    <div className="left-section">
                        <div className="icon">
                            <Avatar className="avatar-icon">{user.name.charAt(0).toUpperCase()}{user.name.charAt(1).toUpperCase()}</Avatar>
                        </div>
                        <div className="user-name">
                            <h4>Hi {user.name.split(" ")[0]}</h4>
                        </div>
                        <div>
                            <Link to="/dashboard/account">
                                <button className="modal-call-button"><span>Account </span></button>
                            </Link>
                        </div>
                        <button className="modal-call-button" type="submit" value="Submit" onClick={this.onLogoutClick}><span>Logout </span></button>
                    </div>
                    <div className="right-section">
                        <div>
                            <Posts userId={user.id} />
                        </div>
                    </div>
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
