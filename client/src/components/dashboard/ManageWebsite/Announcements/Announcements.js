import React, { Component } from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import API from './../../../../utils/API';
import classnames from "classnames";
import TextField from '@material-ui/core/TextField';
import './style.css';
import Snackbar from '@material-ui/core/Snackbar';
import Pagination from './../../../Layout/Pagination/Pagination';

class Enquiry extends Component {

    constructor() {
        super();
        this.state = {
            announcement: "",
            announcements: [],
            errors: {},
            deleteId: '',
            submitSuccess: false,
            deleteSuccess: false,
            pageOfItems: [],
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        this.loadAnnouncements();
    }

    handleInputChange = (event) => {
        this.setState({ announcement: event.target.value });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.postAnnouncement({ announcement: this.state.announcement, user: this.props.user })
            .then(res => {
                this.setState({ announcement: "", errors: "", submitSuccess: true });
                this.loadAnnouncements();
            })
            .catch(err => {
                this.setState({ errors: err.response.data })
            });
    }

    loadAnnouncements = () => {
        API.getAnnouncements()
            .then(res => {
                this.setState({ announcements: res.data })
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }

    deleteAnnouncement = (id) => {
        API.deleteAnnouncement(id)
            .then(res => {
                this.setState({ deleteSuccess: true });
                this.loadAnnouncements();
            })
            .catch(err => console.log(err));
    }


    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ submitSuccess: false, deleteSuccess: false })
    };

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {

        const { errors } = this.state;

        return (
            <div className="announcements-section">
                <div className="add-announcements">
                    <h3>Add Announcement</h3>
                    <form noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
                        <TextField
                            name="announcement"
                            type="text"
                            label="Announcement*"
                            value={this.state.announcement}
                            error={errors.announcement}
                            onChange={this.handleInputChange}
                            className={classnames("", {
                                invalid: errors.announcement
                            })}
                        />
                        <br />
                        <span className="red-text">
                            {errors.announcement}
                        </span>
                        <br />
                        <button className="modal-call-button" type="submit" value="Submit"><span>Submit </span></button>
                    </form>
                </div>
                <div className="view-announcements">
                    <h3>Announcements List:</h3>
                    {this.state.pageOfItems.map((data, index) => (
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                key={index}
                            >
                                <Typography className="enquiry-heading">{data.announcement}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <p><strong>Created By:</strong> {data.user}</p>
                                    <p><strong>Created On: </strong>{data.created}</p>
                                    <button className="modal-call-button delete-announcement"
                                        type="submit"
                                        onClick={() => this.deleteAnnouncement(data._id)}>
                                        <span>Delete</span>
                                    </button>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    ))}
                </div>
                <div className="announcements-pagination">
                    <Pagination items={this.state.announcements} onChangePage={this.onChangePage} />
                </div>
                <Snackbar
                    open={this.state.submitSuccess}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message="&#10004; Announcement Submitted Successfully"
                />
                <Snackbar
                    open={this.state.deleteSuccess}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message="&#10004; Announcement Deleted Successfully"
                />
            </div>
        );
    }
}

export default Enquiry;
