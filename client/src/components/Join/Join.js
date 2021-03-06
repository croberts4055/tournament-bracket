import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Join.css';
import {HelpBlock, ControlLabel,FormGroup, FormControl, FormLabel, Radio, Checkbox} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import Alert from '../Alert/SysAlert.js';
const cryptoRandomString = require('crypto-random-string');


class Join extends Component {
    constructor() {
        super();

        this.state = {
            type: {
                    student: true,
                    admin: false, 
                  },
            subtype: {
                highschool: true,
                college: false,
                media: false,
                fan: false,
                schooladminm: false
            },
            name: "",
            userid: "",
            username: "",
            password: "",
            confirmpassword: "",
            ign: "",
            email: "",
            school: "",
            team: "",
            loginToggled: false,
            alert : {
                show: false,
                text: "",
                type: ""
            },
            disabledFields : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleHighschoolChecked = this.handleHighschoolChecked.bind(this);
        this.handleCollegeChecked = this.handleCollegeChecked.bind(this);
        this.handleMediaChecked = this.handleMediaChecked.bind(this);
        this.passwordValidate = this.passwordValidate.bind(this);
        this.goToLogin = this.goToLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        // this.handleDismiss = this.handleDismiss.bind(this);
    }

    // handleDismiss(){
    //     this.setState({
    //         alert : { show: false}
    //     })
    //     if(this.state.alert.type === "success"){
    //         this.props.history.push("/");
    //     }
    // }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
  
    handleHighschoolChecked(event) {
        this.setState({
            type: {
                student: true,
                admin : false
            },
            subtype: {
                highschool: true,
                college : false,
                media: false,
                fan: false,
                schooladmin: false
            }
        })
    }

    handleCollegeChecked(event) {
        this.setState({
            type: {
                student: true,
                admin : false
            },
            subtype: {
                highschool: false,
                college : true,
                media: false,
                fan: false,
                schooladmin: false
            }
        })
    }

    handleMediaChecked(event) {
        this.setState({
            type: {
                student: false,
                admin : true
            },
            subtype: {
                highschool: false,
                college : false,
                media: true,
                fan: false,
                schooladmin: false
            }
        })
    }

    handleLogin(event) {
        event.preventDefault();
        var usernameregularexpression = /^[a-zA-Z0-9]+$/;
        if(!usernameregularexpression.test(this.state.username)){
            this.setState({
                alert: {
                    show: true,
                    text: "That's an invalid username. Please use numbers and letters only!",
                    type: "warning"
                }
            })
            return false;
        }
        let formattedUser = this.state.username.trim();
        fetch("http://localhost:3001/users/login", {
            credentials: 'include',
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formattedUser,
                password: this.state.password
            })
        })
        // .then( (response) => response.json())
        .then( (response )=> {

            // Login is good, redirect to '/'
            if(response.status === 200){
                this.props.history.push("/");
            }
            // Too many attempts. disable fields 
            else if(response.status === 429){
                this.setState({ disabledFields: true })
            }
            // Wrong login credentials
            else if(response.status === 401){
                this.setState({
                    alert : {
                        show: true,
                        type: "danger",
                        text: "Invalid username or password."
                    }
                })
            }
            // Woops something went wrong check response status 
            else {
                this.setState({
                    alert : {
                        show: true,
                        type: "danger",
                        text: "Error"
                    }
                })
            }
        })
    }

    handleLogout(event){
        fetch("http://localhost:3001/users/logout",{
            method: "get",
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( (response) => response.json())
        .then( (response) => {
            console.log(response);
        })
    }

    sendConfirmationMail(myEmail,myToken){
        
        fetch("http://localhost:3001/mailer/confirmation",{
            credentials: 'include',
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: myEmail,
                token: myToken
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
            }
        })
    }

    isValidSubmission(){
        var emailregularexpression  = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var passwordregularexpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
        var usernameregularexpression = /^[a-zA-Z0-9]+$/;
        var nameregularexpression = /^[a-zA-Z ]+$/;

        if(!this.state.password || !this.state.username || !this.state.name || !this.state.email){
            this.setState({
                alert: {
                    show: true,
                    text: "Please fill in all fields.",
                    type: "warning"
                }
            })
            return false;
        }
        else if(!passwordregularexpression.test(this.state.password)){
            this.setState({
                alert: {
                    show: true,
                    text: "Your password must have at least one number, one lowercase letter, and one uppercase letter. It must be at least 6 character long. No special characters.",
                    type: "warning"
                }
            })
            return false;
        }
        else if(this.state.password !== this.state.confirmpassword){
            this.setState({
                alert: {
                    show: true,
                    text: "Your passwords don't match. Try re-typing them again.",
                    type: "warning"
                }
            })
            return false;
        }
        else if(!emailregularexpression.test(this.state.email)){
            this.setState({
                alert: {
                    show: true,
                    text: "That's an invalid e-mail. Please use a fully qualified e-mail address!",
                    type: "warning"
                }
            })
            return false;
        }
        else if(!usernameregularexpression.test(this.state.username)){
            this.setState({
                alert: {
                    show: true,
                    text: "That's an invalid username. Please use numbers and letters only!",
                    type: "warning"
                }
            })
            return false;
        }
        else if(!nameregularexpression.test(this.state.name)){
            this.setState({
                alert: {
                    show: true,
                    text: "That's an invalid name. Please use letters only!",
                    type: "warning"
                }
            })
            return false;
        }
        else return true;
    }

    handleSignup(event) {
        // refactor later to make sure that the information is posted in an efficient way
        // make use of looping to auto store the info that you need 
        event.preventDefault();
        let newToken = cryptoRandomString(12);
        let formattedEmail = this.state.email.trim();
        let formattedUser = this.state.username.trim();
        let formattedName = this.state.name.trim();
        
        formattedEmail.toLowerCase();
        formattedName.toLowerCase();
        if(this.isValidSubmission()===true){
            fetch("http://localhost:3001/users/signup", {
            credentials: 'include',
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: newToken,
                email : formattedEmail,
                username: formattedUser,
                password: this.state.password,
                type: this.state.type,
                subtype: this.state.subtype,
                name: formattedName
            })
        })
        .then( (response) => response.json())
        .then( (response )=> {
            if(response.message){
                this.setState({
                    alert: {
                        show: true,
                        text: response.message,
                        type: "danger"
                    }
                })
            
            }
            else {
                this.setState({
                    alert : {
                        show: true,
                        text: "Thanks for joining, " + this.state.name +  "! A confirmation e-mail has been sent to " + this.state.email + ". You will be redirected in 5 seconds!",
                        type: "success"
                    }
                })

                this.sendConfirmationMail(formattedEmail,newToken);
                setTimeout( () => {this.props.history.push("/")}, 5000);
            }
        })
    }
        
    }

    passwordValidate(){
        var passwordregularexpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;

        if(this.state.password.length === 0){
            return null;
        }
        else if(!passwordregularexpression.test(this.state.password)){
            return 'error';
        }
        else if(this.state.password!==this.state.confirmpassword){
            return 'error';
        }
        return 'success';
    }

    goToLogin(event){
        event.preventDefault();
        var negative = !this.state.loginToggled;
        this.setState({
            loginToggled : negative
        })
    }

    renderLogin(){
        return(
            <div className="join-egf-form">
                <h2>WELCOME BACK.</h2>
                <button className="switchButton"onClick={this.goToLogin}>Take Me To Signup.</button>
                <form className="formBlock" onSubmit={this.handleLogin}>

                {this.state.alert.show ? <Alert alert={this.state.alert}/> : null}

                    <FormGroup className="textfields">
                        <ControlLabel>Username:</ControlLabel>
                        <FormControl 
                            type="text"
                            name="username"
                            disabled={this.state.disabledFields}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="textfields">
                        <ControlLabel>Password:</ControlLabel>
                        <FormControl 
                            type="password"
                            name="password"
                            disabled={this.state.disabledFields}
                            onChange={this.handleChange} />
                    </FormGroup>

                    {this.state.disabledFields ? <input className="submitButton" type="submit" disabled value="LOG IN"/> : <input className="submitButton" type="submit" value="LOG IN"/>    }
                     
                </form>
                
            </div>
        )
    }

    renderSignup(){
        return(
        <div className="join-egf-form">
            <h2>JOIN A COMMUNITY.</h2>
            <div className="radioBlock">
                <div className="logoBlock">
                    <img src="/images/egfh_badge.png"/>
                    <FormGroup>
                        <Radio defaultChecked onClick={this.handleHighschoolChecked} disabled={this.state.disabledFields} name="community">Highschool</Radio>
                    </FormGroup>
                </div>
                <div className="logoBlock">
                    <img src="/images/egfc_badge.png"/>
                    <FormGroup>
                        <Radio onClick={this.handleCollegeChecked} disabled={this.state.disabledFields} name="community">College</Radio>
                    </FormGroup>
                </div>
                <div className="logoBlock">
                    <img src="/images/egfm_badge.png"/>
                    <FormGroup>
                        <Radio onClick={this.handleMediaChecked} disabled={this.state.disabledFields} name="community">Media</Radio>
                    </FormGroup>
                </div>
            </div>
            <button className="switchButton" onClick={this.goToLogin}>Take Me To Login.</button>
            <form onSubmit={this.handleSignup}> 

            {this.state.alert.show ? <Alert alert={this.state.alert}/> : null}

                <FormGroup className="textfields">
                    <ControlLabel>Name: </ControlLabel>
                    <FormControl
                        type="text"
                        name="name"
                        disabled={this.state.disabledFields}
                        onChange = {this.handleChange} />
                </FormGroup>
                <FormGroup className="textfields">
                    <ControlLabel>E-mail:</ControlLabel>
                    <FormControl
                        type="text"
                        name="email"
                        disabled={this.state.disabledFields}
                        onChange = {this.handleChange} />
                </FormGroup>
                <FormGroup className="textfields">
                    <ControlLabel>Username: </ControlLabel>
                    <FormControl
                        type="text"
                        name="username"
                        disabled={this.state.disabledFields}
                        onChange = {this.handleChange} />
                </FormGroup>
                <FormGroup className="textfields" validationState={this.passwordValidate()}>
                    <ControlLabel>Password:</ControlLabel>
                    <FormControl
                        type="password"
                        name="password"
                        disabled={this.state.disabledFields}
                        onChange = {this.handleChange} />
                        {this.passwordValidate() === 'error' ? <HelpBlock> Both passwords must match and have at least one number, one lowercase letter, and one uppercase letter. It must be at least 6 character long. No special characters.</HelpBlock> : null}
                </FormGroup>
                <FormGroup className="textfields" validationState={this.passwordValidate()}>
                    <ControlLabel>Confirm Password:</ControlLabel>
                    <FormControl
                        type="password"
                        name="confirmpassword"
                        disabled={this.state.disabledFields}
                        onChange = {this.handleChange} />
                </FormGroup>
                { this.state.disabledFields ? <input className="submitButton" type="submit" disabled value="SIGN UP"/> : <input className="submitButton" type="submit" disable={this.state.disabledFields} value="SIGN UP"/>}
        
            </form>
           
        </div>
        );
    }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname} token={this.state.token}/>
                <div className="join-egf-container"> 
                    {this.state.loginToggled ? this.renderLogin() : this.renderSignup()}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Join;
