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
            students:[],
            selectedStudent:'',
            subject:'',
            marks:'',
            comments:''
        }
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        API.getUserType("student")
          .then(res => {
            this.setState({ students: res.data})
          })
          .catch(err => console.log(err));
      };

    handleChange = (event, value) => {
        this.setState({ selectedStudent: value._id});
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
            comments: this.state.comments
        };
        // API.submitEnquiry(newEnquiry)
        //     .then(res => {
        //         alert("Your Enquiry has been sent successfully, Thanks.");
        //         window.location.reload();
        //     })
        //     .catch(err => {
        //         this.setState({ errors: err.response.data })
        //     });
        console.log(newReport)
    };

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
                </div>
                
            </div>
        );
    }
}

export default SubmitReport;