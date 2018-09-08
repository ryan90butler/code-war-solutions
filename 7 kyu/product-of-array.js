// Calculate the product of all elements in an array.
// In JavaScript, if the array is null or is empty, the function should return null.

function product(values) {
  if(values === null || values === []){
    return null
  }else{
  return values.reduce((a,b)=>a*b)
  }
}

console.log(product([51,3,-3]))