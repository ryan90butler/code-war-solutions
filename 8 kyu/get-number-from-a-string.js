// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

function getNumberFromString(s) {
const numbers=s.match(/\d+/g).map(Number)
  return Number(numbers);
}

console.log(getNumberFromString('H220'))