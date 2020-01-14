import React, { Component } from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import './style.css';
import Autocomplete from '@material-ui/lab/Autocomplete';

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


    render() {

        return (
            <div className="announcements-section">
                
            </div>
        );
    }
}

export default Report;