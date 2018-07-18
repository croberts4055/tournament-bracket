import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Vods.css';

class Vods extends Component {
    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/>
                <div className="vod-div">
                <p>You are on the VODS page! Current url is: {this.props.location.pathname}</p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Vods;