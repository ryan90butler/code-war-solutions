// Write a class function named repeat() that takes two arguments (a string and a long integer), and returns a new string where the input string is repeated that many times.

function repeater(string, n){
  return string.repeat(n)
}

console.log(repeater('ab', 3))