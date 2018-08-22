// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

function isPalindrome(line) {
  return line.toString() == line.toString().split('').reverse().join('')
}

console.log(isPalindrome('11211'))