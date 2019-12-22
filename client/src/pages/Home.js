import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class Books extends Component {
  state = {
    books: []
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Hello World</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
