/* This is the path to death */
var death = function(){
	
	alert("You were eaten by the Overlord.");
}
var el = document.getElementById("run");
el.addEventListener("click", death);

/* This path leads to Overlords blessing */
var blessing = function(){

	alert("You have gained the Overlords blessing.");
}
var el = document.getElementById("orb");
el.addEventListener("click", blessing);


