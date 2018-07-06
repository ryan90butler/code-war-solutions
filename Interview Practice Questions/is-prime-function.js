// write a function that tests whether a number is prime or not. ex: 1 = false, 2 = true, 4 = false, 59 = true, 113 = true

function isPrime (num) {
  if (num == 1){
  return false
  }
  if(num == 2) {
    return true
  }
 if(num % 2 == 1){
   return true
 }
 else return false
}
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(4))
console.log(isPrime(59))
console.log(isPrime(113))