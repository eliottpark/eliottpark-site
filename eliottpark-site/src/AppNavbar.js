import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Button } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './App.css';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar light expand="md" className="body blur" style={{
      position: "-webkit-sticky",
      position: "sticky", 
      top: 0,
      zIndex: 1,
      backgroundColor:'#f3ede0',
      borderBottom: '2px solid #E0E0E0',
      opacity: 0.97,
      // backdropFilter: 'blur(20px)',
      // webkitBackdropFilter: 'blur(20px)'
      }}>
      <NavbarBrand  tag={Link} smooth to={`/#top`}>
          <span>E L I O T T </span>
          <span>P A R K</span>
      </NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className='nav-body'>
            <NavLink
              tag={Link} smooth to={`/#overview`}>OVERVIEW
            </NavLink>
          </NavItem>
          <NavItem className='nav-body'>
            <NavLink
              tag={Link} smooth to={`/#skills`}>SKILLS
            </NavLink>
          </NavItem>
          <NavItem className='nav-body'>
            <NavLink
              tag={Link} smooth to={`/#education`}>EDUCATION
            </NavLink>
          </NavItem>
          <NavItem className='nav-body'>
            <NavLink
              tag={Link} smooth to={`/#experience`}>EXPERIENCE
            </NavLink>
          </NavItem>
          <NavItem className='nav-body'>
            <NavLink
              tag={Link} smooth to={`/#leadership`}>LEADERSHIP
            </NavLink>
          </NavItem>
          <NavItem className='nav-body'>
            <NavLink
              tag={Link} smooth to={`/#projects`}>PROJECTS
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>;
  }
}