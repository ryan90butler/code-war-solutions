// Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
  return numbers.reduce(function (sum, n){
    return (n*n) + sum;
  })
}

console.log(squareSum([1,2,2]))