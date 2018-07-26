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
  else {
	document.getElementById("field_return_input_status").innerHTML = "Input OK";
	document.getElementById("return_swiss").innerHTML = "";
	start(field_get_teams, field_get_rounds);
  }
}

/* function to return invalid values inputted by user */
function inputInvalid() {
	document.getElementById("field_return_input_status").innerHTML = "Teams and Rounds must be a number";
	document.getElementById("return_swiss").innerHTML = "";
}

function start(teamSize, rounds) {
	var array = initializeArray(teamSize);
	var adjustedArray = adjust(array);
	play(adjustedArray, rounds);
}

function play(array, rounds) {
	// document.getElementById("return_swiss").innerHTML = "";
	var r = 0;
	var nextRound = array;
	while(r < rounds) {
		document.getElementById("return_swiss").innerHTML += "Round: " + r + "<br />";
		nextRound = randomizeWinOrLose(array);
		nextRound.sort(compareWins);
		showTeams(nextRound);
		r++;
	}
}

function randomizeWinOrLose(array) {
	for (let index = 0; index < array.length; index+=2) {
		if(array[index].name == "BYE") {
			array[index+1].wins++;
		}
		else {
			var random = Math.random() >= 0.5; // returns 0 or 1
			if(random == 0) {
				array[index].wins++;
				array[index+1].losses++
			}
			else {
				array[index].losses++;
				array[index+1].wins++
			}
		}
	}

	return array;
}

function adjust(array) {
	if((array.length%2) != 0) {
		var obj = {
			name: null,
			power: null,
			wins: null,
			losses: null,
		}
		array.unshift(obj);
	}
	return array;
}

function initializeArray(teamSize) {
	var array = [];
	for (let index = 0; index < teamSize; index++) {
		var powerLevel = randomPowerLevel();
		var obj = {
			name: index,
			power: powerLevel,
			wins: 0,
			losses: 0,
		}
		array.push(obj);
	}
	array.sort(compareIndexFound); // sorts the array from highest power level to lowest
	return array;
}

function randomPowerLevel() {
	var randomNumber = 0;
	randomNumber = Math.floor(Math.random() * 100);
	return randomNumber;
}

function showTeams(array) {
	for (let i = 0; i < array.length; i++) {
		document.getElementById("return_swiss").innerHTML += array[i].name + ": " + array[i].power;
		if(array[i].wins != null && array[i].losses != null) {
			document.getElementById("return_swiss").innerHTML += " | W: " + array[i].wins + " L: " + array[i].losses;
		}
		document.getElementById("return_swiss").innerHTML += "<br />";
	}
}

function compareIndexFound(a, b) {
	return b.power - a.power;
}

function compareWins(a, b) {
	return (b.wins - a.wins);
}