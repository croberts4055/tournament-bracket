import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Verified.css';
import {Alert, ControlLabel,FormGroup, FormControl, FormLabel, Radio, Checkbox} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
const cryptoRandomString = require('crypto-random-string');


class Verified extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token : this.props.location.pathname.slice(this.props.location.pathname.indexOf("=")),
            alert : {
                show: false,
                text: "",
                type: ""
            }
        };
        this.handleDismiss = this.handleDismiss.bind(this);
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
        if(!this.state.token){
            this.setState({
                alert: {
                    show: true,
                    text: "We're sorry. Your account couldn't be verified. You will now be redirected.",
                    type: "warning"
                }
            })
            setTimeout( () => {this.props.history.push("/")}, 5000);
            return; 
        }
        console.log(this.state.token);
        var url = "http://localhost:3001/users/verify/token" + this.state.token;
        fetch(url,{
            method: "get",
            header: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( (response) => response.json())
        .then( (response) => {
            if(response.err_message){
                this.setState({
                    alert: {
                        show: true,
                        text: response.message,
                        type: "warning"
                    }
                })
            }
            else if(response.success_message) {
                this.setState({
                    alert: {
                        show: true,
                        text: response.success_message,
                        type: "success"
                    }
                })
        }
        else console.log(response);
    })
}
    

    unlockUser(token){
        console.log("entered");
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
        .then((response) => {
            if(response.success_message){
                this.setState({
                    alert: {
                        show: true,
                        text: "Congratulations! Your account is now verified. You will now be redirected.",
                        type: "success"
                    }
                })
            }
            else if(response.fail_message){
                this.setState({
                    alert: {
                        show: true,
                        text: "We're sorry, your account was not able to be authorized. Try again?",
                        type: "danger"
                    }
                })
            }
            setTimeout( () => {this.props.history.push("/joinegf")}, 5000);   

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
