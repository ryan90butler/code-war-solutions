//You get an array of numbers, return the sum of all of the positives ones.

let array = [1,3,5,-4]

function positiveSum(arr) {
  var result = 0
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i]
    }
  }
  return result
}

console.log(positiveSum(array))