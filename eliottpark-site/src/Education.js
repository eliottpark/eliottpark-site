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
        this.state = {focus: ''};
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
                    
                    <img src={Campanile} className='campanile-pic'/>
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