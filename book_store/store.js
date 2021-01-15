const store = {
  name: 'JM BookStore',
  inventory: [],
  earnings: 0
};
var books = {};

function addBook(title, quantity, price) {
  let book = {};
  let x = 0;
  let bookItem = Object.keys(books);
  for(x;x<bookItem.length;x++){
    let bookTitle = books[x].title;
    if(bookTitle === title){
      console.log('Alert: ' + title + ' already in the inventory.');
      return;
    }
  } 
  book.title = title;
  book.quantity = quantity;
  book.price = price;
  books[x] = book;
  store.inventory.push(book);
  return;
}

function restockBook(title, quantity) {
  // let bookTitle = store.inventoryList.title;
  // let bookList = store.inventoryList;
  // if(title !== bookTitle) {
  //     console.log("your book is not available!");
  // }else{
  //     for(let i = 0; i < bookList.length;i++){
  //         if(title === store.inventoryList[i].title){
  //             store.inventoryList[i].quantity += quantity;
  //         }
  //     }
  // }
  let list = Object.keys(store.inventory);
  let bkTitleList = [];
  for(let i = 0; i<list.length; i++) {
    let bkTitle = store.inventory[i].title;
    bkTitleList.push(bkTitle);
  }
  let isInInventory = bkTitleList.includes(title);
  if(isInInventory !== true){
    console.log("Alert :" + title + " is not in the inventory.");
    return;
  }else{
    let qty;
    for(let x = 0; x<list.length; x++) {
      let booktitle = store.inventory[x].title;
      if(title === booktitle) {
        qty = store.inventory[x].quantity += quantity;
      }
    }
    console.log('Successfully update inventory.');
    console.log(title + ' has now ' + qty + ' available quantity.');
  }
}
function sellBook(title, quantity) {
  let list = Object.keys(store.inventory);
  let bkTitleList = [];
  for(let i = 0; i<list.length; i++) {
    let bkTitle = store.inventory[i].title;
    bkTitleList.push(bkTitle);
  }
  let isAvailable = bkTitleList.includes(title);
  if(!isAvailable) {
    console.log('This ' + title + ' is not available.');
    return;
  }else{
    let booktitle, qty;
    for(let x = 0; x<list.length; x++){
      booktitle = store.inventory[x].title;
      if(title === booktitle){
        qty = store.inventory[x].quantity;
        if(qty >= quantity){          
          store.inventory[x].quantity -= quantity;
          let soldAmount = store.inventory[x].price * quantity;
          store.earnings += soldAmount;
          console.log("Successfully sold " + title + " quantity: " + qty + " total amount : $"+ soldAmount ); 
        }else{
          console.log('Not enough quantity only ' + qty + ' left.')
        }
      }
    }
  }
}

function listInventory() {
  let invList = Object.keys(store.inventory);
  if(invList.length === 0){
    console.log('Your inventory is empty.');
    return;
  }else{
    for(let i = 0; i<invList.length; i++){
      let bktitle = store.inventory[i].title;
      let bkqty = store.inventory[i].quantity;
      let bkPrice = store.inventory[i].price;
      console.log(`${i + 1}` + ' ' + bktitle + ' ' + bkqty + ' $' + bkPrice);
    }
  }
}
function totalEarnings() {  
  let storeName = store.name;
  let earnings = store.earnings;
  console.log(storeName + ' has a total earning of $'+ earnings);  
}