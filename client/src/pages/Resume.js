import React, { Component } from "react";
import API from './../utils/API';
import classnames from "classnames";
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Footer from './../components/Footer/Footer'

class Resume extends Component {
    state = {
        name: '',
        email: '',
        errors: {},
        submitSuccess: false
    };

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
        const newEmail = {
            name: this.state.name,
            email: this.state.email,
        };
        API.submitResume(newEmail)
            .then(res => {
                this.setState({ name: "", email: "", errors: "", submitSuccess: true });
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
            <div>
                <div className="homepage-content">
                    <div className="common-page-header"></div>
                    <div className="enquiry-hero-image"></div>

                    <div className="grid-container enquiry-container resume-container">
                            <div className="page-heading">
                                <h1>Resume</h1>
                                <p>Please fill in the details to forward my resume to your email.</p>
                            </div>
                            <div className="enquiry-form">
                                <form noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
                                    <TextField
                                        name="name"
                                        type="text"
                                        label="Name*"
                                        value={this.state.name}
                                        error={errors.name}
                                        onChange={this.handleInputChange}
                                        className={classnames("", {
                                            invalid: errors.name
                                        })}
                                    />
                                    <br />
                                    <span className="red-text">
                                        {errors.name}
                                    </span>
                                    <br />
                                    <TextField
                                        name="email"
                                        type="text"
                                        label="Your Email*"
                                        value={this.state.email}
                                        error={errors.email}
                                        onChange={this.handleInputChange}
                                        className={classnames("", {
                                            invalid: errors.email
                                        })}
                                    />
                                    <br />
                                    <span className="red-text">
                                        {errors.email}
                                    </span>
                                    <br />
                                    <button className="modal-call-button" type="submit" value="Submit"><span>Submit </span></button>
                                </form>
                            </div>
                        </div>
                        <Snackbar
                            open={this.state.submitSuccess}
                            autoHideDuration={3000}
                            onClose={this.handleClose}
                            message="&#10004; Thank you for submitting the form."
                        />
                </div>
                <Footer />
            </div>
        );
    };
};

export default Resume;
