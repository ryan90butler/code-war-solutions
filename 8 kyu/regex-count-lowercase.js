// Your task is simply to count the total number of lowercase letters in a string.

// function lowercaseCount(str){
// return str.length - str.replace(/[a-z]/g, '').length
// }


function lowercaseCount(str){
  return str.replace(/[A-Z]/g, '').length
  }

console.log(lowercaseCount('abIc'))