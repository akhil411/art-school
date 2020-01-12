import React, { Component } from "react";
import Login from "./../Components/Login/Login";
import HeroImage from "./../Components/HeroImage/HeroImage";

class Home extends Component {
    state = {
      };

  render() {
    return (
        <div className="homepage-content">
            <div>
                <HeroImage />
            </div>
            <div className="login-section">
                <Login history= {this.props.history} />
            </div>
        </div>
    );
  };
};

export default Home;
