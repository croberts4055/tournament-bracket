import React, { Component } from 'react';
import './Rules.css';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

// so far, this array contains mock data, just need to copy over data
// this is temporary

const RulesAndRegulationsData = [
    {
        section: "Match Process",
        subsections: [
            {
                subsection: "Season Matches",
                subheading: "All EGFH-sanctioned competitive matches are expected to adhere to the following standards:",
                subsectionarray: [
                    {
                        subsectionheading: "Season format",
                        sectiondescription: [
                            "EGFH seasons will be held twice per year consisting of a regular season in which schools compete in weekly matches against other schools followed by a state, then national championship.",
                            "The schedule for the regular season is determined by EGFH using a randomized pairing process that takes into account the distribution of teams by conference and academic schedule",
                            "Unless otherwise noted, the schedule will be posted at least 3 weeks prior to the start of the season"
                        ]
                    },
                    {
                        subsectionheading: "Game setup",
                        sectiondescription: [
                            "Captains are responsible for checking in, relaying information to their teams on behalf of the officials, and providing instructions to connect to their respective match."
                        ]
                    }
                ],
            },
            {
                subsection: "Forfeits",
                subheading: "",
                subsectionarray: [
                    {
                        subsectionheading: "",
                        sectiondescription: [
                            "Both teams are required to be in the game lobby at the scheduled match time, even if the opposing team cannot field a full eligible roster.",
                            "If a team knows they will be unable to field a full eligible roster for the match, the team captain should tag the opposing team’s captain in the EGFH Discord #match-rescheduling channel, with a message similar to, “[Your team name] cannot field a full roster for the [game] match scheduled on [date] and [time], and will be awarding a forfeit win to [opposing team name].”",
                            "If neither team has a full standard team of eligible players, both teams will receive a forfeit loss."
                        ]
                    }
                ],
            },
            {
                subsection: "In-Game Names (IGN), Team names, and Clan Tags",
                subheading: "It is the responsibility of a school’s Esports Director to ensure the IGNs of their players comply with the EGFH Code of Conduct Article II Section 5, including team names.",
                subsectionarray: [
                    {
                        subsectionheading: "",
                        sectiondescription: [
                            "Both teams are required to be in the game lobby at the scheduled match time, even if the opposing team cannot field a full eligible roster.",
                            "If a team knows they will be unable to field a full eligible roster for the match, the team captain should tag the opposing team’s captain in the EGFH Discord #match-rescheduling channel, with a message similar to, “[Your team name] cannot field a full roster for the [game] match scheduled on [date] and [time], and will be awarding a forfeit win to [opposing team name].”",
                            "If neither team has a full standard team of eligible players, both teams will receive a forfeit loss."
                        ]
                    }
                ],
            },
            {
                subsection: "Team Eligibility",
                subheading: "",
                subsectionarray: [
                    {
                        subsectionheading: "",
                        sectiondescription: [
                            "Both teams are required to be in the game lobby at the scheduled match time, even if the opposing team cannot field a full eligible roster.",
                            "If a team knows they will be unable to field a full eligible roster for the match, the team captain should tag the opposing team’s captain in the EGFH Discord #match-rescheduling channel, with a message similar to, “[Your team name] cannot field a full roster for the [game] match scheduled on [date] and [time], and will be awarding a forfeit win to [opposing team name].”",
                            "If neither team has a full standard team of eligible players, both teams will receive a forfeit loss."
                        ]
                    }
                ],
            },
            {
                subsection: "Player Eligibility",
                subheading: "",
                subsectionarray: [
                    {
                        subsectionheading: "",
                        sectiondescription: [
                            "Both teams are required to be in the game lobby at the scheduled match time, even if the opposing team cannot field a full eligible roster.",
                            "If a team knows they will be unable to field a full eligible roster for the match, the team captain should tag the opposing team’s captain in the EGFH Discord #match-rescheduling channel, with a message similar to, “[Your team name] cannot field a full roster for the [game] match scheduled on [date] and [time], and will be awarding a forfeit win to [opposing team name].”",
                            "If neither team has a full standard team of eligible players, both teams will receive a forfeit loss."
                        ]
                    }
                ],
            },
            {
                subsection: "Team Roster",
                subheading: "",
                subsectionarray: [
                    {
                        subsectionheading: "",
                        sectiondescription: [
                            "Both teams are required to be in the game lobby at the scheduled match time, even if the opposing team cannot field a full eligible roster.",
                            "If a team knows they will be unable to field a full eligible roster for the match, the team captain should tag the opposing team’s captain in the EGFH Discord #match-rescheduling channel, with a message similar to, “[Your team name] cannot field a full roster for the [game] match scheduled on [date] and [time], and will be awarding a forfeit win to [opposing team name].”",
                            "If neither team has a full standard team of eligible players, both teams will receive a forfeit loss."
                        ]
                    }
                ],
            },
            {
                subsection: "Stats & Demos",
                subheading: "",
                subsectionarray: [
                    {
                        subsectionheading: "",
                        sectiondescription: [
                            "Both teams are required to be in the game lobby at the scheduled match time, even if the opposing team cannot field a full eligible roster.",
                            "If a team knows they will be unable to field a full eligible roster for the match, the team captain should tag the opposing team’s captain in the EGFH Discord #match-rescheduling channel, with a message similar to, “[Your team name] cannot field a full roster for the [game] match scheduled on [date] and [time], and will be awarding a forfeit win to [opposing team name].”",
                            "If neither team has a full standard team of eligible players, both teams will receive a forfeit loss."
                        ]
                    }
                ],
            }
        ]
    },
    {
        section: "Game Settings",
        subsections: [
            {
                subsection: "EGF League Terminology",
                subheading: "The following terminology will be used within EGF leagues and events:",
                subsectionarray: [
                    {
                        subsectionheading: "",
                        sectiondescription: [
                            "Take a screenshot of your client “Profile” page before the name change",
                            "Take a screenshot of your client “Profile” page after the name change",
                            "must be phrased as “School, team name” where the school portion may use a shortened name if necessary. For example, Alden High School could be known as the “Alden Bulldogs.”"
                        ]
                    }
                ],
            },
            {
                subsection: "Character Restrictions",
                subheading: "In the event of a major bug or by decision of the developer, select characters may be restricted from gameplay for a period of time by EGF officials. Decisions on any character restrictions will be made the day of the match and teams will be notified at least one hour prior to the start of the first match of the day.",
                subsectionarray: [
                    {
                        subsectionheading: "",
                        sectiondescription: [
                            "Take a screenshot of your client “Profile” page before the name change",
                            "Take a screenshot of your client “Profile” page after the name change",
                            "must be phrased as “School, team name” where the school portion may use a shortened name if necessary. For example, Alden High School could be known as the “Alden Bulldogs.”"
                        ]
                    }
                ]
            },
            {
                subsection: "Exploits & Infractions",
                subheading: "",
                subsectionarray: [
                    {
                        subsectionheading: "",
                        sectiondescription: [
                            "Take a screenshot of your client “Profile” page before the name change",
                            "Take a screenshot of your client “Profile” page after the name change",
                            "must be phrased as “School, team name” where the school portion may use a shortened name if necessary. For example, Alden High School could be known as the “Alden Bulldogs.”"
                        ]
                    }
                ],
            },
            {
                subsection: "Unfair play",
                subheading: "The following actions will be considered unfair play:",
                subsectionarray: [
                    {
                        subsectionheading: "",
                        sectiondescription: [
                            "Take a screenshot of your client “Profile” page before the name change",
                            "Take a screenshot of your client “Profile” page after the name change",
                            "must be phrased as “School, team name” where the school portion may use a shortened name if necessary. For example, Alden High School could be known as the “Alden Bulldogs.”"
                        ]
                    }
                ],
            },
            {
                subsection: "Stoppage of play",
                subheading: "",
                subsectionarray: [
                    {
                        subsectionheading: "",
                        sectiondescription: [
                            "Take a screenshot of your client “Profile” page before the name change",
                            "Take a screenshot of your client “Profile” page after the name change",
                            "must be phrased as “School, team name” where the school portion may use a shortened name if necessary. For example, Alden High School could be known as the “Alden Bulldogs.”"
                        ]
                    }
                ],
            },
            {
                subsection: "Game pause procedures",
                subheading: "",
                subsectionarray: [
                    {
                        subsectionheading: "",
                        sectiondescription: [
                            "Take a screenshot of your client “Profile” page before the name change",
                            "Take a screenshot of your client “Profile” page after the name change",
                            "must be phrased as “School, team name” where the school portion may use a shortened name if necessary. For example, Alden High School could be known as the “Alden Bulldogs.”"
                        ]
                    }
                ],
            }
        ]
    },
];

