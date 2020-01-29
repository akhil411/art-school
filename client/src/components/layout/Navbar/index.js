import React, { Component } from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import API from './../../../utils/API';
import Information from './../../Information/Information';


export const NewsWeatherContext = React.createContext();

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            scrolling: false,
            theposition: window.pageYOffset,
            news: [],
            weather: []
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.loadNews();
        this.loadWeather();

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    loadNews = () => {
        API.getNews()
            .then(res => {
                this.setState({ news: res.data })
            }
            )
            .catch(err => console.log(err));
    };

    loadWeather = () => {
        API.getWeather()
            .then(res =>
                this.setState({ weather: res.data })
            )
            .catch(err => console.log(err));
    };

    handleScroll(event) {
        if (window.pageYOffset <= 1) {
            this.setState({ scrolling: false });
        }
        else if (window.pageYOffset > 1) {
            this.setState({ scrolling: true });
        }
    }

    render() {
        return (
            <div className="header" style={this.state.scrolling ? { "backgroundColor": "#fbde44ff" } : { "backgroundColor": "" }}>
                <div className="header-contents">
                    <div className="header-link">
                        <Link to="/">
                            <div className="header-text" style={this.state.scrolling ? { "color": "#28334AFF" } : { "color": "" }}>Art School</div>
                        </Link>
                    </div>
                    <img style={this.state.scrolling ? { "filter": "brightness(0.5)" } : { "filter": "" }} className="announcements-logo" src="../assets/images/announcement.svg"></img>
                    <div className="hamburger-menu">
                        <hr style={this.state.scrolling ? { "borderTop": "3px solid black" } : { "borderTop": "" }}></hr>
                        <hr className="hr-hover" style={this.state.scrolling ? { "borderTop": "3px solid black" } : { "borderTop": "" }}></hr>
                        <hr style={this.state.scrolling ? { "borderTop": "3px solid black" } : { "borderTop": "" }}></hr>
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
                                    <a href="/courses"><h4>Courses</h4></a>
                                    <a href="/online-enquiry"><h4>Online Enquiry</h4></a>
                                    <a href="/send-resume"><h4>Send Resume</h4></a>
                                </div>
                                <div className="item2">
                                    <h4>Contact</h4>
                                    <p>1a, Castle Hill Road</p>
                                    <p>Castle HIll</p>
                                    <p>Sydney, NSW 2154</p>
                                    <p><a className="modal-email-contact" href="tel:0469187261">Ph: <span style={{'color': 'gold'}}>0469187261</span></a></p>
                                    <a className="modal-email-contact" href="mailto:contact@hillsschoolsydney.com.au"><p>Email: <span style={{'color': 'gold'}}>akhilvijayan004@gmail.com</span></p></a>
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
                                <NewsWeatherContext.Provider value={this.state}>
                                    <Information />
                                </NewsWeatherContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Navbar.contextType = NewsWeatherContext;

export default Navbar;
