// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

function countPositivesSumNegatives(input) {
  if(input.length < 1 || input == null){
    return [];
  }
  const arr = [0,0];
  for(let i = 0; i<input.length; i++){
    if (input[i] < 0){
    arr[1] +=input[i]
    }
    if (input[i] >= 0) {
      arr[0] +=1;
    }
  }
  return arr
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -14]))