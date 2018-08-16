import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class SysAlert extends React.Component {
	constructor(props) {
    	super(props);
	}

	render(){
        return(
            <div className="alert">
                <Alert bsStyle={this.props.alert.type}>
                    <p>{this.props.alert.text}</p>
                </Alert>
            </div>
        );
    }
}

export default SysAlert;