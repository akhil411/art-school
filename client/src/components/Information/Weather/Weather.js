import React, { Component } from "react";
import "./style.css";
import { NewsWeatherContext } from '../../Layout/Navbar'

class News extends Component {
  render() {
    return (
      <div className="weather-content">
        <NewsWeatherContext.Consumer>
          {value => (value.weather.length ? (
            <strong>
              <h1>Sydney</h1>
              {value.weather.temp_c} &#8451;
                                    <br></br>
              {value.weather.condition.text}
              <br></br>
              <img src={value.weather.condition.icon}></img>
              <br></br>
            </strong>
          ) : (
              <h3>No Results to Display</h3>
            )
          )}
        </NewsWeatherContext.Consumer>
      </div>
    );
  }
}

export default News;
