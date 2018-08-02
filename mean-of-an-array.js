// Return the average of the given array rounded down to its nearest integer.

function getAverage(marks){
 return Math.floor(marks.reduce((a,b) => a+b)/marks.length)
}

console.log(getAverage([3,4,5,6,34]))