class Rules extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlySelectedSection: 0,
            currentlySelectedSubsection: 0
        };
    }

    renderRulesAndRegulationHeader() {
        return (
            <div className="rules-and-regulations-container">
                <div className="rules-and-regulations-header">
                    EGF Rules & Regulations
                </div>
                <div className="rules-and-regulations-text">
                    General Regulations
                </div>
            </div>
        );
    }

    renderSectionHeader() {
        return (
            <div className="section-header">
                SECTIONS
            </div>
        );
    }

    renderSection() {
        return (
            <div className="section-container">
                {RulesAndRegulationsData.map((section, index)=>{
                    return (
                        <div className="individual-section-container">
                            <button
                                key={index}        
                                onClick={() => {
                                    this.setState({ currentlySelectedSection: index })
                                }} >
                                {RulesAndRegulationsData[index].section}
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }

    renderSubsectionHeader() {
        return (
            <div className="subsection-header">
                SUBSECTIONS
            </div>
        );
    }

    renderSubsection() {
        var subsectionTitle = RulesAndRegulationsData[this.state.currentlySelectedSection].subsections;
        return (
            <div className="subsection-container">
                {subsectionTitle.map((subsection, index)=>{
                    return (
                        <div className="individual-subsection-container">
                            <button
                                key={index}        
                                onClick={() => {
                                    this.setState({ currentlySelectedSubsection: index })
                                }} >
                                {subsectionTitle[index].subsection}
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }

    renderDescription() {
        var queryFrom = RulesAndRegulationsData[this.state.currentlySelectedSection].subsections[this.state.currentlySelectedSubsection];
        
        // use variables to reduce redundant typing of where to query the static data from the array of objects
        var subsectionMainHeading = queryFrom.subheading;
        var descriptionSubHeading = queryFrom.subsectionarray;

        return (
            <div className="description-container">
                <div className="description-main-heading">
                    {subsectionMainHeading}
                </div>
                {/* the loop below maps each subsection within a subsection to render to user */}
                {descriptionSubHeading.map((descsubheading, index)=>{
                    return (
                        <div className="individual-description-container">
                            <div className="description-sub-heading">
                                {descriptionSubHeading[index].subsectionheading}
                            </div>
                            {/* the loop below renders the description a specific section's subsection */}
                            {descriptionSubHeading[index].sectiondescription.map((text, i)=>{
                                return (
                                    <div>
                                        <div className="description-header">
                                            <li>{i+1}-{descriptionSubHeading[index].sectiondescription.length}:</li>
                                        </div>
                                        <div className="description-text">
                                            {descriptionSubHeading[index].sectiondescription[i]}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="rag-container">
                    <div className="rules-and-regulations">
                        {this.renderRulesAndRegulationHeader()}
                    </div>
                    <div className="left-column">
                        <div className="left-column-top">
                            {this.renderSectionHeader()}
                            {this.renderSection()}
                        </div>
                        <div className="left-column-bottom">
                            {this.renderSubsectionHeader()}
                            {this.renderSubsection()}
                        </div>
                    </div>
                    <div className="right-column">
                        {this.renderDescription()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Rules;