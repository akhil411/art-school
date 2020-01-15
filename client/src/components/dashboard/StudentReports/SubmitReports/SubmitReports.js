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
import Autocomplete from '@material-ui/lab/Autocomplete';

class SubmitReport extends Component {

    constructor() {
        super();
        this.state = {
            errors: {},
            students: [],
            selectedStudent: '',
            subject: '',
            marks: '',
            comments: '',
            submitSuccess: false,
            reports: [],
            deleteId: ''
        }
    }

    componentDidMount() {
        this.loadUsers();
        this.loadReports();
    }

    loadUsers = () => {
        API.getStudentUsers("student")
            .then(res => {
                this.setState({ students: res.data })
            })
            .catch(err => console.log(err));
    };

    handleChange = (event, value) => {
        if (value !== null) {
            this.setState({ selectedStudent: value._id });
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const newReport = {
            subject: this.state.subject,
            marks: this.state.marks,
            comments: this.state.comments,
            teacherId: this.props.userId,
            studentId: this.state.selectedStudent
        };
        API.submitReport(newReport)
            .then(res => {
                this.setState({ subject: "", marks: "", comments: "", errors: "", submitSuccess: true });
                this.loadReports();
            })
            .catch(err => {
                this.setState({ errors: err.response.data })
            });
    };

    loadReports = () => {
        API.getReports(this.props.userId)
            .then(res => {
                this.setState({ reports: res.data })
            })
            .catch(err => {
                console.log(err)
            });
    }

    deleteId = (id) => {
        this.setState({ deleteId: id })
    }

    deleteReport = () => {
        API.deleteReport(this.state.deleteId)
            .then(res =>
                window.location.reload()
            )
            .catch(err => console.log(err));
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ submitSuccess: false })
    };

    render() {

        const { errors } = this.state;

        return (
            <div className="announcements-section">
                <div className="add-announcements">
                    <h3>Submit A Report</h3>
                    <div className="submit-report">
                        <form noValidate autoComplete="off" onSubmit={this.handleFormSubmit}>
                            <Autocomplete
                                id="free-solo-demo"
                                options={this.state.students}
                                onChange={this.handleChange}
                                getOptionLabel={option => option.name}
                                renderInput={params => (
                                    <TextField {...params} label="Select student" margin="normal" variant="outlined" fullWidth />
                                )}
                            />
                            <span className="red-text">
                                {errors.studentId}
                            </span>
                            <br />
                            <TextField
                                name="subject"
                                type="text"
                                label="Subject*"
                                value={this.state.subject}
                                error={errors.subject}
                                onChange={this.handleInputChange}
                                className={classnames("", {
                                    invalid: errors.subject
                                })}
                            />
                            <br />
                            <span className="red-text">
                                {errors.subject}
                            </span>
                            <br />
                            <TextField
                                name="marks"
                                type="text"
                                label="Marks"
                                value={this.state.marks}
                                error={errors.marks}
                                onChange={this.handleInputChange}
                                className={classnames("", {
                                    invalid: errors.marks
                                })}
                            />
                            <br />
                            <span className="red-text">
                                {errors.marks}
                            </span>
                            <br />
                            <TextField
                                name="comments"
                                type="text"
                                label="Comments"
                                value={this.state.comments}
                                error={errors.comments}
                                onChange={this.handleInputChange}
                                className={classnames("", {
                                    invalid: errors.comments
                                })}
                            />
                            <br />
                            <span className="red-text">
                                {errors.comments}
                            </span>
                            <br />
                            <br />
                            <button className="modal-call-button" type="submit" value="Submit"><span>Submit </span></button>
                        </form>
                    </div>
                    <Snackbar
                        open={this.state.submitSuccess}
                        autoHideDuration={3000}
                        onClose={this.handleClose}
                        message="&#10004; Report Successfully Submitted"
                    />
                    <div className="view-announcements">
                        <h3>Submitted Reports:</h3>
                        {this.state.reports.map((data, index) => (
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    key={index}
                                >
                                    <Typography className="enquiry-heading"><strong>{index + 1}. </strong>Student: {data.studentId.name}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <p><strong>Student Name:</strong> {data.studentId.name}</p>
                                        <p><strong>Subject : </strong>{data.subject}</p>
                                        <p><strong>Marks : </strong>{data.marks}</p>
                                        <p><strong>Comments : </strong>{data.comments}</p>
                                        <p><strong>Created On : </strong>{data.created}</p>
                                        <button className="modal-call-button delete-announcement"
                                            data-toggle="modal"
                                            data-target="#deleteModalCenter"
                                            type="submit"
                                            onClick={() => this.deleteId(data._id)}>
                                            <span>Delete</span>
                                        </button>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </div>
                    <div className="modal fade" id="deleteModalCenter" role="dialog" aria-labelledby="likeModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p className="delete-message">Are you sure you want to delete</p>
                                    <button className="modal-call-button delete-announcement" onClick={this.deleteReport}> <span>Delete</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default SubmitReport;
