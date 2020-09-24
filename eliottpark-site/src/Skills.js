import './App.css';
import React, {Component} from 'react';
import { CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
import { HashLink as Link } from 'react-router-hash-link';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';



export default class Skills extends Component {

    constructor() {
        super();
        this.state = {
          languages: ["Python","JavaScript","Java","C","C++","React","SQL","HTML/CSS", "Go","Arduino"],
          frameworks: ["TensorFlow","Pandas","Keras","SK-Learn","PostgreSQL","AWS","Okta","ArangoDB","Django","Spring"],
          areas: ["Medical Devices", "Artificial Intelligence","Machine Learning","Medical Signals","BioMEMS","REST API","Data Visualization", "Data Analysis","Linux","Imaging"],
          interpersonal: ["Team Leadership","Communication","Project Organization"]
        };
      }
    
    render () {
        return (
            <header className="App-header heading" 
                    style={{'backgroundColor':'#788f69'
                    }}>
                <div className="section">
                <h1 className="white">
                SKILLS
                </h1>
                <hr className='ninety' style={{backgroundColor:"#cfa154"}}/>   
                <div className="white Info-Box-Container-About"> 
                <div className='button button2'>
                    <h2>
                    languages
                    </h2>
                </div>   
                
                <div className='button-container'>
                    {this.state.languages.map(language => (
                        // <CSSTransitionGroup
                        // in={true}
                        // appear={true}
                        // key={language}
                        // timeout={200}
                        // classNames={"slide"}>
                        <button  className="button1 button">
                            {language}
                        </button>
                        // </CSSTransitionGroup>
                    ))}
                </div>
                </div>

                <div className="white Info-Box-Container-About">    
                <div className='button-container' style={{'flexDirection':'row-reverse'}}>
                    {this.state.frameworks.map(framework => (
                        // <CSSTransitionGroup
                        // in={true}
                        // appear={true}
                        // key={framework}
                        // timeout={200}
                        // classNames={"slide"}>
                        <button  className="button1 button">
                            {framework}
                        </button>
                        // </CSSTransitionGroup>
                    ))}
                </div>
                <div className='button button2'>
                    <h2>
                    frameworks
                    </h2>
                </div>  
                </div>

                <div className="white Info-Box-Container-About">    
                <div className='button button2'>
                    <h2>
                    areas of knowledge
                    </h2>
                </div>  
                <div className='button-container'>
                    {this.state.areas.map(area => (
                        // <CSSTransitionGroup
                        // in={true}
                        // appear={true}
                        // key={area}
                        // timeout={200}
                        // classNames={"slide"}>
                        <button  className="button1 button">
                            {area}
                        </button>
                        // </CSSTransitionGroup>
                    ))}
                </div>
                </div>
                
                <div className="white Info-Box-Container-About">    
                <div className='button-container' style={{'flexDirection':'row-reverse'}}>
                    {this.state.interpersonal.map(interpersonal => (
                        // <CSSTransitionGroup
                        // in={true}
                        // appear={true}
                        // key={interpersonal}
                        // timeout={200}
                        // classNames={"slide"}>
                        <button  className="button1 button">
                            {interpersonal}
                        </button>
                        // </CSSTransitionGroup>
                    ))}
                </div>
                <div className='button button2'>
                    <h2>
                    interpersonal skills
                    </h2>
                </div>  
                </div>

                <Link class="link" smooth  to={`/#education`} style={{'transform': 'rotate(-90deg) translate3d(-120px, 0, 0)'}}>
                    <span class="link__arrow">
                        <span></span>
                        <span></span>
                    </span>
                    <span class="link__line"></span>
                    <span class="link__text">Education</span>
                </Link>
                </div>
            </header>
        );
    }
}