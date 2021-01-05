const constant = {
    suits: ["♢","♡","♠","♣"],
    cardValues: ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
}
var byValue = document.getElementById('byValue');
var deckValue = document.getElementById('deckValue');
var randomTitle = document.getElementById('random');
var randDeck = document.getElementById('randomDeck');
var card = document.getElementById('card');
var cardName = document.getElementById('cardName');
var bySuit = document.getElementById('bySuit');
var diamondSuit = document.getElementById('diamond');
var heartSuit = document.getElementById('heart');
var spadeSuit = document.getElementById('spade');
var flowerSuit = document.getElementById('flower');
var deck = [];
var diamond = [];
var heart = [];
var spade = [];
var flower = [];

function cardDeck() {
    for(let i = 0;i<constant.suits.length;i++){
      const suit = constant.suits[i];
      for(let j = 0;j<constant.cardValues.length;j++){
        const cardValue = constant.cardValues[j];
         var card = cardValue + suit;
         deck.push(card);
      }
    }
  return deck.reverse();
  }
// console.log("Arrange by Suits : " +cardDeck());
byValue.innerHTML = "arranged by face or value in ascending / descending order :"
deckValue.innerHTML = cardDeck();

function cardSuit() {
    // let randomVal = constant.cardValues[Math.floor(Math.random() * constant.cardValues.length)];
    // let randVal = [];
    // for(let i = 0; i<constant.suits.length; i++){
    //     var value = randomVal + constant.suits[i];
    //     randVal.push(value);
    // }
    // return randVal;
    for (let j = 0; j < constant.suits.length; j++) {
        let suitVal = constant.suits[j];        
        for(let i = 0; i<constant.cardValues.length; i++){
            var cardVal =  constant.cardValues[i];
            switch (suitVal) {
                case "♢":
                    var value = suitVal + cardVal;
                    diamond.push(value);
                    break;                    
                    break;
                case "♡":
                    var value = suitVal + cardVal;
                    heart.push(value);
                    break;
                case "♠":
                    var value = suitVal + cardVal;
                    spade.push(value);
                    break;
                case "♣":
                    var value = suitVal + cardVal;
                    flower.push(value);
                    break;
                default:
                    break;
            }   
        }
    }
    return diamond + heart + spade + flower;
}
bySuit.innerHTML = "arranged by suit :"
diamondSuit.innerHTML = cardSuit();

function shuffleDeck() { 
    let randomDeck = [];   
    for(let i = 0; i < 100; i++){
        randomDeck.push(deck.splice(Math.floor(Math.random() * (deck.length + 1)),1)[0]);
    }
    return randomDeck;
}
// console.log("Shuffle Card Deck : " + shuffleDeck());
randomTitle.innerHTML = "Shuffle Card Deck : ";
randDeck.innerHTML = shuffleDeck();



function dealCard() {
    let randSuits = constant.suits[Math.floor(Math.random() * constant.suits.length)];
    let randValue = constant.cardValues[Math.floor(Math.random() * constant.cardValues.length)];
    let suitStrName = "";
    let valueStrName = "";
    switch (randSuits) {
        case "♢":
            suitStrName = "Diamonds";
            break;
        case "♡":
            suitStrName = "Hearts";
            break;
        case "♠":
            suitStrName = "Spades";
            break;
        case "♣":
            suitStrName = "Flowers";
            break;
    
        default:
            break;
    }

    switch (randValue) {
        case "A":
            valueStrName = "Ace";
            break;
        case "2":
            valueStrName = "Two";
            break;
        case "3":
            valueStrName = "Three";
            break;
        case "4":
            valueStrName = "Four";
            break;
        case "5":
            valueStrName = "Five";
            break;
        case "6":
            valueStrName = "Six";
            break;
        case "7":
            valueStrName = "Seven";
            break;
        case "8":
            valueStrName = "Eight";
            break;
        case "9":
            valueStrName = "Nine";
            break;
        case "10":
            valueStrName = "Ten";
            break;
        case "J":
            valueStrName = "Jack";
            break;
        case "Q":
            valueStrName = "Queen";
            break;
        case "K":
            valueStrName = "King";
            break;            
        default:
            break;
    }
    return randValue + randSuits + " " + valueStrName + " of " + suitStrName;
}
card.innerHTML = "Click to Deal Card"
card.addEventListener("click", e => {
    cardName.innerHTML = dealCard();
})

// card.innerHTML = dealCard();
// console.log(dealCard());
