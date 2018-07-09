import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './News.css';

class News extends Component {
    constructor(props){
        super(props);

        this.state = {
            articles: [
                {
                    title: "fnatic-caps-eus-victory-over-na",
                    url: "https://www.lolesports.com/en_US/articles/fnatic-caps-eus-victory-over-na",
                    image: "https://riot-web-cdn.s3-us-west-1.amazonaws.com/lolesports/s3fs-public/styles/centered/public/43195620472_78d72c185b_k.jpg?nmBWQi3j8L73u.JKzUC8czOBxiVNdygx&itok=ilUXr92b",
                    author: "Kien Lam",
                    month: "July",
                    day: 7,
                    year: 2018,
                },
                {
                    title: "Rift Rivals NA vs. EU Roundup",
                    url: "https://www.lolesports.com/en_US/articles/rift-rivals-na-vs-eu-roundup",
                    image: "https://esports-assets.s3.amazonaws.com/production/files/NALCS18_Sum_PlayerFeatures/RRNAEU/RR_Chart.jpg",
                    author: "LOLESPORTS STAFF",
                    month: "July",
                    day: 5,
                    year: 2018,
                },
                {
                    title: "NA LCS Stats Breakdown Summer Week 3",
                    url: "https://www.lolesports.com/en_US/articles/na-lcs-stats-breakdown-summer-week-3",
                    image: "https://riot-web-cdn.s3-us-west-1.amazonaws.com/lolesports/s3fs-public/styles/centered/public/2018_nalcs_summersplit_infographic_week3_v3.jpg?rHyqqAlXKZCdFS.W011_j5oVudeI7Ecr&itok=Qm7TNVEc",
                    author: "NAUGHTY PENGUINS",
                    month: "July",
                    day: 3,
                    year: 2018,
                },
            ]
        };
    }

    render() {
        return (
            <div className="news-container">
                <MyNav url={this.props.location.pathname}/> 
                <div className="main-article-container">
                    <div className="main-article">
                        <img src={this.state.articles[0].image} />
                        <div className="main-info">
                            {this.state.articles[0].title}
                            <br />
                            BY {this.state.articles[0].author} | {this.state.articles[0].month} {this.state.articles[0].day}, {this.state.articles[0].year}
                        </div>
                    </div>
                    <div className="side-article-container">
                        <div className="side-article">
                            <img src={this.state.articles[1].image} />
                            <div className="side-info">
                                {this.state.articles[1].title}
                                <br />
                                BY {this.state.articles[1].author} | {this.state.articles[1].month} {this.state.articles[1].day}, {this.state.articles[1].year}
                            </div>
                        </div>
                        <div className="side-article">
                            <img src={this.state.articles[2].image} />
                            <div className="side-info">
                                {this.state.articles[2].title}
                                <br />
                                BY {this.state.articles[2].author} | {this.state.articles[2].month} {this.state.articles[2].day}, {this.state.articles[2].year}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-article-container">
                    <div className="top-sub-articles">
                        <div className="top-sub-article-small">
                            {/* <div className="sub-info">
                                SUB 1
                            </div> */}
                            SUB 1
                        </div>
                        <div className="top-sub-article-big">
                            {/* <div className="sub-info">
                                SUB 2
                            </div> */}
                            SUB 2
                        </div>
                    </div>
                    <div className="bottom-sub-articles">
                        <div className="bottom-sub-article-small">
                            {/* <div className="sub-info">
                                SUB 3
                            </div> */}
                            SUB 3
                        </div>
                        <div className="bottom-sub-article-small">
                            {/* <div className="sub-info">
                                SUB 4
                            </div> */}
                            SUB 4
                        </div>
                        <div className="bottom-sub-article-small">
                            {/* <div className="sub-info">
                                SUB 5
                            </div> */}
                            SUB 5
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default News;