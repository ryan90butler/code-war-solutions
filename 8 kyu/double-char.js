// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  const newStr = []
  for (let i=0; i<str.length; i++){
    newStr.push(str[i] + str[i])
  }
  return newStr.join('')
}

console.log(doubleChar('Adidas'))