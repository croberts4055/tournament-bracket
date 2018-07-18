var teamObject = {
	team_name: null,
	win: false,
};

function checkInput() {
	var field_get_teams;
  field_get_teams = document.getElementById("field_get_teams").value;
  if((isNaN(field_get_teams) || field_get_teams < 4 || field_get_teams > 64)) {
  	inputInvalid();
  }
  else {
  	document.getElementById("return_input_status").innerHTML = "Input OK" + "<br />";
  	start(field_get_teams);
  }
}

function inputInvalid() {
	document.getElementById("return_input_status").innerHTML = "Teams must be between 4 - 64";
	document.getElementById("return_round_one").innerHTML = "";
	document.getElementById("return_winners_bracket").innerHTML = "";
	document.getElementById("return_losers_bracket").innerHTML = "";

}

function start(teamSize) {
	initialize(teamSize);
}

function initialize(teamSize) {
	startSingleElimination(teamSize);
}

function startSingleElimination(teamSize) {
	var singleEliminationRounds = 0;
	if(teamSize <= 4) {
		singleEliminationRounds = 2;
	}
	else if(teamSize <= 8) {
		singleEliminationRounds = 3;
	}
	else if(teamSize <= 16) {
		singleEliminationRounds = 4;
	}
	else if(teamSize <= 32) {
		singleEliminationRounds = 5;
	}
	else {
		singleEliminationRounds = 6;
	}

	var singleEliminationArraySize = 0;
	for (var i = 0; i <= singleEliminationRounds; i++) {
		singleEliminationArraySize += Math.pow(2, i);
	}

	var singleEliminationArray = [];
	for (var j = 0; j < singleEliminationArraySize; j++) {
		if(j == 0) {
			singleEliminationArray[j] = "winners bracket winner";
		}
		else {
			singleEliminationArray[j] = "X";
		}
	}

	fillSingleElinationArray(singleEliminationArray, teamSize, singleEliminationRounds);
}

function fillSingleElinationArray(array, teamSize, rounds) {
	array[1] = 100;
	array[2] = 101;

	var currentTeamNumber = 101;
	var nextTeamNumber = 102;
	var teamsAdded = 2;
	var direction = 1;
	while(teamsAdded < teamSize) {
		var indexToMove = array.indexOf(currentTeamNumber);
		var x = "X";
		if(direction == 1) { // move right along the array
			array[indexToMove] = "waiting for index " + ((2*indexToMove)+1) + " and " + ((2*indexToMove)+2);
			array[(2*indexToMove)+1] = currentTeamNumber;
			array[(2*indexToMove)+2] = nextTeamNumber;
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
			array[indexToMove] = "waiting for index " + ((2*indexToMove)+1) + " and " + ((2*indexToMove)+2);
			array[(2*indexToMove)+1] = currentTeamNumber;
			array[(2*indexToMove)+2] = nextTeamNumber;
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
	
	showTeams(array, rounds);
}

function showTeams(array, rounds) {
	document.getElementById("return_winners_bracket").innerHTML = "";
	var power = 0;
	var index = 0;
	var lastPosition = 0;
	for (var i = 0; i <= rounds; i++) {
		if(i == rounds - rounds) {
			document.getElementById("return_winners_bracket").innerHTML += "<h5>Winners Bracket Final</h5>";
		}
		else if(i == (rounds-rounds+1)) {
			document.getElementById("return_winners_bracket").innerHTML += "<h5>Winners Bracket Semifinal</h5>";
		}
		else {
			document.getElementById("return_winners_bracket").innerHTML += "<h5>Winners Bracket Round " + ((rounds+1)-i) + "</h5>";
		}
		for (var j = 0; j < Math.pow(2, power); j++) {
			if(array[lastPosition] != "X") {
				document.getElementById("return_winners_bracket").innerHTML += index + ": " + array[lastPosition] + " | ";
			}
			lastPosition++;
			index++;
		}
		document.getElementById("return_winners_bracket").innerHTML += "<br />";
		power++;
	}
}