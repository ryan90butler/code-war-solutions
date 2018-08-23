// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

function flattenAndSort(array) {
  const arr = array.reduce(function(a, b){
  return  a.concat(b);
}, []);
return arr.sort((a,b)=>(a-b))
}

console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6]], [1, 2, 3, 4, 5, 6, 7, 8, 9]))