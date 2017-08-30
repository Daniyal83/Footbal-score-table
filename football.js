var teams = ["Team 1", "Team 2", "Team 3", "Team 4"];
var inputs = $("li input");

function gameScore() {
	    var button = document.querySelector("button");
	    var team1Score = 0;
	    var team2Score = 0;
	    button.addEventListener("click", function() {
        var firstScore = parseInt(document.getElementById("first").value);
        var secondScore = parseInt(document.getElementById("second").value);
            
        if(firstScore > secondScore) {
        	alert($("#sel1 option:selected").text()+" won!");
            
            for(var i = 0; i < 4; i++) {
        if($("#sel1 option:selected").text() === teams[i]) {
        inputs[i].value = team1Score + 3;
        team1Score = parseInt(inputs[i].value);
             }
        }

        	//document.getElementById("team1").value = team1Score + 3;
        	//team1Score = parseInt(document.getElementById("team1").value);
                            
        } else if(firstScore < secondScore) {
        	alert($("#sel2 option:selected").text()+" won!");
        	document.getElementById("team2").value = team2Score + 3;
        	team2Score = parseInt(document.getElementById("team2").value);
                
            
        } else {
        	alert("Draw!");
        	document.getElementById("team1").value = team1Score + 1;
        	document.getElementById("team2").value = team2Score + 1;
        	team1Score = parseInt(document.getElementById("team1").value);
        	team2Score = parseInt(document.getElementById("team2").value);
        }
         if(team1Score>team2Score) {
          $("#list li#two").before($("#list li#one"));
        }
    else if(team2Score>team1Score) {
          $("#list li#one").before($("#list li#two"));
        }
    });   

}
gameScore();

//for(var i = 0; i < 4; i++) {
//    if($("#sel1 option:selected").text() == teams[i]) {
//        inputs[i].value = team1Score + 3;
//        team1Score = inputs[i].value;
//    }
//}




