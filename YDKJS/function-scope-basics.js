// Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
// After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// Finally, check the amount against your bank account balance to see if you can afford it or not.
// You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
// You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
// Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function tax(amount) {
  return amount * TAX_RATE;
}

function format(amount) {
  return "$" + amount.toFixed( 2 )
}

while (amount < bank_balance) {
  amount = amount + PHONE_PRICE;

  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE
  }
}
console.log(amount)
amount = amount + tax(amount);
console.log(amount)

console.log('your price is ' + format(amount))