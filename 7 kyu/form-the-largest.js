// Given a number , Return The Maximum number could be formed from the digits of the number given .

function maxNumber(n){
  return parseInt([...''+n].sort().reverse().join(''))
}

console.log(maxNumber(143))