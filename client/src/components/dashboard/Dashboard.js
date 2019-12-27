import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import "./style.css";
import Posts from "./Posts/Posts";
import API from './../../utils/API'

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
          text: "",
          user:""
        };
      }


      onChange = e => {
        this.setState({ text: e.target.value });
      };

    onSubmit = e => {
        e.preventDefault();
        API.createPosts({text:this.state.text, user:this.props.auth.user.name})
        .then(res =>
            window.location.reload()
        )
        .catch(err => console.log(err));
      };




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
                    <div className="left-section">
                        <div className="icon">
                           <img src="./assets/images/icon.png"></img>
                        </div>
                        <div className="user-name">
                           <h4>Hi, {user.name.split(" ")[0]}</h4>
                        </div>
                        {(() => {
                        switch (role) {
                          case 1:
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
                          case 2:
                            return (
                              <div>
                                <Link to="/register">
                                  <h5>Manage Reports</h5>
                                </Link>
                              </div>
                            );
                          case 3:
                            return (
                              <div>
                                <Link to="/register">
                                  <h5>View Reports</h5>
                                </Link>
                              </div>
                            );
                          case 4:
                            return (
                              <div>
                                <Link to="/register">
                                  <h5>View Reports</h5>
                                </Link>
                              </div>
                            );
                          case 5:
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
                    </div>
                    <div className="col-md-9">
                        <div className="blog-submit">
                            <div className="card" data-toggle="modal" data-target="#exampleModal">
                                <div className="card-body">
                                        <textarea className="form-control" rows="2" id="comment" placeholder="Whats up!"></textarea>
                                        <hr></hr>
                                        <button className="choose-file">Choose File</button><button className="submit-button">Submit</button>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <form onSubmit={this.onSubmit}>
                                            <textarea onChange={this.onChange} value={this.state.text} className="form-control" rows="4" id="comment" placeholder="Whats up!"></textarea>
                                            <hr></hr>
                                            {/* <input type="file" name="pic" accept="image/*"></input> */}
                                            <input type="submit"></input>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Posts username={user.name}/>
                        </div>
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