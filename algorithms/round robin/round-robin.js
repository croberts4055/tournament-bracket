/*
	validate input field and pass input to appropriate functions
*/
function checkInput() {
	var field_get_teams;
	var field_get_rounds;

  field_get_teams = document.getElementById("field_get_teams").value;
  field_get_rounds = document.getElementById("field_get_rounds").value;

  document.getElementById("field_return_input_status").innerHTML = "";

  if ((isNaN(field_get_teams) || field_get_teams < 2 || field_get_teams > 16) || (isNaN(field_get_rounds))) {
    inputInvalid();
  }
  else if(field_get_teams % 2 == 0) { // even number of teams
  	if(field_get_rounds == field_get_teams-1) {
  		evenTeamDefaultRounds(field_get_teams);
  	}
  	else if(field_get_rounds > field_get_teams-1) {
  		evenTeamExtraRounds(field_get_teams, field_get_rounds);
  	}
  	else if(field_get_rounds < field_get_teams-1) {
  		evenTeamLessRounds(field_get_teams, field_get_rounds);
  	}
  	else {
  		inputInvalid();
  	}
  }
  else if(field_get_teams % 2 != 0) { // odd number of teams
  	if(field_get_rounds == field_get_teams) {
  		oddTeamDefaultRounds(field_get_teams);
  	}
  	else if(field_get_rounds > field_get_teams) {
  		oddTeamExtraRounds(field_get_teams, field_get_rounds);
  	}
  	else if(field_get_rounds < field_get_teams) {
  		oddTeamLessRounds(field_get_teams, field_get_rounds);
  	}
  	else {
  		inputInvalid();
  	}
  }
  else {
  	inputInvalid();
  }
}

/* function to return invalid values inputted by user */
function inputInvalid() {
	document.getElementById("field_return_input_status").innerHTML = "Teams and Rounds must be a number";
	document.getElementById("return-round-robin-teams").innerHTML = "";
	document.getElementById("return-round-robin").innerHTML = "";
}

/* initializes all team based on odd or even teams, uses integers as their team name */
function initializeTeams(teamOne, teamTwo, teamCount, evenOrOdd) {
	var splitTeam = teamCount/2; // define the size of each team
	var teamNumber = 0; // assign each team a number starting from 0
	for (var teamIndex = 0; teamIndex < splitTeam; teamIndex++) {
		teamOne[teamIndex] = teamNumber++;
	}
	teamNumber = teamCount-1; // second team must start from the end
	// if evenOrOdd flag is 1, don't include dummy team
	if(evenOrOdd == 1) {
			for (var teamTwoIndex = 0; teamTwoIndex < splitTeam; teamTwoIndex++) {
				teamTwo[teamTwoIndex] = teamNumber--;
			}

			document.getElementById("field_return_input_status").innerHTML = "You've entered an EVEN number of teams.";
	}
	else { // include dummy team in first position
		teamTwo[0] = -1;
		for (var teamTwoIndex = 1; teamTwoIndex < splitTeam; teamTwoIndex++) {
			teamTwo[teamTwoIndex] = teamNumber--;
		}
		document.getElementById("field_return_input_status").innerHTML = "You've entered an ODD number of teams.";
	}

	document.getElementById("return-round-robin-teams").innerHTML = "Team One: " + teamOne + "<br />" + "Team Two: " + teamTwo;
}

/* displays the results of RR for an even number of team with n-1 rounds */
function evenTeamDefaultRounds(even_teams) {
	var teamOne = [];
	var teamTwo = [];
	initializeTeams(teamOne, teamTwo, even_teams, 1);

	// concatentate results of round-robin
	document.getElementById("return-round-robin").innerHTML = "";

	var teamSize = even_teams/2;
	var totalRounds = even_teams-1; // for even teams and default rounds, rounds will always be one less than team size
	for (var i = 0; i < totalRounds; i++) {
		document.getElementById("return-round-robin").innerHTML += "Round " + i + "<br />"; 
		for (var position = 0; position < teamSize; position++) {
			document.getElementById("return-round-robin").innerHTML += teamOne[position] + " - " + teamTwo[position] + "<br />";
		}
		document.getElementById("return-round-robin").innerHTML += "<br />";
		shiftArray(teamOne, teamTwo);
	}
}

/* displays results of RR for odd number of teams and n rounds */
function oddTeamDefaultRounds(odd_teams) {
	var teamOne = [];
	var teamTwo = [];
	initializeTeams(teamOne, teamTwo, odd_teams, -1);

	document.getElementById("return-round-robin").innerHTML = "";

	var teamSize = odd_teams/2;
	var totalRounds = odd_teams; // for odd teams and default rounds, rounds will always be same as team size
	for (var i = 0; i < totalRounds; i++) {
		document.getElementById("return-round-robin").innerHTML += "Round " + i + "<br />"; 
		for (var position = 0; position < teamSize; position++) {
			if(teamOne[position] == -1) {
				document.getElementById("return-round-robin").innerHTML += " BYE" + " - " + teamTwo[position] + "<br />";
			}
			else if(teamTwo[position] == -1) {
				document.getElementById("return-round-robin").innerHTML += teamOne[position] + " - " + "BYE" + "<br />";
			}
			else {
				document.getElementById("return-round-robin").innerHTML += teamOne[position] + " - " + teamTwo[position] + "<br />";
			}
		}
		document.getElementById("return-round-robin").innerHTML += "<br />";
		shiftArray(teamOne, teamTwo);
	}
}

