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
            showAuthView : false
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
                <div id="ingame-text">INGAME PROFILE</div>
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
            </div>
            <div className="articles-block">
            </div>
        </div>
         );
    }

    renderAuthView(){
        // access settings page via a gear icon. 
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