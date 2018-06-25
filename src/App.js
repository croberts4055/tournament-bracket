import React, { Component } from 'react';

import NavigationBar from './components/NavigationBar';
import Homepage from './components/Homepage';

class App extends Component {
	render() {
		return (
			<div>
				<NavigationBar />
				<Homepage />
			</div>
		);
	}
};

export default App;