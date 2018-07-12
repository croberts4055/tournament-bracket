import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './CodeOfConduct.css';

const CodeOfConduct = [
    {
        section: "Article I - Policy",
        subheading: "Members of each team including players, staff, and their communities, are expected to act with respect and in accordance with the league’s Code of Conduct, both inside and outside the game.",
        descriptions: [
            "This code of conduct is effective for all students, administrators, and staff during all practices, games, tournaments, events, in other related gatherings, whether in-house or abroad, in-person or remote, and in environments where their behavior could represent EGF.",
            "Each student, administrator, and staff shall be given access to this code of conduct through the EGF website and publication.",
            "Each team is required to review this code of conduct at the beginning of each season in addition to any EGF-directed policy changes.",
            "EGF will report any instances of conduct reporting or proceeding to the school where a student athlete is registered. All correspondence regarding violation of the Code of Conduct will be sent to the appointed administrator of the institution/team."
        ]
    },
    {
        section: "Article II - Code",
        subheading: "Every student, administrator, staff, official, or spectator shall not:",
        descriptions: [
            "Abuse others physically, verbally, through written word, or other media.",
            "Threaten, stalk, or otherwise create an unsafe environment for any person at any EGFH practice, games, tournament, event, or other related gatherings, regardless of format, participants, or location/medium.",
            "Participate in any form of cheating, including, but not limited to: intentionally allowing opponents to win a game or use of: programs that allow for cheating or map hacking, bots or scripting, game bug(s) determined by the administrators to be unfair, ineligible player(s), an intentional disconnection without a proper and explicitly stated reason",
            "Engage in any harmful action based on, or directed at, including but not limited to: socioeconomic status, disability, health status, religion, national origin, sexual orientation, gender identity, military experience, or relationship status.",
            "Create or use an in-game name, or other public identifier, that contains personally identifying information, or is offensive, defamatory, vulgar, obscene, sexually explicit, racially, ethnically, or otherwise objectionable.",
            "Impersonate, or falsely represent yourself as any person, business, or entity, including an EGF employee, or communicate in any way that makes it appear that the communication originates from another entity.",
            "Transmit or facilitate the transmission of any content that contains a virus, trojan horse, keylogger, worm, or other programs that are intended to damage, interfere with, or mine information.",
            "Attempt to access, or attempt to access, areas of games, game servers, EGF server, or any related programs or web sites used throughout esports play and collaboration."
        ]

    },
    {
        section: "Article III - Enforcement",
        subheading: "Heads of organizations within EGFH, including competitive teams or other operating groups are expected to hold themselves, their team, their team staff, associated administrators, any additional supporting members, spectators, and anyone else present at EGFH gatherings, accountable to the standards set forth in this code of conduct.",
        descriptions: [
            "EGF holds the authority to enforce this code of conduct, and its consequences, to anyone, including its designated officials.",
            "EGF-designated officials will hold the primary responsibility for their own conduct, and in the event of an infraction of this code of conduct, dispensing appropriate disciplinary action for offending behaviors.",
            "When a member engages in prohibited conduct, it is the obligation of those persons involved to report such instances to EGF-designated officials. Failure to report by a party may be subject to disciplinary action under league rules.",
            "Any EGFH members punished in a way that they perceive as unfair may have their case reviewed by EGF for further adjudication according to the EGF conduct process."
        ]
    },
    {
        section: "Article IV - Infractions Process",
        subheading: "",
        descriptions: [
            "A complaint may be brought to the EGFH Conduct Committee at any point. The complaint will be reviewed by the committee and a determination will be made by the committee as to whether the complaint is sufficient to hold a hearing.",
            "Should a complaint be found sufficient, the player or team will be suspended from competing until the resolution of the hearing. The committee will schedule a hearing within one week of the initial determination or as soon as involved parties are available.",
            "During the hearing the committee will allow statements from both the complainant and the defendant and will review any evidence reported regarding the incident in question. Once the hearing has concluded, the committee will deliberate and report its ruling to the players and issue a statement regarding the status of the involved players within 48 hours. Until this decision has been made official, no public statements will be given on any hearings by any EGF staff.",
            "In the cases that a ruling must be made in an area that is not explicitly defined by the Code of Conduct, EGF reserves the right to make judgment, and/or request the EGFH Conduct Committee, or another specially-appointed committee, to rule on the case, and update the Code of Conduct as appropriate."
        ]
    },
    {
        section: "Article V - Appeals",
        subheading: "",
        descriptions: [
            "It is the right of any person disciplined for prohibited conduct to appeal the decision of the EGF Committee on Infractions, consisting of EGF staff, to the Infractions Appeals Committee, consisting of EGF staff and approved community members, within one week of the original ruling. Until that case is heard, the ruling made by the EGFH Committee on Infractions will be in effect.",
            "A decision by the Infractions Appeals Committee may be appealed to the Chairman of the league within one week of the decision being made.",
            "Should a decision be overturned by the League Commissioner, any season matches missed as a result of the original hearing will be rescheduled prior to the start of the playoffs, schedules permitting."            
        ]
    },
    {
        section: "Article VI - Disciplinary Action",
        subheading: "The following is a list of potential sanctions to be levied against players or teams found in violation of this Code of Conduct:",
        descriptions: [
            "Verbal warning",
            "Written warning",
            "Immediate forfeit of the current round/map",
            "Immediate forfeit of the game/match",
            "Expulsion from the event",
            "Suspension from EGF events",
            "Point deductions from team standings",
            "Forced break up of a team (may regroup with 2 or less of the original team)",
            "Ban from EGF competition for a period of time determined by The Committee on Infractions",
            "Reparations, corrective actions, workshops, and/or trainings",
            "Referral to authority (school or law enforcement)"
        ]
    },
    {
        section: "Article VII - Interpretations",
        subheading: "At times, the EGFH Code of Conduct may not cover an encountered situation, or may be interpreted in an unexpected way, requiring further clarification.",
        descriptions: [
            "Where a new or clarified ruling is required, a committee of EGF officials will convene to do so. These rulings will become the rule of operation or play immediately.",
            "A review of any new rulings will be undertaken during the seasonal review of the league’s rules and regulations, a meeting held within two weeks of the conclusion of the current season.",
            "EGF Officials will hold an annual review meeting to consider and codify all new rulings, proposed rules, and other necessary documentation during the month of June."
        ]
    },
    {
        section: "Article VIII - Transparency",
        subheading: "In order to provide the best governance possible, EGF will make public:",
        descriptions: [
            "All descisions related to conduct upon the conclusion of the case",
            "Changes to governing documents"
        ]
    }
];

