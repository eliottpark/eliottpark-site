import './App.css';
import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import { HashLink as Link } from 'react-router-hash-link';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import Headshot from './media/Headshot.jpeg';

export default class Overview extends Component {
    render () {
        return (
            <header className="App-header heading" 
                    style={{'backgroundColor':'white'}}>
                <h1 className="brown">
                OVERVIEW
                </h1>
                <hr className='ninety' style={{backgroundColor:"#cfa154"}}/>        
                <div className="gray body Info-Box-Container-About">
                    <img src={Headshot} className='profile-pic'/>
                    <div className='Info-Box-Body-Container-About'>
                        <Fade bottom cascade>
                            <div>
                        <div>
                        I believe that we are in the midst of another tech revolution. Since the conception of the Turing machine, 
                        the world has never looked the same. Then came home computing and the internet, which gave way to 
                        the World Wide Web boom, connecting the world in ways people never thought possible. The birth of social media
                        has brought the world even closer, and the recent capitalization of big data along with Machine Learning has 
                        allowed astounding optimizations in the way in which we create, reach people, and learn.
                        </div>
                        <div style={{'margin':'10px'}}/>
                        <div>
                        The culmination of all of these advancements has set the stage for a fundamental shift in health and medicine:
                        we are starting to see the adoption of telemedicine, optimized healthcare, next generation precision medicine, 
                        and point-of-care medical devices. I am deeply passionate about pushing that shift forwards.
                        </div>
                        <div style={{'margin':'10px'}}/>
                        <div>
                        Equipped with a technical background in full-stack software development, medical device design, computational biology,
                        ML and AI, hardware developement, and signal and image processing, I hope to use my skillset to innovate 
                        at the intersection of biology and technology. 
                        I am looking to join a fast-paced, collaborative, and innovative team at the bleeding-edge of developments 
                        in medical devices and diagnostics, computational biology and drug discovery, and next-generation healthcare products.
                        </div>
                        </div>
                        </Fade>


                    </div>
                </div>
                
                <Link class="link" style={{'transform': 'rotate(-90deg) translate3d(-120px, 0, 0)'}}
                        smooth  to={`/#skills`}>
                    <span class="link__arrow">
                        <span></span>
                        <span></span>
                    </span>
                    <span class="link__line"></span>
                    <span class="link__text">Skills</span>
                </Link>
            </header>
        );
    }
}