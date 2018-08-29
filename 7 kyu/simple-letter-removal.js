// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.

function solve(s, k){
  let r = s.split("").sort().slice(0,k)
  for(let i = 0; i<r.length;i++) s=s.replace(r[i],"");
  return s;
}

console.log(solve('abracadabra', 8 ))