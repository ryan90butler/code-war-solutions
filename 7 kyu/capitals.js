// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
  var answer = [];
  for(let i=0;i<word.length;i++){
    if(word[i].match(/[A-Z]/)){
      answer.push(i)
    }
  }
  return answer
};

console.log(capitals('heLLo'))

for(var i=0; i<inputString.length; i++){
    if(inputString[i].match(/[A-Z]/) != null){
        positions.push(i);
    }
}