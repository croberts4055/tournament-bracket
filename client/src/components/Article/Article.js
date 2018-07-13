import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Article.css';

// need to pull article data from database once user selects a specific article. maybe can do this using a direct reference to the database, then pulling all the necessary fields from the database to the state then render the state

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headlineImage: "",
            headlineTitle: "",
            tags: "",
            firstName: "",
            lastName: "",
            gamertag: "",
            publishMonth: "",
            publishDay: "",
            publishYear: "",
        };
    }

    render() {
        return(
            <div>
                <MyNav url={this.props.location.pathname}/> 
                <Footer />
            </div>
        );
    }
}

export default Article;