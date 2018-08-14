import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Tournament.css';
import {OverlayTrigger, Panel,Modal,Col,Form,Button,FormGroup, ControlLabel, Alert, FormControl, Radio, Checkbox, Card} from 'react-bootstrap';

class Tournament extends Component {
    constructor(){
        super();
        this.state = {
            isAuth: false,
            showDetails: false,
            title: "",
            game: "",
            selectedTournament: {},
            tournaments: []
        }
        this.goToCreate = this.goToCreate.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
    }

    componentDidMount(){
        this.getTournaments();
        this.getAuth();
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

    getAuth(){
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

    showDetails(event){
        event.preventDefault();
        console.log(event.target.selectedid);
        // const {selectedid} = event.target.selectedid;
        // console.log(selectedid);
        this.setState({
            showDetails : true
        })
    }

    hideDetails(){
        this.setState({
            showDetails: false
        })
    }

    goToCreate(event){
        this.props.history.push("/competitionform");
    }

    renderDetails(){
        var current = this.state.selectedTournament;
        return(
            <Modal show={this.state.showDetails} onHide={this.hideDetails}>
            <Modal.Header closeButton>
                <Modal.Title>{current.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <h4>Popover in a modal</h4>
            

            <h4>Tooltips in a modal</h4>
        

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideDetails}>Close</Button>
          </Modal.Footer>
        </Modal>
        );
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
                                <Panel id={tourney._id} key={index}>
                                    <Panel.Heading>
                                        <Panel.Title>{tourney.title}</Panel.Title>
                                    </Panel.Heading>
                                        <Panel.Body>{tourney.game}</Panel.Body>
                                    <Panel.Footer> 
                                    <Button selectedid="hi" onClick={this.showDetails} bsSize="small">More Details...</Button>
                                    </Panel.Footer>
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

    // renderCreateView(){
    //     return(
    //         <div className="page-wrapper">
         
    //         <Form onSubmit={this.handleSubmit} className="tourneySettings" horizontal>
    //             <Button onClick={this.goBack} bsStyle="primary">Back to Tourneys</Button>
                         
    //             <FormGroup controlId="tourneyTitle">
    //                 <Col componentClass={ControlLabel} sm={2}>Title</Col>
    //                 <Col sm={10}>
    //                     <FormControl onChange={this.handleChange} type="text" name="title" placeholder="Title of Tournament" />
    //                 </Col>
    //             </FormGroup>

    //             <FormGroup controlId="tourneyGame">
    //                 <Col componentClass={ControlLabel} sm={2}>Game</Col>
    //                 <Col sm={10}>
    //                     <FormControl onChange={this.handleChange} type="text" name="game" placeholder="Game Played" />
    //                 </Col>
    //             </FormGroup>

    //             <FormGroup controlId="tourneyExpires">
    //                 <Col componentClass={ControlLabel} sm={2}>Ending Date</Col>
    //                 <Col sm={10}>
    //                     <FormControl onChange={this.handleChange} type="text" placeholder="MM/DD/YYYY" />
    //                 </Col>
    //             </FormGroup>
    //             <input className="submitButton" type="submit" value="SUBMIT"/>
    //         </Form>
           
    //         </div>
    //     );
    // }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/>

                {this.renderSpectatorView()}
                {this.showDetails ? this.renderDetails() : null}

                <Footer/>
            </div>
        );
    }
}

export default Tournament;