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
  var item =[];
  for (var i=0; i<cart.length;i++){
    var key = Ojbect.keys(cart[i])[0];
    var price = cart[i][key];
    item.push(key+" at $"+price);
  }
    if(car.length==1) console.log ("In your cart, you have ${item[0]}.");
    else if (cart.length ==2){
      console.log(`In your cart, you have ${item.join(' and ')}.`);
      
    }
    else{
      item[cart.length-1] = "and {item[cart.length-1]}";
      console.log("In your cart, you have ${item.join(", ")}.");
    }
  }
  
  return cart;
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
