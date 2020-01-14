import React, { Component } from "react";
import './style.css'
import API from './../../../utils/API';

class ModalAnnouncements extends Component {
    constructor() {
        super();
            this.state = {
                announcements:[],
            }
    }

    componentDidMount = () => {
        this.loadAnnouncements();
    }

    loadAnnouncements = () => {
        API.getAnnouncements()
        .then(res => {
            this.setState({ announcements: res.data })
        })
        .catch(err => {
            console.log(err)
        });
    }
    
    render () {
       
        return (
            <div className="modal-announcements">
                {this.state.announcements.map(data => (
                    <h5>{data.announcement}</h5>
                ))}
                <div className="more-info">
                    <span>For More Info </span><span><a href="tel:0469187261"><button className="modal-call-button"><span>Call </span></button></a></span>
                </div>
            </div>
        )
    }
}

export default ModalAnnouncements;