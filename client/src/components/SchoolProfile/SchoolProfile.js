import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './SchoolProfile.css';

class SchoolProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collegeName: null,
            collegeImage: "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1444253482/DG2015-new-york.jpg?itok=neFmsUY1",
            selectedGame: 0,
            games: [
                "League of Legends",
                "Overwatch",
                "Hearthstone",
                "Smite",
                "Runescape",
            ],
            roster: [
                {
                    image: "https://www.trackingthepros.com/img/players/hauntzer.png",
                    name: "Kevin Yarnell",
                    gamertag: "Hauntzer",
                    position: "Top",
                },
                {
                    image: "https://www.trackingthepros.com/img/players/mikeyeung.png",
                    name: "Michael Yeung",
                    gamertag: "MikeYeung",
                    position: "Jungle",
                },
                {
                    image: "https://www.trackingthepros.com/img/players/bjergsen.png",
                    name: "Soren Bjerg",
                    gamertag: "Bjergsen",
                    position: "Mid",
                },
                {
                    image: "https://www.trackingthepros.com/img/players/zven.png",
                    name: "Jesper Svenningsen",
                    gamertag: "Zven",
                    position: "ADC",
                },
                {
                    image: "https://www.trackingthepros.com/img/players/mithy.png",
                    name: "Alfonso Aguirre Rodriguez",
                    gamertag: "mithy",
                    position: "Support",
                },
                {
                    image: "https://www.trackingthepros.com/img/players/darshan.png",
                    name: "Darshan Upadhyaya",
                    gamertag: "Darshan",
                    position: "Bench Warmer",
                },
            ],
            schedule: [
                {
                    school: "Arizona Eagles",
                    month: "August",
                    day: "5",
                    year: "2018",
                    time: "2:00PM EST",
                },
                {
                    school: "Pennsylvania Penguins",
                    month: "September",
                    day: "16",
                    year: "2018",
                    time: "5:30PM EST",
                },
                {
                    school: "Hunter Blue Bears",
                    month: "December",
                    day: "8",
                    year: "2018",
                    time: "9:00AM EST",
                },
            ],
            history: [
                "Baruch College",
                "BMCC",
                "City College",
                "NYU",
                "Berkeley College",
            ],
        }
    }

    renderGamesTab() {
        return (
            <div className="game-tab-container">
                {this.state.games.map((game, index)=>{
                    return (
                        <div className="game-tab-name">
                            <button
                                key={index}        
                                onClick={() => {
                                    this.setState({ selectedGame: index })
                                }} >
                                {this.state.games[index]}
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    }

    renderRoster() {
        return (
            <div className="roster-container">
                {this.state.roster.map((player, i)=>{
                    return (
                        <div className="player-details">
                            <div className="player-image">
                                <img src={this.state.roster[i].image} />
                            </div>
                            <div className="player-info">
                                Name: {this.state.roster[i].name}
                                <br />
                                Tag: {this.state.roster[i].gamertag}
                                <br />
                                Role: {this.state.roster[i].position}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    renderSchedule() {
        return (
            <div className="schedule-container">
                {this.state.schedule.map((sched, i)=>{
                    return (
                        <div className="schedule-details">
                            <div className="schedule-school-and-date">
                                <div className="schedule-school-name">
                                    vs. {this.state.schedule[i].school}
                                </div>
                                {this.state.schedule[i].month} {this.state.schedule[i].day}, {this.state.schedule[i].year}
                                <div className="schedule-time">
                                    {this.state.schedule[i].time}
                                </div> 
                            </div>                         
                        </div>
                    )
                })}
            </div>
        )
    }

    renderHistory() {
        return (
            <div classname="history-container">
                {this.state.history.map((hist, index)=>{
                    return (
                        <div className="history-details">
                            <div className="history-school">
                                vs. {this.state.history[index]}
                            </div>
                            <div className="history-view-icon">
                                view icon here
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/>
                <div className="school-profile-container">
                    <div className="school-profile-image">
                        <img src={this.state.collegeImage} />
                    </div>
                    <div className="school-profile-content">
                        <div className="game-tabs">
                            {this.renderGamesTab()}
                        </div>
                        <div className="school-profile-overview-history">
                            <div className="section-heading">
                                    OVERVIEW
                                </div>
                            <div className="overview">
                                <div className="overview-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                                </div>
                                <div className="overview-history">
                                    1st place in REGION
                                </div>
                            </div>
                        </div>
                        <div className="school-profile-details">
                            <div className="roster">
                                <div className="section-heading">
                                    ROSTER
                                </div>
                                <div>
                                    {this.renderRoster()}
                                </div>
                            </div>
                            <div className="schedule-and-match-history">
                                <div className="section-heading">
                                    SCHEDULE
                                </div>
                                <div className="schedule">
                                    {this.renderSchedule()}
                                </div>
                                <div className="section-heading">
                                    MATCH HISTORY
                                </div>
                                <div className="match-history">
                                    {this.renderHistory()}
                                </div>
                            </div>
                            <div className="news-section">
                                <div className="section-heading">
                                    NEWS
                                </div>
                                <div className="news">
                                    NEWS HERE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default SchoolProfile;