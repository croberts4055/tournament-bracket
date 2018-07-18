import React, { Component } from 'react';
import {HelpBlock, ControlLabel,FormGroup, FormControl, FormLabel, Radio, Checkbox} from 'react-bootstrap';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Contact.css';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            title: "",
            organization: "",
            location: "",
            subject: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.messageValidate = this.messageValidate.bind(this);
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    messageValidate(){
        if(this.state.message.length >= 0 && this.state.message.length <= 250){
            return 'success';
        }
        else return 'error';
    }

    render() {
        return (
            <div className="contact-block">
                <MyNav url={this.props.location.pathname}/> 
                <div className="contact">
                <h2>REACH OUT TO US.</h2>
                <form className="formBlock" onSubmit={this.handleSubmit}>
                    <FormGroup className="textfields">
                        <ControlLabel>Name:</ControlLabel>
                        <FormControl 
                            type="text"
                            name="name"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="textfields">
                        <ControlLabel>Email:</ControlLabel>
                        <FormControl 
                            type="text"
                            name="email"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="textfields">
                        <ControlLabel>I am a:</ControlLabel>
                        <FormControl 
                            type="text"
                            name="title"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="textfields">
                        <ControlLabel>Organization:</ControlLabel>
                        <FormControl 
                            type="text"
                            name="organization"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="textfields">
                        <ControlLabel>Location:</ControlLabel>
                        <FormControl 
                            type="text"
                            name="location"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="textfields">
                        <ControlLabel>Subject:</ControlLabel>
                        <FormControl 
                            type="text"
                            name="subject"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="textarea" validationState={this.messageValidate()}>
                        <ControlLabel>Message:</ControlLabel>
                        <FormControl 
                            componentClass = "textarea"
                            type="text"
                            name="message"
                            placeholder = "Message goes here..."
                            onChange={this.handleChange} />
                         <FormControl.Feedback />
                         <HelpBlock>Please limit your response to 250 characters.</HelpBlock>
                    </FormGroup>
                    <input className="contactSubmit" type="submit" value="SEND!"/>
                    {/* NEED CAPTCHA ON THIS FORM */}    
                </form>
                </div>
            </div>
        );
    }
}

export default Contact;