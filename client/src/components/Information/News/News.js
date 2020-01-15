import React, { Component } from "react";
import "./style.css";
import { NewsWeatherContext } from '../../Layout/Navbar'

class News extends Component {
  render() {
    return (
      <NewsWeatherContext.Consumer>
        {value => (value.news.length ? (
          <ul className="news-content">
            {value.news.map(news => (
              <li><a href={news.url} target="_blank">{news.title}</a></li>
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
