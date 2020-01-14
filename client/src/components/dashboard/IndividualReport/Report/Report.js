import React, { Component } from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.css';
import API from './../../../../utils/API';

class Report extends Component {

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
        this.loadStudentReports();
    }

    loadStudentReports = () => {
        API.getStudentReports(this.props.userId)
            .then(res => {
                this.setState({ reports: res.data })
            })
            .catch(err => {
                console.log(err)
            });
    }


    render() {

        return (
            <div className="announcements-section">
                <div className="add-announcements">
                    <div className="view-announcements">
                        <h3>Reports:</h3>
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

export default Report;