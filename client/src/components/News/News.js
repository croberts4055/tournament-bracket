import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';

class News extends Component {
    render() {
        return (
            <div>
                <MyNav/> 
                <p>You are on the news page!</p>
                <Footer/>
            </div>
        );
    }
}

export default News;