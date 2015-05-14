/* This path to attack */
function attack(){
	var player1Wins = 0
	var i = 0
		do {
			var player1Choice = prompt("Choose your weapon, now! 1. Axe 2. Bow & Arrow 3. Sword");
			var overlordChoice = Math.random();
			var message = ""

			if (overlordChoice < 0.34) {
				overlordChoice = "1";
			} else if (overlordChoice <= 0.67) {
				overlordChoice = "2";
			} else {
				overlordChoice = "3";
			}

console.log(overlordChoice);
console.log(player1Choice);

			if (player1Choice === overlordChoice){
				message = "Your skills matched the Overlord's. You're caught in an eternal struggle!";
			} else if (player1Choice === 3 && overlordChoice === 2) {
				message = "You've cut the Overlord's bow string and his will to live. You win!";
			} else if (player1Choice === 2 && overlordChoice ===1) {
				message = "Your arrow found the Overlord's face! You win!";
			} else if (player1Choice === 1 && overlordChoice === 3) {
				message = "You've bested the Overlord with the axe! You win!";
			} else if (overlordChoice === 3 && player1Choice === 2) {
				message = "Your arrow missed its mark... The Overlord sliced you real good.";
			} else if (overlordChoice === 2 && player1Choice === 1) {
				message = "The Overlord has slain you with the bow & arrow!";
			} else {
				message = "The Overlords Axe is lodged in your cranium.";}
			alert(message)
			i += 1;
		} while (i < 10);
}

var el = document.getElementById("choose");
el.addEventListener("click", attack);
