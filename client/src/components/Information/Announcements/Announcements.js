import React, { Component } from "react";
import './style.css'
import API from './../../../utils/API';
import Pagination from './../../Layout/Pagination/Pagination';

class ModalAnnouncements extends Component {
    constructor() {
        super();
        this.state = {
            announcements: [],
            pageOfItems: [],
        }
        this.onChangePage = this.onChangePage.bind(this);
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

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {

        return (
            <div className="modal-announcements">
                <div className="modalAnnouncements-content">
                    {this.state.pageOfItems.map(data => (
                        <h5>{data.announcement}</h5>
                    ))}
                </div>
                <div className="modalAnnouncements-pagination">
                    <Pagination items={this.state.announcements} onChangePage={this.onChangePage} />
                </div>
                <div className="more-info">
                    <span>For More Info </span><span><a href="tel:0469187261"><button className="modal-call-button"><span>Call </span></button></a></span>
                </div>
            </div>
        )
    }
}

export default ModalAnnouncements;
