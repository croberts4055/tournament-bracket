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

	var index = 0;
	var leftChildIndex = 0;
	var rightChildIndex = 0;

	var roundOneArray = [];
	for (index; index < 3; index++) {
		leftChildIndex = ((2*index)+1);
		rightChildIndex = ((2*index)+2);
		if(leftChildIndex >= arraySize) {
			leftChildIndex = null;
			rightChildIndex = null;
		}
		var teamObject = {
			name: null,
			status: "WAIT",
			team1: leftChildIndex,
			team2: rightChildIndex,
		}
		roundOneArray.push(teamObject);
	}

	var roundOneInitialNames = [100, 103, 101, 102];
	for (var j = 0; j < roundOneInitialNames.length; j++) {
		leftChildIndex = ((2*index)+1);
		rightChildIndex = ((2*index)+2);
		if(leftChildIndex >= arraySize) {
			leftChildIndex = null;
			rightChildIndex = null;
		}
		var teamObject = {
			name: roundOneInitialNames[j],
			status: "IN PROGRESS",
			team1: leftChildIndex,
			team2: rightChildIndex,
		}
		roundOneArray.push(teamObject);
		index++;
	}

	showRoundOne(roundOneArray, rounds);
}

function showRoundOne(array, rounds) {
	document.getElementById("return_round_one").innerHTML = "";
	var index = 0;
	for (var r = 0; r <= rounds; r++) {
		for (var p = 0; p < Math.pow(2, r); p++) {
			if(array[index].status == "IN PROGRESS") {
				document.getElementById("return_round_one").innerHTML += "[" + index + "] Team: " + array[index].name + " (" + array[index].status + ")" + " [" + array[index].team1 + "] [" + array[index].team2 + "]<br />";
			}
			else if(array[index].status == "WAIT") {
				document.getElementById("return_round_one").innerHTML += "[" + index + "] (" + array[index].status + ")" + " [" + array[index].team1 + "] [" + array[index].team2 + "]<br />";
			}
			index++;
		}
		document.getElementById("return_round_one").innerHTML += "---------------------------<br />";
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