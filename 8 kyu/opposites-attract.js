// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  if(flower1 % 2 == 1 && flower2 % 2 == 0){
    return true
  }
  if(flower1 % 2 == 0 && flower2 % 2 == 1){
    return true
  }
  return false
}

console.log(lovefunc(1,4))

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}