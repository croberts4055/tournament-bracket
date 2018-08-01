import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './TournamentForm.css';

import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

class TournamentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('form submitted');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/>
                <div className="tournamentform-class">
                    <div className="tournament-form">
                        <div className="form-header">
                            TOURNAMENT FORM
                        </div>
                        <form className="form" onSubmit={this.handleSubmit}>
                            {/* School Name will be queried through the database */}
                            School Name:
                            <ButtonToolbar>
                                <DropdownButton title="Select School" id="dropdown-size-medium">
                                    <MenuItem eventKey="1">School 1</MenuItem>
                                    <MenuItem eventKey="2">School 2</MenuItem>
                                    <MenuItem eventKey="3">School 3</MenuItem>
                                    <MenuItem eventKey="4">School 4</MenuItem>
                                </DropdownButton>
                            </ButtonToolbar>
                            <br />
                            {/* I believe David said that each school will have a list of teams and we are going to choose from that list based on that school */}
                            Team:
                            <ButtonToolbar>
                                <DropdownButton title="Select Team" id="dropdown-size-medium">
                                    <MenuItem eventKey="1">Team 1</MenuItem>
                                    <MenuItem eventKey="2">Team 2</MenuItem>
                                    <MenuItem eventKey="3">Team 3</MenuItem>
                                    <MenuItem eventKey="4">Team 4</MenuItem>
                                </DropdownButton>
                            </ButtonToolbar>
                            <br />
                            {/* What type of game are we hosting this tournament for? (League of Legends, OverWatch, HearthStone, etc) */}
                            Game:
                            <ButtonToolbar>
                                <DropdownButton title="Select Game" id="dropdown-size-medium">
                                    <MenuItem eventKey="1">League Of Legends</MenuItem>
                                    <MenuItem eventKey="2">Overwatch</MenuItem>
                                    <MenuItem eventKey="3">Hearthstone</MenuItem>
                                    <MenuItem eventKey="4">Dota 2</MenuItem>
                                </DropdownButton>
                            </ButtonToolbar>
                            <br />
                            {/* game format includes: Round Robin, Swiss, Single Elimination, and Rocket League */}
                            Format:
                            <ButtonToolbar>
                                <DropdownButton title="Select Format" id="dropdown-size-medium">
                                    <MenuItem eventKey="1">Round Robin</MenuItem>
                                    <MenuItem eventKey="2">Swiss</MenuItem>
                                    <MenuItem eventKey="3">Single Elimination</MenuItem>
                                    <MenuItem eventKey="4">Double Elimination</MenuItem>
                                    <MenuItem eventKey="5">Rocket League</MenuItem>
                                </DropdownButton>
                            </ButtonToolbar>
                            <br />
                            Rounds:
                            <input type="number" name="quantity" min="2" max="32" />
                            <br />
                            {/* choose from best of 3, 5, 7, 8, etc (basically odd numbers). should be a drop down of 3-9 and if more, it should be requested through email? */}
                            Best of:
                            <ButtonToolbar>
                                <DropdownButton title="Select Rounds" id="dropdown-size-medium">
                                    <MenuItem eventKey="1">3</MenuItem>
                                    <MenuItem eventKey="2">5</MenuItem>
                                    <MenuItem eventKey="3">7</MenuItem>
                                    <MenuItem eventKey="4">9</MenuItem>
                                </DropdownButton>
                            </ButtonToolbar>
                            <br />
                            {/* should be able to add students one by one (maybe a default 4?) */}
                            Participants List:
                            <br />
                            {/* radio buttons for the choice of seeding and list of participants and maybe random? */}
                            Ordering: Seeding/Participant's List/random
                            <br />
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default TournamentForm;