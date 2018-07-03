import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';

class Events extends Component {
    render() {
        return (
            <div>
                <MyNav/> 
                <p>You are on the events page!</p>
                <Footer/>
            </div>
        );
    }
}

export default Events;