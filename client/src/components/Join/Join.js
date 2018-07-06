import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Join.css';

class Join extends Component {
    constructor() {
        super();

        this.state = {
            college: 21,
            highschool: 36,
            media: 11
        };
    }

    render() {
        return (
            <div className="join-egf-container">
                <MyNav url={this.props.location.pathname}/> 
                    <div className="join-egf-form">
                        <div className="join-egf-logo">
                            <div className="college-logo">
                                COLLEGE:
                                {this.state.college}
                            </div>
                            <div className="highschool-logo">
                                HIGHSCHOOL:
                                {this.state.highschool}
                            </div>
                            <div className="media-logo">
                                MEDIA:
                                {this.state.media}
                            </div>
                        </div>
                        <div className="join-egf-form">

                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Join;