import React, { Component } from 'react';
import './College.css';

// post fix for numbers when displaying their standings
var numberPostFix = [
    "ST", // 1ST
    "ND", // 2ND
    "RD", // 3RD
    "TH", // 4TH, 5TH, 6TH, 7TH, 8TH, 9TH, 10TH, ...
]

class College extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collegeRegion: null,
            // colleges are based on region selected from Standings page
            colleges: [
                {
                    logo: "https://urbanaffairsassociation.org/wp-content/uploads/2017/03/hunter-college-logo.png",
                    name: "HUNTER",
                    wins: 12,
                    losses: 3,
                },
                {
                    logo: "http://www.baruch.cuny.edu/OCMPA/images/BCstacked_PMS288.jpg",
                    name: "BARUCH",
                    wins: 9,
                    losses: 6,
                },
                {
                    logo: "http://www.qc.cuny.edu/PublishingImages/QC_PL_WhiteBG_RGB.jpg",
                    name: "QUEENS",
                    wins: 7,
                    losses: 8,
                },
                {
                    logo: "https://weddingplanninginstitute.com/wp-content/uploads/2017/01/bmcc-logo.jpg",
                    name: "BMCC",
                    wins: 5,
                    losses: 10,
                },
            ],
        };
    }

    /* function to receive prop from standings page, will change based on region */
    componentDidMount() {
        const selectedRegion = this.props.collegeRegion;
        this.setState({
            collegeRegion: selectedRegion
        });
    }

    render() {
        return(
            <div>
                <div className="college-region">
                    Currently Selected Region: {this.state.collegeRegion}
                </div>
                {this.state.colleges.map((college, i)=>{
                    return(
                        <div className="block-Div">
                            <div className="college-container">
                                <div className="college-image">
                                    <img src={this.state.colleges[i].logo} />
                                </div>
                                <div className="college-name">
                                    {this.state.colleges[i].name}
                                </div>
                                <div className="college-standings">
                                    {i+1}{numberPostFix[i]}
                                    {/* if standing number is greater than 4, find way to attach the numberPostFix of "TH" to the end of the standing */}
                                </div>
                                <div className="college-wl-stats">
                                    {this.state.colleges[i].wins} W | {this.state.colleges[i].losses} L
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default College;