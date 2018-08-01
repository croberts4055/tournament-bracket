import React, { Component } from 'react';

class TeamInfo extends Component {
	render() {
		return(
			<div className="team-info-name-points">
				<div className="team-info-name">
					{this.props.name}
				</div>
				<div className="team-info-points">
					{this.props.points}
				</div>
			</div>
		);
	}
};

export default TeamInfo;