/*
	shifting the team number to ensure each team plays each team ONCE.
*/
function shiftArray(teamOne, teamTwo) {
	teamTwo.push(teamOne.pop()); // put last element in first array to end of second array
	teamOne.splice(1, 0, teamTwo.shift()); // put first element of second array to second position of first array
}

/* returns result for an even number of team but with EXTRA rounds */
function evenTeamExtraRounds(even_teams, extra_rounds) {
	var teamOne = [];
	var teamTwo = [];
	initializeTeams(teamOne, teamTwo, even_teams, 1);

	document.getElementById("return-round-robin").innerHTML = "";

	var teamSize = even_teams/2;
	var totalRounds = extra_rounds; // set number of rounds user input, same for less/extra rounds in the following functions
	for (var i = 0; i < totalRounds; i++) {
		document.getElementById("return-round-robin").innerHTML += "Round " + i + "<br />"; 
		for (var position = 0; position < teamSize; position++) {
			document.getElementById("return-round-robin").innerHTML += teamOne[position] + " - " + teamTwo[position] + "<br />";
		}
		document.getElementById("return-round-robin").innerHTML += "<br />";
		shiftArray(teamOne, teamTwo);
	}
}

/* returns result for an even number of team but with LESS rounds */
function evenTeamLessRounds(even_teams, less_rounds) {
	var teamOne = [];
	var teamTwo = [];
	initializeTeams(teamOne, teamTwo, even_teams, 1);

	document.getElementById("return-round-robin").innerHTML = "";

	var teamSize = even_teams/2;
	var totalRounds = less_rounds;
	for (var i = 0; i < totalRounds; i++) {
		document.getElementById("return-round-robin").innerHTML += "Round " + i + "<br />"; 
		for (var position = 0; position < teamSize; position++) {
			document.getElementById("return-round-robin").innerHTML += teamOne[position] + " - " + teamTwo[position] + "<br />";
		}
		document.getElementById("return-round-robin").innerHTML += "<br />";
		shiftArray(teamOne, teamTwo);
	}
}

/* returns result for an odd number of team but with EXTRA rounds */
function oddTeamExtraRounds(odd_teams, extra_rounds) {
	var teamOne = [];
	var teamTwo = [];
	initializeTeams(teamOne, teamTwo, odd_teams, -1);

	document.getElementById("return-round-robin").innerHTML = "";

	var teamSize = odd_teams/2;
	var totalRounds = extra_rounds;
	for (var i = 0; i < totalRounds; i++) {
		document.getElementById("return-round-robin").innerHTML += "Round " + i + "<br />"; 
		for (var position = 0; position < teamSize; position++) {
			if(teamOne[position] == -1) {
				document.getElementById("return-round-robin").innerHTML += " BYE" + " - " + teamTwo[position] + "<br />";
			}
			else if(teamTwo[position] == -1) {
				document.getElementById("return-round-robin").innerHTML += teamOne[position] + " - " + "BYE" + "<br />";
			}
			else {
				document.getElementById("return-round-robin").innerHTML += teamOne[position] + " - " + teamTwo[position] + "<br />";
			}
		}
		document.getElementById("return-round-robin").innerHTML += "<br />";
		shiftArray(teamOne, teamTwo);
	}
}

/* returns result for an even number of team but with LESS rounds */
function oddTeamLessRounds(odd_teams, less_rounds) {
	var teamOne = [];
	var teamTwo = [];
	initializeTeams(teamOne, teamTwo, odd_teams, -1);

	document.getElementById("return-round-robin").innerHTML = "";

	var teamSize = odd_teams/2;
	var totalRounds = less_rounds;
	for (var i = 0; i < totalRounds; i++) {
		document.getElementById("return-round-robin").innerHTML += "Round " + i + "<br />"; 
		for (var position = 0; position < teamSize; position++) {
			if(teamOne[position] == -1) {
				document.getElementById("return-round-robin").innerHTML += " BYE" + " - " + teamTwo[position] + "<br />";
			}
			else if(teamTwo[position] == -1) {
				document.getElementById("return-round-robin").innerHTML += teamOne[position] + " - " + "BYE" + "<br />";
			}
			else {
				document.getElementById("return-round-robin").innerHTML += teamOne[position] + " - " + teamTwo[position] + "<br />";
			}
		}
		document.getElementById("return-round-robin").innerHTML += "<br />";
		shiftArray(teamOne, teamTwo);
	}
}