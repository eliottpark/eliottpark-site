import './App.css';
import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';



export default class Skills extends Component {
    render () {
        return (
            <header className="App-header heading" 
                    style={{'backgroundColor':'#788f69'}}>
                <h1 className="white">
                SKILLS
                </h1>
                <hr className='ninety' style={{backgroundColor:"#cfa154"}}/>        
                <div className="white body">
                Soon to be EECS + BioE grad itching to help revolutionize medicine and health
                </div>
                
                <Link class="link" smooth  to={`/#education`}>
                    <span class="link__arrow">
                        <span></span>
                        <span></span>
                    </span>
                    <span class="link__line"></span>
                    <span class="link__text">Education</span>
                </Link>
            </header>
        );
    }
}