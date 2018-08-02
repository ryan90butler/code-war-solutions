// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  return (array.reduce((a,b)=> a+b)/ array.length)
}

console.log(find_average([5,5,5]))