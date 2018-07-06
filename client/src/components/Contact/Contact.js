import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Contact.css';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            who: "",
            organization: "",
            where: "",
            subject: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="contact-page">
                <MyNav url={this.props.location.pathname}/> 
                <form className="contact-form" onSubmit={this.handleSubmit}>
                    <h3>Contact Us</h3>
                    <label>Your Name</label>
                    <input type="text" name="email" onChange={this.handleChange} />
                    <br />
                    
                    <label>Your Email</label>
                    <input type="password" name="password" onChange={this.handleChange} />
                    <br />

                    <label>I am a</label>
                    <input type="text" name="email" onChange={this.handleChange} />
                    <br />

                    <label>Organization name</label>
                    <input type="text" name="email" onChange={this.handleChange} />
                    <br />

                    <label>Where are you contacting us from?</label>
                    <input type="text" name="email" onChange={this.handleChange} />
                    <br />

                    <label>Subject</label>
                    <input type="text" name="email" onChange={this.handleChange} />
                    <br />

                    <label>Message</label>
                    <textarea name="Text1" cols="40" rows="5"></textarea>
                    <br />

                    <input type="submit" value="Submit" />
                </form>
                <Footer/>
            </div>
        );
    }
}

export default Contact;