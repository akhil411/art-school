import React, { Component } from "react";
import Login from "./../components/Login/Login";
import HeroImage from "./../components/HeroImage/HeroImage";
import API from "../utils/API";

class Home extends Component {
    state = {
        news: [],
        weather:[]
      };
    
      componentDidMount() {
        this.loadNews();
        this.loadWeather();
      }
    
      loadNews = () => {
        API.getNews()
          .then(res =>
            this.setState({ news: res.data})
          )
          .catch(err => console.log(err));
      };

      loadWeather = () => {
        API.getWeather()
          .then(res =>
            this.setState({ weather: res.data})
          )
          .catch(err => console.log(err));
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
