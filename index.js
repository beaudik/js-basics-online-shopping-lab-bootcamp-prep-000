var cart = ["mango", "apples", "bananas"];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let pick = {
   itemName:item,
   itemPrice: Math.floor(Math.random() * 100) + 1
 };
 cart.push(pick);
 return `${pick.itemName} has been added to your cart.`;
}

function viewCart(){
  // write your code here
  var temp ="";
  if (getCart().length === 0){
      return  `Your shopping cart is empty.`
  }else if (getCart().length === 1){
    return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
      }else if(getCart().length === 2){

           return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}, and ${getCart()[i].itemName} at $${getCart()[i].`;

         }else if ( i >= 1 && i < getCart().length-1) {
          temp = `${temp} ${getCart()[i].itemName} at $${getCart()[i].itemPrice},`;
          console.log(temp);

        }else if (i === getCart().length-1) {
          temp = `${temp} and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;
          console.log(temp);

        }
        return temp;
       }

  }
  }
}

/*  let inYourCart;
  let inYourCartTemp1 = `${i} items-In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;
  let inYourCartTemp2 = `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice},`;
  let inYourCartTemp3 = `, and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
  let i = 0;

  if (cart.length === 0){
      inYourCart = `Your shopping cart is empty.`
  }
  else{for (i ; i < cart.length; i++){
      if(i === 1){
      inYourCart = `${i} item-In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`;

    }else if(i >= 2){
      if(i !== cart.length-1){
        inYourCart = `${inYourCartTemp1}${inYourCartTemp2}`;
      }else if (true) {
        inYourCart = `${inYourCartTemp1}${inYourCartTemp3}`;
      }
    }*/


function total() {
  // write your code here
  let  total;
  for (let i = 0; i < getCart.length; i++){
      total =+ getCart()[i].itemPrice;
  }
  return total;
}
function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here


}
