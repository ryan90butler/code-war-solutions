// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000

function numberToPower(num, exponent) {
  var result = 1;
  for (i = 0; i < exponent; i++) {
  result *= num;
  }
  return result;
}

//with Math.pow()

function numberToPower(num,value){
  return Math.pow(num,value)
}

console.log(numberToPower(4,2))