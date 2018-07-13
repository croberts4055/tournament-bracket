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
                        <Link to="/about">ABOUT EGF</Link>
                        <Link to="/contact">CONTACT</Link>
                        <Link to="#">PROGRAMS</Link>
                    </div>
                    <div className="egf-list-container">
                        <Link to="/joinegf">JOIN EGF</Link>
                        <Link to="#">TEAMS</Link>
                        <Link to="#">PARENTAL INFO</Link>
                    </div>
                    <div className="egf-list-container">
                        <Link to="#">TERMS OF USE</Link>
                        <Link to="#">PRIVACY POLICY</Link>
                        <Link to="#">COPYRIGHT</Link>
                    </div>
                </div>
                <div className="social-media-links-container">
                    <div className="social-media-container">
                        <Link to="https://www.facebook.com/egfederation" target="_blank">FACEBOOK</Link>
                        <Link to="https://www.twitch.tv/officialegf" target="_blank">TWITCH.TV</Link>
                        <Link to="https://twitter.com/officialegf" target="_blank">TWITTER</Link>
                        <Link to="https://www.youtube.com/channel/UCSO32htVpc6ZObgIHUwSOPQ" target="_blank">YOUTUBE</Link>
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