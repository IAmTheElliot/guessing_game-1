/* This path to attack */
var attack = function(){
var userChoice = prompt("Choose your weapon, now! 1. Axe 2. Bow & Arrow 3. Sword");
var overlordChoice = Math.random();
if (overlordChoice < 0.34) {
	overlordChoice = "1";
} else if (overlordChoice <= 0.67) {
	overlordChoice = "2";
} else {
	overlordChoice = "3";
}

var compare = function(userChoice, overlordChoice) {
	if(userChoice === overlordChoice); {
	alert("Your skills matched the Overlord's. You're caught in an eternal struggle!");
	
		}
if(userChoice === "1") {
	if(overlordChoice === "3") {
		alert("You've bested the Overlord with the axe!");
	} else {
		if(overlordChoice === "2")
			alert("The Overlord has slain you with the bow & arrow!");
		}

	}
if(userChoice === "2") {
	if(overlordChoice === "1") {
		alert("Your arrow found the Overlord's face!");
	} else {
		if(overlordChoice === "3")
			alert("Your arrow missed its mark... The Overlord sliced you real good.");
	}
}
if(userChoice === "3") {
	if(overlordChoice === "1") {
		alert("The Overlords Axe is lodged in your cranium.");
	} else {
		if(overlordChoice === "2"); {
			alert ("You've cut the Overlord's bow string and his will to live.")
		}
	}
}
};
console.log("Your Choice: " + userChoice);
console.log("Overlord Choice: " + overlordChoice);
compare(userChoice, overlordChoice)
}
var el = document.getElementById("choose");
el.addEventListener("click", attack);