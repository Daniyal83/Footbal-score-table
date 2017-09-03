var teams = ["Team 1", "Team 2", "Team 3", "Team 4"];
var inputs = $("li input");

function gameScore() {
	    var button = document.querySelector("button");
	    
	    button.addEventListener("click", function() {
        var firstScore = parseInt(document.getElementById("first").value);
        var secondScore = parseInt(document.getElementById("second").value);
        
        if($("#sel1 option:selected").text() === $("#sel2 option:selected").text()) {
            alert("You should choose different Teams!!");
        } else {

        if(firstScore > secondScore) {
        	alert($("#sel1 option:selected").text()+" won!");
            
            for(var i = 0; i < inputs.length; i++) {
        if($("#sel1 option:selected").text() === teams[i]) {
        inputs[i].value = parseInt(parseInt(inputs[i].value) + 3);
        
             }
        }

        	
                            
        } else if(firstScore < secondScore) {
        	alert($("#sel2 option:selected").text()+" won!");

            for(var i = 0; i < inputs.length; i++) {
        if($("#sel2 option:selected").text() === teams[i]) {
        inputs[i].value = parseInt(parseInt(inputs[i].value) + 3);
        
             }
        }
        	                
            
        } else {
        	alert("Draw!");
        	document.getElementById("team1").value = team1Score + 1;
        	document.getElementById("team2").value = team2Score + 1;
        	team1Score = parseInt(document.getElementById("team1").value);
        	team2Score = parseInt(document.getElementById("team2").value);
        }
          }
        let a = [], b;
        [].forEach.call(document.querySelectorAll("ol > li"), (c)=>a.push([c.children[0].value,c]));
        b = a.sort((a,b)=>b[0]-a[0]);
        b.forEach((c)=>c[1].parentNode.appendChild(c[1]));
   });   

}
gameScore();
