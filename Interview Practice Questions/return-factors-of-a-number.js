//write a function that takes in an a number and return all numbers it's divisible by.

function factors (num) {
  let newArr = [];
  for(let i=0; i<=num; i++) {
    if(num % i === 0) {
      newArr.push(i)
    }
  }
  return newArr;
}

console.log(factors(42))