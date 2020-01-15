import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function CoureseOne() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><strong>Overview</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            The one-year Diploma offers both practical and theoretical courses, which have been developed in conjunction with the arts industry.
            It is designed to prepare you for a career in the visual arts or other related creative fields.
          <br></br>
            <br></br>
            A major focus is the production of a professional folio of work that reflects your personal creativity. The folio will display a sequential development, with emphasis
            on the acquisition of skills and the adaptation of those skills to the production of artworks with a sound personal philosophical base.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}><strong>Details</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in mauris eu mauris viverra
            sollicitudin et sit amet ex. Nulla facilisi. Nulla nisi neque, pulvinar in tincidunt ac, consequat id lorem. Nullam tempus hendrerit efficitur. Vivamus interdum lorem ornare eros vestibulum, vel interdum lorem pulvinar. Aenean mattis, nibh a tempus ultricies, mauris enim volutpat libero, sit amet pharetra sem nisl vel nunc. Sed vitae ultrices ante, eget consequat nulla.
          <br></br>
            <br></br>
            Nulla at leo a nulla posuere ultrices at vitae ipsum. Vestibulum quam lacus, hendrerit eget odio eu, luctus dignissim ex.
            Nullam nisi libero, euismod nec nibh ut, lobortis semper erat. Duis.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}><strong>Career</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in mauris eu mauris viverra
            sollicitudin et sit amet ex. Nulla facilisi. Nulla nisi neque, pulvinar in tincidunt ac, consequat id lorem. Nullam tempus hendrerit efficitur. Vivamus interdum lorem ornare eros vestibulum, vel interdum lorem pulvinar. Aenean mattis, nibh a tempus ultricies, mauris enim volutpat libero, sit amet pharetra sem nisl vel nunc. Sed vitae ultrices ante, eget consequat nulla.
          <br></br>
            <br></br>
            Nulla at leo a nulla posuere ultrices at vitae ipsum. Vestibulum quam lacus, hendrerit eget odio eu, luctus dignissim ex.
            Nullam nisi libero, euismod nec nibh ut, lobortis semper erat. Duis.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}><strong>Fees</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in mauris eu mauris viverra
            sollicitudin et sit amet ex. Nulla facilisi. Nulla nisi neque, pulvinar in tincidunt ac, consequat id lorem. Nullam tempus hendrerit efficitur. Vivamus interdum lorem ornare eros vestibulum, vel interdum lorem pulvinar. Aenean mattis, nibh a tempus ultricies, mauris enim volutpat libero, sit amet pharetra sem nisl vel nunc. Sed vitae ultrices ante, eget consequat nulla.
          <br></br>
            <br></br>
            Nulla at leo a nulla posuere ultrices at vitae ipsum. Vestibulum quam lacus, hendrerit eget odio eu, luctus dignissim ex.
            Nullam nisi libero, euismod nec nibh ut, lobortis semper erat. Duis.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}><strong>Admission</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in mauris eu mauris viverra
            sollicitudin et sit amet ex. Nulla facilisi. Nulla nisi neque, pulvinar in tincidunt ac, consequat id lorem. Nullam tempus hendrerit efficitur. Vivamus interdum lorem ornare eros vestibulum, vel interdum lorem pulvinar. Aenean mattis, nibh a tempus ultricies, mauris enim volutpat libero, sit amet pharetra sem nisl vel nunc. Sed vitae ultrices ante, eget consequat nulla.
          <br></br>
            <br></br>
            Nulla at leo a nulla posuere ultrices at vitae ipsum. Vestibulum quam lacus, hendrerit eget odio eu, luctus dignissim ex.
            Nullam nisi libero, euismod nec nibh ut, lobortis semper erat. Duis.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}><strong>Additional Expenses</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in mauris eu mauris viverra
            sollicitudin et sit amet ex. Nulla facilisi. Nulla nisi neque, pulvinar in tincidunt ac, consequat id lorem. Nullam tempus hendrerit efficitur. Vivamus interdum lorem ornare eros vestibulum, vel interdum lorem pulvinar. Aenean mattis, nibh a tempus ultricies, mauris enim volutpat libero, sit amet pharetra sem nisl vel nunc. Sed vitae ultrices ante, eget consequat nulla.
          <br></br>
            <br></br>
            Nulla at leo a nulla posuere ultrices at vitae ipsum. Vestibulum quam lacus, hendrerit eget odio eu, luctus dignissim ex.
            Nullam nisi libero, euismod nec nibh ut, lobortis semper erat. Duis.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}><strong>Summary</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}