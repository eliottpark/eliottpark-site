import './App.css';
import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import Campanile from './media/CampanileMtTamalpiasSunset-original.jpg';
import Computer from './media/monitor.svg';
import Berkeley from './media/berkeley-logo-2.png';
import DNA from './media/dna.svg';

export default class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {focus: '',
                    bioe:["Instrumentation in Biology and Medicine","BioMEMS & Medical Devices", "BioMEMS Laboratory","Medical Imaging Signals and Systems", "Neural Computation", "Engineering Medical Devices", "Organic Chemistry & Lab", "Linear Algebra + Diff Eq.","Multivariable Calculus", "Physics for Engineers"],
                    eecs:["Artificial Intelligence","Algorithms for Computational Biology","Efficient Algorithms","Data Structures","Techniques of Data Science","Computer Architecture", "Designing Information Devices and Systems I & II (EE)","Discrete Mathematics and Probability Theory"]
                };
        this.classValue = this.classValue.bind(this);
    }

    classValue(type) {
        var retVal;
        if (0 == type) {
            retVal = "horizontal-box horizontal-box-top";
        } else if (1 == type) {
            retVal = "horizontal-box";
        } else if (2 == type) {
            retVal = "horizontal-box horizontal-box-bottom";
        }
        if (this.state.focus == type) {
            retVal = retVal + " horizontal-box-checked";
        }
        return retVal;
    }

    render () {
        const type = this.state.focus;
        let infoContainer;
        if (0 == type) {
            infoContainer = <img src={Campanile} className='campanile-pic'/>;
        } else if (1 == type) {
            infoContainer = 
                <div className="white education-info-container">
                    <div className='button button4'>
                        <h2>
                        eecs courses
                        </h2>
                    </div>  
                    <div className='education-button-container'>
                        {this.state.eecs.map(course => (
                            <button  className="button3 button">
                                {course}
                            </button>
                        ))}
                    </div>
                </div>
        } else {
            infoContainer = 
                <div className="white education-info-container">
                    <div className='button button4'>
                        <h2>
                        bioe courses
                        </h2>
                    </div>  
                    <div className='education-button-container'>
                        {this.state.bioe.map(course => (
                            <button  className="button3 button">
                                {course}
                            </button>
                        ))}
                    </div>
                </div>
        }
        return (
            <header className="App-header heading" 
                    style={{'backgroundColor':'#f1efeb'}}>
                <div className="section">
                    <h1 className="gray">
                    EDUCATION
                    </h1>
                    <hr className='ninety' style={{backgroundColor:"#788f69"}}/>   
                    <div className="gray Info-Box-Container-About">
                        <div className="stacked">
                            <button className={this.classValue(0)} onClick={(e) => this.setState({focus:0})}>
                                <div className='circle-container'>
                                    <div className='icon-circle'>
                                <img src={Berkeley} className='icon1'/>
                                    </div>  
                                </div>
                                <div className="sub-heading white education-box">
                                    The University of California, Berkeley
                                </div>
                            </button>
                            <button className={this.classValue(1)} onClick={(e) => this.setState({focus:1})}>
                                <div className='circle-container'>
                                    <div className='icon-circle'>
                                        <img src={Computer} className='icon'/>
                                    </div>
                                </div>
                                
                                <div className="sub-heading education-box">
                                    B.S. Electrical Engineering and Computer Sciences
                                </div>
                            </button> 
                            <button className={this.classValue(2)} onClick={(e) => this.setState({focus:2})}>
                                <div className='circle-container'>
                                    <div className='icon-circle'>
                                        <img src={DNA} className='icon'/> 
                                    </div>  
                                </div>
                                <div className="sub-heading white education-box">
                                    B.S. Bioengineering
                                </div>
                            </button> 
                        </div>
                    
                    {infoContainer}

                    </div>
                    <Link class="link" smooth  to={`/#experience`} style={{'transform': 'rotate(-90deg) translate3d(-120px, 0, 0)'}}>
                        <span class="link__arrow">
                            <span></span>
                            <span></span>
                        </span>
                        <span class="link__line"></span>
                        <span class="link__text">Experience</span>
                    </Link>
                </div>
            </header>
        );
    }
}