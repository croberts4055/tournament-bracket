import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';

class Rules extends Component {
    render() {
        return (
            <div>
                <MyNav/> 
                <p>You are on the RULES page!</p>
                <Footer/>
            </div>
        );
    }
}

export default Rules;