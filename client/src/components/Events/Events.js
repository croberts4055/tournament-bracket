import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Events.css';
import { Button } from 'react-bootstrap';

var states = [
    "Alaska",
    "Connecticut",
];

var filterOptions = [
    "Date",
    "Location",
    "Name",
    "Price",
];

class Events extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            filterBy: "",
            events: [
                {
                    name: "LEAGUE OF LEGENDS AMATEUR TOURNAMENT",
                    location: "HUNTER COLLEGE",
                    month: "October",
                    day: "5",
                    year: "2018",
                    time: "4:30 AM",
                    price: 1.99,
                },
                {
                    name: "GAMERS UNITE",
                    location: "CCNY",
                    month: "August",
                    day: "16",
                    year: "2018",
                    time: "5 PM",
                    price: 8.99,
                },
                {
                    name: "RUNESCAPE 1v1 Boxing",
                    location: "Times Square 42nd Street",
                    month: "September",
                    day: "28",
                    year: "2018",
                    time: "6:15 PM",
                    price: 3.49,
                },
                {
                    name: "NEOPETS",
                    location: "Byrant Park",
                    month: "July",
                    day: "4",
                    year: "2019",
                    time: "3 PM",
                    price: 5.99,
                },
            ]
        };
    }

    handleClick = () => {
        alert("You've clicked ADD EVENT button");
      }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/> 
                <p>You are on the events page! Current url is: {this.props.location.pathname}</p>
                <div className="events-container">
                    <div className="events-search-and-filter">
                        <div className="user-option-location">
                            SEARCH BY LOCATION
                            <br />
                            <input type="text" />
                        </div>
                        <div className="user-option-state">
                            SEARCH BY STATE
                            <br />
                            <input type="text" />
                        </div>
                        <div className="user-option-filter">
                            FILTER BY
                            <br />
                            <input type="text" />
                        </div>
                        <div className="user-add-event">
                            <br />
                            <button onClick={this.handleClick}>
                                ADD EVENT
                            </button> 
                        </div>
                    </div>
                    <div className="events-display">
                        <div className="event-headers">
                            <div className="event-name">
                                EVENT NAME
                            </div>
                            <div className="event-location">
                                LOCATION
                            </div>
                            <div className="event-date">
                                DATE
                            </div>
                            <div className="event-price">
                                PRICE
                            </div>
                        </div>
                        {this.state.events.map((event, i) => {
                            return(
                                <div className="eventBlock" key={i}>
                                    <div className="event-name"> {event.name} </div>
                                    <div className="event-location"> {event.location} </div>
                                    <div className="event-date"> {event.month}/{event.day}/{event.year} </div>
                                    <div className="event-price"> ${event.price} </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Events;