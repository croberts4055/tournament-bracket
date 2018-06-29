function checkInput() {
	var field_get_teams;

  field_get_teams = document.getElementById("field_get_teams").value;
  document.getElementById("return-playoff-teams").innerHTML = "";
  document.getElementById("return-playoff").innerHTML = "";

  if (field_get_teams == 4 || field_get_teams == 8 || field_get_teams == 16 || field_get_teams == 32 || field_get_teams == 64) {
    initializeTeams(field_get_teams);
  }
  else {
  	inputInvalid();
  }
}

function inputInvalid() {
	document.getElementById("field_return_input_status").innerHTML = "Teams must be either 4, 8, 16, 32, or 64";
	document.getElementById("return-playoff-teams").innerHTML = "";
	document.getElementById("return-playoff").innerHTML = "";
}

function initializeTeams(teams) {
	document.getElementById("field_return_input_status").innerHTML = "You've entered " + teams + " teams.";

	var teamObject = {
		team_name: -1,
		displayTeam: null,
	};
	// initialize each team with an integer
	var playoffTeams = [];
	for (var i = 0; i < teams; i++) {
		var teamObject = {team_name: i, displayTeam: true};
		playoffTeams.push(teamObject);
	}

	playoff(playoffTeams);
}

function playoff(playoffTeams) {
	var rounds = 0;
	var roundNumber = 1;
	if(playoffTeams.length == 4) {
		rounds = 2;
	}
	else if (playoffTeams.length == 8){
		rounds = 3;
	}
	else if (playoffTeams.length == 16){
		rounds = 4;
	}
	else if (playoffTeams.length == 32){
		rounds = 5;
	}
	else {
		rounds = 6;
	}
	for (var i = 0; i < rounds; i++) {
		randomizeWinOrLose(playoffTeams);
		document.getElementById("return-playoff-teams").innerHTML += "Round " + roundNumber + ":" + "<br />";
		displayTeams(playoffTeams);
		roundNumber++;
	}
}

function randomizeWinOrLose(playoffTeams) {
	for (var i = 0; i < playoffTeams.length; i+=2) {
		var random_team = Math.random() >= 0.5;
		playoffTeams[random_team+i].displayTeam = false;
	}
	for (var j = 0; j < playoffTeams.length; j++) {
		if(playoffTeams[j].displayTeam == false) {
			playoffTeams.splice(j, 1);
			j--; // decrement index since we deleted an element off the index
		}
	}
}

function displayTeams(playoffTeams) {
	for (var i = 0; i < playoffTeams.length; i++) {
		if(playoffTeams[i].displayTeam == true) {
			document.getElementById("return-playoff-teams").innerHTML += "Team " + playoffTeams[i].team_name + " Wins!" + "<br />";
		}
		//document.getElementById("return-playoff-teams").innerHTML += playoffTeams[i].team_name + " - " + playoffTeams[i].displayTeam + "<br />";
	}
	document.getElementById("return-playoff-teams").innerHTML += "<br />";	
}