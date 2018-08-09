/*
	checks input for correct values
*/
function checkInput() {
	var field_get_teams;
  field_get_teams = document.getElementById("field_get_teams").value;
  if((isNaN(field_get_teams) || field_get_teams < 2 || field_get_teams > 64)) {
  	inputInvalid();
  }
  else {
  	team_size = field_get_teams;
  	// document.getElementById("return_input_status").innerHTML = "Input OK" + "<br />";
  	// document.getElementById("return-team-size").innerHTML = "You've entered " + team_size + " teams, ";
  	start();
  }
}

/*
	notify user their input is invalid
*/
function inputInvalid() {
	document.getElementById("return_input_status").innerHTML = "Teams must be between 2 - 64";
	document.getElementById("return-team-size").innerHTML = "";
	document.getElementById("return-game").innerHTML = "";
}

/*
	start the single seed elimination tournament
*/
function start() {
	initialize();
}

var single_bracket_array = [];
var rounds = 0;

/*
	initalize teams based on input
*/
function initialize() {
	// determine number of rounds
	if(team_size == 2) {
		rounds = 1;
	}
	else if(team_size <= 4) {
		rounds = 2;
	}
	else if(team_size <= 8) {
		rounds = 3;
	}
	else if(team_size <= 16) {
		rounds = 4;
	}
	else if(team_size <= 32) {
		rounds = 5;
	}
	else {
		rounds = 6;
	}
	// document.getElementById("return-team-size").innerHTML += "there will be " + rounds + " total rounds."

	// determine array size
	var arraySize = 0;
	// if there is only one round, there is only two teams, else
	if(rounds == 1) {
		arraySize = 3;
	}
	else {
		for (var i = 0; i <= rounds; i++) {
			arraySize += Math.pow(2, i);
		}
	}
	// document.getElementById("return-array-size").innerHTML = "array size = " + arraySize;

	// fill array with mock data, with index 0 being the winner
	for (var j = 0; j < arraySize; j++) {
		if(j == 0) {
			single_bracket_array[j] = "winner";
		}
		else {
			single_bracket_array[j] = "X";
		}
	}

	fillArray(team_size);	
}

function fillArray(teamSize) {
	single_bracket_array[1] = 100;
	single_bracket_array[2] = 101;

	var currentTeamNumber = 101;
	var nextTeamNumber = 102;
	var teamsAdded = 2;
	var direction = 1;
	while(teamsAdded < teamSize) {
		var indexToMove = single_bracket_array.indexOf(currentTeamNumber);
		var x = "X"; // markup 
		if(direction == 1) { // move right along the array
			single_bracket_array[indexToMove] = "waiting for index " + ((2*indexToMove)+1) + " and " + ((2*indexToMove)+2);
			single_bracket_array[(2*indexToMove)+1] = currentTeamNumber;
			single_bracket_array[(2*indexToMove)+2] = nextTeamNumber;
			// only switch directions if currentTeamNumber is greater than nextTeamNumber
			if(currentTeamNumber < nextTeamNumber) {
				direction = -1;
				currentTeamNumber--;
			}
			else {
				currentTeamNumber++;
			}
		}
		else if(direction == -1) { // -1 means to move left along the array
			single_bracket_array[indexToMove] = "waiting for index " + ((2*indexToMove)+1) + " and " + ((2*indexToMove)+2);			single_bracket_array[(2*indexToMove)+1] = currentTeamNumber;
			single_bracket_array[(2*indexToMove)+2] = nextTeamNumber;
			// switch directions if currentTeamNumber is back to top team
			if(currentTeamNumber == 100) {
				direction = 1;
				currentTeamNumber = nextTeamNumber;
			}
			else {
				currentTeamNumber--;
			}
		}
		nextTeamNumber++;
		teamsAdded++;
	}

	showTeams();
}

/*
	display teams
*/
function showTeams() {
	document.getElementById("return-game").innerHTML = "";
	var power = 0;
	var index = 0;
	var lastPosition = 0;
	for (var i = 0; i <= rounds; i++) {
		document.getElementById("return-game").innerHTML += "<h5>ROUND " + ((rounds+1)-i) + "</h5>";
		for (var j = 0; j < Math.pow(2, power); j++) {
			if(single_bracket_array[lastPosition] != "X") {
				document.getElementById("return-game").innerHTML += index + ": " + single_bracket_array[lastPosition] + " | ";
			}
			else {
				
			}
			lastPosition++;
			index++;
		}
		document.getElementById("return-game").innerHTML += "<br />";
		power++;
	}
}