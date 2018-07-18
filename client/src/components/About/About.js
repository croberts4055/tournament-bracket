import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './About.css';


class About extends Component {
    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/> 
                <div className="mainDiv">
                    <div id="splash">
                    This is the splash/backdrop.
                    <p>You are on the ABOUT page! Current url is: {this.props.location.pathname}</p>                
                    </div>
                    <div id="caption">
                    <p>
                    In case you missed it, professional competitive gaming is a thing. It's called esports
                    and it's how professional gamers compete for millions of dollars in sold out stadiums
                    around the world. They're watched by hundreds of millions of viewers, and you can even
                    find them on TV networks like ESPN and TBS. <br/> 
                    EGF develops collegiate eSports by working with students and administrators across the
                    country.
                    </p>
                    </div>
                    <div id="team">
                        <div id="headshots">
                            <div>img</div>
                            <div>img</div>
                            <div>img</div>
                            <div>img</div>
                            <div>img</div>
                            <div>img</div>
                            <div>img</div>
                            <div>img</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default About;