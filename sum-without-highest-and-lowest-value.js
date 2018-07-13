// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).

const test = [ 6, 2, 1, 8, 10 ]
function sumArray(array) {
  array.sort((a, b) => a-b);
  var sum = 0;
  for(var i = 1; i < array.length-1; i++)sum+=array[i];
  return sum;
}

function sumArray(array) {
  return !array || array.length == 0 ? 0 : array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((res, n) => res + n,0);
}