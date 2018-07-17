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
  	var team_size = field_get_teams;
  	document.getElementById("return_input_status").innerHTML = "Input OK" + "<br />";
  	document.getElementById("return_team_size").innerHTML = "You've entered " + team_size + " teams, ";
  	start(team_size);
  }
}

/*
	notify user their input is invalid
*/
function inputInvalid() {
	document.getElementById("return_input_status").innerHTML = "Teams must be between 2 - 64";
	document.getElementById("return_team_size").innerHTML = "";
	document.getElementById("return_game").innerHTML = "";
}

function start(teamSize) {
	
}