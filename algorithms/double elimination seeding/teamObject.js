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

// notify user input is invalid
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
	// roundOne should contain the roundOneArray that has the algorithm to separate the teams and the format of how they play one another
	var roundOne = createRoundOne(teamSize);
}

// this function purpose is to create round one, where all participants play another team based on their seed. After this point, everyone will split into two groups, the winners bracket and the losers bracket
function createRoundOne(teamSize) {
	// after going through multiple examples of my own, I am implementing this tournament based on rounds. the numbers of round is crucial because it is used to determine the size of the array.
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

	// create an array such that it imitates a tree
	var arraySize = 0;
	for (var i = 0; i <= rounds; i++) {
		arraySize += Math.pow(2, i);
	}

	var index = 0;
	var leftChildIndex = 0;
	var rightChildIndex = 0;

	// with at least four teams, the tree would require at least an array with size 7, the first three are mock data and the next four are the initial teams
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

	// must be at least 4 teams to participate in double elimination
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

	// if the there are more than four teams, fill up the rest of the array with empty objects
	for (index; index < arraySize; index++) {
		var emptyObject = {
			name: null,
			status: "EMPTY",
			team1: null,
			team2: null,
		}
		roundOneArray.push(emptyObject);
	}

	// below is the logic to create single elimination, for example, how to add a new team based on seeding
	var teamsAdded = 4;
	var direction = 1;
	var currentTeamName = 103;
	var nextTeamName = 104;
	while(teamsAdded < teamSize) {
		var indexToMove = findIndexInArray(roundOneArray, currentTeamName);
		leftChildIndex = ((2*indexToMove)+1);
		rightChildIndex = ((2*indexToMove)+2);
		if(leftChildIndex >= arraySize) {
			leftChildIndex = null;
			rightChildIndex = null;
		}
		var waitObject = {
			name: null,
			status: "WAIT",
			team1: leftChildIndex,
			team2: rightChildIndex,
		}
		roundOneArray[indexToMove] = waitObject;
		if(direction == 1) {
			var movedTeam = {
				name: currentTeamName,
				status: "IN PROGRESS",
				team1: (2*leftChildIndex)+1,
				team2: (2*leftChildIndex)+2,
			}
			roundOneArray[leftChildIndex] = movedTeam;
			var nextTeam = {
				name: nextTeamName,
				status: "IN PROGRESS",
				team1: (2*rightChildIndex)+1,
				team2: (2*rightChildIndex)+2,
			}
			roundOneArray[rightChildIndex] = nextTeam;
			// this if condition is important! it makes sure that when we appending the next team to the correct location
			if(currentTeamName < nextTeamName) {
				direction = -1;
				currentTeamName--;
			}
			else {
				currentTeamName++;
			}
		}
		else if(direction == -1) {
			var movedTeam = {
				name: currentTeamName,
				status: "IN PROGRESS",
				team1: (2*leftChildIndex)+1,
				team2: (2*leftChildIndex)+2,
			}
			roundOneArray[leftChildIndex] = movedTeam;
			var nextTeam = {
				name: nextTeamName,
				status: "IN PROGRESS",
				team1: (2*rightChildIndex)+1,
				team2: (2*rightChildIndex)+2,
			}
			roundOneArray[rightChildIndex] = nextTeam;
			// important!!! this condition will allow us to ensure that once we hit the first team, the location to append the next team will reset!
			if(currentTeamName == 100) {
				direction = 1;
				currentTeamName = nextTeamName;
			}
			else {
				currentTeamName--;
			}
		}
		nextTeamName++;
		teamsAdded++;
	}

	showRoundOne(roundOneArray, rounds);

	return roundOneArray;
}

function showRoundOne(array, rounds) {
	document.getElementById("return_round_one").innerHTML = "";
	var index = 0;
	for (var r = 0; r <= rounds; r++) {
		for (var p = 0; p < Math.pow(2, r); p++) {
			if(array[index].status == "IN PROGRESS") {
				document.getElementById("return_round_one").innerHTML += "[" + index + "] Team: " + array[index].name + " (" + array[index].status + ")<br />";
			}
			else if(array[index].status == "WAIT") {
				document.getElementById("return_round_one").innerHTML += "[" + index + "] (" + array[index].status + ")" + " [" + array[index].team1 + "] [" + array[index].team2 + "]<br />";
			}
			else if(array[index].status == "EMPTY") {
				document.getElementById("return_round_one").innerHTML += "[" + index + "]<br />";
			}
			index++;
		}
		document.getElementById("return_round_one").innerHTML += "-------------------------------------------------<br />";
	}
}

// since I created this algorithm based with an array like structure and each element in the array is an object, we need a function to find a specific property within each element. This function will return the index of the target element, otherwise, it will return a -1
function findIndexInArray(array, target) {
	for (var i = 0; i < array.length; i++) {
		if(array[i].hasOwnProperty('name')) {
			if(array[i].name == target) {
				return i;
			}
		}
	}
	return -1;
}