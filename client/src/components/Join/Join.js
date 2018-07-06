import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Join.css';
import { Checkbox } from 'react-bootstrap';

class Join extends Component {
    constructor() {
        super();

        this.state = {
            college: false,
            highschool: false,
            media: false,
            name: "",
            gamertag: "",
            email: "",
            confirmemail: "",
            interest: "",
            played: "",
            systems: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        // need to do some error checking to make sure fields were filled out! 
        event.preventDefault();
        console.log("something");
        console.log(this.state.email);
        fetch("http://localhost:3001/users", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.name,
                email : this.state.email
            })
        })
        .then( (response) => response.json())
        .then( (response )=> {
            console.log(response);
        })
    }

    render() {
        return (
            <div className="join-egf-container">
                <MyNav url={this.props.location.pathname}/> 
                    <form className="join-egf-form" onSubmit={this.handleSubmit}>
                        WHAT COMMUNITY ARE YOU LOOKING TO JOIN?
                        <div className="join-egf-logos">
                            <div className="college-logo">
                                <Checkbox>
                                    College
                                </Checkbox>
                            </div>
                            <div className="highschool-logo">
                                <Checkbox>
                                    High School
                                </Checkbox>
                            </div>
                            <div className="media-logo">
                                <Checkbox>
                                    Media
                                </Checkbox>
                            </div>
                        </div>
                        <div className="join-egf-form-fields">
                            <label>STUDENT NAME - FULL</label>
                            <input type="text" name="name" onChange={this.handleChange} />
                            <br />
                            
                            <label>DESIRED GAMERTAG</label>
                            <input type="password" name="gamertag" onChange={this.handleChange} />
                            <br />

                            <label>SCHOOL/ORGANIZATION EMAIL</label>
                            <input type="text" name="email" onChange={this.handleChange} />
                            <br />

                            <label>CONFIRM EMAIL</label>
                            <input type="text" name="email" onChange={this.handleChange} />
                            <br />

                            <label>SPECIFIC AREA OF INTEREST</label>
                            <input type="text" name="interest" onChange={this.handleChange} />
                            <br />

                            <label>GAMES PLAYED</label>
                            <input type="number" name="played" onChange={this.handleChange} />
                            <br />

                            <label>PLATFORM</label>
                            <input type="text" name="platform" onChange={this.handleChange} />
                            <br />

                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                <Footer />
            </div>
        );
    }
}

export default Join;