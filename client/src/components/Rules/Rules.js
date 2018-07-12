import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Rules.css';

class Rules extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlySelectedSection: 0,
            rules: [
                {
                    section: "CODE OF CONDUCT",
                    articles: [
                        {
                            description: "example article 1 for code of condutct",
                        },
                        {
                            description: "ejrekrhkjerere",
                        },
                        {
                            description: "21311354",
                        },
                    ],
                },
                {
                    section: "AFFILIATIONS",
                    articles: [
                        {
                            description: "example article 2 for code of condutct",
                        },
                    ],

                },
                {
                    section: "BEHAVIOR",
                    articles: [
                        {
                            description: "example article 3 for code of condutct",
                        },
                        {
                            description: "21311354",
                        },
                    ]
                },
            ],
        };
    }


    renderArticle() {
        var index = this.state.currentlySelectedSection;
        return(
            <div className="article-container">
                {this.state.rules.map((item, index)=>{
                    <div className="article-header">                        ">
                        <h1>ARTICLE {index}</h1>
                    </div>
                    {(Object.keys(item).map((obj, i)=>{
                        if(Array.isArray(obj[i])){
                            return(
                                    obj[i].map((desc, j)=>{
                                    return(
                                        <div className="article-text">
                                            {obj[i][j].desc}
                                        </div>
                                    );
                                })
                            );
                        }
                    }))}
                })}
            </div>
        );
    }

    render() {
        const currentlySelectedSection = this.state.currentlySelectedSection;
        return (
            <div>
                <MyNav url={this.props.location.pathname}/> 
                {/* <p>You are on the RULES page! Current url is: {this.props.location.pathname}</p> */}
                    <div className="rules-container">
                        <div className="left-column">
                            <div className="table-of-content-header">
                                <h1>TABLE OF CONTENT</h1>
                            </div>
                            {this.state.rules.map((rule, index)=>{
                                return(
                                    <div className="section-titles">
                                        <button
                                            key={index}        
                                            onClick={() => {
                                                this.setState({ currentlySelectedSection: index })
                                            }} >
                                            {this.state.rules[index].section}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="right-column">
                            {this.renderArticle()}
                        </div>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default Rules;