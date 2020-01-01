import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import "./style.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
        // return <Redirect to="/dashboard" />;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="login-box">
        <form noValidate onSubmit={this.onSubmit}>
            <div className="input-field input-email">
            <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                id="email"
                type="email"
                placeholder="Email"
                className={classnames("", {
                invalid: errors.email || errors.emailnotfound
                })}
            />
            <br></br>
            <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
            </span>
            </div>
            <div className="input-field input-password">
            <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                placeholder="Password"
                className={classnames("", {
                invalid: errors.password || errors.passwordincorrect
                })}
            />
            <br></br>
            <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
            </span>
            </div>
            <div className="login-button-section">
            <button
                style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                }}
                type="submit"
                className="login-button"
            >
                Login
            </button>
            </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

