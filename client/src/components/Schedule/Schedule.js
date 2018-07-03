import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';

class Schedule extends Component {
    render() {
        return (
            <div>
                <MyNav/> 
                <p>You are on the Schedule page!</p>
                <Footer/>
            </div>
        );
    }
}

export default Schedule;