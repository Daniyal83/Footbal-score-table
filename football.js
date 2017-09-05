var teams = ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5",
 "Team 6", "Team 7", "Team 8", "Team 9", "Team 10"];
var inputs = $("li input");

function gameScore() {
	    var button = document.querySelector("button");
	    var message = document.getElementById("message");
	    button.addEventListener("click", function() {
        var firstScore = parseInt(document.getElementById("first").value);
        var secondScore = parseInt(document.getElementById("second").value);
        
        if($("#sel1 option:selected").text() === $("#sel2 option:selected").text()) {
            alert("You should choose different Teams!!");
        } else {

        if(firstScore > secondScore) {
        	
            var timerId = setInterval(function() {
              message.textContent = $("#sel1 option:selected").text()+" won!";
            }, 100);
            setTimeout(function() {
            clearInterval(timerId);
            message.textContent = "Game";
            }, 3000);
            
            for(var i = 0; i < inputs.length; i++) {
        if($("#sel1 option:selected").text() === teams[i]) {
        inputs[i].value = parseInt(parseInt(inputs[i].value) + 3);
        
             }
        }

        	
                            
        } else if(firstScore < secondScore) {

        	var timerId = setInterval(function() {
              message.textContent = $("#sel2 option:selected").text()+" won!";
            }, 100);
              setTimeout(function() {
              clearInterval(timerId);
              message.textContent = "Game";
            }, 3000);

            for(var i = 0; i < inputs.length; i++) {
        if($("#sel2 option:selected").text() === teams[i]) {
        inputs[i].value = parseInt(parseInt(inputs[i].value) + 3);
        
             }
        }
        	                
            
        } else {
        	var timerId = setInterval(function() {
              message.textContent = "Draw!";
            }, 100);
            setTimeout(function() {
            clearInterval(timerId);
            message.textContent = "Game";
            }, 3000);
        	
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
    sort();
        
    });   

}
gameScore();

let ol = document.querySelector('ol');
let lists = [...document.querySelectorAll('li')];
function sort() {
    for (let list of lists) {
    list.remove();
  }

  lists
    .map(list => [list, list.querySelector('input')])
    .sort((a, b) => b[1].value - a[1].value)
    .forEach(pair => ol.appendChild(pair[0]));
};
