import React, { Component } from "react";
import Login from "./../components/Login/Login";
import HeroImage from "./../components/Hero/HeroImage";
import HeroVideo from "./../components/Hero/HeroVideo";

class Home extends Component {
    state = {
        width: ''
    };

    componentDidMount() {
        this.setState({ width: window.screen.width })
    }

    render() {
        return (
            <div className="homepage-content home-section">
                {this.state.width < 768 ? (
                    <div>
                        <HeroImage />
                    </div>
                ) : (
                        <div>
                            <HeroVideo />
                        </div>
                    )}
                <div className="login-section">
                    <Login history={this.props.history} />
                </div>
            </div>
        );
    };
};

export default Home;
