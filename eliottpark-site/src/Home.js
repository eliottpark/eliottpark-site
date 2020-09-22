import './App.css';
import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import AppNavbar from './AppNavbar.js';

import Overview from './Overview';
import Skills from './Skills';
import Education from './Education.js';
import Experience from './Experience.js';
import Leadership from './Leadership.js';
import Projects from './Projects.js';


class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <div className='page-section' id='top'>
                    <header className="App-header heading">
                    <h1 className="heading">
                        <span>E L I O T T </span>
                        <span>P A R K</span>
                    </h1>
                    <hr className='ninety' style={{backgroundColor:"#cfa154"}}/>        
                    <div className="green body">
                    Soon to be EECS + BioE grad itching to help revolutionize medicine and health
                    </div>
                    <Link class="link" smooth  to={`/#overview`}>
                        <span class="link__arrow">
                            <span></span>
                            <span></span>
                        </span>
                        <span class="link__line"></span>
                        <span class="link__text">Overview</span>
                    </Link>                
                    </header>
                </div>
                <div className='page-section' id='overview'>
                    <Overview/>
                </div>
                <div className='page-section' id='skills'>
                    <Skills/>
                </div>
                <div className='page-section' id='education'>
                    <Education/>
                </div>
                <div className='page-section' id='experience'>
                    <Experience/>
                </div>
                <div className='page-section' id='leadership'>
                    <Leadership/>
                </div>
                <div className='page-section' id='projects'>
                    <Projects/>
                </div>
            </div>
        );
    }
}

export default Home;