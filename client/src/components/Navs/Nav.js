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
            currentUrl : "",
            currentGame : "Overwatch",
            competitors: "Robert Morris University vs UCLA"
        }
        /** Handlers needed : 
         *  Submitting text
         */
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
                <div className="LiveBarContainer">
                    {this.state.currentGame} - {this.state.competitors}
                    <div id="divider"></div>
                    <a href="http://twitch.tv/officialegf" target="_blank">
                        <button className="flex-component" onClick={this.onClick}>WATCH LIVE ON TWITCH</button> 
                    </a>
                </div>
            
        );
    }

    renderSecondaryNav(){
        return(
            <div className="SecondaryNav">
                <div id="endBlock"></div>
                <div id="weekDiv"><b>WEEK</b></div>
                <div><a href="#">1</a></div>
                <div><a href="#">2</a></div>
                <div><a href="#">3</a></div>
                <div><a href="#">4</a></div>
                <div><a href="#">5</a></div>
                <div><a href="#">6</a></div>
                <div><a href="#">7</a></div>
                <div><a href="#">8</a></div>
                <div><a href="#">9</a></div>
                <div id="endBlock"></div>
                <div id="endBlock"></div>
            </div>
        );
    }

    renderScheduleBar(){
        return (
            <div className="ScheduleBar">
                <div id="scheduleDiv">SCHEDULE</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div>DATE | TIME <br></br> RMU vs UC Berkeley</div>
                <div id="viewScheduleDiv"><a href="#">VIEW SCHEDULE</a></div>
            </div>
        );
    }


    renderNewsNav(){
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
                <NavItem eventKey={1.5} href="/rules">RULES</NavItem> 
            </Nav>

        </div>
        );

    }

    render(){
        const urlCopy = this.state.currentUrl;
        return (
            // Main Nav Begin 
            <div className="NavContainer">
                <div id="HeaderNav">
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
                    </Navbar.Collapse>
                    </Navbar>
                    </div>
                {/* {urlCopy === "/watch" ? this.renderLiveBar() : urlCopy } */}
                {/* {urlCopy === "/home" ? this.renderScheduleBar() : urlCopy } */}
                {/* {urlCopy !== "watch" ? this.NewsBar() : urlCopy } */}
                {/* {urlCopy === "/teams" ? this.SecondaryNav() : urlCopy } */}

                {this.renderLiveBar()}
                {this.renderScheduleBar()}
                {this.renderNewsNav()}
                {this.renderSecondaryNav()}
            </div>
            // Nav container end! 
        )
    }
}

export default MyNav;