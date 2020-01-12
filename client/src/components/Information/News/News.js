import React, { Component } from "react";
import "./style.css";
import {NewsWeatherContext} from '../../Layout/Navbar'

class News extends Component {
  render() {
    return (
            <NewsWeatherContext.Consumer>
                {value => ( value.news.length ? (
                    <ul>
                        {value.news.map(news => (
                        <li>
                            <strong>
                                {news.title}
                                <br></br>
                            </strong>
                        </li>
                        ))}
                    </ul>
                    ) : (
                    <h3>No Results to Display</h3>
                    )
                )}
            </NewsWeatherContext.Consumer>
    );
  }
}

export default News;
