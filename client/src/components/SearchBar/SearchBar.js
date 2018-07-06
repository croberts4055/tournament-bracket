import React, { Component } from 'react';

/* class component, when you want a component to have an internal record keeping. Allows this component to communicate with other components. Extending it gives SearchBar a bunch of functionalities from the React Component class */
class SearchBar extends Component { 
	constructor(props) {
		super(props);

		this.state = { term: '' }; /* everytime user types in the input, this.state.term becomes the value of the input */
	}

	render() {
		return (
			<input
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
		);
	}

	onInputChange(term) {
		this.setState({term});
	}
}

export default SearchBar;