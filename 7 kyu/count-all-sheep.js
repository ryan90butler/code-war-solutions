// As sheep are not coming in one flock, you will be given two arrays (one for each night) representing number of sheep as they were returning to the yard during the evenings (entries are positive ints, higher than zero).

// Farmer and his son know the total amount of their sheep, you will be given this number as third parameter.

// Your goal is to calculate the amount of sheep lost (not returned) to the farm after Saturday night counting.

// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5

// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6

function lostSheep(friday,saturday,total){
  const added = friday.reduce((a,b)=>a+b,0)
  const added1 = saturday.reduce((a,b)=> a+b,0)
  return total - (added + added1)
}

console.log(lostSheep([1, 2], [3, 4], 15))

function lostSheeps(friday,saturday,total){
  return total - friday.concat(saturday).reduce((a,b)=>a+b)
}

console.log(lostSheeps([1,2,3,4], [4,32,2], 55))