/*
	validate input field and pass input to appropriate functions
*/
function checkInput() {
	var field_get_teams;
	var field_get_rounds;

  field_get_teams = document.getElementById("field_get_teams").value;
  field_get_rounds = document.getElementById("field_get_rounds").value;

  if ((isNaN(field_get_teams) || field_get_teams < 2 || field_get_teams > 16) || (isNaN(field_get_rounds))) {
    inputInvalid();
  }
  else if(field_get_teams % 2 == 0) {
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
  else if(field_get_teams % 2 != 0) {
  	if(field_get_rounds == field_get_teams) {
  		oddTeamDefaultRounds(field_get_teams);
  	}
  	else if(field_get_rounds > field_get_teams) {
  		incomplete();
  	}
  	else if(field_get_rounds < field_get_teams) {
  		incomplete();
  	}
  	else {
  		inputInvalid();
  	}
  }
  else {
  	inputInvalid();
  }
}

function incomplete() {
	document.getElementById("field_return_input_status").innerHTML = "incomplete";
	document.getElementById("return-round-robin-teams").innerHTML = "";
	document.getElementById("return-round-robin").innerHTML = "";
}

function inputInvalid() {
	document.getElementById("field_return_input_status").innerHTML = "Teams and Rounds must be a number";
	document.getElementById("return-round-robin-teams").innerHTML = "";
	document.getElementById("return-round-robin").innerHTML = "";
}

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
	}
	else {
		teamTwo[0] = -1;
		for (var teamTwoIndex = 1; teamTwoIndex < splitTeam; teamTwoIndex++) {
			teamTwo[teamTwoIndex] = teamNumber--;
		}
	}
}

function evenTeamDefaultRounds(even_teams) {
	document.getElementById("field_return_input_status").innerHTML = "You've entered an EVEN number of teams.";

	var teamOne = [];
	var teamTwo = [];
	initializeTeams(teamOne, teamTwo, even_teams, 1);

	document.getElementById("return-round-robin-teams").innerHTML = "Team One: " + teamOne + "<br />" + "Team Two: " + teamTwo;
	// concatentate results of round-robin
	document.getElementById("return-round-robin").innerHTML = "";

	var teamSize = even_teams/2;
	var totalRounds = even_teams-1;
	for (var i = 0; i < totalRounds; i++) {
		document.getElementById("return-round-robin").innerHTML += "Round " + i + "<br />"; 
		for (var position = 0; position < teamSize; position++) {
			document.getElementById("return-round-robin").innerHTML += teamOne[position] + " - " + teamTwo[position] + "<br />";
		}
		document.getElementById("return-round-robin").innerHTML += "<br />";
		shiftArray(teamOne, teamTwo);
	}
}

function oddTeamDefaultRounds(odd_teams) {
	document.getElementById("field_return_input_status").innerHTML = "You've entered an ODD number of teams.";

	var teamOne = [];
	var teamTwo = [];
	initializeTeams(teamOne, teamTwo, odd_teams, -1);

	document.getElementById("return-round-robin-teams").innerHTML = "Team One: " + teamOne + "<br />" + "Team Two: " + teamTwo;
	document.getElementById("return-round-robin").innerHTML = "";

	var teamSize = odd_teams/2;
	var totalRounds = odd_teams;
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
	will need another function for variations of Round-Robin scheduling.
*/
function shiftArray(teamOne, teamTwo) {
	teamTwo.push(teamOne.pop());
	teamOne.splice(1, 0, teamTwo.shift());
}

function evenTeamExtraRounds(even_teams, extra_rounds) {
	incomplete();
}

function evenTeamLessRounds(even_teams, less_rounds) {
	incomplete();
}