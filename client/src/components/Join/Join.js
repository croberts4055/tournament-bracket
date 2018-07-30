import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Join.css';
import {ControlLabel,FormGroup, FormControl, FormLabel, Radio, Checkbox} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class Join extends Component {
    constructor() {
        super();

        this.state = {
            locked : false,
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
            loginToggled: false,
            name: "",
            userid: "",
            username: "",
            password: "",
            confirmpassword: "",
            ign: "",
            email: "",
            school: "",
            team: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAccountCreate = this.handleAccountCreate.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleHighschoolChecked = this.handleHighschoolChecked.bind(this);
        this.handleCollegeChecked = this.handleCollegeChecked.bind(this);
        this.handleMediaChecked = this.handleMediaChecked.bind(this);
        this.passwordValidate = this.passwordValidate.bind(this);
        this.goToLogin = this.goToLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
  
    handleHighschoolChecked(event) {
        this.setState({
            locked: false,
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
            locked: false,
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
            locked: true,
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
        fetch("http://localhost:3001/users/login", {
            credentials: 'include',
            // credentials: 'same-origin',
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },   
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
            })
        })
        // .then( (response) => response.json())
        .then( (response )=> {
            if(response.message){
                alert(response.message);
            }
            else this.props.history.push("/");
        })
        // .then( (response) => {
        //     if(response._id){
        //        this.setState({
        //         userid: response._id
        //         }, ()=> console.log(this.state.userid)) 
        //     }
        // })
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


    handleAccountCreate(event) {
        // refactor later to make sure that the information is posted in an efficient way
        // make use of looping to auto store the info that you need 
        event.preventDefault();
        let caseInsensitiveEmail = this.state.email.toLowerCase();
        if(this.state.password !== this.state.confirmpassword){
            alert("Provided passwords do not match.");
            return;
        }
        if(!this.state.email.includes("@")){
            alert("Invalid e-mail address.");
        }
        fetch("http://localhost:3001/users/signup", {
            credentials: 'same-origin',
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                locked: this.state.locked,
                email : caseInsensitiveEmail,
                username: this.state.username,
                password: this.state.password,
                type: this.state.type,
                subtype: this.state.subtype,
                name: this.state.name
            })
        })
        .then( (response) => response.json())
        .then( (response )=> {
            if(response.message){
                alert(response.message);
            }
            else this.props.history.push("/");
        })
    }

    passwordValidate(){
        if(this.state.password.length === 0){
            return null;
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
                    <FormGroup className="textfields">
                        <ControlLabel>Username:</ControlLabel>
                        <FormControl 
                            type="text"
                            name="username"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="textfields">
                        <ControlLabel>Password:</ControlLabel>
                        <FormControl 
                            type="password"
                            name="password"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <input className="submitButton" type="submit" value="LOG IN"/>    
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
                        <Radio defaultChecked onClick={this.handleHighschoolChecked}name="community">Highschool</Radio>
                    </FormGroup>
                </div>
                <div className="logoBlock">
                    <img src="/images/egfc_badge.png"/>
                    <FormGroup>
                        <Radio onClick={this.handleCollegeChecked} name="community">College</Radio>
                    </FormGroup>
                </div>
                <div className="logoBlock">
                    <img src="/images/egfm_badge.png"/>
                    <FormGroup>
                        <Radio onClick={this.handleMediaChecked} name="community">Media</Radio>
                    </FormGroup>
                </div>
            </div>
            <div className="divider"></div>
            <button className="switchButton" onClick={this.goToLogin}>Take Me To Login.</button>
            <form onSubmit={this.handleAccountCreate}> 
                <FormGroup className="textfields">
                    <ControlLabel>Name: </ControlLabel>
                    <FormControl
                        type="text"
                        name="name"
                        onChange = {this.handleChange} />
                </FormGroup>
                <FormGroup className="textfields">
                    <ControlLabel>E-mail:</ControlLabel>
                    <FormControl
                        type="text"
                        name="email"
                        onChange = {this.handleChange} />
                </FormGroup>
                <FormGroup className="textfields">
                    <ControlLabel>Username: </ControlLabel>
                    <FormControl
                        type="text"
                        name="username"
                        onChange = {this.handleChange} />
                </FormGroup>
                <FormGroup className="textfields" validationState={this.passwordValidate()}>
                    <ControlLabel>Password:</ControlLabel>
                    <FormControl
                        type="password"
                        name="password"
                        onChange = {this.handleChange} />
                </FormGroup>
                <FormGroup className="textfields" validationState={this.passwordValidate()}>
                    <ControlLabel>Confirm Password:</ControlLabel>
                    <FormControl
                        type="password"
                        name="confirmpassword"
                        onChange = {this.handleChange} />
                </FormGroup>
                <input className="submitButton" type="submit" value="SIGN UP"/>
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
