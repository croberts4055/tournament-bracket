import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';

class Standings extends Component {
    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/> 
                <p>You are on the standings page! Current url is: {this.props.location.pathname}</p>
                <Footer/>
            </div>
        );
    }
}

export default Standings;