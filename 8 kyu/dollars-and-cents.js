// create a function that will take a float and return the amount formatting in dollars and cents.

function formatMoney(amount){
  return '$' + amount.toFixed(2)
}

console.log(formatMoney(2.10))