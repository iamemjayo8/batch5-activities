class deck {
    constructor() {
        this.cards = [];
        this.dealcard = null;
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
    console.log(d.dealcard);
    dealValue.innerHTML = d.dealcard;
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
})

prevBtn.addEventListener("click", e => {
    if(d.dealcards.length === '0') {
        prevBtn.disabled = true;
    }else{
        let curLen = d.dealcards.length;
        let curCardVal = d.dealcards.pop(curLen);
        d.dealcard = curCardVal;
        d.cards.push(curCardVal);
        updateVal();
        if(deckVal.innerText === '52') {
            prevBtn.disabled = true;
        }
        nextBtn.disabled = false;
    }
})

nextBtn.addEventListener("click", e => {

})


function updateVal(){
    shuffdeck.innerHTML = d.cards;
    deckVal.innerHTML = d.cards.length;
    dealCardList.innerHTML = d.dealcards;
}
