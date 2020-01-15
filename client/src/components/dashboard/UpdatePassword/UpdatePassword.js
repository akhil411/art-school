import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import './style.css';
import classnames from "classnames";
import Snackbar from '@material-ui/core/Snackbar';
import API from './../../../utils/API';

class Report extends Component {

    constructor() {
        super();
        this.state = {
            errors: {},
            oldPassword: '',
            newPassword1: '',
            newPassword2: '',
            submitSuccess: false,
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const newPassword = {
            userId: this.props.userId,
            oldPassword: this.state.oldPassword,
            newPassword1: this.state.newPassword1,
            newPassword2: this.state.newPassword2,
        };
        API.updatePassword(newPassword)
            .then(res => {
                this.setState({ oldPassword: "", newPassword1: "", newPassword2: "", errors: "", submitSuccess: true });
            })
            .catch(err => {
                this.setState({ errors: err.response.data })
            });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ submitSuccess: false })
    };

    render() {

        const { errors } = this.state;

        return (
            <div className="announcements-section">
                <div className="add-announcements">
                    <h3>Update Password</h3>
                    <div className="submit-report">
                        <form noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
                            <TextField
                                name="oldPassword"
                                type="password"
                                label="Your Old Password*"
                                value={this.state.oldPassword}
                                error={errors.passwordincorrect}
                                onChange={this.handleInputChange}
                                className={classnames("", {
                                    invalid: errors.passwordincorrect
                                })}
                            />
                            <br />
                            <span className="red-text">
                                {errors.passwordincorrect}
                            </span>
                            <br />
                            <TextField
                                name="newPassword1"
                                type="password"
                                label="New Password"
                                value={this.state.newPassword1}
                                error={errors.newPassword1}
                                onChange={this.handleInputChange}
                                className={classnames("", {
                                    invalid: errors.newPassword1
                                })}
                            />
                            <br />
                            <span className="red-text">
                                {errors.newPassword1}
                            </span>
                            <br />
                            <TextField
                                name="newPassword2"
                                type="password"
                                label="Confirm Password"
                                value={this.state.newPassword2}
                                error={errors.newPassword2}
                                onChange={this.handleInputChange}
                                className={classnames("", {
                                    invalid: errors.newPassword2
                                })}
                            />
                            <br />
                            <span className="red-text">
                                {errors.newPassword2}
                            </span>
                            <br />
                            <br />
                            <button className="modal-call-button" type="submit" value="Submit"><span>Submit </span></button>
                        </form>
                    </div>
                    <Snackbar
                        open={this.state.submitSuccess}
                        autoHideDuration={3000}
                        onClose={this.handleClose}
                        message="&#10004; Password Updated Successfully"
                    />
                </div>
            </div>
        );
    }
}

export default Report;
