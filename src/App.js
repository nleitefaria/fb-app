import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import {
	  Collapse,
	  Navbar,
	  NavbarToggler,
	  NavbarBrand,
	  Nav,
	  NavItem,
	  NavLink,
	  UncontrolledDropdown,
	  DropdownToggle,
	  DropdownMenu,
	  DropdownItem } from 'reactstrap';

import './App.css';

import Home from './Home.js';
import About from './About.js';

class App extends Component 
{
	constructor(props) 
	{
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() 
  {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
          
        <Switch>        
    		<Route path='/home' component={Home}/>
    		<Route path='/about' component={About}/>
    	</Switch>		
      </div>
    );
  }
}

export default App;
