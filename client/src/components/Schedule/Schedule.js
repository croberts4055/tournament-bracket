import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';

class Schedule extends Component {
    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/> 
                <p>You are on the Schedule page! Current url is: {this.props.location.pathname}</p>
                <Footer/>
            </div>
        );
    }
}

export default Schedule;