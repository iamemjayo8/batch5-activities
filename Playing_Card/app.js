class deck {
    constructor() {
        this.cards = [];
        this.dealcard = "";
        this.dealcards = [];        
    }
    createDeck(){
        let suit = ["♢","♡","♠","♣"];
        let value = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
        
        for(let i = 0; i < suit.length; i++) {
            for(let j = 0; j < value.length; j++) {
                this.cards.push(value[j] + suit[i]);
            }
        }
    }
    shuffleDeck() {
        let loc1, loc2, tmp;
        for(let i = 0; i < 1000; i++){
            loc1 = Math.floor(Math.random() * this.cards.length);
            loc2 = Math.floor(Math.random() * this.cards.length);
            tmp = this.cards[loc1];
            this.cards[loc1] = this.cards[loc2];
            this.cards[loc2] = tmp;
        }
    }
    dealCard(){
        let arrLoc = Math.floor(Math.random() * this.cards.length);
        let val = this.cards.pop(arrLoc);
        this.dealcard = val;
        this.dealcards.push(val);;
    }
}
const deckValLbl = document.getElementById('deck-val-label');
const deckVal = document.getElementById('deck-value');
const dealBtn = document.getElementById('deal');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dealValue = document.getElementById('deal-card');
const shuffdeck = document.getElementById('deck');
const dealCardList = document.getElementById('deal-card-list');

const d = new deck();
var str = "abcd"
var currentCard = [];
var prevHistory= []
var strVal = "";
var strVal1 = "";
var strSuit = "";
var counter = 0;
var prevNextCounter = 0;

d.createDeck();
d.shuffleDeck();
updateVal();
prevBtn.disabled = true;
nextBtn.disabled = true;
//console.log(d.cards);
deckValLbl.innerHTML = "Current Deck Card(s) :";
// console.log(d.dealcards.length);
dealBtn.addEventListener("click", e => {
    d.dealCard();
    toWord();
    console.log(d.dealcard);
    dealValue.innerHTML = d.dealcard + " " + strVal + strSuit;    
    // console.log(d.dealcards.length);
    updateVal();
    if(deckVal.innerText === '52') {
        deckValLbl.innerHTML = "Current Deck Card :";
    }else if(deckVal.innerText < '52') {
        deckValLbl.innerHTML = "Remaining Cards :"
        prevBtn.disabled = false;
    } else if(deckVal.innerText === '0') {
        dealBtn.disabled = true;
    }
    counter += 1;
    prevNextCounter += 1;
})

prevBtn.addEventListener("click", e => {
    if(d.dealcards.length === '0') {
        prevBtn.disabled = true;
    }else{
        let curLen = d.dealcards.length;
        let curCardVal = d.dealcards.pop(curLen);
        d.dealcard = curCardVal;
        d.cards.push(curCardVal);
        prevHistory.push(curCardVal);
        updateVal();
        if(deckVal.innerText === '52') {
            prevBtn.disabled = true;
            prevNextCounter -= 1;
        }
        nextBtn.disabled = false;
    }
    
})

nextBtn.addEventListener("click", e => {
    d.dealCard();
    updateVal();
    prevNextCounter += 1;
    if(counter !== prevNextCounter){   
        prevBtn.disabled = false;
    }else{        
        nextBtn.disabled = true;
    }
})


function updateVal(){
    shuffdeck.innerHTML = d.cards;
    deckVal.innerHTML = d.cards.length;
    dealCardList.innerHTML = d.dealcards;
}
function toWord(){
    let val, suit;
    if(d.dealcard.length === 2){        
        currentCard = d.dealcard.split("");
        val = currentCard[0];
        suit = currentCard[1];
        switch (val) {
            case 'A':
                strVal = "Ace of ";
                break;
            case 'K':
                strVal = "King of ";
                break;
            case 'Q':
                strVal = "Queen of ";
                break;
            case 'J':
                strVal = "Jack of ";
                break;
            case '2':
                strVal = "Jack of ";
                break;
            case '3':
                strVal = "Jack of ";
                break;
            case '4':
                strVal = "Jack of ";
                break;
            case '5':
                strVal = "Jack of ";
                break;
            case '6':
                strVal = "Jack of ";
                break;
            case '7':
                strVal = "Jack of ";
                break;
            case '8':
                strVal = "Jack of ";
                break;
            case '9':
                strVal = "Jack of ";
                break;
            default:
                break;
        }
        switch (suit) {
            case '♢':
                strSuit = "Diamonds";
                break;
            case '♡':
                strSuit = "Hearts";
                break;
            case '♠':
                strSuit = "Spades";
                break;
        
            default:
                strSuit = "Clubs";
                break;
        }
    }else if(d.dealcard.length === 3){
        currentCard = d.dealcard.split("");
        val = d.dealcard[0] + d.dealcard[1];
        suit = d.dealcard[2];
        switch (val) {
            case '10':
                strVal = "Ten of "
                break;
        
            default:
                break;
        }
        switch (suit) {
            case '♢':
                strSuit = "Diamonds";
                break;
            case '♡':
                strSuit = "Hearts";
                break;
            case '♠':
                strSuit = "Spades";
                break;
        
            default:
                strSuit = "Clubs";
                break;
        }
    }
}