class Rules extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlySelectedIndex: 0,
        };
    }

    renderCodeOfConductHeader() {
        return (
            <div className="code-of-conduct-container">
                <div className="code-of-conduct-header">
                    EGF Code of Conduct
                </div>
                <div className="code-of-conduct-text">
                    <p>
                        The Electronic Gaming Federation (EGF) takes the conduct and wellbeing of our athletes, staff, and supporters seriously. EGF expects that each member of EGFH, designated as anyone registered with EGFH, exhibits behavior that represents the highest level of integrity and sportsmanship, and positively contributes to the development of the esports community.
                    </p>
                    <p>
                    The purpose of EGFH is to facilitate interscholastic esports competitions in a positive and inclusive environment displaying the highest levels of integrity and transparency which celebrates the competitive and educational achievements of its community. Students, staff, and administrators are expected to act in a manner pursuant of that mission.
                    </p>
                    <p>
                        EGF reserves the right to make changes to the Code of Conduct at any point, without advanced notice to any involved parties. Any decision made will be announced to the community within five business days, and no EGF member may be retroactively punished for changes in the Code of Conduct.
                    </p>
                    <p>
                        The interpretation of the Code of Conduct and Constitution and Bylaws is at the sole discretion of EGF and its appointed representatives.
                    </p>
                    <p>
                        A copy of this Code of Conduct should be distributed to all players and staff and be made available to spectators. Players and staff will electronically sign off on this Code of Conduct as part of their registration with EGFH.
                    </p>
                </div>
            </div>
        );
    }

    // render Table of Contents header
    renderTableOfContentsHeader() {
        return (
            <div className="table-of-content-header">
                TABLE OF CONTENTS
            </div>
        );
    }

    // render multiple section titles
    renderSectionTitles() {
        return (
            <div className="section-title-container">
                {CodeOfConduct.map((section, index)=>{
                    return (
                        <div className="individual-section-title">
                            <button
                                key={index}        
                                onClick={() => {
                                    this.setState({ currentlySelectedIndex: index })
                                }} >
                                {CodeOfConduct[index].section}
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }

    // render different articles based on what section was clicked
    renderSections() {
        var sectionSubheading = CodeOfConduct[this.state.currentlySelectedIndex].subheading;
        var descriptions = CodeOfConduct[this.state.currentlySelectedIndex].descriptions;
        return (
            <div className="individual-section-container">
                <div className="section-subheading">
                    {sectionSubheading}
                </div>
                {descriptions.map((desc, index)=>{
                    return (
                        <div className="individual-section-number">
                            <div className="section-header">
                                <li>{index+1}-{descriptions.length}:</li>
                            </div>
                            <div className="section-text">
                                <p>{descriptions[index]}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/> 
                    <div className="coc-container">
                        <div className="code-of-conduct">
                            {this.renderCodeOfConductHeader()}
                        </div>
                        <div className="left-column">
                            {this.renderTableOfContentsHeader()}
                            {this.renderSectionTitles()}
                        </div>
                        <div className="right-column">
                            {this.renderSections()}
                        </div>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default Rules;