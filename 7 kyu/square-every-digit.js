// you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num){
  const squared = [];
  const newNum = num.toString()
 for (let i=0; i<newNum.length;i++){
   squared.push(newNum[i] * newNum[i])
 }
 return Number(squared.join(''))
}

console.log(squareDigits(34113))