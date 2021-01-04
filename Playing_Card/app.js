const constant = {
    suits: ["♢","♡","♠","♣"],
    cardValues: ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
}
var deck = [];

function cardDeck() {
    for(let i = 0;i<constant.suits.length;i++){
      const suit = constant.suits[i];
      for(let j = 0;j<constant.cardValues.length;j++){
        const cardValue = constant.cardValues[j];
         var card = cardValue + suit;
         deck.push(card);
      }
    }
  return deck;
  }
console.log("Arrange by Suits : " +cardDeck());

function shuffleDeck() { 
    let randomDeck = [];   
    for(let i = 0; i < 52; i++){
        randomDeck.push(deck[Math.floor(Math.random() * deck.length)]);
    }
    return randomDeck;
}
console.log("Shuffle Card Deck : " + shuffleDeck());



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
    return randValue + randSuits + " : " + valueStrName + " of " + suitStrName;
}
console.log(dealCard());
