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
                    title: "0. fnatic-caps-eus-victory-over-na",
                    url: "https://www.lolesports.com/en_US/articles/fnatic-caps-eus-victory-over-na",
                    image: "https://riot-web-cdn.s3-us-west-1.amazonaws.com/lolesports/s3fs-public/styles/centered/public/43195620472_78d72c185b_k.jpg?nmBWQi3j8L73u.JKzUC8czOBxiVNdygx&itok=ilUXr92b",
                    author: "Kien Lam",
                    month: "July",
                    day: 7,
                    year: 2018,
                },
                {
                    title: "1. Rift Rivals NA vs. EU Roundup",
                    url: "https://www.lolesports.com/en_US/articles/rift-rivals-na-vs-eu-roundup",
                    image: "https://esports-assets.s3.amazonaws.com/production/files/NALCS18_Sum_PlayerFeatures/RRNAEU/RR_Chart.jpg",
                    author: "LOLESPORTS STAFF",
                    month: "July",
                    day: 5,
                    year: 2018,
                },
                {
                    title: "2. NA LCS Stats Breakdown Summer Week 3",
                    url: "https://www.lolesports.com/en_US/articles/na-lcs-stats-breakdown-summer-week-3",
                    image: "https://riot-web-cdn.s3-us-west-1.amazonaws.com/lolesports/s3fs-public/styles/centered/public/2018_nalcs_summersplit_infographic_week3_v3.jpg?rHyqqAlXKZCdFS.W011_j5oVudeI7Ecr&itok=Qm7TNVEc",
                    author: "NAUGHTY PENGUINS",
                    month: "July",
                    day: 3,
                    year: 2018,
                },
                {
                    title: "3. fnatic-caps-eus-victory-over-na",
                    url: "https://www.lolesports.com/en_US/articles/fnatic-caps-eus-victory-over-na",
                    image: "https://riot-web-cdn.s3-us-west-1.amazonaws.com/lolesports/s3fs-public/styles/centered/public/43195620472_78d72c185b_k.jpg?nmBWQi3j8L73u.JKzUC8czOBxiVNdygx&itok=ilUXr92b",
                    author: "Kien Lam",
                    month: "July",
                    day: 7,
                    year: 2018,
                },
                {
                    title: "4. Rift Rivals NA vs. EU Roundup",
                    url: "https://www.lolesports.com/en_US/articles/rift-rivals-na-vs-eu-roundup",
                    image: "https://esports-assets.s3.amazonaws.com/production/files/NALCS18_Sum_PlayerFeatures/RRNAEU/RR_Chart.jpg",
                    author: "LOLESPORTS STAFF",
                    month: "July",
                    day: 5,
                    year: 2018,
                },
                {
                    title: "5. NA LCS Stats Breakdown Summer Week 3",
                    url: "https://www.lolesports.com/en_US/articles/na-lcs-stats-breakdown-summer-week-3",
                    image: "https://riot-web-cdn.s3-us-west-1.amazonaws.com/lolesports/s3fs-public/styles/centered/public/2018_nalcs_summersplit_infographic_week3_v3.jpg?rHyqqAlXKZCdFS.W011_j5oVudeI7Ecr&itok=Qm7TNVEc",
                    author: "NAUGHTY PENGUINS",
                    month: "July",
                    day: 3,
                    year: 2018,
                },
                {
                    title: "6. fnatic-caps-eus-victory-over-na",
                    url: "https://www.lolesports.com/en_US/articles/fnatic-caps-eus-victory-over-na",
                    image: "https://riot-web-cdn.s3-us-west-1.amazonaws.com/lolesports/s3fs-public/styles/centered/public/43195620472_78d72c185b_k.jpg?nmBWQi3j8L73u.JKzUC8czOBxiVNdygx&itok=ilUXr92b",
                    author: "Kien Lam",
                    month: "July",
                    day: 7,
                    year: 2018,
                },
                {
                    title: "7. Rift Rivals NA vs. EU Roundup",
                    url: "https://www.lolesports.com/en_US/articles/rift-rivals-na-vs-eu-roundup",
                    image: "https://esports-assets.s3.amazonaws.com/production/files/NALCS18_Sum_PlayerFeatures/RRNAEU/RR_Chart.jpg",
                    author: "LOLESPORTS STAFF",
                    month: "July",
                    day: 5,
                    year: 2018,
                },
            ],
            listArticles: [
                {
                    title: "00. NA LCS Stats Breakdown Summer Week 3",
                    url: "https://www.lolesports.com/en_US/articles/na-lcs-stats-breakdown-summer-week-3",
                    image: "https://riot-web-cdn.s3-us-west-1.amazonaws.com/lolesports/s3fs-public/styles/centered/public/2018_nalcs_summersplit_infographic_week3_v3.jpg?rHyqqAlXKZCdFS.W011_j5oVudeI7Ecr&itok=Qm7TNVEc",
                    author: "NAUGHTY PENGUINS",
                    month: "July",
                    day: 3,
                    year: 2018,
                },
                {
                    title: "01. fnatic-caps-eus-victory-over-na",
                    url: "https://www.lolesports.com/en_US/articles/fnatic-caps-eus-victory-over-na",
                    image: "https://riot-web-cdn.s3-us-west-1.amazonaws.com/lolesports/s3fs-public/styles/centered/public/43195620472_78d72c185b_k.jpg?nmBWQi3j8L73u.JKzUC8czOBxiVNdygx&itok=ilUXr92b",
                    author: "Kien Lam",
                    month: "July",
                    day: 7,
                    year: 2018,
                },
                {
                    title: "02. Rift Rivals NA vs. EU Roundup",
                    url: "https://www.lolesports.com/en_US/articles/rift-rivals-na-vs-eu-roundup",
                    image: "https://esports-assets.s3.amazonaws.com/production/files/NALCS18_Sum_PlayerFeatures/RRNAEU/RR_Chart.jpg",
                    author: "LOLESPORTS STAFF",
                    month: "July",
                    day: 5,
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
                            By {this.state.articles[0].author} | {this.state.articles[0].month} {this.state.articles[0].day}, {this.state.articles[0].year}
                        </div>
                    </div>
                    <div className="side-article-container">
                        <div className="side-article">
                            <img src={this.state.articles[1].image} />
                            <div className="side-info">
                                {this.state.articles[1].title}
                                <br />
                                By {this.state.articles[1].author} | {this.state.articles[1].month} {this.state.articles[1].day}, {this.state.articles[1].year}
                            </div>
                        </div>
                        <div className="side-article">
                            <img src={this.state.articles[2].image} />
                            <div className="side-info">
                                {this.state.articles[2].title}
                                <br />
                                By {this.state.articles[2].author} | {this.state.articles[2].month} {this.state.articles[2].day}, {this.state.articles[2].year}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-article-container">
                    <div className="top-sub-articles">
                        <div className="top-sub-article-small">
                            <img src={this.state.articles[3].image} />
                            <div className="sub-info">
                                {this.state.articles[3].title}
                                <br />
                                By {this.state.articles[3].author} | {this.state.articles[3].month} {this.state.articles[3].day}, {this.state.articles[3].year}
                            </div>
                        </div>
                        <div className="top-sub-article-big">
                            <img src={this.state.articles[4].image} />
                            <div className="sub-info-big">
                                {this.state.articles[4].title}
                                <br />
                                By {this.state.articles[4].author} | {this.state.articles[4].month} {this.state.articles[4].day}, {this.state.articles[4].year}
                            </div>
                        </div>
                    </div>
                    <div className="bottom-sub-articles">
                        <div className="bottom-sub-article-small">
                            <img src={this.state.articles[5].image} />
                            <div className="sub-info">
                                {this.state.articles[5].title}
                                <br />
                                By {this.state.articles[5].author} | {this.state.articles[5].month} {this.state.articles[5].day}, {this.state.articles[5].year}
                            </div>
                        </div>
                        <div className="bottom-sub-article-small">
                            <img src={this.state.articles[6].image} />
                            <div className="sub-info">
                                {this.state.articles[6].title}
                                <br />
                                By {this.state.articles[6].author} | {this.state.articles[6].month} {this.state.articles[6].day}, {this.state.articles[6].year}
                            </div>
                        </div>
                        <div className="bottom-sub-article-small">
                            <img src={this.state.articles[7].image} />
                            <div className="sub-info">
                                {this.state.articles[7].title}
                                <br />
                                By {this.state.articles[7].author} | {this.state.articles[7].month} {this.state.articles[7].day}, {this.state.articles[7].year}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-articles">
                    {this.state.listArticles.map((listArticle, i)=>{
                        return(
                            <div className="list-article-container" key={i}>
                                <img src={this.state.listArticles[i].image} />
                                    <div className="list-article-info">
                                        {this.state.articles[i].title}
                                        <br />
                                        By {this.state.articles[i].author} | {this.state.articles[i].month} {this.state.articles[i].day}, {this.state.articles[i].year}
                                    </div>
                            </div>
                        );
                    })}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default News;