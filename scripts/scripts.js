


// PART 2: SHOPPING CART APP
console.log(`
PART 2 SHOPPING CART APP`); 

// Directions: Do your work below using the direction in the README.md file.

const userName = prompt("Welcome to the shopping cart! What's your name?");

const item1 = prompt("Item 1 name:");
let item1price = Number(prompt(`${item1} price:`));

const item2 = prompt("Item 2 name");
let item2price = Number(prompt(`${item2} price:`));

const item3 = prompt("Item 3 name");
let item3price = Number(prompt(`${item3} price:`));

// If any of the itemprices is not a number or is 0, ask for the price again.
if (!item1price || item1price == 0) {
    item1price = Number(prompt(`${item1} price is not valid, please enter a price`));
}
if (!item2price || item2price == 0) {
    item2price = Number(prompt(`${item2} price is not valid, please enter a price`));
}
if (!item3price || item3price == 0) {
    item3price = Number(prompt(`${item3} price is not valid, please enter a price`));
}

//Add prices together and multiply by 1.0625 to add tax.

// const total = (item1price + item2price + item3price) * 1.0625;

function total(item1price, item2price, item3price){ return ((item1price + item2price + item3price) * 1.0625);
};
// console.log(total(8,2,10));

document.getElementById('total').innerHTML = `${userName}, your grand total is: $${total(item1price,item2price,item3price)}.`

// // Bonus
// let item1img = prompt(`${item1} image URL:`);
// let item2img = prompt(`${item2} image URL:`);
// let item3img = prompt(`${item3} image URL:`); 

// document.getElementById('item1img').src = item1img;
// document.getElementById('item2img').src = item2img;
// document.getElementById('item3img').src = item3img;

// document.getElementById('item1img').alt = item1;
// document.getElementById('item2img').alt = item2;
// document.getElementById('item3img').alt = item3;