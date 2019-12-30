import React, { Component } from "react";
import "./style.css";
import {NewsContext} from '../../Dashboard/Dashboard'

class News extends Component {
  render() {
    return (
            <NewsContext.Consumer>
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
            </NewsContext.Consumer>
    );
  }
}

export default News;
