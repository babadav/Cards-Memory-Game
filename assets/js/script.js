console.log ("script.js")

//Even Listeners and Intervals 

// window.addEventListener("mousemove", function(e) {
// 	console.log(e);

// });

// var box = document.querySelector(".box");

// box.addEventListener("mouseenter", function(){
// 	box.style.width = "150px"
// 	box.style.height = "150px"
// });

// box.addEventListener

//shuffle
//deal
//flip
//check for match
//yes = set asside
//no = flip back 

//array of objects/deck
// take cards from array (4)
//clone cards
// place in dom 



var timeView= document.createElement("div");
timeView.classList.add("time-view")
document.body.appendChild(timeView);

var time = 0;


function timer(){
	timeView.innerHTML = (time);
	time++;
}


var stopWatch= setInterval(timer,1000);

function restartGame(){
	var cards= document.querySelectorAll(".card");
	closeModal();
	startGame();
	stopWatch = setInterval(timer,1000);

for (var i = cards.length - 1; i >= 0; i--){

	cards[i].parentNode.removeChild(cards[i]);
}

}

function closeModal(){
	var modal =document.querySelector(".modal");
	var overlay =document.querySelector(".overlay");
	modal.parentNode.removeChild(modal);
	overlay.parentNode.removeChild(overlay);
}

var createModal= function(){

	var overlay= document.createElement("div");
	overlay.classList.add("overlay");
	document.body.appendChild(overlay);


	var modal= document.createElement("div");
	modal.classList.add("modal");
	document.body.appendChild(modal);
	modal.innerHTML = "<p> CONFUCKINGGRATS!!!</p>" + "You took " + time + " time units " +" to finish this game!</p> ";

	var restartButton= document.createElement("button");
	restartButton.classList.add("restart-button");
	modal.appendChild(restartButton);
	restartButton.innerHTML="Restart";


	var closeButton= document.createElement("button");
	closeButton.classList.add("close-button");
	modal.appendChild(closeButton);
	closeButton.innerHTML="Close";

	closeButton.addEventListener("click", closeModal);
	restartButton.addEventListener("click", restartGame);


}



function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function dealCards(deck){
	for (var i = 0; i < deck.length; i++) {
		var card = document.createElement("div");
		card.setAttribute("class", "card");
		card.setAttribute("data-color", deck[i].color);
		card.setAttribute("data-suit", deck[i].suit);
		card.setAttribute("data-number", deck[i].number)
		card.innerHTML = deck[i].number + deck[i].suit;
		document.body.appendChild(card);

		card.addEventListener("click", onCardClick)


	};

}

function onCardClick(e){
	// console.log(e); 
	// console.dir(this);

	
	//Stop from being flipped back over if only one is visible.
	//Check to be sure only two cards are flipped
	// check to be sure only two cards are flipped.

	var flippedCards = document.querySelectorAll(".flipped");
	//allow card to flip
	if ( flippedCards.length < 2){
		if (!this.classList.contains("flipped") ) { 
			this.classList.add("flipped");
		
	
			if (flippedCards.length == 1 ) {
				checkForMatch(this, flippedCards[0]);
			}

		}
	} 

}

function checkForMatch (card1, card2) {
		console.log("check");
		// console.dir(card1.dataset);
		if (card1.dataset.number == card2.dataset.number && card1.dataset.suit == card2.dataset.suit ){
			console.log("it's a match!");
			card1.classList.remove("flipped");
			card2.classList.remove("flipped");
			card1.classList.add("matched");
			card2.classList.add("matched");

			checkForWin();


		} else{ 
			setTimeout(function(){
				card1.classList.remove("flipped");
				card2.classList.remove("flipped");
			}, 500);

		}

}	

function checkForWin(){
	var totalMatched = document.querySelectorAll(".matched").length;
	var totalCards = document.querySelectorAll(".card").length; 

	if (totalMatched == totalCards){
		setTimeout(function(){
			createModal();
			clearInterval(stopWatch);

		},250)
	}
}

	// check to see if it's a match.
	// stop from being flipped back over if only one is visible.

