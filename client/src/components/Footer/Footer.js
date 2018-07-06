import React, { Component } from 'react';
import './Footer.css';

/** 
 * Footer should have three lists 
 * of links, as well as links to socials.
 */

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div id="linksContainer">
                    <div>
                        <a href="/about">ABOUT EGF</a> <br />
                        <a href="/contact">CONTACT</a> <br />
                        <a href="#">PROGRAMS</a> <br />
                    </div>
                    <div>
                        <a href="/joinegf">JOIN EGF</a> <br />
                        <a href="#">TEAMS</a> <br />
                        <a href="#">PARENTAL INFO</a> <br />
                    </div>
                    <div>
                        <a href="#">TERMS OF USE</a> <br />
                        <a href="#">PRIVACY POLICY</a> <br />
                        <a href="#">COPYRIGHT</a> <br />
                    </div>
                    <div id="checkBoxes"></div>
                </div>
                <footer className="foot">
                    <div id="container">
                        <span className="text muted">
                            &copy; Copyright Electronic Gaming Federation INC. 2016. All rights reserved
                        </span>
        
                    </div>

                </footer>
            </div>
        );
    }
        
}

export default Footer;