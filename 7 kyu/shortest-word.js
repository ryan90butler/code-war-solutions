// Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
 s=s.split(' ');
  let short = s[0]
  console.log(short)
 for(let i=0; i<s.length; i++){
   if(short.length> s[i].length)
  short = s[i]
 }
 return short.length
}

console.log(findShort("turns out random test cases are easier than writing out basic ones"))