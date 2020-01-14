import React, { Component } from "react";
import IndividualReport from "./../components/Dashboard/IndividualReport/IndividualReport";
import Footer from './../components/Footer/Footer'

class Report extends Component {
  render() {
    return (
      <div>
        <IndividualReport history= {this.props.history} />
        <Footer />
      </div>
    );
  };
};


export default Report;