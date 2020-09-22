import './App.css';
import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

export default class Projects extends Component {
    render () {
        return (
            
            <header className="App-header heading" 
                    style={{'backgroundColor':'white'}}>
                <h1 className="brown">
                PROJECTS
                </h1>
                <hr className='ninety' style={{backgroundColor:"#788f69"}}/>        
                <div className="brown body">
                Soon to be EECS + BioE grad itching to help revolutionize medicine and health
                </div>
                <Link class="link" smooth  to={`/#top`}>
                    <span class="link__arrow">
                        <span></span>
                        <span></span>
                    </span>
                    <span class="link__line"></span>
                    <span class="link__text">Top</span>
                </Link>
            </header>
        );
    }
}