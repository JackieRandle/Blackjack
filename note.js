let firstCard = 3
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
function startGame(){
    if(sum <= 20){
        message = "Would you like to draw again?"
    }
    else if (sum === 21){
        message = "BLACKJACK!"
        hasBlackJack = true
    }
    else if (sum > 21) {
        message = "sorry,play again?"
        isAlive = false
    }
    messageEl.textContent=message
    sumEl.textContent= "Sum: "+sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
}
function newGame(){
    console.log("Drawing a new Card from the deck!")
}