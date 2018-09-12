// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Implement a function which takes three arguments and generates a range of integers from min to max, with given step. The first is minimum value, second is maximum of range and the third is step.


function generateRange(min, max, step){
  const newArr = [];
  for(let i=min;i<=max;i+=step){
    newArr.push(i)
  }
  return newArr
}

console.log(generateRange(2,10,2))