import React, { Component } from "react";
import StudentReports from "./../components/Dashboard/StudentReports/StudentReports";

class StudentReport extends Component {
  render() {
    return (
      <StudentReports history= {this.props.history} />
    );
  };
};


export default StudentReport;