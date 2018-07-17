// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if(number % 2 == 0) {
    return 'Even'
  }
  return 'Odd'
}

console.log(even_or_odd(-654))

function even_or (n){
  return n % 2 ===0 ? 'Even': 'Odd'
}

console.log(even_or(-654))