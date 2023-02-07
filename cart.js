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
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
let summedPrice = cart.reduce((total, value) => total + value.price, 0)
console.log(summedPrice)


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

//CODE HERE
let calcFinalPrice = (cartTotal, couponValue, tax) => {
    total = cartTotal - couponValue + (cartTotal * tax)
    return Math.round(total * 100) / 100
}
console.log(calcFinalPrice(summedPrice, 10, .06))


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
    TEXT ANSWER HERE
    ONLINE DELIVERY/PICKUP SYSTEM:

    fullName (this is so we know who's picking up the order) string
    phoneNumber (for order confirmation) number
    item(s) (For what they want) string
    delivery (boolean for delivery/pickup) boolean
    address (Optional for delivery) string
    cardName () string
    cardNum () number
    cvv () number


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    fullName: 'Johnny Magno',
    phoneNumber: 9407835276, //text me if you read this ;)
    item: 'pizza',
    delivery: true,
    address: '2853 Meadowbrook Dr',
    cardName: 'Johnathan Magno',
    cardNum: 1234567812345678,
    cvv: 123
}