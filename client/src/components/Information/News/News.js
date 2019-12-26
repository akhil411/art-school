import React, { Component } from "react";
import { Col, Row, Container } from "../../layout/Grid";
import "./style.css";
import {NewsContext} from '../../../pages/Home'

class News extends Component {
  render() {
    return (
      
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
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
            </article>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default News;
