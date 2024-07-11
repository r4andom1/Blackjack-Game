let message = "";
let sum = 0;
let hasBlackJack = false;
let cards = [];
let isAlive = false
let player = {
    name: "Kim",
     chips: 0
}

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": " + "$" + player.chips;

console.log(cards)

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", ";
    } 
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame()
    }
}


function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 + 1)
    if (randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        return 11;
    }
    return randomCard;
}
