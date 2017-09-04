var teams = ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5",
 "Team 6", "Team 7", "Team 8", "Team 9", "Team 10"];
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
        	
            for(var i = 0; i < inputs.length; i++) {
        if($("#sel1 option:selected").text() === teams[i]) {
                   inputs[i].value = parseInt(parseInt(inputs[i].value) + 1);
            }
        }
            for(var j = 0; j < inputs.length; j++) {    
        if($("#sel2 option:selected").text() === teams[j]) {
                   inputs[j].value = parseInt(parseInt(inputs[j].value) + 1);
            }
        }            
    }	        	
 }

        let a = [], b;
        [].forEach.call(document.querySelectorAll("ol > li"), (c)=>a.push([c.children[0].value,c]));
        b = a.sort((a,b)=>b[0]-a[0]);
        b.forEach((c)=>c[1].parentNode.appendChild(c[1]));
   });   
}
gameScore();
