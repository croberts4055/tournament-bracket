import React, { Component } from 'react';

import TeamInfo from './TeamInfo';
import MyNav from '../Navs/Nav';
import Footer from '../Footer/Footer';
import './Bracket.css';
import {checkInput} from '../algorithms/round robin/round-robin';

// import './Bracket.css';

// const mockTeams = [
//   {name: 'Cough Drops', points: '74'},
//   {name: 'Aquafina', points: '48'},
//   {name: 'Vitamin C', points: '66'},
//   {name: 'Tokaido', points: '64'},
//   {name: 'Bleach', points: '78'},
//   {name: 'Naruto Ramen', points: '84'},
//   {name: 'Water', points: '99'},
//   {name: 'Doge', points: '147'},
// ];

// var tournamentStyle = {
// 	columnCount: '0',
// };

// var tableHeaders = (
// 	<div className="table-headers"> 
// 		<thead>
// 			<tr>
// 					<th>Round 1</th>
// 					<th>Round 2</th>
// 					<th>Round 3</th>
// 					<th>Round 4</th>
// 			</tr>
// 		</thead>
// 	</div>
// );

// class Bracket extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			currentRound: 0,
// 			totalRounds: 0,
// 		}
// 	}

// 	renderTeams() {
// 		return(
// 			<div className="tournament-bracket-columns" style={tournamentStyle}>
// 				{mockTeams.map(team =>
// 					<TeamInfo name={team.name}
// 						points={team.points} />
// 				)}
// 			</div>
// 		);
// 	}

// 	render() {
// 		return(
// 			<div className="class-bracket">
// 				<MyNav/>
// 				<div className="bracket-container">
// 					<h1>Tournament Bracket Homepage</h1>
// 					<div className="tournament-bracket-container">
// 						{tableHeaders}
// 						{this.renderTeams()}
// 					</div>
// 					<h4>Total Teams:</h4>
// 						{this.props.teams}
// 					<h4>Total Rounds:</h4>
// 						{this.props.totalRounds}
// 				</div>
// 				<Footer />
// 			</div>
// 		);
// 	}
// }

class Bracket extends Component {
	constructor(props) {
		super(props);

		this.state = {
			teams: 0,
			rounds: 0
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		// this.checkInput = this.checkInput.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		var t = this.state.teams;
		console.log(t);
		var r = this.state.rounds;
		console.log(r);
		checkInput(t, r);
	}
	
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		return (
			<div>
				<MyNav />
				<div className="bracket-container">
					<h2>Round Robin Javascript</h2>
					<form className="rr-form" onSubmit={this.handleSubmit}>
						<div className="input-container">
							<div className="message">
								Number of teams: (2-16):
							</div>
							<div className="message-input">
								<input type="number" name="teams" id="field_get_teams" onChange={this.handleChange} />
							</div>
						</div>

						<div className="input-container">
							<div className="message">
								Rounds:
							</div>
							<div className="message-input">
								<input type="number" name="rounds" id="field_get_rounds" onChange={this.handleChange}/>
							</div>
						</div>

						<div className="rr-submit-container">
							<input className="rr-submit" type="submit" value="Submit" />
						</div>
					</form>
					<p id="field_return_input_status"></p>
					<h4 id="return-round-robin-teams"></h4>
					<p id="return-round-robin"></p>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Bracket;