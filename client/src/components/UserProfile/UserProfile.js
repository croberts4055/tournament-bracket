import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './UserProfile.css';
import {Button, Glyphicon, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth : false,
            showAuthView : false,
            user: {},
            new_pw: "",
            confirm_pw: "",
            messages: [
                {sender:"Ninja",topic:"Last week"},
                {sender:"Faker",topic:"League"},
                {sender:"Tyler",topic:"eSports"}
            ],
            schedule: [
                {
                    school1: "CALTECH",
                    school2: "BERKELEY",
                    date: Date.now()
                },
                {
                    school1: "YALE",
                    school2: "HARVARD",
                    date: Date.now()
                }
            ],
            history : [
                {opponent:"HUNTER",date: Date.now()},
                {opponent:"CORNELL", date: Date.now()},
                {opponent:"MICROSOFT", date: Date.now()}
            ],
            articles : [
                {
                    title: "Video Games are Now Banished from China",
                    author: "James Franco",
                    date: Date.now()
                }
            ]
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateSettings = this.updateSettings.bind(this);
    }
    
    // on component did mount, check if user is auth
    // and then set the state variable. 

    componentDidMount(){

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
                let current_user = JSON.stringify(response.user);
                current_user = current_user.slice(1,current_user.length-1); // remove the first and last characters, which are quotes
                Object.keys(response.user).map(i => {
                    this.state.user[i] = response.user[i]
                })
                this.setState({
                    isAuth: true,
                    showAuthView: false
                })
            }
        })

        fetch("http://localhost:3001/users", {
            credentials: 'include',
            method: "get",
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json',
            }        
        })
        .then( (response)=> response.json())
        .then( (response)=> {
            console.log(response);
        })
    }

    updateSettings(event){
        event.preventDefault();
        //Create an array of objects that will be in the form of "propname", "value",
        //where propname is the attribute of the user, and value is the corresponding val.
        var updateProps = [
            {}
        ];
        Object.keys(this.state.user).map( i => {
            updateProps.push({
                propName : i,
                value : this.state.user[i]
            })
        })

        fetch("http://localhost:3001/users/auth", {
            credentials: "include",
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateProps) // pass this array of objects directly to the req.body.
        })
        .then( (response) => response.json())
        .then( (response) => {
            if(response.message){
                alert(response.message);
            }
            else console.log(response);
        })
    }

    handleChange(event) {
        Object.keys(this.state.user).map((val) => {
            this.state.user[event.target.name] = event.target.value
        })
    }

    handleClick(event){
        if(this.state.isAuth){
            this.setState({
                showAuthView : !this.state.showAuthView
            })
        }
    }

    getUserData(){
       var url = this.props.location.pathname;
       console.log(url);
    }

    passwordValidate(){
        if(this.state.new_pw.length === 0){
            return null;
        }
        else if(this.state.new_pw!==this.state.confirm_pw){
            return 'error';
        }
        return 'success';
    }

    renderGear(){
        return(
                <Glyphicon onClick={this.handleClick} glyph="cog"/>
        );
    }

    renderVisitorView(){
        /* if isAuth - render the gear icon
         if(this.state.isAuth){
            return(Glyphicon...)
         } */

         var today = new Date();
         var dd = today.getDate();
         var mm = today.getMonth()+1; //January is 0!
         var yyyy = today.getFullYear();
            if(dd<10) {
                dd = '0'+dd
            } 
            if(mm<10) {
                mm = '0'+mm
            } 
         today = mm + '/' + dd + '/' + yyyy;

         return(
        <div className="profile-container">
            <div className="playerinfo-block">
                <div id="user-profile-image">{this.state.user.username}</div>
                <div id="ingame-info">
                <div id="ingame-text">INGAME PROFILE {this.state.isAuth ? this.renderGear() : null }</div>
                    <ul>
                        <li>Game played </li>
                        <li>Role played : {this.state.user.position}</li>
                        <li>IGN : {this.state.user.ign} </li>
                        <li>Personal Twitch</li>
                    </ul>
                </div>
                <div id="player-bio-block">
                    <div id="bio-header">PLAYER PROFILE</div>
                    <div id="bio"> Bio: {this.state.user.bio} Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti
                    Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti
                    Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti</div> 
                </div>
                <div id="player-stat-block">
                <div id="stat-header">PLAYER STATISTICS</div>
                    <ul>
                        <li>Stat 1</li>
                        <li>Stat 2</li>
                        <li>Stat 3</li>
                        <li>Stat 4</li>
                    </ul>
                </div>
            </div>
            <div className="matches-block">
                <div className="borderless-banner">SCHEDULE</div>
                {this.state.schedule.map((item,key) => {
                    return (
                    <div key={key} id="match-section">
                    <div key={key+1}id="schedule-section">
                        {item.school1} vs {item.school2}
                    </div>
                        <div key={key+2} id="date-section">
                        {today}
                        </div>
                    </div>
                    );
                })}

                <div id="history-section">
                    <div className="borderless-banner">MATCH HISTORY</div>
                    {this.state.history.map((item,index)=>{
                        return (
                            <div key={index} id="history-block">
                            vs. {item.opponent}
                            </div>
                        );
                    })}
                </div>
                </div>
            <div className="articles-block">
                    <div className="borderless-banner">FEATURED ARTICLES</div>
                    {this.state.articles.map((item,index)=> {
                        return(
                            <div id="article-block" key={index}>
                            {item.title}
                            </div>
                        );
                    })}
            </div>
        </div>
         );
    }

    renderAuthView(){
        // access settings page via a gear icon. 
        var today = new Date();
         var dd = today.getDate();
         var mm = today.getMonth()+1; //January is 0!
         var yyyy = today.getFullYear();
            if(dd<10) {
                dd = '0'+dd
            } 
            if(mm<10) {
                mm = '0'+mm
            } 
         today = mm + '/' + dd + '/' + yyyy;

        return(
            <div className="profile-container">
                <div className="settings-container">
                    <div id="info-column">
                        <div id="headshot-block">
                            <div id="headshot-left"></div>
                            <div id="headshot-right">
                                <div className="borderless-banner">WELCOME {this.state.user.username},
                                </div>
                            </div>
                        </div>
                        <div id="msg-block">
                            <div className="borderless-banner">MESSAGES</div>
                                {
                                    this.state.messages.map((item,key) => {
                                        return (
                                            <div key={key} id="msg-content">
                                                From: {item.sender} Topic: {item.topic}
                                            </div>
                                        );
                                    })
                                }
                        </div>
                        <div id="sched-block2">
                            <div className="borderless-banner">SCHEDULE</div>
                             {
                                 this.state.schedule.map((item,key)=> {
                                     return (
                                        <div key={key} id="match-section">
                                        <div key={key+1}id="schedule-section">
                                        {item.school1} vs {item.school2}
                                        </div>
                                        <div key={key+2} id="date-section">
                                        {today}
                                        </div>
                                        </div>
                                     );
                                 })
                             }
                        </div>
                        <div id="match-block2">
                            <div className="borderless-banner">MATCH HISTORY</div>
                                {
                                    this.state.history.map((item,key)=> {
                                        return (
                                            <table key={key} id="match-content">
                                            <tbody key={key+1}>
                                            <tr key={key+2} >
                                            <td key={key+3}> vs {item.opponent}</td>
                                            <td key={key+4}> {today}</td>
                                            <td key={key+5}> {Date.now()} </td>
                                            </tr>
                                            </tbody>
                                            </table>
                                        );
                                    })
                                }
                        </div>
                    </div>
                        
                    <div id="settings-column">
                        <div id="edit-banner">EDIT SETTINGS</div>
                        <div className="subheader-banner">PERSONAL INFO</div>
                    <form id="settings-form" onSubmit={this.updateSettings}>
                            <FormGroup controlId="userSettings">
                                <FormControl 
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    onChange={this.handleChange} />
                                <FormControl name="state" componentClass="select" placeholder="State" onChange={this.handleChange}>
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
                                <FormControl type="text"  name="city" placeholder="City" onChange={this.handleChange}/>
                                <FormControl type="text"  name="zip" placeholder="Zip Code" onChange={this.handleChange}/>
                                <FormControl type="text"  name="dob" placeholder=" MM / DD / YYYY" onChange={this.handleChange}/>
                                <FormControl type="text"  name="email" placeholder="first.last@school.edu" onChange={this.handleChange}/>
                                <FormControl type="text"  name="phone" placeholder="(000)-000-0000 (Phone)" onChange={this.handleChange}/>
                            </FormGroup>
                            <input className="saveButton" type="submit" value="SAVE CHANGES"/>    
                        </form>
                        <div className="divider"></div>
                        <div className="subheader-banner">CHANGE PASSWORD</div>
                            <form id="change-password" onSubmit={this.updateSettings}>
                            <FormGroup controlId="userSettings">
                                <FormControl type="password" name="new_pw" placeholder="NEW PASSWORD" onChange={this.handleChange} validationState={this.passwordValidate()}/>
                                <FormControl type="password" name="confirm_pw" placeholder="CONFIRM PASSWORD" onChange={this.handleChange} validationState={this.passwordValidate()}/>
                            </FormGroup>
                            <input className="saveButton" type="submit" value="SAVE CHANGES"/>
                            </form>
                    </div>
                    
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/>
                
                {this.state.showAuthView ? this.renderAuthView() : this.renderVisitorView() }

                <Footer/>
            </div>
        );
    }
}

export default UserProfile;