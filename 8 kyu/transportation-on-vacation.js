// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  var dayCost = 40;
  var discount = 0;
  if(d >= 3) discount += 20;
  if(d >= 7) discount += 40;

  return dayCost * d - discount;
}

console.log(rentalCarCost(8))