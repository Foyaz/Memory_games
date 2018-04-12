/*
 * Create a list that holds all of your cards
 */
let symbols = ['bicycle', 'bicycle', 'leaf', 'leaf', 'cube', 'cube', 'anchor', 'anchor', 'paper-plane-o', 'paper-plane-o', 'bolt', 'bolt', 'bomb', 'bomb', 'diamond', 'diamond'];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



//Returns the first matching Element node within the context object.
const deck = document.querySelector('.deck');
const resetCard = document.querySelectorAll('.card');
const reset = document.querySelector('.restart');
let moves = document.querySelector('.moves');

// Returns object value of all elements which have the specific class name. 
const openCards = document.getElementsByClassName('open');
const matchCards = document.getElementsByClassName("match");


//empty array
let cards = [];




//event handler for reset game
reset.addEventListener('click',function(){
    //loops through the event handler to count moves
    for (let i = 0; i<resetCard.length; i++){
        resetCard[i].classList.remove('show','open','match');
    }
    moves.innerHTML = "0";
})

// event handler for when the card is clicked
deck.addEventListener("click", function (event) {
    previousCard = document.querySelector(".open");
    event.target.classList.add("show", "open");
    cards.push(event.target);
    if(cards.length == 2) {
       checkOpenCards();
    }
})



// check open cards when count == 2

function checkOpenCards() {
   // set the time interrvals
    setTimeout(function(){
   if (cards[0].innerHTML === cards[1].innerHTML) {
        cards.forEach(function (card) {
            card.classList.add("match");
        });
        checkWinner();
    }
    else {
        cards.forEach(function (card) {
            card.classList.remove("show");
            card.classList.remove("open");
        });
    }
    cards = [];
},400);
// increment move count
moves.innerHTML++;
};


//check alert massage
function checkWinner(){
    if(matchCards.length == 16){
        alert('You Won');
    }
}

