import './App.css';
import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withStyles } from '@material-ui/core/styles';
import { ReactTinyLink } from 'react-tiny-link'

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';


const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      backgroundColor: 'rgba(255, 255, 255, .3)',
      boxShadow: 'box-shadow: 0 5px 8px 0 grey;',
      '&:not(:last-child)': {
        borderBottom: 0,
        // borderRadius: '30px 30px 0px 0px '
      },
      '&:(:last-child)': {
        borderBottom: 0,
        // borderRadius: '0px 0px 30px 30px '
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
        // borderRadius: '30px',
      },
    },
    expanded: {},
  })(MuiAccordion);

const AccordionSummary = withStyles({
root: {
    backgroundColor: 'rgba(255, 255, 255, .35)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    // borderRadius: '30px 30px 0px 0px ',
    '&$expanded': {
    minHeight: 56,
    // borderRadius: '30px 30px 0px 0px ',
    display: "flex",
    flexDirection: "column"
    },
},
content: {
    '&$expanded': {
    margin: '12px 0',
    },
},
expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      
    },
  }))(MuiAccordionDetails);

export default function Leadership() {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

        return (
            
            <header className="App-header heading" 
                    style={{'backgroundColor':'#decfb2'}}>
                <div className="section">
                    <h1 className="white">
                    LEADERSHIP
                    </h1>
                    <hr className='ninety' style={{backgroundColor:"#9ec0de"}}/>        
                    <div>
                        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <div className="sub-sub-heading">NeuroTechnology@Berkeley: Devices Division Lead</div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{'\u25CB'} Co-launched the Devices division of the organization as a project-based model with multiple teams working to create neurotechnology-related devices.</Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography>{'\u25CB'} Led a team in developing "MyoMirror," an EMG-based device that detects and replicates muscle movement. [Arduino, LTSpice, Breadboard development, CAD]</Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <ReactTinyLink
                                            cardSize="small"
                                            showGrapic={true}
                                            maxLine={2}
                                            minLine={1}
                                            url="https://neurotech.berkeley.edu/index.html"
                                            />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <div className="sub-sub-heading">UC Berkeley EnableTech: Project Lead</div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{'\u25CB'} Led a team of undergrad. engineers in developing a low-cost, open-sourced and easily reproducible, wheelchair-mounted robotic arm: JARL.[3D printing, Arduino, Analog Circuit Design, React]</Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography>{'\u25CB'} Helped transition the team away from the previous design iteration to a new, more dynamic, more efficient design pathway. </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <Typography>{'\u25CB'} Oversaw the transition of electronics and firmware from the old design to the new design. [Arduino code w/ I2C communication to encoders monitoring GPIO-controlled stepper motors] </Typography>
                            </AccordionDetails>
                            <AccordionDetails>
                                <ReactTinyLink
                                            cardSize="small"
                                            showGrapic={true}
                                            maxLine={2}
                                            minLine={1}
                                            url="https://docs.google.com/presentation/d/1PEaj_b6_iR3lcLiPHNmo_TXJP_0ef-INWOEkfT6w5H4/edit?usp=sharing"
                                            />
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <Link class="link" smooth  to={`/#projects`}style={{'transform': 'rotate(-90deg) translate3d(-160px, 0, 0)'}}>
                        <span class="link__arrow">
                            <span></span>
                            <span></span>
                        </span>
                        <span class="link__line"></span>
                        <span class="link__text">Projects</span>
                    </Link>
                </div>
            </header>
        );
}