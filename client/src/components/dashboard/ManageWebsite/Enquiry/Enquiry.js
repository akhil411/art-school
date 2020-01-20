import React, { Component } from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import API from './../../../../utils/API';
import './style.css';
import Pagination from './../../../Layout/Pagination/Pagination';

class Enquiry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            enquiry: [],
            pageOfItems: [],
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        this.loadEnquiry();
    }

    loadEnquiry = () => {
        API.getEnquiry()
            .then(res => {
                this.setState({ enquiry: res.data });
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
            <div className="enquiry-details">
                <h3>Enquiries:</h3>
                <div className="enquiry-content">
                    {this.state.pageOfItems.map(data => ( 
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="enquiry-heading"><strong>Subject: </strong>{data.subject}, <strong>on </strong> {data.created}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    <p><strong>Name:</strong> {data.name}</p>
                                    <p><strong>Email: </strong>{data.email}</p>
                                    <p><strong>Contact Number: </strong>{data.contactNumber}</p>
                                    <p><strong>Description:</strong> {data.description}</p>
                                    <p><strong>Submitted At:</strong> {data.created}</p>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    ))}
                </div>
                <Pagination items={this.state.enquiry} onChangePage={this.onChangePage} />
            </div>
        );
    }
}

export default Enquiry;

