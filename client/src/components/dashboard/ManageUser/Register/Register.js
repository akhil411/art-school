import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { registerUser } from "../../../../actions/authActions";
import classnames from "classnames";
import API from './../../../../utils/API';
import TextField from '@material-ui/core/TextField';
import './style.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Snackbar from '@material-ui/core/Snackbar';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            role: "",
            errors: {},
            roles: [],
            submitSuccess: false,
        };
    }

    componentDidMount() {
        this.loadRoles();
    }

    loadRoles = () => {
        API.getRoles()
            .then(res => {
                this.setState({ roles: res.data })
                console.log(this.state.roles)
            }
            )
            .catch(err => console.log(err));
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleChange = (event, value) => {
        if (value !== null) {
            this.setState({ role: value._id })
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            role: this.state.role
        };
        API.registerUser(newUser)
            .then(res => {
                this.setState({ name: "", email: "", password: "", password2: "", errors: "", submitSuccess: true });
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
            <div className="announcements-section register-section">
                <div className="add-announcements add-user">
                    <h3>Register New User</h3>
                    <form noValidate onSubmit={this.onSubmit}>
                        <TextField
                            onChange={this.onChange}
                            value={this.state.name}
                            error={errors.name}
                            id="name"
                            type="text"
                            label="Name*"
                            className={classnames("", {
                                invalid: errors.name
                            })}
                        />
                        <br></br>
                        <span className="red-text">{errors.name}</span>
                        <br></br>
                        <TextField
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            label="Email*"
                            className={classnames("", {
                                invalid: errors.email
                            })}
                        />
                        <br></br>
                        <span className="red-text">{errors.email}</span>
                        <br></br>
                        <TextField
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            label="Password*"
                            className={classnames("", {
                                invalid: errors.password
                            })}
                        />
                        <br></br>
                        <span className="red-text">{errors.password}</span>
                        <br></br>
                        <TextField
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            type="password"
                            label="Confirm Password*"
                            className={classnames("", {
                                invalid: errors.password2
                            })}
                        />
                        <br></br>
                        <span className="red-text">{errors.password2}</span>
                        <br></br>
                        <div style={{ width: 300 }}>
                            <Autocomplete
                                id="free-solo-demo"
                                options={this.state.roles}
                                onChange={this.handleChange}
                                getOptionLabel={option => option.name}
                                renderInput={params => (
                                    <TextField {...params} label="Select Role" margin="normal" variant="outlined" fullWidth />
                                )}
                            />
                        </div>
                        <br></br>
                        <span className="red-text">{errors.role}</span>
                        <br></br>
                        <button className="modal-call-button" type="submit" value="Submit"><span>Sign up </span></button>
                        Sign up
                    </form>
                </div>
                <Snackbar
                    open={this.state.submitSuccess}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message="&#10004; User Added Successfully"
                />
            </div>
        );
    }
}

Register.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps
)(Register);
