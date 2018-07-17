// Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

function oddOrEven(array) {
  if (array ==0){
    return 'even'
  }
  const sum = (array.reduce((a , b) => a+b))
  return sum % 2 === 0 ? 'even': 'odd';
}

console.log(oddOrEven([23,21]))