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
                    <div><a href="/about">ABOUT EGF</a><br/>CONTACT<br/>PROGRAMS</div>
                    <div>JOIN EGF<br/>TEAMS<br/>PARENTAL INFO</div>
                    <div>TERMS OF USE<br/>PRIVACY POLICY<br/>COPYRIGHT</div>
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