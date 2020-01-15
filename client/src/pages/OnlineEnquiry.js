import React, { Component } from "react";
import API from './../utils/API';
import classnames from "classnames";
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Footer from './../components/Footer/Footer'

class Enquiry extends Component {
    state = {
        name: '',
        email: '',
        contactNumber: '',
        subject: '',
        description: '',
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
        const newEnquiry = {
            name: this.state.name,
            email: this.state.email,
            contactNumber: this.state.contactNumber,
            subject: this.state.subject,
            description: this.state.description
        };
        API.submitEnquiry(newEnquiry)
            .then(res => {
                this.setState({ name: "", email: "", contactNumber: "", subject: "", description: "", errors: "", submitSuccess: true });
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

                    <div className="grid-container enquiry-container">
                        <div className="grid-block-left">
                            <div className="page-heading">
                                <h1>Online Enquiry</h1>
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
                                        label="Your Email"
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
                                    <TextField
                                        name="contactNumber"
                                        type="text"
                                        label="Your Best Contact Number"
                                        value={this.state.contactNumber}
                                        error={errors.contactNumber}
                                        onChange={this.handleInputChange}
                                        className={classnames("", {
                                            invalid: errors.contactNumber
                                        })}
                                    />
                                    <br />
                                    <span className="red-text">
                                        {errors.contactNumber}
                                    </span>
                                    <br />
                                    <TextField
                                        name="subject"
                                        type="text"
                                        label="Subject of the Enquiry"
                                        value={this.state.subject}
                                        error={errors.subject}
                                        onChange={this.handleInputChange}
                                        className={classnames("", {
                                            invalid: errors.subject
                                        })}
                                    />
                                    <br />
                                    <span className="red-text">
                                        {errors.subject}
                                    </span>
                                    <br />
                                    <TextField
                                        name="description"
                                        type="textarea"
                                        label="More Details"
                                        value={this.state.description}
                                        error={errors.description}
                                        onChange={this.handleInputChange}
                                        className={classnames("", {
                                            invalid: errors.description
                                        })}
                                    />
                                    <br />
                                    <span className="red-text">
                                        {errors.description}
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
                            message="&#10004; Enquiry Submitted Successfully"
                        />
                        <div className="grid-block-right">
                            <div className="location-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26545.43180066334!2d150.98016323086455!3d-33.73018782318434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a3ef6f0260a9%3A0x5017d681632b030!2sCastle%20Hill%20NSW%202154!5e0!3m2!1sen!2sau!4v1578567185026!5m2!1sen!2sau" width="400" height="210" frameborder="0" allowfullscreen=""></iframe>
                            </div>
                            <div className="item2 enquiry-contact">
                                <h4>Contact</h4>
                                <p>1a, Castle Hill Road</p>
                                <p>Castle HIll</p>
                                <p>Sydney, NSW 2154</p>
                                <p><a className="modal-email-contact" href="tel:0469187261">Ph: 0469187261</a></p>
                                <p><a className="modal-email-contact" href="mailto:contact@hillsschoolsydney.com.au">Email: contact@hillsschoolsydney.com.au</a></p>
                                <br></br>
                                <a href="tel:0469187261"><button className="modal-call-button"><span>Call </span></button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
};

export default Enquiry;
