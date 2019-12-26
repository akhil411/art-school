import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link, withRouter } from "react-router-dom";
import { Col, Row, Container } from "../layout/Grid";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    console.log(user.email);

    return (
        <Container fluid>
            <Row>
                <Col size="md-10">
                <Row>
                    <Col size="md-4">
                        <Link to="/register">
                            <h1>Register</h1>
                        </Link>
                    </Col>
                    <Col size="md-8">
                        <h4>
                            <b>Hey there,</b> {user.name.split(" ")[0]}
                            <p className="flow-text grey-text text-darken-1">
                                You are logged into a full-stack{" "}
                                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                            </p>
                        </h4>
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
                    </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

































    //   <div style={{ height: "75vh" }} className="container valign-wrapper">
    //     <div className="row">
    //       <div className="landing-copy col s12 center-align">
    //         <Link to="/register">
    //           <h1>Register</h1>
    //         </Link>
    //         <h4>
    //           <b>Hey there,</b> {user.name.split(" ")[0]}
    //           <p className="flow-text grey-text text-darken-1">
    //             You are logged into a full-stack{" "}
    //             <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
    //           </p>
    //         </h4>
    //         <button
    //           style={{
    //             width: "150px",
    //             borderRadius: "3px",
    //             letterSpacing: "1.5px",
    //             marginTop: "1rem"
    //           }}
    //           onClick={this.onLogoutClick}
    //           className="btn btn-large waves-effect waves-light hoverable blue accent-3"
    //         >
    //           Logout
    //         </button>
    //       </div>
    //     </div>
    //   </div>
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