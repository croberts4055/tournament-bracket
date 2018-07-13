import React, { Component } from 'react';
import {FormGroup, FormControl,Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import './Nav.css';
import { Link } from 'react-router-dom';

/**
 * Navbar still needs to not wrap/stack items at mid-range sizes
 * set the breakpoint for the navbar to be lower so it jumps straight 
 * to mobile. 
 */

class MyNav extends Component {
    
    constructor(){
        super();
        this.state = {
            currentGame : "Overwatch",
            competitors: {
                team1: "Robert Morris University",
                team2: "UCLA"
            },
            user: "John"
        }
        /** Handlers needed : 
         *  Submitting text
         */
        
    }

  
    renderLiveBar(){
        if(this.props.url==="/about"){
            return null;
        }
        return (
                <div className="LiveBarContainer">
                    {this.state.currentGame} - {this.state.competitors.team1} v. {this.state.competitors.team2}
                    <div id="divider"></div>
                    <a href="http://twitch.tv/officialegf" target="_blank">
                        <button className="flex-component" onClick={this.onClick}>WATCH LIVE ON TWITCH</button> 
                    </a>
                </div>
            
        );
    }

    renderSecondaryNav(){
        if(this.props.url==="/statistics" || this.props.url==="/vods" || this.props.url==="/schedule" || this.props.url==="/standings"){
          return(
            <div className="SecondaryNav">
                <div id="endBlock"></div>
                <div id="weekDiv"><b>WEEK</b></div>
                <div><a href="/">1</a></div>
                <div><a href="/">2</a></div>
                <div><a href="/">3</a></div>
                <div><a href="/">4</a></div>
                <div><a href="/">5</a></div>
                <div><a href="/">6</a></div>
                <div><a href="/">7</a></div>
                <div><a href="/">8</a></div>
                <div><a href="/">9</a></div>
                <div id="endBlock"></div>
                <div id="endBlock"></div>
            </div>
            );  
        }
        else return null;
    }


    renderNewsNav(){
        if(this.props.url==="/rules" || this.props.url === "/news" ||
            this.props.url==="/statistics" || this.props.url==="/vods" || this.props.url==="/schedule" || this.props.url==="/standings"){
            return (
        <div className="NewsNavContainer">
            <Navbar.Form id="selectionTools" pullRight>
                    <FormGroup controlId="formControlsSelect">
                        <FormControl componentClass="select" placeholder="REGION">
                        <option value="region">Region</option>
                        <option value="other">...</option>
                        </FormControl>
                        <FormControl componentClass="select" placeholder="SEASON">
                        <option value="season">Season</option>
                        <option value="other">...</option>
                        </FormControl>
                    </FormGroup>      
                </Navbar.Form>
            <Nav bsStyle="pills" justified activekey={1}>
                <NavItem eventKey={1.1} href="/standings">STANDINGS</NavItem>
                <NavItem eventKey={1.2} href="/statistics">STATISTICS</NavItem>
                <NavItem eventKey={1.3} href="/schedule">SCHEDULE</NavItem>
                <NavItem eventKey={1.4} href="/vods">VODS</NavItem>
                <NavItem eventKey={1.5} href="/rulesandcodeofconduct">RULES</NavItem> 
            </Nav>

        </div>
        );
    }
    else return null;        
    }

    render(){
        return (
            // Main Nav Begin 
            <div className="NavContainer">
                <div id="HeaderNav">
                <Navbar fixedTop fluid inverse collapseOnSelect>
                    <Navbar.Header >
                        <Navbar.Brand>
                        <a href="/">
                            <img id="brand-image" alt="logo" src="/images/main_logo.png"/>
                        </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" placeholder="SEARCH" />
                                </FormGroup>{' '}
                        </Navbar.Form>
                        <Nav pullRight>
                        <NavItem eventKey={1} href="/news">
                            NEWS
                        </NavItem>
                        <NavItem eventKey={2} href="/events">
                            EVENTS
                        </NavItem>
                        <NavItem eventKey={3} href="/video">
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
                        <Nav pullRight>
                            <NavDropdown pullRight eventKey={3} title={"WELCOME, " + this.state.user} id="login-dropdown">
                                <MenuItem eventKey={3.1}>View My Profile</MenuItem>
                                <MenuItem eventKey={3.2}>Account Settings</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Log-out</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                    </div>
                {this.renderLiveBar()}
                {this.renderNewsNav()}
                {this.renderSecondaryNav()}
            </div>
            // Nav container end! 
        )
    }
}

export default MyNav;