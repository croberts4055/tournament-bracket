import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Rules.css';

class Rules extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sectionTitles: [
                "section title 1",
                "section title 2",
                "section title 3",
                "section title 4",
                "section title 5",
                "section title 6",
                "section title 7",
                "section title 8",
                "section title 9",
                "section title 10",
            ],
            articles: [
                [
                    "random text 1",
                    "erjerekrjelkre",
                    "Erkjkejr",
                ],
                [
                    "random text 2",
                    "erkerererere",
                ],
                [
                    "random text 3",
                    "ErelrelrereRE",
                    "sdvcnmvncvmcnvc",
                ],
            ],
        };
    }

    render() {
        return (
            <div>
                <MyNav url={this.props.location.pathname}/> 
                {/* <p>You are on the RULES page! Current url is: {this.props.location.pathname}</p> */}
                    <div className="rules-container">
                        <div className="left-column">
                            <div className="table-of-content-header">
                                <h1>TABLE OF CONTENT</h1>
                            </div>
                            {this.state.sectionTitles.map((sectionTitle, i)=> {
                                return(
                                    <div className="section-titles">
                                        {this.state.sectionTitles[i]}
                                    </div> 
                                );
                            })}
                        </div>
                        <div className="right-column">
                            {this.state.articles.map((article, i)=>{
                                return(
                                    <div className="article-container">
                                        <div className="article-header">
                                            <h1>ARTICLE {i+1}</h1>
                                        </div>
                                        {article[i].map((a, j)=>{
                                            <div className="article-text">
                                                {a}
                                            </div>        
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default Rules;