import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';

class Video extends Component {
    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/> 
                <p>You are on the video page! Current url is: {this.props.location.pathname}</p>
                <Footer/>
            </div>
        );
    }
}

export default Video;