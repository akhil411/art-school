import React, { Component } from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import API from './../../../../utils/API'

class Enquiry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            enquiry: [],
            currentEnquiry: [],
            currentPage: "1",
            postPerPage: "5",
            pageNumbers: []
        }

    }

    componentDidMount() {
        this.loadEnquiry();
    }

    loadCurrentEnquiry = () => {
        const lastItem = this.state.currentPage * this.state.postPerPage;
        const firstItem = lastItem - this.state.postPerPage;
        this.setState({ currentEnquiry: this.state.enquiry.slice(firstItem, lastItem) });
    }

    paginate = (number) => {
        this.setState({ currentPage: number }, () => {
            this.loadCurrentEnquiry();
        });
    }

    loadEnquiry = () => {
        API.getEnquiry()
            .then(res => {
                this.setState({ enquiry: res.data }, () => {
                    for (let i = 1; i <= Math.ceil(this.state.enquiry.length / this.state.postPerPage); i++) {
                        this.state.pageNumbers.push(i);
                    }
                });
                this.loadCurrentEnquiry();
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {

        return (
            <div className="enquiry-details">
                {this.state.currentEnquiry.map(data => (
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="enquiry-heading"><strong>Subject: </strong>{data.subject}, <strong>on </strong> {data.createdAt}</Typography>
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
                <div className="pagination">
                    <ul className='pagination'>
                        {this.state.pageNumbers.map(number => (
                            <li key={number} className='page-item' onClick={() => this.paginate(number)}>
                                <span className='page-link'>{number}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Enquiry;