window.addEventListener("load", startGame);
	
	function startGame() {
		var totalCards = 8;
			time=0; 

	var deck = [
	    {color: "red",   number: "A" , suit: "&hearts;"},
	    {color: "red",   number: "2" , suit: "&hearts;"},
	    {color: "red",   number: "3" , suit: "&hearts;"},
	    {color: "red",   number: "4" , suit: "&hearts;"},
	    {color: "red",   number: "5" , suit: "&hearts;"},
	    {color: "red",   number: "6" , suit: "&hearts;"},
	    {color: "red",   number: "7" , suit: "&hearts;"},
	    {color: "red",   number: "8" , suit: "&hearts;"},
	    {color: "red",   number: "9" , suit: "&hearts;"},
	    {color: "red",   number: "10", suit: "&hearts;"},
	    {color: "red",   number: "J" , suit: "&hearts;"},
	    {color: "red",   number: "Q" , suit: "&hearts;"},
	    {color: "red",   number: "K" , suit: "&hearts;"},
	     {color: "black", number: "A" , suit: "&diams;"},
	    {color: "black", number: "2" , suit: "&diams;"},
	    {color: "black", number: "3" , suit: "&diams;"},
	    {color: "black", number: "4" , suit: "&diams;"},
	    {color: "black", number: "5" , suit: "&diams;"},
	    {color: "black", number: "6" , suit: "&diams;"},
	    {color: "black", number: "7" , suit: "&diams;"},
	    {color: "black", number: "8" , suit: "&diams;"},
	    {color: "black", number: "9" , suit: "&diams;"},
	    {color: "black", number: "10", suit: "&diams;"},
	    {color: "black", number: "J" , suit: "&diams;"},
	    {color: "black", number: "Q" , suit: "&diams;"},
	    {color: "black", number: "K" , suit: "&diams;"},
	    {color: "black", number: "A" , suit: "&spades;"},
	    {color: "black", number: "2" , suit: "&spades;"},
	    {color: "black", number: "3" , suit: "&spades;"},
	    {color: "black", number: "4" , suit: "&spades;"},
	    {color: "black", number: "5" , suit: "&spades;"},
	    {color: "black", number: "6" , suit: "&spades;"},
	    {color: "black", number: "7" , suit: "&spades;"},
	    {color: "black", number: "8" , suit: "&spades;"},
	    {color: "black", number: "9" , suit: "&spades;"},
	    {color: "black", number: "10", suit: "&spades;"},
	    {color: "black", number: "J" , suit: "&spades;"},
	    {color: "black", number: "Q" , suit: "&spades;"},
	    {color: "black", number: "K" , suit: "&spades;"},
	     {color: "black", number: "A" , suit: "&clubs;"},
	    {color: "black", number: "2" , suit: "&clubs;"},
	    {color: "black", number: "3" , suit: "&clubs;"},
	    {color: "black", number: "4" , suit: "&clubs;"},
	    {color: "black", number: "5" , suit: "&clubs;"},
	    {color: "black", number: "6" , suit: "&clubs;"},
	    {color: "black", number: "7" , suit: "&clubs;"},
	    {color: "black", number: "8" , suit: "&clubs;"},
	    {color: "black", number: "9" , suit: "&clubs;"},
	    {color: "black", number: "10", suit: "&clubs;"},
	    {color: "black", number: "J" , suit: "&clubs;"},
	    {color: "black", number: "Q" , suit: "&clubs;"},
	    {color: "black", number: "K" , suit: "&clubs;"},
	];

	shuffle(deck);


//Deal

	var pickedCards = deck.slice(0, totalCards / 2);
	pickedCards = pickedCards.concat(pickedCards);

	shuffle(pickedCards)
	
	dealCards(pickedCards);

}




















