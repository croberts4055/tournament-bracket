import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Join.css';
import {ControlLabel,FormGroup, FormControl, FormLabel, Radio, Checkbox} from 'react-bootstrap';

class Join extends Component {
    constructor() {
        super();

        this.state = {
            highschoolCheck: false,
            collegeCheck: false,
            mediaCheck: false,
            locked : false,
            type: {
                    student: false,
                    admin: false, 
                  },
            subtype: {
                highschool: false,
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
            city: "",
            state: "",
            dob: 0,
            bio: "",
            gender: "",
            school: "",
            major: "",
            position: "",
            team: "",
            year: 0,
            socialinfo: [],
            token: "1"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAccountCreate = this.handleAccountCreate.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleHighschoolChecked = this.handleHighschoolChecked.bind(this);
        this.handleCollegeChecked = this.handleCollegeChecked.bind(this);
        this.handleMediaChecked = this.handleMediaChecked.bind(this);
        this.handleRequestSubmit = this.handleRequestSubmit.bind(this);
        this.passwordValidate = this.passwordValidate.bind(this);
        this.goToLogin = this.goToLogin.bind(this);
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
  
    handleHighschoolChecked(event) {
        let typeNow = this.state.student;
        let subNow = this.state.subtype.highschool;
        let isChecked = this.state.highschoolCheck;
        this.setState({
            highschoolCheck : !isChecked,
            collegeCheck: false,
            medieCheck : false,
            type: {
                student: !typeNow,
                admin : false
            },
            subtype: {
                highschool: !subNow,
                college : false,
                media: false,
                fan: false,
                schooladmin: false
            }
        }, ()=>console.log(this.state.highschoolCheck))
    }

    handleCollegeChecked(event) {
        let typeNow = this.state.student;
        let subNow = this.state.subtype.college;
        let isChecked = this.state.collegeCheck;
        this.setState({
            collegeCheck : !isChecked,
            highschoolCheck : false,
            mediaCheck : false,
            type: {
                student: !typeNow,
                admin : false
            },
            subtype: {
                highschool: false,
                college : !subNow,
                media: false,
                fan: false,
                schooladmin: false
            }
        }, ()=> console.log(this.state.collegeCheck))
    }

    handleMediaChecked(event) {
        let typeNow = this.state.admin;
        let subNow = this.state.subtype.media;
        let isChecked = this.state.mediaCheck;
        this.setState({
            mediaCheck : !isChecked,
            highschoolCheck : false,
            collegeCheck : false,
            type: {
                student: false,
                admin : !typeNow
            },
            subtype: {
                highschool: false,
                college : false,
                media: !subNow,
                fan: false,
                schooladmin: false
            }
        }, ()=>console.log(this.state.mediaCheck))
    }


    handleRequestSubmit(event) {
    
        let caseInsensitiveEmail = this.state.email.toLowerCase();
        if(this.state.password !== this.state.confirmpassword){
            alert("Provided passwords do not match.");
            return;
        }
        fetch("http://localhost:3001/users/signup", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                locked: true,
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
            console.log(response);
        })
    }

    handleLogin(event) {
        var url = "http://localhost:3001/users/login/" + this.state.username + "/" + this.state.password;
       
        fetch(url, {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }   
        })
        .then( (response) => response.json())
        .then( (response) => {
            console.log(response);
        })
        // .then( (response) => {
        //     if(response._id){
        //        this.setState({
        //         userid: response._id
        //         }, ()=> console.log(this.state.userid)) 
        //     }
        // })
    }


    handleAccountCreate(event) {
        // refactor later to make sure that the information is posted in an efficient way
        // make use of looping to auto store the info that you need 
        event.preventDefault();
        let caseInsensitiveEmail = this.state.email.toLowerCase();
        // check for valid email 
        if(this.state.password !== this.state.confirmpassword){
            alert("Provided passwords do not match.");
            return;
        }
        fetch("http://localhost:3001/users/signup", {
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
            console.log(response);
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
        return this.renderLogin();
    }

    renderLogin(){
        return(
            <div className="join-egf-form">
                <h2>WELCOME BACK.</h2>
                <form onSubmit={this.handleLogin}>
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
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    renderMediaForm(){
        return(
        <div className="join-egf-form">
            <h2> WHAT COMMUNITY ARE YOU LOOKING TO JOIN?</h2>
            <form onSubmit={this.handleRequestSubmit}> 
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
                {/* <FormGroup controlId="stateSelection">
                    <ControlLabel>Select your state:</ControlLabel>
                    <FormControl name="state" componentClass="select" placeholder="Select..."
                        onChange = {this.handleChange}>
                        <option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option>
                        <option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option>
                        <option value="CT">CT</option><option value="DE">DE</option><option value="FL">FL</option>
                        <option value="GA">GA</option><option value="HI">HI</option><option value="ID">ID</option>
                        <option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option>
                        <option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option>
                        <option value="ME">ME</option><option value="MD">MD</option><option value="MA">MA</option>
                        <option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option>
                        <option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option>
                        <option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option>
                        <option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option>
                        <option value="ND">ND</option><option value="OH">OH</option><option value="OK">OK</option>
                        <option value="OR">OR</option><option value="PA">PA</option><option value="RI">RI</option>
                        <option value="SD">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option>
                        <option value="UT">UT</option><option value="VT">VT</option><option value="VA">VA</option>
                        <option value="WA">WA</option><option value="WV">WV</option><option value="AL">WI</option>
                        <option value="AL">WY</option>
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="dobSelection">
                    <ControlLabel>Select your date of birth:</ControlLabel>
                    <FormControl name="dob" componentClass="select" placeholder="Month"/>
                { Dynamically render available years!}
                </FormGroup> */}
                <input type="submit" value="Submit"/>
            </form>
            <button onClick={this.goToLogin}>Login instead!</button>
        </div>
        );
    }

    renderStudentForm(){
        return(
           <form className="join-egf-form" onSubmit={this.handleAccountCreate}>
                        WHAT COMMUNITY ARE YOU LOOKING TO JOIN?
                        <div className="join-egf-form-fields">
                            <label>NAME - FULL</label>
                            <input type="text" name="name" onChange={this.handleChange} />
                            <br />
                            
                            <label>E-MAIL</label>
                            <input type="text" name="email" onChange={this.handleChange} />
                            <br />

                            <label>CONFIRM E-MAIL</label>
                            <input type="text" name="email" onChange={this.handleChange} />
                            <br />

                            <label>USERNAME</label>
                            <input type="text" name="username" onChange={this.handleChange} />
                            <br />

                            <label>PASSWORD</label>
                            <input type="password" name="password" onChange={this.handleChange} />
                            <br />

                            <label>CITY</label>
                            <input type="text" name="city" onChange={this.handleChange} />
                            <br />

                            <label>STATE</label>
                            <input type="text" name="state" onChange={this.handleChange} />
                            <br />

                            <label>DATE OF BIRTH</label>
                            <input type="number" name="dob" onChange={this.handleChange} />
                            <br />

                            <label>BIO</label>
                            <input type="text" name="bio" onChange={this.handleChange} />
                            <br />

                            <label>SOCIAL LINKS</label>
                            <input type="text" name="socialinfo" onChange={this.handleChange} />
                            <br />

                            <label>SCHOOL</label>
                            <input type="text" name="school" onChange={this.handleChange} />
                            <br />

                            <label>POSITION</label>
                            <input type="text" name="position" onChange={this.handleChange} />
                            <br />

                            <label>MAJOR</label>
                            <input type="text" name="major" onChange={this.handleChange} />
                            <br />

                            <label>PHOTO</label>
                            <input type="text" name="photo" onChange={this.handleChange} />
                            <br />

                            <label>IGN</label>
                            <input type="text" name="ign" onChange={this.handleChange} />
                            <br />

                            <label>GENDER</label>
                            <input type="text" name="gender" onChange={this.handleChange} />
                            <br />

                            <input type="submit" value="Submit" />
                        </div>
                    </form>

            );
               
    }

    render() {
        return (
            <div className="join-egf-container">
                <MyNav url={this.props.location.pathname} token={this.state.token}/> 
                {this.renderMediaForm()}
                {this.renderLogin()}
                {/* {this.renderStudentForm()} */}
                <Footer />
            </div>
        );
    }
}
/* <div className="join-egf-logos">
                            <div className="college-logo">
                                <Checkbox name="college" onChange={this.handleCollegeChecked}>
                                    College
                                </Checkbox>
                            </div>
                            <div className="highschool-logo">
                                <Checkbox name="highschool" onChange={this.handleHighschoolChecked}>
                                    High School
                                </Checkbox>
                            </div>
                            <div className="media-logo">
                                <Checkbox name="media" onChange={this.handleMediaChecked}>
                                    Media
                                </Checkbox>
                            </div>
                        </div>
                    {this.state.highschoolCheck ? this.renderStudentForm() : this.state.highschoolCheck}
                    {this.state.collegeCheck ? this.renderStudentForm() : this.state.collegeCheck}
                    {this.state.mediaCheck ? this.renderMediaForm() : this.state.mediaCheck} */
export default Join;