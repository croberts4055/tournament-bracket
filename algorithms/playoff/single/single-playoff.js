/*
	validate user input
*/
function checkInput() {
	var field_get_teams;

  field_get_teams = document.getElementById("field_get_teams").value;
  document.getElementById("return-playoff-teams").innerHTML = "";
  document.getElementById("return-playoff").innerHTML = "";

  /* team size must be either 4/8/16/32/64, currently working on team size of 4-64 */
  if (field_get_teams == 4 || field_get_teams == 8 || field_get_teams == 16 || field_get_teams == 32 || field_get_teams == 64) {
    initializeTeams(field_get_teams);
  }
  else {
  	inputInvalid();
  }
}

/*
	notify user their input is invalid
*/
function inputInvalid() {
	document.getElementById("field_return_input_status").innerHTML = "Teams must be either 4, 8, 16, 32, or 64";
	document.getElementById("return-playoff-teams").innerHTML = "";
	document.getElementById("return-playoff").innerHTML = "";
}

/*
	initializes all the teams with their name as integers. all teams are an object with their team name (integers) and a bool flag for denoting their win/loss status
*/
function initializeTeams(teams) {
	document.getElementById("field_return_input_status").innerHTML = "You've entered " + teams + " teams.";

	var teamObject = {
		team_name: -1,
		displayTeam: null,
	};
	// create an array of teams and initalizing all bool flags to true to denote no one has lost yet. if bool is false, this mean the team has lost
	var playoffTeams = [];
	for (var i = 0; i < teams; i++) {
		var teamObject = {team_name: i, displayTeam: true};
		playoffTeams.push(teamObject);
	}
	playoff(playoffTeams); // start off the algorithm to display results of single elimination
}

function playoff(playoffTeams) {
	var rounds = 0;
	var roundNumber = 1;
	/* currently hardcoded the rounds but as powers of two increases, rounds will increment by one. (current working on single elimination with odd number of teams, 4-64) */
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
		randomizeWinOrLose(playoffTeams); // call function to currently randomize the win/lose status of teams for displaying
		document.getElementById("return-playoff-teams").innerHTML += "Round " + roundNumber + ":" + "<br />";
		displayTeams(playoffTeams);
		roundNumber++;
	}
}

/*
	function for generating either a lose/win for every two teams.
*/
function randomizeWinOrLose(playoffTeams) {
	for (var i = 0; i < playoffTeams.length; i+=2) {
		var random_team = Math.random() >= 0.5; // returns 0 or 1, used for highlighting either the first or second index as false
		playoffTeams[random_team+i].displayTeam = false;
	}
	for (var j = 0; j < playoffTeams.length; j++) {
		if(playoffTeams[j].displayTeam == false) {
			playoffTeams.splice(j, 1);
			j--; // decrement index since we deleted an element off the index. must check the current index else it will skip current index by two
		}
	}
}

/*
	simple function to return the winning teams based on bool flag of true
*/
function displayTeams(playoffTeams) {
	for (var i = 0; i < playoffTeams.length; i++) {
		if(playoffTeams[i].displayTeam == true) {
			document.getElementById("return-playoff-teams").innerHTML += "Team " + playoffTeams[i].team_name + " Wins!" + "<br />";
		}
	}
	document.getElementById("return-playoff-teams").innerHTML += "<br />";	
}