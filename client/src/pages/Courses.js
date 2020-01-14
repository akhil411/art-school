import React, { Component } from "react";
import CourseOne from './../components/Courses/CourseOne/CourseOne';
import CourseTwo from './../components/Courses/CourseTwo/CourseTwo';
import Footer from './../components/Footer/Footer'


class Course extends Component {
    state = {
      };

courseOneClick = () =>{
    window.scrollBy({top: 600, behavior: 'smooth' });
}

courseTwoClick = () =>{
    window.scrollBy({top: 700, behavior: 'smooth' });
}

  render() {
    return (
        <div>
        <div className="homepage-content">
            <div className="common-page-header"></div>
            <div className="course-hero-image"></div>
            <div className="page-heading">
                <h1>Courses</h1>
            </div>
            <div className="course-details">
                <div className="block-one" onClick={this.courseOneClick}>
                    <p>Diploma of</p>
                    <p>Visual Arts</p>
                </div>
                <div className="block-two" onClick={this.courseTwoClick}>
                    <p>Diploma of</p>
                    <p>Art and Design</p>
                </div>
            </div>
            <div className="course-more-details">
                <h2>Diploma of Visual Arts</h2>
                <CourseOne />
            </div>
            <div className="course-more-details">
                <h2>Diploma of Art and Design</h2>
                <CourseTwo />
            </div>
        </div>
        <Footer />
        </div>
    );
  };
};

export default Course;
