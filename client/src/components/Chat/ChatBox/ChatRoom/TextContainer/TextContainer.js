import React from 'react';
import onlineIcon from './../Icons/onlineIcon.png';
import './style.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const TextContainer = ({ users }) => (
	<div className="textContainer">
		{
			users
				? (
					<div>
						<ExpansionPanel>
							<ExpansionPanelSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography ><h6>Online:</h6></Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<Typography>
									<div className="activeContainer">
										<h6>
											{users.map(({ name }) => (
												<div key={name} className="activeItem">
													{name}
													<img alt="Online Icon" src={onlineIcon} />
												</div>
											))}
										</h6>
									</div>
								</Typography>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					</div>
				)
				: null
		}
	</div>
);

export default TextContainer;