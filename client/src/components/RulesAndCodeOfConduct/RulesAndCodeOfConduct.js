import React, { Component } from 'react';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import CodeOfConduct from '../CodeOfConduct/CodeOfConduct';
import Rules from '../Rules/Rules';
import Switch from 'react-switch';
import './RulesAndCodeOfConduct.css';

class RulesAndCodeOfConduct extends Component {
    constructor() {
        super();
        this.state = {
            checked: false
        };
        
        this.handleChange = this.handleChange.bind(this);
      }
     
    handleChange(checked) {
        this.setState({ checked });
    }
     
    render() {
        const displayPage = this.state.checked;
        return (
            <div>
                <MyNav url={this.props.location.pathname}/> 
                <div className="rules-and-code-of-conduct-container">
                    <div className="switch-for-views">
                        <div className="switch-message">
                            Click to switch between Rules Page (R) and Code Of Conduct Page (C)
                        </div>
                        {/* <div className="the-switch"> */}
                            <Switch
                                checked={this.state.checked}
                                onChange={this.handleChange}
                                uncheckedIcon={
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: "100%",
                                            fontSize: 15,
                                            color: "orange",
                                            paddingRight: 2
                                        }}>
                                        C
                                    </div>
                                }
                                checkedIcon={
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: "100%",
                                            fontSize: 15,
                                            color: "orange",
                                            paddingRight: 2
                                        }}>
                                        R
                                    </div>
                                }
                                className="react-switch-1"
                            />
                        {/* </div> */}
                    </div>
                    <div>
                        {/* if displayPage == false, show rules page, else show code of conduct page */}
                        {/* {displayPage ? (<Rules />) : (<CodeOfConduct />)} */}
                        {displayPage ? (<CodeOfConduct />) : (<Rules />)}
                    </div>
                </div>
            <Footer />
          </div>
        );
    }
}

export default RulesAndCodeOfConduct;