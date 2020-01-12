import React, { Component } from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import API from './../../../../utils/API';
import TextField from '@material-ui/core/TextField';
import './style.css';
import Autocomplete from '@material-ui/lab/Autocomplete';

class ViewReports extends Component {

    constructor() {
        super();
        this.state = {
            errors: {},
            students: [],
            subject: '',
            marks: '',
            comments: '',
            submitSuccess: false,
            reports: [],
            deleteId:''
        }
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.getUserType("student")
            .then(res => {
                this.setState({ students: res.data })
            })
            .catch(err => console.log(err));
    };

    handleChange = (event, value) => {
        if (value !== null) {
            this.loadStudentReports(value._id);
        }
    }

    loadStudentReports = (studentId) => {
        API.getStudentReports(studentId)
            .then(res => {
                this.setState({ reports: res.data })
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {

        const { errors } = this.state;

        return (
            <div className="announcements-section">
                <div className="add-announcements">
                    <h3>Reports</h3>
                    <div className="submit-report">
                            <Autocomplete
                                id="free-solo-demo"
                                options={this.state.students}
                                onChange={this.handleChange}
                                getOptionLabel={option => option.name}
                                renderInput={params => (
                                    <TextField {...params} label="Select student" margin="normal" variant="outlined" fullWidth />
                                )}
                            />
                            
                    </div>
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
                                    <Typography className="enquiry-heading"><strong>{index + 1}. </strong>Subject: {data.subject}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        <p><strong>Student Name:</strong> {data.studentId.name}</p>
                                        <p><strong>Subject : </strong>{data.subject}</p>
                                        <p><strong>Marks : </strong>{data.marks}</p>
                                        <p><strong>Report By : </strong>{data.teacherId.name}</p>
                                        <p><strong>Comments : </strong>{data.comments}</p>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewReports;