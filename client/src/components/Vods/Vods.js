import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';

class Vods extends Component {
    render() {
        return (
            <div>
                <MyNav/> 
                <p>You are on the VODS page!</p>
                <Footer/>
            </div>
        );
    }
}

export default Vods;