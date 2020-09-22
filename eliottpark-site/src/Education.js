import './App.css';
import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';

export default class Education extends Component {
    render () {
        return (
            
            <header className="App-header heading" 
                    style={{'backgroundColor':'#cfa154'}}>
                <h1 className="white">
                EDUCATION
                </h1>
                <hr className='ninety' style={{backgroundColor:"#788f69"}}/>        
                <div className="white body">
                Soon to be EECS + BioE grad itching to help revolutionize medicine and health
                </div>
                <Link class="link" smooth  to={`/#experience`}>
                    <span class="link__arrow">
                        <span></span>
                        <span></span>
                    </span>
                    <span class="link__line"></span>
                    <span class="link__text">Experience</span>
                </Link>
            </header>
        );
    }
}