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
  else if(field_get_teams % 2 == 0) { // even number of teams
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
  else if(field_get_teams % 2 != 0) { // odd number of teams
  	if(field_get_rounds == field_get_teams) {
  		oddTeamDefaultRounds(field_get_teams);
  	}
  	else if(field_get_rounds > field_get_teams) {
  		oddTeamExtraRounds(field_get_teams, field_get_rounds);
  	}
  	else if(field_get_rounds < field_get_teams) {
  		oddTeamLessRounds(field_get_teams, field_get_rounds);
  	}
  	else {
  		inputInvalid();
  	}
  }
  else {
  	inputInvalid();
  }
}

/* function to return invalid values inputted by user */
function inputInvalid() {
	document.getElementById("field_return_input_status").innerHTML = "Teams and Rounds must be a number";
	document.getElementById("return-round-robin-teams").innerHTML = "";
	document.getElementById("return-round-robin").innerHTML = "";
}

/* initializes all team based on odd or even teams, uses integers as their team name */
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

			document.getElementById("field_return_input_status").innerHTML = "You've entered an EVEN number of teams.";
	}
	else { // include dummy team in first position
		teamTwo[0] = -1;
		for (var teamTwoIndex = 1; teamTwoIndex < splitTeam; teamTwoIndex++) {
			teamTwo[teamTwoIndex] = teamNumber--;
		}
		document.getElementById("field_return_input_status").innerHTML = "You've entered an ODD number of teams.";
	}

	document.getElementById("return-round-robin-teams").innerHTML = "Team One: " + teamOne + "<br />" + "Team Two: " + teamTwo;
}

function seedTeams(totalTeams){
    // seeding teams with default seeding/no qualifications   
    var teams = [];
    for(let i=0;i<totalTeams;i++){
        teams.push(
            {
                id : i,
                runningSum: 0,
                opponent: 0
            }
        )
    }
   
    

    
}

// if(totalTeams >= 9 && totalTeams <= 32){
//     rounds = 5;
// }
// else if(totalTeams >= 33 && totalTeams <= 64){
//     rounds = 6;
// }
// else if(totalTeams >= 65 && totalTeams <= 128){
//     rounds = 7;
// }