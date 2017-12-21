var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100);
 var cartObj = { [item] : price};
 cart.push(cartObj);
 console.log ("${item} has been added to your cart.");
 return cart;
}

function viewCart() {
  // write your code here
  for (var i=0; i<cart.length;i++){
    if(car.length==1) console.log ("In your cart you have ${Object.keys(cart[i])[0]} at ${cart[i][Object.keys(cart[i])[0]}.");
    else if (cart.length ==2){
      
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
