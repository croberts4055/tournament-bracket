import React, { Component } from 'react';

import TeamInfo from './TeamInfo';

const mockTeams = [
  {name: 'Cough Drops', points: '74'},
  {name: 'Aquafina', points: '48'},
  {name: 'Vitamin C', points: '66'},
  {name: 'Tokaido', points: '64'},
  {name: 'Bleach', points: '78'},
  {name: 'Naruto Ramen', points: '84'},
  {name: 'Water', points: '99'},
  {name: 'Doge', points: '147'},
];

var tournamentStyle = {
	columnCount: '0',
};

var tableHeaders = (
	<div className="table-headers"> 
		<thead>
			<tr>
					<th>Round 1</th>
					<th>Round 2</th>
					<th>Round 3</th>
					<th>Round 4</th>
			</tr>
		</thead>
	</div>
);

class Bracket extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentRound: 0,
			totalRounds: 0,
		}
	}

	renderTeams() {
		return(
			<div className="tournament-bracket-columns" style={tournamentStyle}>
				{mockTeams.map(team =>
					<TeamInfo name={team.name}
						points={team.points} />
				)}
			</div>
		);
	}

	render() {
		return(
			<div className="bracket-container">
				<h1>Tournament Bracket Homepage</h1>
				<div className="tournament-bracket-container">
					{tableHeaders}
					{this.renderTeams()}
				</div>
				<h4>Total Teams:</h4>
					{this.props.teams}
				<h4>Total Rounds:</h4>
					{this.props.totalRounds}
			</div>
		);
	}
}

export default Bracket;