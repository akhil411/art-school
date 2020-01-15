import React, { Component } from "react";
import StudentReports from "./../components/Dashboard/StudentReports/StudentReports";
import Footer from './../components/Footer/Footer'

class StudentReport extends Component {
  render() {
    return (
      <div>
        <StudentReports history={this.props.history} />
        <Footer />
      </div>
    );
  };
};

export default StudentReport;
