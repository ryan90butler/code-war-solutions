// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is equal or less than two, it will return an array containing only the name as is"

function whoIsPaying(name){
  if(name.length <= 2){
    return [name]
  }else{
  return [name, name[0] + name[1]]
  }
}

console.log(whoIsPaying("Melissa"))