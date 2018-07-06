import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Video.css';

class Video extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [
                {
                    team1: "HUNTER",
                    team2: "CCNY",
                    game: 0,
                    source: "https://www.youtube.com/embed/7uhPCJrBl2E?ecver=2",
                    description: "In case you missed it, professional competetive gaming is a thing. It's called esports and it's how professional gamers compete for millions of dolalrs in sold out stadiums around the world. They're watched by hundreds of millions of viewers, and you can even find them on TV networks like ESPN and TBS.",
                },
                {
                    team1: "HARVARD",
                    team2: "YALE",
                    game: 5,
                    source: "https://www.youtube.com/embed/GOQ2Co6nW3c?ecver=2",
                    description: "In case you missed it, professional competetive gaming is a thing. It's called esports and it's how professional gamers compete for millions of dolalrs in sold out stadiums around the world. They're watched by hundreds of millions of viewers, and you can even find them on TV networks like ESPN and TBS. In case you missed it, professional competetive gaming is a thing. It's called esports and it's how professional gamers compete for millions of dolalrs in sold out stadiums around the world. They're watched by hundreds of millions of viewers, and you can even find them on TV networks like ESPN and TBS. In case you missed it, professional competetive gaming is a thing. It's called esports and it's how professional gamers compete for millions of dolalrs in sold out stadiums around the world. They're watched by hundreds of millions of viewers, and you can even find them on TV networks like ESPN and TBS.",
                },
                {
                    team1: "BARUCH",
                    team2: "ARIZONA",
                    game: 2,
                    source: "https://www.youtube.com/embed/0mmrdMNmVUQ?ecver=2",
                    description: "In case you missed it, professional competetive gaming is a thing. It's called esports and it's how professional gamers compete for millions of dolalrs in sold out stadiums around the world. They're watched by hundreds of millions of viewers, and you can even find them on TV networks like ESPN and TBS.",
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/> 
                {/* <p>You are on the video page! Current url is: {this.props.location.pathname}</p> */}
                <div className="blockDiv">
                    {this.state.videos.map((video, i)=>{
                        return(
                            <div className="videoBlock" key={i}>
                                <div id="teams">
                                    GAME {video.game}: {video.team1} VS {video.team2}
                                </div>
                                <iframe className="player"
                                        style={{ border:"2px solid white" }}
                                        type="text/html"
                                        allow="autoplay; encrypted-media" 
                                        allowfullscreen
                                        width="40%"
                                        height="300px"
                                        src={video.source}
                                        frameborder="0"/>
                                <div id="description"> {video.description}</div>
                            </div>
                        );
                    })}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Video;