// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"

function remove(s,n){
  for(let i=1;i<=n;i++){
    s = s.replace('!', '')
  }
  return s
}

console.log(remove('hi!!!!', 3))