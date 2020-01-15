import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import "./style.css";
import Posts from "./Posts/Posts";
import API from './../../utils/API';
import Avatar from '@material-ui/core/Avatar';
import Snackbar from '@material-ui/core/Snackbar';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      user: "",
      news: [],
      selectedFile: "",
      errors: {},
      submitSuccess: false,
    };
  }

  onTextChange = e => {
    this.setState({ text: e.target.value });
  }

  onFileChange = e => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.selectedFile) {
      this.singleFileUploadHandler();
    } else {
      this.createPost();
    }
  };

  createPost = (imageDetails = null) => {
    const imageName = imageDetails ? imageDetails.image : null;
    const imageUrl = imageDetails ? imageDetails.location : null;
    API.createPosts({ text: this.state.text, user: this.props.auth.user.id, name: imageName, url: imageUrl })
      .then(res => {
        this.setState({ text: "", errors: "", submitSuccess: true });
        setTimeout(function () { window.location.reload(); }, 1000);
      })
      .catch(err => {
        this.setState({ errors: err.response.data })
      });
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  singleFileUploadHandler = () => {
    console.log(this.state.selectedFile)
    console.log(this.state.selectedFile.name)
    const data = new FormData();
    // If file selected
    if (this.state.selectedFile) {
      data.append('image', this.state.selectedFile, this.state.selectedFile.name);
      API.fileUpload(data, {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        }
      })
        .then((response) => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                // this.ocShowAlert( 'Max size: 2MB', 'red' );
              } else {
                console.log(response.data);
                // If not the given file type
                // this.ocShowAlert( response.data.error, 'red' );
              }
            } else {
              // Success
              let imageDetails = response.data;
              console.log('fileName', imageDetails);
              this.createPost(imageDetails);
              //  this.ocShowAlert( 'Filefi Uploaded', '#3089cf' );
            }
          }
        }).catch((error) => {
          // If another error
          // this.ocShowAlert( error, 'red' );
        });
    } else {
      // if file not selected throw error
      //  this.ocShowAlert( 'Please upload file', 'red' );
    }
  };



  render() {
    const { user } = this.props.auth;
    const role = user.role;
    const { errors } = this.state;

    return (
      <div className="dashboard-container">
        <div className="row row-main">
          <div className="col-md-9">
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
                <div className="blog-submit">
                  <div className="card">
                    <div className="card-body">
                      <form onSubmit={this.onSubmit}>
                        <textarea value={this.state.text} onChange={this.onTextChange} className="form-control" rows="4" id="comment" placeholder="Add your new Art!"></textarea>
                        <span className="red-text">
                          {errors.text}
                        </span>
                        <hr></hr>
                        <input onChange={this.onFileChange} type="file" name="pic" accept="image/*"></input>
                        <button className="modal-call-button" type="submit" value="Submit"><span>Submit </span></button>
                      </form>
                    </div>
                  </div>
                </div>
                <Snackbar
                  open={this.state.submitSuccess}
                  autoHideDuration={3000}
                  onClose={this.handleClose}
                  message="&#10004; Post Submitted Successfully"
                />
                <div>
                  <Posts userId={user.id} />
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
