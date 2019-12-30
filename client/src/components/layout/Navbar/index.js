import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            scrolling : false,
            theposition: window.pageYOffset
        };
        this.handleScroll = this.handleScroll.bind(this);
      }

      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        if (window.pageYOffset <= 1) {
            this.setState({scrolling: false});
        }
        else if (window.pageYOffset > 1) {
            this.setState({scrolling: true});
        }
    }

    render() {
    return (
        <div className="header" style={this.state.scrolling ? {"backgroundColor" : "#fbde44ff"} : {"backgroundColor" : ""}}>
            <div className="header-contents">
            <a className="header-text" href="/" style={this.state.scrolling ? {"color" : "#28334AFF"} : {"color" : ""}}>Art School</a>
                <img style={this.state.scrolling ? {"filter" : "brightness(0.5)"} : {"filter" : ""}} className="announcements-logo" src="../assets/images/announcement.svg"></img>
                <div className="hamburger-menu">
                    <hr style={this.state.scrolling ? {"borderTop" : "3px solid black"} : {"borderTop" : ""}}></hr>
                    <hr className="hr-hover" style={this.state.scrolling ? {"borderTop" : "3px solid black"} : {"borderTop" : ""}}></hr>
                    <hr style={this.state.scrolling ? {"borderTop" : "3px solid black"} : {"borderTop" : ""}}></hr>
                </div>
            </div>
            <div className="hamburgerModal">
                <div className="hamburger-content">
                    <div className="header">
                        <div className="header-contents">
                            <a className="header-text" href="/">Art School</a>
                            <div className="hamburger-menu">
                                <hr></hr>
                                <hr className="hr-hover"></hr>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="grid-contents">
                            <div className="item1">
                                <h4>Courses</h4>
                                <h4>Online Enquiry</h4>
                                <h4>Student Services</h4>
                                <h4>Policy Manual</h4>
                                <h4>Employment</h4>
                                <h4>Board Members</h4>
                            </div>
                            <div className="item2">
                                <h4>Contact</h4>
                                <p>1a, Castle Hill Road</p>
                                <p>Castle HIll</p>
                                <p>Sydney, NSW 2154</p>
                                <p><a className="modal-email-contact" href="mailto:contact@hillsschoolsydney.com.au">Email: contact@hillsschoolsydney.com.au</a></p>
                                <br></br>
                                <a href="tel:0469187261"><button className="modal-call-button"><span>Call </span></button></a>
                            </div>
                            <div className="item3"></div>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="announcementsModal">
                <div className="hamburger-content announcements-content">
                    <div className="header">
                        <div className="header-contents">
                            <a className="header-text" href="/">Art School</a>
                            <div className="hamburger-menu">
                              <span className="announcementsModal-close">&times;</span>
                            </div>
                        </div>
                        <div className="announcements-information">
                          <h1>Announcements</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

  export default Navbar;
