///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

const summedPrice = cart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

console.log(summedPrice);
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
  const finalPrice = cartTotal * (1 + tax) - couponValue;
  return finalPrice;
};

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    firstName (string) - need this as an identifier
    lastName (string) - also an identifier to clarify if multiple first names
    email (string) - used for communication and account identification
    items (array) - informs what is being ordered
    totalAmount (number) - allows the store to know how much the product was sold for

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
  firstName: "Alex",
  lastName: "Nelson",
  email: "alexnelson97@gmail.com",
  totalAmount: 45.99,
  items: ["Pizza", "Salad", "Soda"],
};
