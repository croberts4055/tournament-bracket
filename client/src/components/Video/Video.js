import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';

class Video extends Component {
    render() {
        return (
            <div>
                <MyNav/> 
                <p>You are on the video page!</p>
                <Footer/>
            </div>
        );
    }
}

export default Video;