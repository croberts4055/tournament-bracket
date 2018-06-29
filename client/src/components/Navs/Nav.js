import React, { Component } from 'react';
import {FormGroup, FormControl,Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import './Nav.css';

/**
 * Navbar still needs to not wrap/stack items at mid-range sizes
 * set the breakpoint for the navbar to be lower so it jumps straight 
 * to mobile. 
 */

class MyNav extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            watchingLive : false,
            gameStreaming : "Overwatch",
            competitors: "Robert Morris University vs UCLA"
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        let isWatching = !this.state.watchingLive;
        this.setState({
            watchingLive : isWatching
        });
    }

    renderLiveBar(){
        console.log("made it");
        return (
            <div className="Nav">
            <Navbar fixedTop fluid inverse collapseOnSelect>
                <Navbar.Header >
                    <Navbar.Brand>
                    <a href="#brand">
                        <img id="brand-image" alt="logo" src="/main_logo.png"/>
                    </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                            </FormGroup>{' '}
                    </Navbar.Form>
                    <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        NEWS
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        EVENTS
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        VIDEO
                    </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown pullRight eventKey={3} title="COLLEGE CLUB" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown pullRight eventKey={3} title="COLLEGE VARSITY" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown pullRight eventKey={3} title="HIGH SCHOOL" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <div className="flex-container">
                    {this.state.gameStreaming} - {this.state.competitors}
                    <button className="flex-component" onClick={this.onClick}>WATCH LIVE</button> 
                </div>
                </Navbar>
            </div>
            
        );
    }

    render(){
        if(!this.state.watchingLive){
            return this.renderLiveBar();
        }
        return (
            <div className="Nav">
            <Navbar fixedTop fluid inverse collapseOnSelect>
                <Navbar.Header >
                    <Navbar.Brand>
                    <a href="#brand">
                        <img id="brand-image" alt="logo" src="/main_logo.png"/>
                    </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                            </FormGroup>{' '}
                    </Navbar.Form>
                    <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        NEWS
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        EVENTS
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        VIDEO
                    </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown pullRight eventKey={3} title="COLLEGE CLUB" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown pullRight eventKey={3} title="COLLEGE VARSITY" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown pullRight eventKey={3} title="HIGH SCHOOL" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default MyNav;