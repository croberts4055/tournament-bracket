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

            subform: null,
            subforms: [
                'Season',
                'State',
                'National',
                'Invitational'
            ],

            title: null,
            description: null,
            game: null,
            format: null,
            rounds: null,
            bestof: null,
            start: moment(),
            end: null,

            order: null,
            orders: [
                'Seeded',
                'Participant\'s List',
                'Random'
            ],

            state: null,
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

            section: null,
            sections: [
                {
                    name: 'Section 1',
                    teams: [
                        {
                            school: 'Hunter College',
                            name: 'blue tigers'
                        },
                        {
                            school: 'Baruch College',
                            name: 'yellow dogs'
                        }
                    ]   
                },
                {
                    name: 'Section 2',
                    teams: [
                        {
                            school: 'BMCC',
                            name: 'water bottleheads'
                        },
                        {
                            school: 'Brookdale Campus',
                            name: 'black ravens'
                        }
                    ]
                },
                {
                    name: 'Section 3',
                    teams: [
                        {
                            school: 'Queens College',
                            name: 'orange naranja'
                        },
                        {
                            school: 'Lehman College',
                            name: 'grassy lawnmowers',
                        },
                        {
                            school: 'Sonos College',
                            name: 'musical cats'
                        }
                    ]
                },
                {
                    name: 'Section 4',
                    teams: [
                        {
                            school: 'City College',
                            name: 'high clowns'
                        },
                        {
                            school: 'City Tech College',
                            name: 'pink snubbles'
                        }
                    ],
                },
            ],
            allTeams: [
                {
                    school: 'Hunter College',
                    name: 'blue tigers',
                    category: 'available',
                },
                {
                    school: 'Baruch College',
                    name: 'yellow dogs',
                    category: 'available',
                },
                {
                    school: 'BMCC',
                    name: 'water bottleheads',
                    category: 'available',
                },
                {
                    school: 'Brookdale Campus',
                    name: 'black ravens',
                    category: 'available',
                },
                {
                    school: 'Queens College',
                    name: 'orange naranja',
                    category: 'available',
                },
                {
                    school: 'Lehman College',
                    name: 'grassy lawnmowers',
                    category: 'available',
                },
                {
                    school: 'Sonos College',
                    name: 'musical cats',
                    category: 'available',
                },
                {
                    school: 'City College',
                    name: 'high clowns',
                    category: 'available',
                },
                {
                    school: 'City Tech College',
                    name: 'pink snubbles',
                    category: 'available',
                },
            ],
            availableList: [],
            participantsList: [],
        };

        this.handleSubformClicked = this.handleSubformClicked.bind(this);
        this.handleOrderClicked = this.handleOrderClicked.bind(this);
        this.handleStateClicked = this.handleStateClicked.bind(this);
        this.handleSectionClicked = this.handleSectionClicked.bind(this);
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
                type: this.state.subform,
                title: this.state.title,
                info: this.state.description,
                startDate: this.state.start,
                endDate: this.state.end,
                game: this.state.game,
                format: this.state.format,
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
            <div className="section">
                <div className="subforms-header">
                    What type of form is this?
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
            subform: event.target.value
        })
    }

    renderTitle() {
        return (

            <div className="title-and-description-section">
            {this.state.alert.show ? this.renderAlert() : null}
                <div className="section">
                    <div className="title-container">
                        Title
                    </div>
                    <input type="text" name="title" placeholder="Competition title..." value={this.state.title} onChange={this.handleChange}/>
                </div>

                {/* <div className="section">
                    <div className="title-container">
                        Title

                    </div>
                    <input type="text" name="title" placeholder="Competition title..." value={this.state.title} onChange={this.handleChange}/>
                </div> */}
            </div>
        )
    }

    renderDescription() {
        return (
            <div className="section">
                <div className="title-container">
                    Description
                </div>
                <textarea name="description" placeholder="Competition description..." value={this.state.description} onChange={this.handleChange}/>
            </div>
        )
    }

    renderGameAndFormat() {
        return (
            <div className="section">
                <div className="section-half">
                    <div className="title-container">
                        Game
                    </div>
                    <DropdownButton title={this.state.game} placeholder="Select DIS">
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
        )
    }

    renderRoundsAndBestOf() {
        return (
            <div className="section">
                <div className="section-half">
                    <div className="title-container">
                        Rounds
                    </div>
                    <input type="number" name="rounds" placeholder="2-16" min="2" max="16" onChange={this.handleChange} />
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

    renderStartAndEndDates() {
        return (
            <div className="section">
                <div className="section-half">
                    <div className="title-container">
                        Start Date
                    </div>
                    <DatePicker name="start" selected={this.state.start} minDate={new Date()} onChange={this.handleStartDate} />
                </div>

                <div className="section-half">
                    <div className="title-container">
                        End Date
                    </div>
                    <DatePicker name="end" selected={this.state.end} minDate={this.state.start} onChange={this.handleEndDate} />
                </div>
            </div>
        )
    }
    
    renderOrdering() {
        return (
            <div className="section">
                <div className="title-container">
                    Ordering
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
            order: event.target.value
        })
    }

    renderFilters() {
        return (
            <div className="section">
                {this.renderStateFilter()}
                {this.renderSectionFilter()}
            </div>
        )
    }

    renderStateFilter() {
        return (
            <div className="filter-container">
                <div className="filter-title">
                    State
                </div>
                <DropdownButton className="drop-down" title={this.state.state} dropup id="split-button-dropup">
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
    }

    handleStateClicked(eventKey, event) {
        this.setState({
            state: eventKey
        })
    }

    renderSectionFilter() {
        // rendering title for section filter when changed
        var sectionTitle = '';
        var sectionNumber = this.state.section;
        if(sectionNumber === null) {
            sectionNumber = '';
        }
        else {
            var sectionNumber = this.state.section + 1;
            sectionTitle = 'Section ' + sectionNumber;
        }

        return (
            <div className="filter-container">
                <div className="filter-title">
                    Section
                </div>
                <DropdownButton className="down-down" title={sectionTitle} dropup id="split-button-dropup">
                    {this.state.sections.map((s, index)=>{
                        return (
                            <div>
                                <MenuItem onSelect={this.handleSectionClicked} eventKey={index}>
                                    {s.name}
                                </MenuItem>
                            </div>
                        )
                    })}
                </DropdownButton>
            </div>
        )
    }

    handleSectionClicked(eventKey, event) {
        this.setState({
            section: eventKey
        })
    }

    renderTeamsHeader() {
        return (
            <div className="section">
                <div className="team-title-container">
                    Teams
                </div>
                <div className="team-title-container">
                    Competition List
                </div>
            </div>
        )
    }

    // This function should be able to render teams based on selected State AND/OR selected Section.
    // Example 1: if only State is selected, then the teams list would show all the teams in that state.
    // Example 2: ff State and Section is selected, then the teams list would show all the teams in that state for a specific section
    renderTeams() {
        {this.storeAllTeams()}
        return (
            <div>
                <div className="team-list-container" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>this.onDrop(e, 'available')}>
                    {this.state.availableList}
                </div>

                <div className="participants-list-container" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>this.onDrop(e, 'participant')}>
                    {this.state.participantsList}
                </div>
            </div>
        )
        // else {
        //     var selectedSection = this.state.section;
        //     var teamsObject = this.state.sections[selectedSection].teams;

        //     const teamsList = teamsObject.map((obj) =>
        //         <div className="team-info-container">
        //             <div className="team-school">
        //                 School: {obj.school}
        //             </div>
        //             <div className="team-name">
        //                 Team: {obj.name}
        //             </div>
        //         </div>
        //     );

        //     return (
        //         <div className="team-list-display">
        //             {teamsList}
        //         </div>
        //     )
        // }
    }

    storeAllTeams() {
        this.state.availableList = [];
        this.state.participantsList = [];
        this.state.allTeams.forEach((team) => {
            if(team.category === 'available') {
                this.state.availableList.push(
                    <div
                    key={team.name}
                    onDragStart={(e)=>this.onDragStart(e, team.name)}
                    draggable
                    className="team-info-container">
                        <div className="team-school">
                            School: {team.school}
                        </div>
                        <div className="team-name">
                            Team: {team.name}
                        </div>
                    </div>
                )
            } else {
                this.state.participantsList.push(
                    <div
                    key={team.name}
                    onDragStart={(e)=>this.onDragStart(e, team.name)}
                    draggable
                    className="team-info-container">
                        <div className="team-school">
                            School: {team.school}
                        </div>
                        <div className="team-name">
                            Team: {team.name}
                        </div>
                    </div>
                )
            }
        })
    }

    onDragOver(e) {
        e.preventDefault();
    }

    onDragStart(e, teamName) {
        e.dataTransfer.setData("name", teamName);
    }

    onDrop(e, category) {
        let name = e.dataTransfer.getData("name");

        let allTeams = this.state.allTeams.filter((team) => {
            if(team.name == name) {
                team.category = category;
            }
            return team;
        })

        // let result = Object.keys(this.state.leftList).filter(function(team) {
        //     if(team === school) {
        //         return true;
        //     }
        // })

        this.setState({
            ...this.state,
            allTeams
        })
    }

    renderSubmitButton(event) {
        return (
            <div className="section">
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

                            {this.renderTitle()}
                            {this.renderDescription()}
                            {this.renderGameAndFormat()}
                            {this.renderRoundsAndBestOf()}
                            {this.renderStartAndEndDates()}
                            {this.renderOrdering()}
                            {this.renderFilters()}

                            {this.renderTeamsHeader()}

                            {this.renderTeams()}
                            {/* {this.renderCompetitionTeams()} */}

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