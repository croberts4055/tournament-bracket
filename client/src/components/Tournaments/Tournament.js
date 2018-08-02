import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Tournament.css';
import {Panel,Modal,Col,Form,Button,FormGroup, ControlLabel, Alert, FormControl, Radio, Checkbox, Card} from 'react-bootstrap';

class Tournament extends Component {
    constructor(){
        super();
        this.state = {
            isAuth: false,
            showCreateView: false,
            title: "",
            game: "",
            expiration: 0,
            format: {
                singleElim: false,
                roundRobin: false
            },
            rounds: 32,
            participants: [],
            tournaments: []
        }
        this.goToCreate = this.goToCreate.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getTournaments(){
        fetch("http://localhost:3001/tournament", {
            credentials: 'include',
            method: "get",
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then( (response) => response.json())
        .then( (response) => {
            if(response){
                this.setState({
                    tournaments: response
                })
            }
        })
    }

    handleChange(event){
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:3001/tournament/create",{
            credentials: "include",
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                expiration: this.state.expiration,
                game: this.state.game,
                // format: this.state.format,
                // rounds: this.state.rounds,
                // participants: this.state.participants
            })
        })
        .then((response)=> response.json())
        .then((response)=> {
            console.log(response);
        })
    }

    goToCreate(event){
        this.setState({
            showCreateView: true
        })
    }

    goBack(event){
        this.setState({
            showCreateView: false
        })
    }

    componentDidMount(){

        this.getTournaments();

        this.setState({
            showCreateView: false
        })

        fetch("http://localhost:3001/users/auth", {
            credentials: 'include',
            method: "get",
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json',
            }        
        })
        .then( (response)=> response.json())
        .then( (response)=> {
            if(response.user){
                this.setState({
                    isAuth: true,
                })
            }
        })

    }   


    renderSpectatorView(){

        var currentTournaments = this.state.tournaments;
        return(
            <div className="page-wrapper">                  
            {this.state.isAuth ? <Button onClick={this.goToCreate} bsStyle="primary">Create Tournament</Button> : null}
            <div className="tournament-wrapper">
                     { 
                         currentTournaments.map((tourney,index) => {
                             return(
                                <Panel key={index}>
                                    <Panel.Heading>
                                        <Panel.Title>{tourney.title}</Panel.Title>
                                    </Panel.Heading>
                                        <Panel.Body>{tourney.game}</Panel.Body>
                                </Panel> 
                             );
                         })
                     }
            </div>
            </div>
        );
    }

    renderTournaments(){
        var currentTournaments = this.state.tournaments;
        console.log("entered");

    }

    renderCreateView(){
        return(
            <div className="page-wrapper">
         
            <Form onSubmit={this.handleSubmit} className="tourneySettings" horizontal>
                <Button onClick={this.goBack} bsStyle="primary">Back to Tourneys</Button>
                         
                <FormGroup controlId="tourneyTitle">
                    <Col componentClass={ControlLabel} sm={2}>Title</Col>
                    <Col sm={10}>
                        <FormControl onChange={this.handleChange} type="text" name="title" placeholder="Title of Tournament" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="tourneyGame">
                    <Col componentClass={ControlLabel} sm={2}>Game</Col>
                    <Col sm={10}>
                        <FormControl onChange={this.handleChange} type="text" name="game" placeholder="Game Played" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="tourneyExpires">
                    <Col componentClass={ControlLabel} sm={2}>Ending Date</Col>
                    <Col sm={10}>
                        <FormControl onChange={this.handleChange} type="text" placeholder="MM/DD/YYYY" />
                    </Col>
                </FormGroup>
                <input className="submitButton" type="submit" value="SUBMIT"/>
            </Form>
           
            </div>
        );
    }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/>

                {this.state.showCreateView ? this.renderCreateView() : this.renderSpectatorView()}

                <Footer/>
            </div>
        );
    }
}

export default Tournament;