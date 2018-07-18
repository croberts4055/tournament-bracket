import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/** 
 * Footer should have three lists 
 * of links, as well as links to socials.
 */

class Footer extends Component{
    render(){
        return(
            <div className="footer-container">
                <div className="egf-links-container">
                    <div className="egf-list-container">
                        <a href="/about">ABOUT EGF</a>
                        <a href="/contact">CONTACT</a>
                        <a href="#">PROGRAMS</a>
                    </div>
                    <div className="egf-list-container">
                        <a href="/joinegf">JOIN EGF</a>
                        <a href="#">TEAMS</a>
                        <a href="#">PARENTAL INFO</a>
                    </div>
                    <div className="egf-list-container">
                        <a href="#">TERMS OF USE</a>
                        <a href="#">PRIVACY POLICY</a>
                        <a href="#">COPYRIGHT</a>
                    </div>
                </div>
                <div className="social-media-links-container">
                    <div className="social-media-container">
                        <a href="https://www.facebook.com/egfederation" target="_blank">FACEBOOK</a>
                        <a href="https://www.twitch.tv/officialegf" target="_blank">TWITCH.TV</a>
                        <a href="https://twitter.com/officialegf" target="_blank">TWITTER</a>
                        <a href="https://www.youtube.com/channel/UCSO32htVpc6ZObgIHUwSOPQ" target="_blank">YOUTUBE</a>
                    </div>
                </div>
                <div className="copyright-container">
                    <span className="text muted">
                        &copy; Copyright Electronic Gaming Federation INC. 2016. All rights reserved
                    </span>
                </div>
            </div>
        );
    }
        
}

export default Footer;