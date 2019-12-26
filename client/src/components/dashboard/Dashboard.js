import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import "./style.css";
import ManageUser from './ManageUser/ManageUser';
import ViewReporst from './ViewReports/ViewReports';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
	const  role  = user.role;

    return (
        <div className="container">
            <div className="row row-main">
                <div className="col-md-10">
                <div className="row">
                    <div className="col-md-3">
                        <div className="icon">
                           <img src="./assets/images/icon.png"></img>
                        </div>
                        <div className="user-name">
                           <h4>{user.name.split(" ")[0]}</h4>
                        </div>
                        {(() => {
							switch (role) {
								case "1":
									return (
										<div>
											<Link to="/dashboard/manage-users">
												<h5>Manage Users</h5>
											</Link>
											<Link to="/register">
												<h5>View Reports</h5>
											</Link>
										</div>
									);
								case "2":
									return (
										<div>
											<Link to="/register">
												<h5>Manage Reports</h5>
											</Link>
										</div>
									);
								case "3":
									return (
										<div>
											<Link to="/register">
												<h5>View Reports</h5>
											</Link>
										</div>
									);
								case "4":
									return (
										<div>
											<Link to="/register">
												<h5>View Reports</h5>
											</Link>
										</div>
									);
								case "5":
									return (
										<div>
											<Link to="/register">
												<h5>Manage Reports</h5>
											</Link>
										</div>
									);
								default:
									return (
										<div></div>
									);
									
								}
							})()}
                      
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                            Logout
                        </button>
                    </div>
                    <div className="col-md-9">
                        <h4>
                            <p className="flow-text grey-text text-darken-1">
                                You are logged into a full-stack{" "}
                                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                            </p>
                        </h4>

                    </div>
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