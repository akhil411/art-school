import React, { Component } from "react";
import { Col, Row, Container } from "../../layout/Grid";
import "./style.css";
import {NewsContext} from '../../Dashboard/Dashboard'

class News extends Component {
  render() {
    return (
      
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
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
            </article>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default News;