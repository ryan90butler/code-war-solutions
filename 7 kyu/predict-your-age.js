// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  one = age1*age1
  two = age2*age2
  three = age3*age3
  four = age4*age4
  five = age5*age5
  six = age6*age6
  seven = age7*age7
  eight = age8*age8
  total = one + two + three+ four+five+six+seven+eight
  sqrt = Math.sqrt(total)
  return Math.floor(sqrt/2)
}

function predictAge1(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
  return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
}