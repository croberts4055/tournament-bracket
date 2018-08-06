import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './TournamentForm.css';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import { DropdownButton, MenuItem } from 'react-bootstrap';

class TournamentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            start: moment(),
            end: null,
            title: '',
            description: '',
            game: 'Select Game',
            school: 'Select School',
            team: 'Select Team',
            format: 'Select Format',
            rounds: 2,
            bestof: 1,
            order: "seed",
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSubmit(event) {
        alert('form submitted');
        event.preventDefault();
    }

    handleStartDate(date) {
        this.setState({
          start: date
        })
    }

    handleEndDate(date) {
        this.setState({
          end: date
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSelect(eventKey, event) {
        this.setState({
            [event.target.name]: eventKey
        })
    }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/>
                <div className="tournamentform">
                    <div className="tournament-form">
                        <div className="form-header">
                            TOURNAMENT FORM
                        </div>

                        <form className="form-body" onSubmit={this.handleSubmit}>

                            <div className="section">
                                <div className="title-container">
                                    Title
                                </div>
                                <input type="text" name="title" placeholder="Tournament title..." value={this.state.title} onChange={this.handleChange}/>
                            </div>

                            <div className="section-description">
                                <div className="title-container">
                                    Description
                                </div>
                                <textarea name="description" placeholder="Tournament description..." value={this.state.description} onChange={this.handleChange}/>
                            </div>

                            <div className="game-and-format">
                                <div className="section-half">
                                    <div className="title-container">
                                        Game
                                    </div>
                                    <DropdownButton title={this.state.game}>
                                        <MenuItem onSelect={this.handleSelect} eventKey="League Of Legends" name="game">League Of Legends</MenuItem>
                                        <MenuItem onSelect={this.handleSelect} eventKey="Overwatch" name="game">Overwatch</MenuItem>
                                        <MenuItem onSelect={this.handleSelect} eventKey="Hearthstone" name="game">Hearthstone</MenuItem>
                                        <MenuItem onSelect={this.handleSelect} eventKey="Dota 2" name="game">Dota 2</MenuItem>
                                    </DropdownButton>
                                </div>

                                <div className="section-half">
                                    <div className="title-container">
                                        Format
                                    </div>
                                    <DropdownButton title={this.state.format} id="dropdown-size-medium">
                                        <MenuItem onSelect={this.handleSelect} eventKey="Round Robin" name="format">Round Robin</MenuItem>
                                        <MenuItem onSelect={this.handleSelect} eventKey="Swiss" name="format">Swiss</MenuItem>
                                        <MenuItem onSelect={this.handleSelect} eventKey="Single Elimination" name="format">Single Elimination</MenuItem>
                                        <MenuItem onSelect={this.handleSelect} eventKey="Rocket League" name="format">Rocket League</MenuItem>
                                    </DropdownButton>
                                </div>
                            </div>

                            <div className="rounds-and-best-of">
                                <div className="section-half">
                                    <div className="title-container">
                                        Rounds
                                    </div>
                                    <input type="number" name="rounds" placeholder="2-16" min="2" max="16" />
                                </div>

                                <div className="section-half">
                                    <div className="title-container">
                                        Best Of
                                    </div>
                                    <DropdownButton title={this.state.bestof} id="dropdown-size-medium">
                                        <MenuItem onSelect={this.handleSelect} eventKey="1" name="bestof">1</MenuItem>
                                        <MenuItem onSelect={this.handleSelect} eventKey="3" name="bestof">3</MenuItem>
                                        <MenuItem onSelect={this.handleSelect} eventKey="5" name="bestof">5</MenuItem>
                                        <MenuItem onSelect={this.handleSelect} eventKey="7" name="bestof">7</MenuItem>
                                        <MenuItem onSelect={this.handleSelect} eventKey="9" name="bestof">9</MenuItem>
                                    </DropdownButton>
                                </div>
                            </div>
                            
                            <div className="start-and-end-dates">
                                <div className="section-half">
                                    <div className="title-container">
                                        Start Date
                                    </div>
                                    <DatePicker
                                        name="start"
                                        selected={this.state.start}
                                        onChange={this.handleStartDate} />
                                </div>

                                <div className="section-half">
                                    <div className="title-container">
                                        End Date
                                    </div>
                                    <DatePicker
                                        name="end"
                                        selected={this.state.end}
                                        onChange={this.handleEndDate} />
                                </div>
                            </div>

                            <div className="section">
                                <div className="title-container">
                                    Ordering
                                </div>
                                <div className="tournament-order" onChange={this.handleChange}>
                                    <div className="order-container">
                                        <input type="radio" value="seed" name="order" /> Seeded
                                    </div>
                                    <div className="order-container">
                                        <input type="radio" value="list" name="order" /> Participant's List
                                    </div>
                                    <div className="order-container">
                                        <input type="radio" value="random" name="order" /> Random
                                    </div>
                                </div>
                            </div>

                            {/* <div className="section">
                                <div className="title-container">
                                    School Name
                                </div>
                                <DropdownButton title={this.state.school}>
                                    <MenuItem onSelect={this.handleSelect} eventKey="BMCC" name="school">BMCC</MenuItem>
                                    <MenuItem onSelect={this.handleSelect} eventKey="Brooklyn College" name="school">Brooklyn College</MenuItem>
                                    <MenuItem onSelect={this.handleSelect} eventKey="Hunter College" name="school">Hunter College</MenuItem>
                                    <MenuItem onSelect={this.handleSelect} eventKey="Baruch College" name="school">Baruch College</MenuItem>
                                </DropdownButton>
                            </div> */}

                            {/* I believe David said that each school will have a list of teams and we are going to choose from that list based on that school */}
                            {/* <div className="section">
                                <div className="title-container">
                                    Team
                                </div>
                                <DropdownButton title={this.state.team} id="dropdown-size-medium">
                                    <MenuItem onSelect={this.handleSelect} eventKey="Blue Bears" name="team">Blue Bears</MenuItem>
                                    <MenuItem onSelect={this.handleSelect} eventKey="Black Ravens" name="team">Black Ravens</MenuItem>
                                    <MenuItem onSelect={this.handleSelect} eventKey="Big Oranges" name="team">Big Oranges</MenuItem>
                                    <MenuItem onSelect={this.handleSelect} eventKey="4 Dragons" name="team">4 Dragons</MenuItem>
                                </DropdownButton>
                            </div>
                
                             Participants List: */}

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default TournamentForm;