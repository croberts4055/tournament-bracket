import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Schedule.css';
// import {Table} from 'react-bootstrap';


class Schedule extends Component {
    constructor(props){
        super(props);
        this.state = {
            matches : [{
                team1: "HUNTER",
                team2: "CCNY",
                day: "WEDNESDAY",
                date: "07/10/18",
                time: "5:00 P.M.",
                team1logo : "",
                team2logo: ""
            },
            {
                team1: "HARVARD",
                team2: "YALE",
                day: "MONDAY",
                date: "07/11/18",
                time: "2:00 P.M.",
                team1logo : "",
                team2logo: ""  
            }]
        }
    }

    getTeamData(){
        // must retrieve data for selected team based on user's selection 
        // must search matches database and return all items within a certain dated range:  
        // 6 per page (week format)
    }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/>
                <div className="blockDiv">
                    {this.state.matches.map((match, i)=>{
                        return(
                            <div className="matchBlock" key={i}>
                                <div id="teams"><img id="logo" src={match.team1logo}alt="logo"/>{match.team1} </div>
                                <div id="teams"><img id="logo" src={match.team2logo}alt="logo"/>{match.team2} </div>
                                <div id="date"> {match.day} | {match.date}<br/>{match.time} </div> 
                            </div>
                        );
                    })}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Schedule;