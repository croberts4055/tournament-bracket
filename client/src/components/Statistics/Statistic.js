import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import {Table} from 'react-bootstrap';
import './Statistic.css';

class Statistics extends Component {

    constructor(props){
        super(props);
        this.state= {
            game: "",
            players: [
            /**       
             * DUMMY DATA!!! THIS IS AN EXAMPLE OF WHAT THE TABLE SHOULD LOOK LIKE. 
             * THE DATA PULLED FROM THE DATABASE MUST BE FORMATTED IN THIS STYLE. 
             * PULLING STATS REQUIRES PULLING FROM RIOT'S API. 
             * { 
                ign : "doublelift",
                team: "tsm",
                position: "adc",
                stats: [{name: "KILLS", value: 20},
                        {name:"DEATHS", value: 1},
                        {name:"ASSISTS",value: 5}
                        ] // all stats are uniform per game per user. 
                },
            {
                ign: "bjergsen",
                team: "tsm",
                position: "mid",
                stats: [
                    {name: "KILLS", value: 11},
                    {name: "DEATHS", value: 0},
                    {name:"ASSISTS", value: 4}
                    ]
                }   */    
           
            ] // the user's name will contain their team also. 
        }
    }

    // will need an API/fetch function to pass the proper data player data

    componentDidMount(){
        this.getPlayerData();
    }

    getPlayerData(){
        fetch("http://localhost:3001/users",{
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( (response) => response.json())
        .then( (response) => {
            console.log(response);
            var formattedArray = [];
            response.forEach(player => {
                var element = {
                    ign: player.email, //temporary
                    team: player.email, // also temporary 
                    position : player.email // also temporary 
                }
                formattedArray.push(element);
            });
            if(formattedArray){
                this.setState({
                    players: formattedArray
                });
            }
        })
        .then (console.log(this.state.players));
    }


    // will need an API call to Riot games API to retrieve players' stats

    getLOLStats(){
        this.state.players.forEach((player)=>{
        var accountId = 0;
        fetch("/lol/summoner/v3/summoners/by-name/{player.ign}/RGAPI-27597533-a67f-4f55-891b-3c33fdf7b2e4",{
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json;charset=utf-8'
                }
            })
            .then( (response) => {
                accountId = response.accountId;
            })
            .then( )
        })
    }
    
    renderTableHeads(){

        // If the player data isn't empty, then render the headers based on the 
        // statistics the first player has. All stat NAMES should be user independent.
        if(!this.state.players){
            return; 
        }

        return(
            <tr>
                <th>NAME</th>
                <th>TEAM</th>
                <th>POSITION</th>
                {this.state.players[0].stats.map((stat,i)=>{
                // DON'T FORGET TO RETURN THE ITEMS YOU IDIOT 
                return (<th key={i}>{stat.name}</th>);
                })
                }
            </tr>
        );
    }

    renderTableCells(){

        //If player data isn't empty...
        if(!this.state.players){
            return;
        }

        return(
            <tbody>
               {    /** Map all player data, then we pass all of the player objects
                        to the Object.keys method which returns an array of each players'
                        properties. Once we have each players' properties, we then need
                        to return the values of their properties as table cells. The 'stats'
                        property is an array, so we need to check if we are at 'stats' by using
                        Array.isArray(). If it's an array, then we need to map the array values onto
                        their own table cells. If not, we map the original data onto its cell. 
                        In outer for loop that iterates over every player object,
                    *   we need to make sure that when we are finished with this player 
                    *   object we go on to a new row. 
                    */
                   this.state.players.map((player,i)=>{
                        return <tr key={i}>
                        {(Object.keys(player).map((name,index)=>{
                            if(Array.isArray(player[name])){
                                return player[name].map((stat,j)=>{
                                   return (<td key={j}>{stat.value}</td>);
                                })
                            }
                            else return (<td key={index}>{player[name]}</td>);
                        }))} 
                        </tr>
                   })
               } 
            </tbody>
        );
    }

    render() {


        return (
            <div>
                <MyNav url={this.props.location.pathname}/>
                <div className="tableLayout">
                <Table responsive bordered hover>
                    {/* <thead>
                        {this.renderTableHeads()}
                    </thead> */}
                        {this.renderTableCells()}
                </Table>
                </div> 
                <p>You are on the statistics page! Current url is: {this.props.location.pathname}</p>
                <Footer/>
            </div>
        );
    }
}

export default Statistics;