import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './UserProfile.css';
import {Button, Glyphicon} from 'react-bootstrap';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth : false,
            showAuthView : false,
            user: {},
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
            history : ['YALE','BERKELEY','STUYVESANT','M.S.I.T'],
            articles : [
                {
                    title: "Video Games are Now Banished from China",
                    author: "James Franco",
                    date: Date.now()
                }
            ]
        }
        this.handleClick = this.handleClick.bind(this);
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
                    isAuth: true
                })
            }
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
                <div id="match-banner">SCHEDULE</div>
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
                    <div id="history-banner">MATCH HISTORY</div>
                    {this.state.history.map((item,index)=>{
                        return (
                            <div key={item} id="history-block">
                            vs. {item}
                            </div>
                        );
                    })}
                </div>
                </div>
            <div className="articles-block">
                    <div id="article-banner">ARTICLES</div>
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
        return(
            <div className="profile-container">
                <div className="settings-container">
                    <div id="info-column">
                        <div id="headshot-block">
                            <div id=""></div>
                        </div>
                    </div>
                        <div id="msg-block"></div>
                        <div id="sched-block2"></div>
                        <div id="match-block2"></div>
                    <div id="settings-column"></div>
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