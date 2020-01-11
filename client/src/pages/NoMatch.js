import React from "react";
import { Col, Row } from "../components/layout/Grid";
import Jumbotron from "../components/layout/Jumbotron";

function NoMatch() {
  return (
    <div>
      <div className="common-page-header"></div>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
}

export default NoMatch;
