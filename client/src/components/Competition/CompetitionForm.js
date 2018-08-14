import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './CompetitionForm.css';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import {Alert, Button, Glyphicon, ListGroup, ListGroupItem, FormControl,DropdownButton, MenuItem } from 'react-bootstrap';

class TournamentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alert : {
                show: false,
                text: "",
                type: ""
            },
            selectedSubform: 'Season',
            subforms: [
                'season',
                'state',
                'national',
                'invitational'
            ],
            title: '',
            description: '',
            game: 'Select Game',
            school: 'Select School',
            team: 'Select Team',
            format: 'Select Format',
            rounds: 2,
            bestof: 1,
            start: moment(),
            end: null,
            selectedOrder: 'Seeded',
            orders: [
                'Seeded',
                'Participant\'s List',
                'Random'
            ],
            filterOptions: [
                "STATE",
                "SECTION"
            ],
            selectedState: 'Choose State',
            states: [
                'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
                'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
                'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
                'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
                'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
                'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
                'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
                'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
                'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
            ],
            selectedSection: 'Choose Section',
            selectedTeam: 'ChooseTeam',
            participants: [
                {seed: 1,name: 't1'},
                {seed: 2,name: 't2'},
                {seed: 3,name: 't3'},
                {seed: 4,name: 't4'},
                {seed: 5,name: 't5'},            
            ]
        };

        this.handleSubformClicked = this.handleSubformClicked.bind(this);
        this.handleOrderClicked = this.handleOrderClicked.bind(this);
        this.handleStateClicked = this.handleStateClicked.bind(this);
        this.handleTeamSelect = this.handleTeamSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    getFilteredParticipants(myState,mySection){
        fetch("http://localhost:3001/team/",{
            credentials: "include",
            method: "post",
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({
                state: myState,
                section: mySection
            })
        })
        .then((response)=> response.json())
        .then((response)=> {
            if(Array.isArray(response)){
                return response;
            }
        })
    }

    renderAlert(){
        return(
            <div className="alert">
                <Alert bsStyle={this.state.alert.type} onDismiss={this.handleDismiss}>
                    <p>{this.state.alert.text}</p>
                </Alert>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:3001/tournament/create",{
            credentials: "include",
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: {
                    [this.state.selectedSubform] : true
                },
                title: this.state.title,
                info: this.state.description,
                startDate: this.state.start,
                endDate: this.state.end,
                game: this.state.game,
                format: {
                    [this.state.format] : true
                },
                rounds: this.state.rounds,
                participants: this.state.participants
            })
        })
        .then((response)=> response.json())
        .then((response)=> {
            if(response.message){
                this.setState({
                    alert: {
                        show: true,
                        text: response.message,
                        type: "danger"
                    }
                })
            }else{
                this.setState({
                    alert: {
                        show: false,
                        text: "",
                        type: "danger"
                    }
                })
                alert("Competition Submitted!");
            }
        })
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

    handleTeamSelect(event){
        let temp = this.state.participants;
        temp.push(event.target.value);
        this.setState({
            participants : temp
        })
    }

    renderFormHeader() {
        return (
            <div className="form-header">
                COMPETITION FORM
            </div>
        )
    }

    renderSubformsSection() {
        return (
            <div className="subforms-section">
                <div className="subforms-header">
                    What form is this for? (Currently selected: {this.state.selectedSubform})
                </div>
                <div className="subforms-tab-container">
                    {this.state.subforms.map((subform, index)=>{
                        return (
                            <div className="subform-tabs">
                                <button key={index} value={subform} onClick={this.handleSubformClicked}>
                                    {subform}
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    handleSubformClicked(event) {
        this.setState({
            selectedSubform: event.target.value
        })
    }

    renderTitleAndDescription(event) {
        return (
            <div className="title-and-description-section">
            {this.state.alert.show ? this.renderAlert() : null}
                <div className="section">
                    <div className="title-container">
                        Title
                    </div>
                    <input type="text" name="title" placeholder="Competition title..." value={this.state.title} onChange={this.handleChange}/>
                </div>

                <div className="section-description">
                    <div className="title-container">
                        Description
                    </div>
                    <textarea name="description" placeholder="Competition description..." value={this.state.description} onChange={this.handleChange}/>
                </div>
            </div>
        )
    }

    renderGameAndFormat(event) {
        return (
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
                        <MenuItem onSelect={this.handleSelect} eventKey="roundRobin" name="format">Round Robin</MenuItem>
                        <MenuItem onSelect={this.handleSelect} eventKey="Swiss" name="format">Swiss</MenuItem>
                        <MenuItem onSelect={this.handleSelect} eventKey="Single Elimination" name="format">Single Elimination</MenuItem>
                        <MenuItem onSelect={this.handleSelect} eventKey="Rocket League" name="format">Rocket League</MenuItem>
                    </DropdownButton>
                </div>
            </div>
        )
    }

    renderRoundsAndBestOf(event) {
        return (
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
        )
    }

    renderStartAndEndDates(event) {
        return (
            <div className="start-and-end-dates">
                <div className="section-half">
                    <div className="title-container">
                        Start Date
                    </div>
                    <DatePicker name="start" selected={this.state.start} onChange={this.handleStartDate} />
                </div>

                <div className="section-half">
                    <div className="title-container">
                        End Date
                    </div>
                    <DatePicker name="end" selected={this.state.end} onChange={this.handleEndDate} />
                </div>
            </div>
        )
    }

    renderOrdering(event) {
        return (
            <div className="section">
                <div className="title-container">
                    Ordering (Currently selected: {this.state.selectedOrder})
                </div>
                <div className="competition-order">
                    {this.state.orders.map((order, index)=> {
                        return (
                            <div className="order-container" onChange={this.handleOrderClicked}>
                                <input type="radio" value={this.state.orders[index]} name="order" /> {this.state.orders[index]}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    handleOrderClicked(event) {
        this.setState({
            selectedOrder: event.target.value
        })
    }

    renderFilters(event) {
        return (
            <div className="section">
                <div className="title-container">
                    Filter Options
                </div>
                <div className="filters">
                    {this.state.filterOptions.map((filter, index)=> {
                        return (
                            <div className="filter-container">
                                <div className="filter-title">
                                    {filter}
                                </div>
                                <DropdownButton className="drop-down" title={this.state.selectedState} dropup id="split-button-dropup">
                                    {this.state.states.map((s, index)=>{
                                        return (
                                            <div>
                                                <MenuItem onSelect={this.handleStateClicked} eventKey={s}>
                                                    {s}
                                                </MenuItem>
                                            </div>
                                        )
                                    })}
                                </DropdownButton>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    renderParticipantList(){
        // get current participants using get request, store them in array 
        // var filteredParticipants = this.getFilteredParticipants(this.state.selectedState,this.state.selectedSection);
        // we would then map over this array to render the left hand side, and once selected we add
        // the team to our participants list array in the handle select method. 
        return(
            <div className="list-section">
                <div className="title-container">
                    Select Participants:
                </div>
                <div className="list-container">
                <FormControl id="filteredTeams" componentClass="select" multiple placeholder="select">
                    {
                        this.state.participants.map((team,index)=>{
                            return(
                            <option key={index} onSelect={this.handleTeamSelect} value="select">{team.name} </option>
                            );
                        })
                    }
                </FormControl>
                </div>
                <div className="list-container">
                <ListGroup id="selectedTeams" className="half-container">
                    {
                        this.state.participants.map((team,index)=>{
                            return(
                                <ListGroupItem>
                                <Button bsSize="small">
                                    <Glyphicon glyph="ok"/>
                                </Button>
                                <Button bsSize="small">
                                    <Glyphicon glyph="remove"/>
                                </Button>
                                    {team.seed}.{team.name}
                                </ListGroupItem>
                            );
                        })
                    }
                </ListGroup>
                </div>
            </div>
        );
    }    

    handleStateClicked(eventKey, event) {
        this.setState({
            selectedState: eventKey
        })
    }

    renderSubmitButton(event) {
        return (
            <div className="submit-button">
                <input type="submit" value="Submit" />
            </div>
        )
    }

    render() {
        return (
            <div>
                <MyNav />
                <div className="competition-form-class">
                    <div className="competition-form-container">
                        {this.renderFormHeader()}
                        {this.renderSubformsSection()}

                        <form className="form-body" onSubmit={this.handleSubmit}>

                            {this.renderTitleAndDescription()}
                            {this.renderGameAndFormat()}
                            {this.renderRoundsAndBestOf()}
                            {this.renderStartAndEndDates()}
                            {this.renderOrdering()}
                            {this.renderFilters()}
                            {this.renderParticipantList()}
                            {this.renderSubmitButton()}
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default TournamentForm;