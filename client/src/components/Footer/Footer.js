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
                <footer className="footer">
                    <div className="container">
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