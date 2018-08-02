// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a,b)=>(a-b))
  return numbers[0] + numbers[1]
};

console.log(sumTwoSmallestNumbers([23,542,23,1,5]))