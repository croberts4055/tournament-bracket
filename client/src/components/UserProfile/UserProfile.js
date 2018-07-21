import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './UserProfile.css';
import {Button, Glyphicon} from 'react-bootstrap';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth : true,
            showAuthView : false,
            username: "Aaron",
            schedule: [
                {
                    school1: "cal tech",
                    school2: "berkeley",
                    date: Date.now()
                },
                {
                    school1: "yale",
                    school2: "berkeley",
                    date: Date.now()
                }
            ],
            history : ['yale','berkeley','stuy','msit'],
            articles : [
                {
                    title: "first one",
                    author: "james franco",
                    date: Date.now()
                }
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    // on component did mount, check if user is auth
    // and then set the state variable. 

    handleClick(event){
        if(this.state.isAuth){
            this.setState({
                showAuthView : !this.state.showAuthView
            }), () => console.log(this.state.showAuthView);
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
         return(
        <div className="profile-container">
            <div className="playerinfo-block">
                <div id="user-profile-image">USERNAME</div>
                <div id="ingame-info">
                <div id="ingame-text">INGAME PROFILE {this.state.isAuth ? this.renderGear() : null }</div>
                    <ul>
                        <li>Game played</li>
                        <li>Role played</li>
                        <li>IGN</li>
                        <li>Personal twitch</li>
                    </ul>
                </div>
                <div id="player-bio-block">
                    <div id="bio-header">PLAYER PROFILE</div>
                    <div id="bio">Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti
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
                        {item.date}
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
                    <div id="info-column">WELCOME, {this.state.username} </div>
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