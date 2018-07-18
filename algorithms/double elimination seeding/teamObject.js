// this js file is for testing purposes

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
	var winner = {
		team_name: "winner",
		win: "TBD",
	}
	array[0] = winner;

	var filler1 = {
		team_name: "waiting",
		win: "TBD"
	}
	array[1] = filler1;

	var filler2 = {
		team_name: "waiting",
		win: "TBD"
	}
	array[2] = filler2;

	var obj1 = {
		team_name: 100,
		win: true
	}
	array[3] = obj1;

	var obj2 = {
		team_name: 103,
		win: false
	}
	array[4] = obj2;

	var obj3 = {
		team_name: 101,
		win: true
	}
	array[5] = obj3;

	var obj4 = {
		team_name: 102,
		win: false
	}
	array[6] = obj4;

	var currentTeamNumber = 103;
	var nextTeamNumber = 104;
	var teamsAdded = 4;
	var direction = 1;
	while(teamsAdded < teamSize) {
		var findObj = {
			team_name: currentTeamNumber,
			win: false,
		};
		var indexToMove = findIndexInArray(array, currentTeamNumber);
		if(direction == 1) { // move right along the array
			var placeHolderObj = {
				team_name: "waiting for " + currentTeamNumber + " and " + nextTeamNumber,
				win: "TBD",
			}
			array[indexToMove] = placeHolderObj;
			var temp1 = {
				team_name: currentTeamNumber,
				win: true
			}
			array[(2*indexToMove)+1] = temp1;
			var temp2 = {
				team_name: nextTeamNumber,
				win: false
			}
			array[(2*indexToMove)+2] = temp2;
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
			var placeHolderObj = {
				team_name: "waiting for " + currentTeamNumber + " and " + nextTeamNumber,
				win: "TBD",
			}
			array[indexToMove] = placeHolderObj;
			var temp1 = {
				team_name: currentTeamNumber,
				win: true
			}
			array[(2*indexToMove)+1] = temp1;
			var temp2 = {
				team_name: nextTeamNumber,
				win: false
			}
			array[(2*indexToMove)+2] = temp2;
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
			if(array[lastPosition].team_name != null) {
				document.getElementById("return_winners_bracket").innerHTML += array[lastPosition].team_name + " ||| ";
			}
			else {
				document.getElementById("return_winners_bracket").innerHTML += "none | ";
			}
			lastPosition++;
			index++;
		}
		document.getElementById("return_winners_bracket").innerHTML += "<br />";
		power++;
	}
}

function findIndexInArray(array, target) {
	for (var i = 0; i < array.length; i++) {
		if(array[i].hasOwnProperty('team_name')) {
			if(array[i].team_name == target) {
				return i;
			}
		}
	}
	return -1;
}