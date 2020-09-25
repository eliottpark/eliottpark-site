import './App.css';
import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SCM from './media/scm-200-particle.gif';
import asend from './media/asend.png';
import data100 from './media/data100.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      margin: "20px",
      color: theme.palette.text.secondary,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    },
  }));

export default function Projects() {

    const classes = useStyles();

        return (
            
            <header className="App-header heading" 
                    style={{'backgroundColor':'white'}}>
                <div className="section">
                    <h1 className="brown">
                    PROJECTS
                    </h1>
                    <hr className='ninety' style={{backgroundColor:"#788f69"}}/>        
                    <div className={classes.root}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                            <div className={classes.paper}>
                                <img className="project-image scm" src={SCM}/>
                                <div className="sub-sub-heading">Microfludic Vortex Chip</div>
                                <div className="sub-sub-sub-heading">Directed Evolution Research</div>
                                <hr className='ninety' style={{backgroundColor:"#788f69"}}/> 
                                <Typography>{'\u25CB'} Worked with the Hallatschek Lab at UC Berkeley to develop a microfluidic chip for stable, cost-effective, and long-term cell culturing to observe directed evolution.</Typography>
                                <Typography>{'\u25CB'} Designed laminar microfluidic vortex chambers to capture cell populations and optimized chamber and channel parameters, chamber array configuration, and input flow rate to improve capture efficiency and capture duration. [COMSOL] </Typography>
                                <Typography>{'\u25CB'} Fabricated early iterations of the chip using standard photolithography protocol of a silicon wafer as a mold for the PDMS device.</Typography>
                                <a href="https://docs.google.com/document/d/1s6BM1fsg3Zbh8DseeRlpeRL1WETmMCF6FgcfQc8Kwv4/edit?usp=sharing">
                                    <button className="button button4">READ MORE</button>
                                </a>
                            </div>
                            </Grid>
                            <Grid item xs={6}>
                            <div className={classes.paper}>
                                <img className="project-image" src={asend}/>
                                <div className="sub-sub-heading">aSend</div>
                                <div className="sub-sub-sub-heading">CalHacks 2019: First Place Prize</div>
                                <hr className='ninety' style={{backgroundColor:"#788f69"}}/> 
                                <Typography>{'\u25CB'} Won first place for the CalHacks eluv.io API challenge by developing a novel crowdsourced record compiler.</Typography>
                                <Typography>{'\u25CB'} Leveraged the eluv.io client, which allows 4K video streaming, to seamlessly integrate video uploading/streaming into an online platform where users can post videos to compete in metric-defined categories. [Django, SQL, HTML/CSS]</Typography>
                                <a href="https://devpost.com/software/calhacks2019">
                                    <button className="button button4">READ MORE</button>
                                </a>
                            </div>
                            </Grid>
                            <Grid item xs={6}>
                            <div className={classes.paper}>
                            <img className="project-image" src={data100}/>
                                <div className="sub-sub-heading">Modeling Collegiate Dream Teams</div>
                                <hr className='ninety' style={{backgroundColor:"#788f69"}}/> 
                                <Typography>{'\u25CB'} Created a model using ridge regression for NBA game outcomes. Used key stats to build an all-time “dream team” for all colleges. Simulated a tournament using the model to predict the winningest team. [iPython, Pandas, SK-Learn]</Typography>
                                {/* <Typography>{'\u25CB'} Leveraged the eluv.io client, which allows 4K video streaming, to seamlessly integrate video uploading/streaming into an online platform where users can post videos to compete in metric-defined categories. [Django, SQL, HTML/CSS]</Typography> */}
                                <a href="https://colab.research.google.com/drive/1xlyvo_F7xY3Ln1fYBdVFHMeXRrPYNsoS?usp=sharing">
                                    <button className="button button4">READ MORE</button>
                                </a>
                            </div>
                            </Grid>
                            <Grid item xs={6}>
                            <div className={classes.paper}>
                                <div className="sub-sub-heading">PacMan AI</div>
                                <div className="sub-sub-sub-heading">Particle Filter, Reinforcement Learning</div>
                                <hr className='ninety' style={{backgroundColor:"#788f69"}}/> 
                                <Typography>{'\u25CB'} Created a model using ridge regression for NBA game outcomes. Used key stats to build an all-time “dream team” for all colleges. Simulated a tournament using the model to predict the winningest team. [iPython, Pandas, SK-Learn]</Typography>
                                {/* <Typography>{'\u25CB'} Leveraged the eluv.io client, which allows 4K video streaming, to seamlessly integrate video uploading/streaming into an online platform where users can post videos to compete in metric-defined categories. [Django, SQL, HTML/CSS]</Typography> */}
                            </div>                            
                            </Grid>
                        </Grid>
                        </div>
                    <Link smooth  to={`/#top`}>
                        <button className="button button4">
                            TOP
                        </button>
                    </Link>
                </div>
            </header>
            
        );

}