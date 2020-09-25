import './App.css';
import React, {Component} from 'react';
import { ReactTinyLink } from 'react-tiny-link';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';

import { HashLink as Link } from 'react-router-hash-link';

export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover0 = this.handleMouseHover0.bind(this);
        this.handleMouseHover1 = this.handleMouseHover1.bind(this);
        this.handleMouseHover2 = this.handleMouseHover2.bind(this);
        this.handleMouseHover3 = this.handleMouseHover3.bind(this);
        this.hoverMode = true;
        this.state = {
          isHovering0: false,
          isHovering1: false,
          isHovering2: false,
          isHovering3: false,
        };
    }
    handleMouseHover0() {
        this.setState(this.toggleHoverState0);
    }
    
    handleMouseHover1() {
        this.setState(this.toggleHoverState1);
    }
    
    handleMouseHover2() {
        this.setState(this.toggleHoverState2);
    }
    
    handleMouseHover3() {
        this.setState(this.toggleHoverState3);
    }
    
    toggleHoverState0(state) {
        return {isHovering0: !state.isHovering0};
    }

    toggleHoverState1(state) {
        return {isHovering1: !state.isHovering1};
    }

    toggleHoverState2(state) {
        return {isHovering2: !state.isHovering2};
    }

    toggleHoverState3(state) {
        return {isHovering3: !state.isHovering3};
    }

    // toggleHoverState(state) {
    //     let retVal;
    //     if (value == 0) {
    //         retVal = {isHovering0: !state.isHovering0};
    //     } else if (value == 1) {
    //         retVal = {isHovering1: !state.isHovering1};
    //     } else if (value == 2) {
    //         retVal = {isHovering2: !state.isHovering2};
    //     } else if (value == 3) {
    //         retVal = {isHovering3: !state.isHovering3};
    //     } else {
    //         retVal = ''
    //     }
    //     return {
    //         retVal
    //     };
    //     }

    render () {
        return (
            
            <header className="App-header heading" 
                    style={{'backgroundColor':'white'}}>
                <div className="section">
                    <h1 className="green">
                    EXPERIENCE
                    </h1>
                    <hr className='ninety' style={{backgroundColor:"#white"}}/>        
                    <Timeline align="alternate" transitionDuration={400}>
                        <TimelineItem transitionDuration={400}>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                January 2020 - Present
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent 
                                onMouseEnter={this.handleMouseHover0}
                                onMouseLeave={this.handleMouseHover0}
                                transitionDuration={400}>
                                <div className="paper">
                                    <Typography variant="h6" component="h1">
                                    Jadoo Technologies, Inc: Software and Firmware Engineer   
                                    </Typography>
                                    {(this.state.isHovering0 || this.hoverMode) ?
                                    <div>
                                        <hr className='ninety' style={{backgroundColor:"#788f69"}}/>
                                        <Typography>{'\u25CB'} Redesigned the architecture of and implemented the custom software platform used to interface with the device (configure/multi-thread/log/run experiments, visualize/analyze data). [Java backend, WebSocket API, React UI]</Typography>
                                        <Typography>{'\u25CB'} Developed the entire firmware for the 3.0 version of our carbon-nanotube-array diagnostic device used for highly specific, sensitive, real-time COVID-19 detection. [Embedded C (TIVA-C for TI MCU)]</Typography>
                                    </div>
                                    :""}
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                May 2020 - Present 
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent 
                                onMouseEnter={this.handleMouseHover1}
                                onMouseLeave={this.handleMouseHover1}
                                transitionDuration={400}>
                                <div className="paper">
                                    <Typography variant="h6" component="h1">
                                    Leverage Finder: Lead Software Engineer  
                                    </Typography>    
                                    {(this.state.isHovering1 || this.hoverMode) ?
                                    <div>
                                        <hr className='ninety' style={{backgroundColor:"#788f69"}}/>
                                        <Typography>{'\u25CB'} Defined the full-stack architecture of the software platform and helped to ideate platform functionality.</Typography>
                                        <Typography>{'\u25CB'} Implemented scalable relational databases for a variety of data types on AWS RDS and S3 instances. [PostgreSQL]</Typography>
                                        <Typography>{'\u25CB'} Building a functional API and secure UI with tiered authorization levels. [SpringBoot, React, Okta, HTML/CSS]</Typography>
                                    </div>
                                    :""}
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                February 2020 - June 2020
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent 
                                onMouseEnter={this.handleMouseHover2}
                                onMouseLeave={this.handleMouseHover2}
                                transitionDuration={400}>
                                <div className="paper">
                                    <Typography variant="h6" component="h1">
                                    Lucid Automation Security: Machine Learning Intern  
                                    </Typography>
                                    {(this.state.isHovering2 || this.hoverMode) ?
                                    <div>
                                        <hr className='ninety' style={{backgroundColor:"#788f69"}}/>
                                        <Typography>{'\u25CB'} Developed a realtime supervised learning algorithm with an extensive use and development guide for chromatography UV peak detection for increased efficiency in biotech manufacturing using a TensorFlow/Keras NN framework.</Typography>
                                        <Typography>{'\u25CB'} Performed data cleaning on raw UV elution readings and developed a procedure to create realistic simulated data;</Typography>
                                        <Typography>{'\u25CB'} Created and trained a TF Keras Sequential DNN model on a real and simulated dataset. Defined and optimized feature vector. Tuned hyper parameters and features. [TensorFlow, Keras, iPython, Pandas]</Typography>
                                        <ReactTinyLink
                                        cardSize="small"
                                        showGraphic={true}
                                        maxLine={2}
                                        minLine={1}
                                        url="https://www.linkedin.com/posts/lucid-as_machinelearning-biotechnology-automation-activity-6674317680515936257-e2fK"
                                        />
                                    </div>
                                    :""}
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                June 2019 - August 2019
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot/>
                            </TimelineSeparator>
                            <TimelineContent 
                                onMouseEnter={this.handleMouseHover3}
                                onMouseLeave={this.handleMouseHover3}
                                transitionDuration={400}>
                                <div className="paper">
                                    <Typography variant="h6" component="h1">
                                    Tandem Diabetes Care: Software Development Intern    
                                    </Typography>
                                    {(this.state.isHovering3 || this.hoverMode) ?
                                    <div>
                                        <hr className='ninety' style={{backgroundColor:"#788f69"}}/>
                                        <Typography>{'\u25CB'} Independently created a tool to autogenerate executable code from a BLE command database. [JavaScript, C]</Typography>
                                        <Typography>{'\u25CB'} Built a tool that updates headers to a new coding standard throughout the codebase. [C, Python]</Typography>
                                        <Typography>{'\u25CB'} Wrote extensive unit tests and helped with Validation and Verification of code for FDA approval. [C, Java]</Typography>
                                    </div>
                                    :""}
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        </Timeline>
                    <Link class="link" smooth  to={`/#leadership`} style={{'transform': 'rotate(-90deg) translate3d(-110px, 0, 0)'}}>
                        <span class="link__arrow">
                            <span></span>
                            <span></span>
                        </span>
                        <span class="link__line"></span>
                        <span class="link__text">Leadership</span>
                    </Link>
                </div>
            </header>
        );
    }
}