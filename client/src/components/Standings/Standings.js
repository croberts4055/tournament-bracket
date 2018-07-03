import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';

class Standings extends Component {
    render() {
        return (
            <div>
                <MyNav/> 
                <p>You are on the standings page!</p>
                <Footer/>
            </div>
        );
    }
}

export default Standings;