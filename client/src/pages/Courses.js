import React, { Component } from "react";
import CourseOne from './../components/Courses/CourseOne/CourseOne';
import CourseTwo from './../components/Courses/CourseTwo/CourseTwo';

class Course extends Component {
    state = {
      };

  render() {
    return (
        <div className="homepage-content">
            <div className="common-page-header"></div>
            <div className="course-hero-image"></div>
            <div className="page-heading">
                <h1>Courses</h1>
            </div>
            <div className="course-details">
                <div className="block-one block">
                    <p>Course One</p>
                </div>
                <div className="block-two block">
                    <p>Course Two</p>
                </div>
            </div>
            <div className="course-more-details">
                <h2>Course One</h2>
                <CourseOne />
            </div>
            <div className="course-more-details">
                <h2>Course Two</h2>
                <CourseTwo />
            </div>
        </div>
    );
  };
};

export default Course;
