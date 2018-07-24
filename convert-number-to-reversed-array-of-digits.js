//You have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let a = n.toString().split('').map(Number)
  return a.reverse()
}

console.log(digitize(35231))