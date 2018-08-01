// Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

var summation = function (num) {
return (num *(num+1)/2)
}

var summation = function (num) {
  let results = 0;
  for (let i=0; i<= num; i++){
    results += i
  }
  return results
  }

console.log(summation(2))