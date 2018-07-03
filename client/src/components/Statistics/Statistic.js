import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';

class Statistics extends Component {
    render() {
        return (
            <div>
                <MyNav/> 
                <p>You are on the statistics page!</p>
                <Footer/>
            </div>
        );
    }
}

export default Statistics;