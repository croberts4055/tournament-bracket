function checkInput() {
	var field_get_teams;
  field_get_teams = document.getElementById("field_get_teams").value;
  if((isNaN(field_get_teams) || field_get_teams < 4 || field_get_teams > 64)) {
  	inputInvalid();
  }
  else {
	document.getElementById("return_round_one").innerHTML = "sdjsdksjdhskjhskjdhkshdksdjks";

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
	var roundOne = createRoundOne(teamSize);
}

function createRoundOne(teamSize) {
	var rounds = 0;
	if(teamSize <= 4) {
		rounds = 2;
	}
	else if(teamSize <= 8) {
		rounds = 3;
	}
	else if(teamSize <= 16) {
		rounds = 4;
	}
	else if(teamSize <= 32) {
		rounds = 5;
	}
	else if(teamSize <= 64) {
		rounds = 6;
	}

	var arraySize = 0;
	for (var i = 0; i <= rounds; i++) {
		arraySize += Math.pow(2, i);
	}

	var roundOneArray = [];
	var index = 0;
	for (index; index < 3; index++) {
		var teamObject = {
			name: index,
			status: "WAIT",
			team1: ((2*index)+1),
			team2: ((2*index)+2),
		}
		roundOneArray.push(teamObject);
	}

	var roundOneInitialNames = [100, 103, 101, 102];
	for (var j = 0; j < roundOneInitialNames.length; j++) {
		var teamObject = {
			name: roundOneInitialNames[j],
			status: "IN PROGRESS",
			team1: ((2*index)+1),
			team2: ((2*index)+2),
		}
		roundOneArray.push(teamObject);
	}

	showRoundOne(roundOneArray, rounds);
}

function showRoundOne(array, rounds) {
	document.getElementById("return_round_one").innerHTML = "";
	var position = 0;
	for (var r = 0; r <= rounds; r++) {
		for (var p = 0; p < Math.pow(2, round); p++) {
			document.getElementById("return_round_one").innerHTML += array[position].name + "<br />";
			position++;
		}
		document.getElementById("return_round_one").innerHTML = "sdjsdksjdhskjhskjdhkshdksdjks";
	}
}

// function findIndexInArray(array, target) {
// 	for (var i = 0; i < array.length; i++) {
// 		if(array[i].hasOwnProperty('name')) {
// 			if(array[i].name == target) {
// 				return i;
// 			}
// 		}
// 	}
// 	return -1;
// }