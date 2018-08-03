import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Verified.css';
import {Alert, ControlLabel,FormGroup, FormControl, FormLabel, Radio, Checkbox} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
const cryptoRandomString = require('crypto-random-string');


class Verified extends Component {
    constructor() {
        super();

        this.state = {
            token : this.props.location.query,
            alert : {
                show: false,
                text: "",
                type: ""
            }
        };
    }

    handleDismiss(){
        this.setState({
            alert : { show: false}
        })
        if(this.state.alert.type === "success"){
            this.props.history.push("/");
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
  
    componentDidMount(){
        if(this.state.token.length <= 0){
            this.setState({
                alert: {
                    show: true,
                    text: "We're sorry. Your account couldn't be verified. You will now be redirected.",
                    type: "warning"
                }
            })
            setTimeout( () => {this.props.history.push("/")}, 5000);
        }
        var url = "http://localhost:3001/users/verify/token=" + this.state.token;
        fetch(url,{
            method: "get",
            header: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( (response) => response.json())
        .then( (response) => {
            if(response.message){
                this.setState({
                    alert: {
                        show: true,
                        text: response.message,
                        type: "warning"
                    }
                })
            }
            else {
                this.unlockUser(this.state.token);
                this.setState({
                alert: {
                    show: true,
                    text: "Congratulations! Your account is now verified. You will now be redirected.",
                    type: "success"
                }
            })
        }
        setTimeout( () => {this.props.history.push("/joinegf")}, 5000);   
        })
    }
    

    unlockUser(token){
        var updateProps = [{
                propName: "token",
                value: this.state.token
            }];
        fetch("http://localhost:3001/users/auth/",{
            method: "PATCH",
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
            ,
            body : JSON.stringify(updateProps)
        })
        .then( (response) => response.json())
        .then( (response) => {
            console.log(response);
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

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname} token={this.state.token}/>
                <div className="join-egf-container"> 
                {this.state.alert.show ? this.renderAlert() : null}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Verified;
