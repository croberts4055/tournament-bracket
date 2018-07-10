import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import College from '../College/College';

class Standings extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedRegion: "Mid-Atlantic",
        };
    }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/> 
                <p>You are on the standings page! Current url is: {this.props.location.pathname}</p>
                <College collegeRegion={this.state.selectedRegion}/>
                <Footer/>
            </div>
        );
    }
}

export default Standings;