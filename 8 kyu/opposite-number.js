// Very simple, given a number, find its opposite.

function opposite(number) {
  if(number > 0){
    return (-+number)
  }
  if(number<=0){
    return (number-number-number)
  }
}

console.log(opposite(22))

function opposite1(number) {
  return(-number);
}

console.log(opposite1(-4))