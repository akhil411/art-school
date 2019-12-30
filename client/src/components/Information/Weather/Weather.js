import React, { Component } from "react";
import "./style.css";
import {NewsContext} from '../../Dashboard/Dashboard'

class News extends Component {
  render() {
    return (
            <NewsContext.Consumer>
                {value => ( value.weather ? (
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
            </NewsContext.Consumer>
    );
  }
}

export default News;