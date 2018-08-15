// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

function reverseNumber(n) {
 const newN = n.toString().split('').reverse('').join('')
  return parseInt(newN) * Math.sign(n)
}

console.log(reverseNumber(12345))