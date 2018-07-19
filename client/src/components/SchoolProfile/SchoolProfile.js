import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';

import './SchoolProfile.css';
import { ButtonGroup, Button } from 'react-bootstrap';



class SchoolProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedGame: 0,
            games: [
                "League of Legends",
                "Overwatch",
                "Hearthstone",
                "Smite",
                "Runescape"
            ],
        }
    }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/>
                {/* <p>You are on the SchoolProfile page! Current url is: {this.props.location.pathname}</p> */}
                <div className="school-profile-container">
                    <div className="school-profile-image">

                    </div>
                    <div className="school-profile-content">
                        <div className="selected-game">
                            <ButtonGroup justified>
                                <Button href="#">League of Legends</Button>
                                <Button href="#">Overwatch</Button>
                                <Button href="#">Hearthstone</Button>
                                <Button href="#">Smite</Button>
                                <Button href="#">Runescape</Button>
                            </ButtonGroup>
                        </div>
                        <div className="school-profile-quick-info">
                            <div className="overview">
                                <div className="section-heading">
                                    OVERVIEW
                                </div>
                                <div className="overview-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                                </div>
                            </div>
                            <div className="history">
                                1st place in REGION
                            </div>
                        </div>
                        <div className="school-profile-details">
                            <div className="roster">
                                <div className="section-heading">
                                    ROSTER
                                </div>

                            </div>
                            <div className="schedule-and-match-history">
                                <div className="schedule">
                                    <div className="section-heading">
                                        SCHEDULE
                                    </div>
                                </div>
                                <div className="match-history">
                                    <div className="section-heading">
                                        MATCH HISTORY
                                    </div>
                                </div>
                            </div>
                            <div className="news">
                                <div className="section-heading">
                                    NEWS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default SchoolProfile;