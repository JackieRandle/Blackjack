let firstCard = 3
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let cards = [firstCard, secondCard]
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGane() {
    renderGame()
}
function renderGame(){
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
    cardsEl.textContent = "Cards: " + cards[0] + " " + Cards[1] + thirdCard
}
function newCard() {
    console.log("Drawing a new Card from the deck!")
    let card = 7
    sum += card
    renderGame() 
    

    }


