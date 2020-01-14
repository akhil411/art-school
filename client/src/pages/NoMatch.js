import React from "react";
import { Col, Row } from "../components/Layout/Grid";
import Jumbotron from "../components/Layout/Jumbotron";
import Footer from './../components/Footer/Footer'

function NoMatch() {
  return (
    <div>
      <div className="not-found">
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
      <Footer />
    </div>
  );
}

export default NoMatch;
